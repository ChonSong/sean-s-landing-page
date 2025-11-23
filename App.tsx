import React from 'react';
import { OrbitSystem } from './components/OrbitSystem';
import { ChatWidget } from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-slate-950 text-slate-200">
      <OrbitSystem />
      <ChatWidget />
      
      {/* Optional Watermark/Footer */}
      <div className="fixed bottom-4 left-6 text-xs text-slate-700 pointer-events-none">
        &copy; {new Date().getFullYear()} Sean O'Sullivan. Built with React & Gemini AI.
      </div>
    </main>
  );
};

export default App;
