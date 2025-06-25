import { useState } from "react";
import "./App.css"; // optional for custom styles later

function App() {
  const [userInput, setUserInput] = useState("");
  const [promptOutput, setPromptOutput] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const processedPrompt = {
      idea: userInput.trim(),
      tone: "neutral",
      audience: "general",
      constraints: [],
      explain_choices: true,
      output_format: "JSON",
    };

    setPromptOutput(processedPrompt);
    setUserInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-100 to-indigo-200 flex flex-col items-center justify-center px-6 py-12 text-center font-sans">
      <img
        src="/ada-avatar.png"
        alt="ADA Avatar"
        className="w-24 h-24 rounded-full shadow-lg border-4 border-white mb-4"
      />
      <h1 className="text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">👩‍💻 ADA</h1>
      <p className="text-lg text-gray-700 max-w-xl mb-6 italic">
        Your Algorithmic Design Assistant — structuring powerful prompts with personality.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white bg-opacity-70 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-200"
      >
        <input
          type="text"
          placeholder="Type your idea here..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="w-full p-4 text-base rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
        />
        <button
          type="submit"
          className="mt-4 w-full bg-indigo-600 text-white text-lg font-medium py-3 rounded-xl hover:bg-indigo-700 transition duration-200"
        >
          Ask ADA
        </button>
      </form>

      {promptOutput && (
        <div className="mt-8 bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-2xl shadow max-w-xl w-full text-left text-sm font-mono text-gray-800 whitespace-pre-wrap">
          <h2 className="font-semibold text-indigo-600 mb-2">🎯 ADA's Suggested Prompt:</h2>
          {JSON.stringify(promptOutput, null, 2)}
        </div>
      )}
    </div>
  );
}

export default App;
