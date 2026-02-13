
import React from 'react';

interface PatientRegistrationProps {
  onBack: () => void;
  onNext: () => void;
}

const PatientRegistration: React.FC<PatientRegistrationProps> = ({ onBack, onNext }) => {
  return (
    <div className="bg-background-light min-h-screen flex flex-col font-display">
      {/* Top Navigation */}
      <header className="w-full bg-white border-b border-primary/10 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
            <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-white text-2xl">medical_services</span>
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">Telmed</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">person</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-grow flex items-center justify-center p-4 md:p-8">
        <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl shadow-primary/5 overflow-hidden flex flex-col md:flex-row border border-slate-100">
          
          {/* Left Sidebar (Benefits) */}
          <aside className="w-full md:w-1/3 bg-primary/5 p-8 flex flex-col gap-8 border-r border-primary/5">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Why choose Telmed?</h2>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">Experience healthcare designed for your lifestyle.</p>
            </div>
            
            <nav className="flex flex-col gap-6">
              {[
                { icon: 'schedule', title: '24/7 Access', desc: 'Care whenever you need it' },
                { icon: 'chat', title: 'Secure Messaging', desc: 'Private doctor-patient portal' },
                { icon: 'medication', title: 'Digital Prescriptions', desc: 'Sent directly to your pharmacy' },
                { icon: 'videocam', title: 'HD Consultations', desc: 'Crystal clear video calls' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="bg-white p-2.5 rounded-xl shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined fill-1">{item.icon}</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{item.title}</p>
                    <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </nav>

            <div className="mt-auto pt-8 border-t border-primary/10">
              <div className="flex items-center gap-2 text-primary/80">
                <span className="material-symbols-outlined text-sm fill-1">verified_user</span>
                <span className="text-xs font-bold uppercase tracking-widest">Trusted by 50k+ Patients</span>
              </div>
            </div>
          </aside>

          {/* Right Content (Form Area) */}
          <section className="flex-grow p-8 md:p-12">
            {/* Progress Indicator */}
            <div className="mb-10">
              <div className="flex justify-between items-end mb-3">
                <div>
                  <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">Step 2 of 4</span>
                  <h2 className="text-2xl font-bold text-slate-900 mt-1">Personal Information</h2>
                </div>
                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">50% Complete</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full transition-all duration-700" style={{ width: '50%' }}></div>
              </div>
            </div>

            {/* Form Fields */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 text-left">
                <label className="block">
                  <span className="text-slate-700 text-sm font-bold mb-1.5 block">Full Name</span>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-xl">person</span>
                    <input 
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400 font-medium outline-none" 
                      placeholder="e.g. Sarah Mitchell" 
                      type="text"
                    />
                  </div>
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="block">
                    <span className="text-slate-700 text-sm font-bold mb-1.5 block">Date of Birth</span>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-xl">calendar_today</span>
                      <input 
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-slate-900 font-medium outline-none" 
                        type="date"
                      />
                    </div>
                  </label>
                  <label className="block">
                    <span className="text-slate-700 text-sm font-bold mb-1.5 block">Phone Number</span>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-xl">call</span>
                      <input 
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400 font-medium outline-none" 
                        placeholder="+1 (555) 000-0000" 
                        type="tel"
                      />
                    </div>
                  </label>
                </div>
              </div>

              <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <button 
                  onClick={onBack}
                  type="button"
                  className="text-slate-400 hover:text-primary transition-colors text-sm font-bold flex items-center gap-1.5 group"
                >
                  <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
                  Back to Step 1
                </button>
                <button 
                  onClick={onNext}
                  className="w-full md:w-auto px-10 py-4 bg-primary text-white font-bold rounded-xl shadow-xl shadow-primary/25 hover:brightness-110 transition-all active:scale-[0.98]" 
                  type="button"
                >
                  Continue to Next Step
                </button>
              </div>
            </form>

            {/* Security Footer */}
            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col items-center">
              <div className="flex items-center gap-6 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-xl fill-1">lock</span>
                  <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">256-bit Encryption</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-xl fill-1">verified_user</span>
                  <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">HIPAA Compliant</span>
                </div>
              </div>
              <p className="text-center text-[10px] text-slate-400 font-medium leading-relaxed max-w-sm">
                Your health information is encrypted and protected under federal law. We never share your data without explicit consent.
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-6 text-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
        © 2024 Telmed Health Services Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default PatientRegistration;
