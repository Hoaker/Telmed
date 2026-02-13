
import React from 'react';

const TrustBar: React.FC = () => {
  return (
    <>
      <section className="bg-white dark:bg-slate-900 py-16 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xs">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">Trusted by <span className="text-primary">10,000+</span> Patients</h2>
              <div className="flex items-center gap-1 mt-2 text-yellow-400">
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1 text-slate-300 dark:text-slate-700">star_half</span>
                <span className="text-slate-600 dark:text-slate-400 text-sm font-bold ml-2">4.8/5 Rating</span>
              </div>
            </div>
            <div className="flex-1 flex flex-wrap justify-center md:justify-end gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-4xl">health_metrics</span>
                <span className="font-bold text-xl italic tracking-tighter">HealthFirst</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-4xl">emergency</span>
                <span className="font-bold text-xl italic tracking-tighter">CareNet</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-4xl">local_hospital</span>
                <span className="font-bold text-xl italic tracking-tighter">GlobalMedi</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-4xl">diversity_1</span>
                <span className="font-bold text-xl italic tracking-tighter">UnityHealth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-8 rounded-lg bg-primary/5 border border-primary/10 flex flex-col items-center text-center group hover:bg-primary/10 transition-colors">
            <span className="text-4xl font-black text-primary mb-2">500+</span>
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Board Certified Doctors</span>
          </div>
          <div className="p-8 rounded-lg bg-primary/5 border border-primary/10 flex flex-col items-center text-center group hover:bg-primary/10 transition-colors">
            <span className="text-4xl font-black text-primary mb-2">15min</span>
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Avg. Wait Time</span>
          </div>
          <div className="p-8 rounded-lg bg-primary/5 border border-primary/10 flex flex-col items-center text-center group hover:bg-primary/10 transition-colors">
            <span className="text-4xl font-black text-primary mb-2">50+</span>
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Medical Specialties</span>
          </div>
          <div className="p-8 rounded-lg bg-primary/5 border border-primary/10 flex flex-col items-center text-center group hover:bg-primary/10 transition-colors">
            <span className="text-4xl font-black text-primary mb-2">24/7</span>
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Doctor Availability</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustBar;
