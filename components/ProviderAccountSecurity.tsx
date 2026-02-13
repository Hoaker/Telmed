
import React, { useState } from 'react';

interface ProviderAccountSecurityProps {
  onBack: () => void;
  onNext: () => void;
}

const ProviderAccountSecurity: React.FC<ProviderAccountSecurityProps> = ({ onBack, onNext }) => {
  const [is2FAEnabled, setIs2FAEnabled] = useState(true);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-4 md:p-8 font-display">
      <div className="max-w-[1100px] w-full bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[750px] border border-slate-100 dark:border-slate-800">
        
        {/* Sidebar: Provider Benefits */}
        <aside className="w-full md:w-[320px] bg-primary/5 dark:bg-primary/10 p-8 flex flex-col justify-between border-r border-slate-100 dark:border-slate-800">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-2xl">medical_services</span>
              </div>
              <div className="text-left">
                <h2 className="text-slate-900 dark:text-white font-bold text-lg leading-tight">Telmed</h2>
                <p className="text-primary text-sm font-bold uppercase tracking-widest text-[10px]">Provider Portal</p>
              </div>
            </div>
            
            <div className="space-y-6 text-left">
              <div>
                <h3 className="text-slate-900 dark:text-white font-bold text-base mb-1">Provider Benefits</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Why Join Telmed?</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-primary/10">
                  <div className="text-primary">
                    <span className="material-symbols-outlined fill-1">receipt_long</span>
                  </div>
                  <div>
                    <p className="text-slate-900 dark:text-white text-sm font-bold">Automated Billing</p>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-1 font-medium leading-relaxed">Reduce administrative overhead with smart claims.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-primary/10">
                  <div className="text-primary">
                    <span className="material-symbols-outlined fill-1">settings_input_component</span>
                  </div>
                  <div>
                    <p className="text-slate-900 dark:text-white text-sm font-bold">EHR Integration</p>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-1 font-medium leading-relaxed">Sync seamlessly with your existing records.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 group shadow-lg">
              <img 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                alt="Doctor using a digital tablet" 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-40 group-hover:opacity-0 transition-opacity"></div>
            </div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center">Trusted by over 10,000+ providers</p>
          </div>
        </aside>

        {/* Main Content: Account Security Form */}
        <main className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col bg-white dark:bg-slate-900">
          {/* Progress Header */}
          <div className="mb-12">
            <div className="flex justify-between items-end mb-3">
              <div className="text-left">
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Step 3 of 4</span>
                <h1 className="text-3xl font-black text-slate-900 dark:text-white mt-1 tracking-tight">Account Security</h1>
              </div>
              <span className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest">75% Complete</span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all duration-700 ease-out" style={{ width: '75%' }}></div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 mt-4 text-sm font-medium text-left">Secure your account to protect patient data and clinical records.</p>
          </div>

          {/* Form Area */}
          <form className="flex-1 flex flex-col gap-8 max-w-2xl mx-auto w-full text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-6">
              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label className="text-slate-900 dark:text-white text-sm font-bold flex items-center gap-2 uppercase tracking-wide">
                  <span className="material-symbols-outlined text-[18px] fill-1">mail</span>
                  Professional Email Address
                </label>
                <input 
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium placeholder:text-slate-400" 
                  placeholder="dr.smith@clinic.com" 
                  type="email"
                />
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-slate-900 dark:text-white text-sm font-bold flex items-center gap-2 uppercase tracking-wide">
                    <span className="material-symbols-outlined text-[18px] fill-1">lock</span>
                    Password
                  </label>
                  <input 
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium" 
                    placeholder="••••••••" 
                    type="password"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-slate-900 dark:text-white text-sm font-bold flex items-center gap-2 uppercase tracking-wide">
                    <span className="material-symbols-outlined text-[18px] fill-1">verified_user</span>
                    Confirm Password
                  </label>
                  <input 
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium" 
                    placeholder="••••••••" 
                    type="password"
                  />
                </div>
              </div>

              {/* Password Requirements */}
              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-widest">Security Strength</p>
                <div className="flex gap-1.5 mb-3">
                  <div className="h-1.5 flex-1 bg-primary rounded-full"></div>
                  <div className="h-1.5 flex-1 bg-primary rounded-full"></div>
                  <div className="h-1.5 flex-1 bg-primary rounded-full"></div>
                  <div className="h-1.5 flex-1 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-green-500 fill-1">check_circle</span>
                  Use at least 8 characters, one number, and one symbol.
                </p>
              </div>

              {/* 2FA Toggle */}
              <div className="flex items-center justify-between p-6 rounded-2xl border border-primary/20 bg-primary/5 dark:bg-primary/10 shadow-sm">
                <div className="flex gap-4">
                  <div className="text-primary mt-1">
                    <span className="material-symbols-outlined fill-1">security</span>
                  </div>
                  <div>
                    <label className="text-slate-900 dark:text-white text-sm font-black block cursor-pointer uppercase tracking-wide" htmlFor="2fa-toggle">
                      Enable Two-Factor Authentication (2FA)
                    </label>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium leading-relaxed">
                      Adds an extra layer of security to your clinical dashboard.
                    </p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    checked={is2FAEnabled} 
                    onChange={() => setIs2FAEnabled(!is2FAEnabled)}
                    className="sr-only peer" 
                    id="2fa-toggle" 
                    type="checkbox"
                  />
                  <div className="relative w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-auto pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <button 
                onClick={onBack}
                className="w-full sm:w-auto px-8 py-4 text-sm font-black text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-all uppercase tracking-widest flex items-center justify-center gap-2" 
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                Back
              </button>
              <button 
                onClick={onNext}
                className="w-full sm:w-auto px-12 py-4 bg-primary hover:brightness-110 text-white text-sm font-black rounded-xl shadow-2xl shadow-primary/30 transition-all flex items-center justify-center gap-3 uppercase tracking-widest active:scale-95" 
                type="button"
              >
                Continue
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default ProviderAccountSecurity;
