import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User, X } from 'lucide-react';
import { useCursorStore } from '../store/useStore';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

export default function ChatSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi there! I'm Iota's AI assistant. How can I help you today?", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const { updateVariant, setText } = useCursorStore();

  const handleMouseEnter = (action: string) => {
    updateVariant('button');
    setText(action);
  };

  const handleMouseLeave = () => {
    updateVariant('default');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isUser: true
    };
    setMessages([...messages, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      let response = "I'm a demo AI assistant. In the full version, I'd provide information about Iota's projects, skills, or experience based on your question.";
      
      // Simple keyword matching for demo purposes
      if (input.toLowerCase().includes('project') || input.toLowerCase().includes('work')) {
        response = "Iota has worked on several impressive projects like Code With Buddy (a collaborative code editor), Drishyam (biometric payment for visually impaired), and AI-based medical diagnostic tools. Check out the Projects section for more details!";
      } else if (input.toLowerCase().includes('skill') || input.toLowerCase().includes('expertise')) {
        response = "Iota's skills include frontend development with React, backend with Node.js, AI/ML expertise with TensorFlow and PyTorch, and UI/UX design. She's particularly strong in computer vision and medical AI applications.";
      } else if (input.toLowerCase().includes('contact') || input.toLowerCase().includes('hire')) {
        response = "You can contact Iota via email at hello@being-iota.dev or through her LinkedIn profile. She's currently open to internship and collaboration opportunities in AI and product design roles.";
      }

      const aiMessage: Message = {
        id: messages.length + 2,
        text: response,
        isUser: false
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-primary-600 to-secondary-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-30 hover:shadow-primary-500/20 hover:shadow-xl transition-all duration-500"
        onMouseEnter={() => handleMouseEnter('Ask Iota')}
        onMouseLeave={handleMouseLeave}
        aria-label="Open Chatbot"
      >
        <Bot size={24} className="text-white" />
      </button>
    );
  }

  return (
    <motion.div
      id="chat"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-6 right-6 w-80 md:w-96 h-96 bg-dark-300 rounded-2xl shadow-2xl overflow-hidden z-30 glassmorphism border border-primary-500/30"
    >
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="px-4 py-3 bg-dark-400/80 backdrop-blur-md flex items-center justify-between border-b border-primary-500/20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center">
              <Bot size={18} className="text-primary-400" />
            </div>
            <h3 className="font-medium text-light-100">Ask Iota</h3>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-light-300/70 hover:text-light-100 transition-colors duration-300"
            onMouseEnter={() => handleMouseEnter('Close')}
            onMouseLeave={handleMouseLeave}
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex ${message.isUser ? 'flex-row-reverse' : 'flex-row'} items-start max-w-[85%]`}>
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isUser ? 'bg-accent-500/20 ml-2' : 'bg-primary-500/20 mr-2'
                  }`}
                >
                  {message.isUser ? (
                    <User size={16} className="text-accent-400" />
                  ) : (
                    <Bot size={16} className="text-primary-400" />
                  )}
                </div>
                <div 
                  className={`py-2 px-3 rounded-lg ${
                    message.isUser 
                      ? 'bg-accent-500/10 text-light-100 rounded-tr-none' 
                      : 'bg-primary-500/10 text-light-100 rounded-tl-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-primary-500/20">
          <div className="flex items-center bg-dark-200 rounded-full px-3 py-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 bg-transparent outline-none text-light-100 text-sm py-1 px-1"
            />
            <button
              type="submit"
              className={`ml-2 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                input.trim() ? 'bg-primary-500 text-white' : 'bg-dark-300 text-light-300/50'
              }`}
              disabled={!input.trim()}
              onMouseEnter={() => handleMouseEnter('Send')}
              onMouseLeave={handleMouseLeave}
            >
              <Send size={16} />
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}