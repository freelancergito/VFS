
import React, { useState, useRef, useEffect } from 'react';
import { getVisaAssistantResponse } from '../geminiService';

export const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    {role: 'bot', text: 'Hello! I am your GlobalVisa Assistant. How can I help you today?'}
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userText = input;
    setMessages(prev => [...prev, {role: 'user', text: userText}]);
    setInput('');
    setIsLoading(true);

    const botResponse = await getVisaAssistantResponse(userText);
    setMessages(prev => [...prev, {role: 'bot', text: botResponse || "I didn't quite catch that."}]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 overflow-hidden border border-gray-200 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[#002D5B] p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center font-bold">V</div>
              <div>
                <h4 className="font-bold text-sm">Visa Assistant</h4>
                <div className="flex items-center gap-1 text-[10px]">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Online
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-orange-500 text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 rounded-tl-none">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me about visa status..."
                className="flex-grow bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-blue-900 text-white p-2 rounded-full hover:bg-blue-800 disabled:opacity-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-orange-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center gap-2 group"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium">Chat with us</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        </button>
      )}
    </div>
  );
};
