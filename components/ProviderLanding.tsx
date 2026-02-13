
import React from 'react';

interface ProviderLandingProps {
  onBack: () => void;
  onJoin: () => void;
  onLogin: () => void;
  onHowItWorks?: () => void;
}

const ProviderLanding: React.FC<ProviderLandingProps> = ({ onBack, onJoin, onLogin, onHowItWorks }) => {
  return (
    <div className="min-h-screen bg-white font-display text-slate-900 overflow-x-hidden">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 md:px-20 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-2xl">medical_services</span>
          </div>
          <h2 className="text-xl font-black tracking-tight uppercase">Telmed <span className="text-primary">Pro</span></h2>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={onLogin} className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">Provider Login</button>
          <button 
            onClick={onJoin}
            className="px-6 py-2.5 bg-primary text-white text-sm font-black rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-all"
          >
            Join the Network
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 md:px-20 overflow-hidden text-left">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 relative z-10">
            <div className="inline-flex px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">
              Built for Clinicians by Clinicians
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight">
              Transform Your <span className="text-primary">Practice</span> with Telmed
            </h1>
            <p className="text-xl text-slate-500 font-medium max-w-lg leading-relaxed">
              Experience a seamless clinical environment. Connect with patients, manage your schedule, and provide quality care from anywhere in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onJoin}
                className="px-10 py-5 bg-primary text-white font-black rounded-xl text-lg shadow-2xl shadow-primary/30 hover:brightness-110 transition-all flex items-center justify-center gap-3"
              >
                Apply to Join
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button 
                onClick={onHowItWorks}
                className="px-10 py-5 bg-slate-50 text-slate-700 font-black rounded-xl text-lg border border-slate-200 hover:bg-slate-100 transition-all"
              >
                How it Works
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-slate-100 rounded-[40px] overflow-hidden border-8 border-white shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71f1536783?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                className="w-full h-full object-cover" 
                alt="Doctor working on Telmed Pro" 
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
            </div>
            {/* Floating Metric Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-slate-50 flex items-center gap-5">
              <div className="size-12 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined fill-1">verified</span>
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Satisfaction</p>
                <p className="text-xl font-black text-slate-900">4.9/5 Provider Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-20 text-center">
          <h2 className="text-3xl font-black tracking-tight mb-16">Clinical Tools Designed for Excellence</h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 group hover:border-primary/20 transition-all">
              <div className="size-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">event_available</span>
              </div>
              <h3 className="text-xl font-black mb-3">Flexible Scheduling</h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">Set your own availability and manage your clinical hours with our intuitive calendar integration.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 group hover:border-primary/20 transition-all">
              <div className="size-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">description</span>
              </div>
              <h3 className="text-xl font-black mb-3">Integrated EHR</h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">Access full patient history, lab results, and imaging within a single, unified clinical workspace.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 group hover:border-primary/20 transition-all">
              <div className="size-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">receipt_long</span>
              </div>
              <h3 className="text-xl font-black mb-3">Smart Billing</h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">Automated insurance claims and patient billing systems ensure you focus on care, not paperwork.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-[40px] p-12 lg:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-10">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
                Ready to Join the Future of Healthcare?
              </h2>
              <p className="text-slate-400 text-lg md:text-xl font-medium">
                Our application process takes less than 10 minutes. Our team will verify your credentials within 48 hours.
              </p>
              <button 
                onClick={onJoin}
                className="px-12 py-6 bg-primary text-white font-black rounded-2xl text-xl shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all"
              >
                Start Your Application
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 border-t border-slate-100 text-center">
        <div className="flex items-center justify-center gap-3 mb-6 text-slate-400 grayscale">
          <div className="size-8 bg-slate-200 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined">medical_services</span>
          </div>
          <span className="text-lg font-black tracking-tight uppercase">Telmed Pro</span>
        </div>
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">© 2024 Telmed Inc. Provider Network Services.</p>
      </footer>
    </div>
  );
};

export default ProviderLanding;
