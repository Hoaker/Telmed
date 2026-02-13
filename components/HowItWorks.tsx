
import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">Simple Care in 3 Steps</h2>
          <p className="text-slate-500 dark:text-slate-400">No more waiting rooms or long commutes. Get the medical attention you need in three easy steps.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-slate-200 dark:border-slate-800 -translate-y-12"></div>
          
          {/* Step 1 */}
          <div className="group relative bg-white dark:bg-slate-900 p-8 rounded-lg shadow-xl shadow-slate-200/50 dark:shadow-none hover:-translate-y-2 transition-all duration-300 border border-transparent dark:border-slate-800">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-3xl">person_add</span>
            </div>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">1</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Sign Up</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Create your secure health profile in under 2 minutes. Your data is fully encrypted.</p>
          </div>

          {/* Step 2 */}
          <div className="group relative bg-white dark:bg-slate-900 p-8 rounded-lg shadow-xl shadow-slate-200/50 dark:shadow-none hover:-translate-y-2 transition-all duration-300 border border-transparent dark:border-slate-800">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-3xl">stethoscope</span>
            </div>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">2</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Choose Doctor</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Filter by specialty, language, or availability. Browse verified patient reviews.</p>
          </div>

          {/* Step 3 */}
          <div className="group relative bg-white dark:bg-slate-900 p-8 rounded-lg shadow-xl shadow-slate-200/50 dark:shadow-none hover:-translate-y-2 transition-all duration-300 border border-transparent dark:border-slate-800">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-3xl">videocam</span>
            </div>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">3</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Virtual Visit</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Connect via HD video call instantly. Receive prescriptions and care plans digitally.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
