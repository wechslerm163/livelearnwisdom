
import React, { useState } from 'react';
import Header from './components/Header';
import StruggleInput from './components/StruggleInput';
import GuidanceCard from './components/GuidanceCard';
import { getPastoralGuidance } from './services/geminiService';
import { GuidanceResponse, AppStatus } from './types';

const App: React.FC = () => {
  const [status, setStatus] = useState<AppStatus>(AppStatus.IDLE);
  const [guidance, setGuidance] = useState<GuidanceResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSeekGuidance = async (userStruggle: string) => {
    setStatus(AppStatus.LOADING);
    setError(null);
    try {
      const response = await getPastoralGuidance(userStruggle);
      setGuidance(response);
      setStatus(AppStatus.SUCCESS);
      // Smooth scroll to results
      setTimeout(() => {
        window.scrollTo({ 
          top: document.getElementById('guidance-result')?.offsetTop || 500, 
          behavior: 'smooth' 
        });
      }, 100);
    } catch (err: any) {
      console.error(err);
      setError("The connection is currently faint. Please take a deep breath and try again in a moment, or reach out to someone near you.");
      setStatus(AppStatus.ERROR);
    }
  };

  return (
    <div className="min-h-screen pb-20 selection:bg-emerald-100 selection:text-emerald-900 bg-stone-50">
      <Header />
      
      <main className="max-w-5xl mx-auto space-y-16">
        <StruggleInput 
          onSubmit={handleSeekGuidance} 
          isLoading={status === AppStatus.LOADING} 
        />

        {status === AppStatus.ERROR && (
          <div className="max-w-2xl mx-auto px-4">
            <div className="bg-stone-100 border border-stone-200 p-6 rounded-2xl text-stone-600 text-center serif italic">
              {error}
            </div>
          </div>
        )}

        <div id="guidance-result">
          {status === AppStatus.SUCCESS && guidance && (
            <GuidanceCard data={guidance} />
          )}
        </div>

        {status === AppStatus.IDLE && (
          <div className="text-center px-4 max-w-2xl mx-auto pb-20">
             <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-8">Guided Reflections</h4>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-white border border-stone-100 text-sm text-stone-500 italic shadow-sm hover:shadow-md transition-all cursor-default">
                  "The weight of these past few weeks feels more than I can carry..."
                </div>
                <div className="p-6 rounded-2xl bg-white border border-stone-100 text-sm text-stone-500 italic shadow-sm hover:shadow-md transition-all cursor-default">
                  "I'm finding it hard to trust God's timing in this season of waiting."
                </div>
                <div className="p-6 rounded-2xl bg-white border border-stone-100 text-sm text-stone-500 italic shadow-sm hover:shadow-md transition-all cursor-default">
                  "Grief is clouding my view of the future. I need a reminder of hope."
                </div>
                <div className="p-6 rounded-2xl bg-white border border-stone-100 text-sm text-stone-500 italic shadow-sm hover:shadow-md transition-all cursor-default">
                  "I feel like I've drifted away and don't know the path back."
                </div>
             </div>
          </div>
        )}
      </main>
      
      <footer className="fixed bottom-0 left-0 right-0 bg-white/40 backdrop-blur-md border-t border-stone-200/50 py-4 text-center z-50">
        <div className="flex items-center justify-center gap-6">
           <p className="text-[9px] text-stone-400 font-bold uppercase tracking-[0.3em]">
             LiveLearnWisdom
           </p>
           <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
           <p className="text-[9px] text-stone-400 font-bold uppercase tracking-[0.3em]">
             Led by Light
           </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
