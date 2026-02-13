
import React from 'react';

interface CTASectionProps {
  onSignUp?: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onSignUp }) => {
  return (
    <section className="pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-white dark:bg-slate-900 border border-primary/20 rounded-xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl shadow-primary/5">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">Ready to feel better?</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-md font-medium">
              Our board-certified doctors are ready to assist you right now. Average wait time is currently under 15 minutes.
            </p>
          </div>
          
          <button 
            onClick={onSignUp}
            className="bg-primary text-white px-10 py-5 rounded-lg text-lg font-bold shadow-xl shadow-primary/30 hover:brightness-110 hover:scale-[1.02] transition-all transform active:scale-95 whitespace-nowrap"
          >
            Schedule Appointment Now
          </button>

          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
