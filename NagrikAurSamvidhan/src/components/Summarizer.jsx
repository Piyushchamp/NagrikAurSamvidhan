import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import conf from "../conf/conf";

// Your API key should be securely handled, not hardcoded
const genAI = new GoogleGenerativeAI(conf.vitegeminiapikey);

function Summarizer() {
  const [inputText, setInputText] = useState("");
  const [responseText, setResponseText] = useState("");
  const [conversationHistory, setConversationHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load conversation history from local storage when the app loads
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("conversationHistory")) || [];
    setConversationHistory(savedHistory);
  }, []);

  // Save conversation history to local storage whenever it updates
  useEffect(() => {
    localStorage.setItem("conversationHistory", JSON.stringify(conversationHistory));
  }, [conversationHistory]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContentStream([inputText]);

      let fullResponse = "";
      for await (const chunk of result.stream) {
        fullResponse += chunk.text();
      }

      // Limit the response to 10 lines
      const summarizedResponse = fullResponse
        .split("\n")
        .slice(0, 5)
        .join("\n");

      // Update conversation history
      const newHistoryItem = { question: inputText, response: summarizedResponse };
      setConversationHistory((prevHistory) => [...prevHistory, newHistoryItem]);

      // Update the response text
      setResponseText(summarizedResponse);
      setInputText(""); // Clear the textarea after generating response
    } catch (error) {
      setResponseText("Error: Unable to process the request.");
      console.error(error);
    }
    setLoading(false);
  };

  const handleClear = () => {
    localStorage.removeItem("conversationHistory");
    setConversationHistory([]);
    // setResponseText("");
  };

  return (
    <div className="min-h-screen text-white flex justify-center items-center">
      <div className="w-full max-w-screen-sm p-6 rounded-lg shadow-lg bg-gray-500">
        <h1 className="text-2xl font-semibold text-center mb-4">Generative AI</h1>

        <textarea
          className="w-full h-32 p-4 rounded-md bg-gray-700 text-white border-none focus:outline-none"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Ask me something..."
        ></textarea>

        <div className="text-center mt-4">
          <button
            className="px-6 py-2 bg-indigo-600 rounded-md text-white disabled:bg-gray-500"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Generating..." : "Summarize"}
          </button>
          {conversationHistory.length > 0 && (
            <button
              className="ml-4 px-6 py-2 bg-red-600 rounded-md text-white"
              onClick={handleClear}
            >
              Clear History
            </button>
          )}
        </div>

        {responseText && (
          <div className="mt-4 p-4 rounded-md bg-gray-700">
            <h2 className="font-semibold text-lg mb-2 text-gray-400">AI Response</h2>
            <p>{responseText}</p>
          </div>
        )}

        {conversationHistory.length > 0 && (
          <div className="mt-8 p-4 rounded-md bg-gray-700">
            <h2 className="text-gray-400 font-semibold text-lg mb-2">Conversation History</h2>
            <ul className="list-disc pl-5 space-y-2">
              {conversationHistory.map((item, index) => (
                <li key={index}>
                  {/* <strong>Q:</strong> {item.question} */}
                  {/* <br /> */}
                  <strong>Ans:</strong> {item.response}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Summarizer;