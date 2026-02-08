
import React from 'react';
import { GuidanceResponse } from '../types';

interface GuidanceCardProps {
  data: GuidanceResponse;
}

const GuidanceCard: React.FC<GuidanceCardProps> = ({ data }) => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 pb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
      <div className="space-y-12">
        
        {/* Identified Struggle Section */}
        <section className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-stone-100 text-stone-600 text-[10px] font-bold rounded-full uppercase tracking-[0.2em] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Heart Presence
          </div>
          <h2 className="serif text-2xl md:text-3xl text-stone-800 font-medium italic">"{data.identifiedStruggle}"</h2>
        </section>

        {/* The Scripture Scroll */}
        <div className="paper-texture p-10 md:p-16 rounded-[2.5rem] shadow-2xl border border-stone-200 relative group transition-transform duration-700 hover:scale-[1.01]">
          <div className="absolute top-8 left-8 text-stone-100 select-none">
            <svg className="h-16 w-16 fill-current" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L14.017 3C11.2556 3 9.017 5.23858 9.017 8V15C9.017 18.3137 11.2556 21 14.017 21ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C5.91243 8 5.017 7.10457 5.017 6V3L5.017 3C2.25557 3 0.017 5.23858 0.017 8V15C0.017 18.3137 2.25557 21 5.017 21Z" /></svg>
          </div>
          
          <div className="relative z-10 text-center">
            <p className="serif text-3xl md:text-4xl text-stone-900 leading-[1.4] mb-10 selection:bg-emerald-100">
              {data.bibleVerse}
            </p>
            <div className="inline-block px-6 py-2 border-y border-stone-200 text-stone-500 font-semibold tracking-widest text-sm uppercase">
              {data.citation}
            </div>
          </div>
        </div>

        {/* Detailed Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-emerald-900 font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-emerald-200 rounded-full"></span>
              Understanding
            </h3>
            <p className="text-stone-600 leading-relaxed text-lg">
              {data.whatThisVerseMeans}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-emerald-900 font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-emerald-200 rounded-full"></span>
              Application
            </h3>
            <p className="text-stone-600 leading-relaxed text-lg">
              {data.whyThisMattersNow}
            </p>
          </div>
        </div>

        {/* Prayer / Reflection */}
        <div className="bg-stone-900 text-stone-100 p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-900 rounded-full -mr-32 -mt-32 opacity-20 transition-transform duration-1000 group-hover:scale-110"></div>
          
          <div className="relative z-10 max-w-xl mx-auto text-center">
            <h3 className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
              A Moment of Quiet
            </h3>
            <p className="serif text-2xl md:text-3xl leading-relaxed italic text-stone-200">
              {data.gentleReflection}
            </p>
            <div className="mt-8 flex justify-center opacity-30">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
               </svg>
            </div>
          </div>
        </div>

        <div className="text-center pt-12">
           <p className="text-[10px] text-stone-400 font-semibold uppercase tracking-[0.15em] max-w-md mx-auto leading-loose">
             Grace Haven is a companion for spiritual rest. For urgent mental health needs, please consult with a qualified professional or local crisis service.
           </p>
        </div>
      </div>
    </div>
  );
};

export default GuidanceCard;
