import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse(`You said: "${userInput}" — ADA will process this soon!`);
    setUserInput(""); // Clear input
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-indigo-200 flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">👩‍💻 ADA</h1>
      <p className="text-lg text-gray-700 max-w-xl mb-6">
        Your Algorithmic Design Assistant — helping you structure powerful AI prompts.
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <input
          type="text"
          placeholder="Type your idea here..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="w-full p-3 rounded-xl shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          type="submit"
          className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition"
        >
          Ask ADA
        </button>
      </form>
      {response && (
        <div className="mt-6 bg-white bg-opacity-80 p-4 rounded-xl shadow max-w-md text-gray-800">
          {response}
        </div>
      )}
    </div>
  );
}

export default App;
