
import React from 'react';

interface HeroProps {
  onConsult?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onConsult }) => {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative z-10 space-y-10">
          <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-[#E6E6FF] text-[#0000FF] text-[10px] font-bold uppercase tracking-[0.15em]">
            Now Available 24/7
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white">
            Healthcare from<br />
            Home, <span className="text-primary">Simplified</span>
          </h1>

          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-md leading-relaxed font-medium">
            Consult with board-certified doctors in minutes. Get professional medical advice, prescriptions, and follow-ups without leaving your couch.
          </p>

          <div className="space-y-4 max-w-sm">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
              <input 
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#F2F4F7] dark:bg-slate-900 border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none text-slate-900 dark:text-white placeholder:text-slate-400 text-sm font-medium" 
                placeholder="Search by specialty (e.g. Cardiology, Pediatrics)" 
                type="text"
              />
            </div>
            <button 
              onClick={onConsult}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-2xl shadow-primary/30 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
              Consult a Doctor Now
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[64, 65, 91].map((id, i) => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${id + 10}`} 
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 object-cover" 
                  alt="User" 
                />
              ))}
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-white dark:border-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-600 dark:text-slate-400">+2k</div>
            </div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Join 2k+ patients online right now</p>
          </div>
        </div>

        <div className="relative">
          <div className="relative bg-[#5B8A83] rounded-[40px] aspect-square flex items-end justify-center overflow-hidden shadow-2xl group">
            <img 
              alt="Medical Professionals Illustration" 
              className="object-contain w-full h-[90%] scale-105 group-hover:scale-110 transition-transform duration-700 ease-out" 
              src="https://img.freepik.com/free-vector/group-doctors-standing-white-background_1308-41008.jpg?t=st=1720000000~exp=1720003600~hmac=62719a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a&w=1380" 
              style={{ mixBlendMode: 'multiply', opacity: 0.9 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5B8A83]/20 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-5 rounded-2xl flex items-center justify-between shadow-2xl border border-white/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#22C55E] rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                  <span className="material-symbols-outlined text-2xl fill-1">play_circle</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Video Call Active</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Secure encrypted connection</p>
                </div>
              </div>
              <div className="flex gap-1 pr-2">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
