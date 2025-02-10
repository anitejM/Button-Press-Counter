import { useState } from "react";
import React from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-2">Button Press Counter</h1>
      <p className="text-lg text-gray-600 mb-4">Made by Anitej Mishra</p>
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Counter: {count}</h2>
        <button 
        onClick={() => setCount(count + 1)} className="px-6 py-3 text-lg rounded-full bg-blue-500 text-white hover:bg-blue-600 transition">
          Increment
          </button>

      </div>
    </div>
  );
}
