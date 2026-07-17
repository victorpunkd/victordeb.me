import React from "react";
import ReactGA from "react-ga";
import "./AskAboutVictor.css";

const AskAboutVictor = ({ isAskAboutVictorClicked, handleAIChatBoxClose }) => {
  const [isChatBoxOpen, setIsChatBoxOpen] = React.useState(false);
  const [userInput, setUserInput] = React.useState("");
  const [chatHistory, setChatHistory] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const chatAreaRef = React.useRef(null);

  const handleAIResponse = async (userQuestion) => {
    setIsLoading(true);
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { role: "user", content: userQuestion || userInput },
    ]);
    setUserInput("");
    try {
      const response = await fetch(
        "https://victordeb-me-portfolio.web.app/api/askVictorAIBot",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: userQuestion || userInput }),
        },
      );
      const data = await response.json();
      console.log("Response from API:", data);
      setChatHistory((prevHistory) => [
        ...prevHistory,
        {
          role: "Victor AI Assistant",
          content:
            data.answer?.candidates[0]?.content?.parts[0]?.text ||
            "I don't have that information in Victor's portfolio.",
        },
      ]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setChatHistory((prevHistory) => [
        ...prevHistory,
        {
          role: "Victor AI Assistant",
          content: "I don't have that information in Victor's portfolio.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    ReactGA.initialize("UA-173547033-1");
    ReactGA.pageview("/ask-about-victor");
  }, []);

  React.useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [chatHistory, isChatBoxOpen]);

  React.useEffect(() => {
    if (chatHistory.length > 0) {
      const lastMessage = chatHistory[chatHistory.length - 1];
      if (lastMessage.role === "user") {
        ReactGA.event({
          category: "AskAboutVictor",
          action: "User Question",
          label: lastMessage.content,
        });
      } else if (lastMessage.role === "Victor AI Assistant") {
        ReactGA.event({
          category: "AskAboutVictor",
          action: "AI Response",
          label: lastMessage.content,
        });
      }
    }
  }, [chatHistory]);

  React.useEffect(() => {
    if (isAskAboutVictorClicked) {
      setIsChatBoxOpen(true);
    }
  }, [isAskAboutVictorClicked]);

  return (
    <div className="askAboutVictorContainer">
      {isChatBoxOpen ? (
        <div className="chatBox">
          <div className="chatBoxHeader">
            {chatHistory.length > 0 && (
              <div>
                <img
                  src="https://victordeb.s3.eu-north-1.amazonaws.com/images/logo_png.png"
                  alt="Victor Deb"
                  className="chatBoxHeaderImage"
                />
              </div>
            )}
            <div>
              <button
                onClick={() => {
                  setIsChatBoxOpen(false);
                  handleAIChatBoxClose();
                }}
                className="closeChatBoxButton"
              >
                <i class="fa fa-close"></i>
              </button>
            </div>
          </div>
          <div className="chatBoxChatArea" ref={chatAreaRef}>
            {chatHistory.length === 0 && (
              <>
                <div className="chatBoxWelcomeMessage">
                  <img
                    src="https://victordeb.s3.eu-north-1.amazonaws.com/images/logo_png.png"
                    alt="Victor Deb"
                    className="chatBoxHeaderImage"
                  />
                  <h3>Ask anything about Victor</h3>
                </div>
                <div className="chatSuggestionsContainer">
                  <div
                    className="chatSuggestion"
                    onClick={() =>
                      handleAIResponse("Tell me about Victor's education")
                    }
                  >
                    How many years of experience does Victor have in React?
                  </div>
                  <div
                    className="chatSuggestion"
                    onClick={() =>
                      handleAIResponse("Tell me about Victor's experience")
                    }
                  >
                    Tell me about Victors experience
                  </div>
                  <div
                    className="chatSuggestion"
                    onClick={() =>
                      handleAIResponse("Tell me about Victor's education")
                    }
                  >
                    Tell me about Victors education
                  </div>
                </div>
              </>
            )}
            {chatHistory.map((msg, index) => (
              <div className="chatSection" key={index}>
                <span className="chatMessageRole">
                  {msg.role === "user" ? "You" : "Victor"}
                </span>
                : {msg.content}
              </div>
            ))}
            {isLoading && (
              <div>
                <i className="fa fa-spinner fa-spin" />
              </div>
            )}
          </div>
          <div className="chatBoxTextAreaContainer">
            <input
              disabled={isLoading}
              placeholder="Type your question here and hit enter..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleAIResponse(userInput);
                }
              }}
            />
            <button
              disabled={isLoading}
              onClick={() => handleAIResponse(userInput)}
            >
              <i className="fa fa-paper-plane-o"></i>
            </button>
          </div>
        </div>
      ) : (
        <img
          className="popupImage w3-hide-small w3-hide-medium"
          src="https://victordeb.s3.eu-north-1.amazonaws.com/images/askAI.png"
          alt="Victor Deb Chatbot"
          onClick={() => setIsChatBoxOpen(true)}
        />
      )}
    </div>
  );
};

export default AskAboutVictor;
