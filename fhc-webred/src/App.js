import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';


function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="text-center bg-red-500 text-white p-6 rounded-lg shadow-lg">
        <p className="mt-4 text-lg font-bold text-gray-200">
          Tailwind is working if this text is styled!
        </p>
      </header>
    </div>
  );
}

export default App;

