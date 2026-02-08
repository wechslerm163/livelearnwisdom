
import React, { useState } from 'react';

interface StruggleInputProps {
  onSubmit: (text: string) => void;
  isLoading: boolean;
}

const StruggleInput: React.FC<StruggleInputProps> = ({ onSubmit, isLoading }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto px-4">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-stone-200 to-emerald-50 rounded-3xl blur opacity-25 group-focus-within:opacity-50 transition duration-1000"></div>
        <div className="relative bg-white p-8 rounded-3xl shadow-sm border border-stone-100 transition-all">
          <label htmlFor="struggle" className="block text-xs font-semibold text-stone-400 mb-4 uppercase tracking-[0.2em]">
            Speak your heart freely
          </label>
          <textarea
            id="struggle"
            rows={5}
            className="w-full p-0 text-xl text-stone-700 bg-transparent border-none focus:ring-0 outline-none transition-all resize-none placeholder-stone-300 serif leading-relaxed"
            placeholder="What is weighing on your spirit today?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={isLoading}
          />
          <div className="mt-8 flex items-center justify-between">
            <div className="text-[10px] text-stone-400 uppercase tracking-widest font-medium">
              A safe space for reflection
            </div>
            <button
              type="submit"
              disabled={isLoading || !text.trim()}
              className={`px-10 py-3.5 rounded-full font-medium transition-all duration-300 flex items-center gap-3 ${
                isLoading || !text.trim()
                  ? 'bg-stone-50 text-stone-300 cursor-not-allowed'
                  : 'bg-stone-800 text-stone-50 hover:bg-emerald-900 hover:shadow-xl active:scale-95'
              }`}
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-stone-300 border-t-stone-500 rounded-full animate-spin"></div>
                  <span>Waiting on Grace...</span>
                </>
              ) : (
                <>
                  <span>Seek Guidance</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default StruggleInput;
