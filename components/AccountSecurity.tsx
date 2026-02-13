
import React, { useState } from 'react';

interface AccountSecurityProps {
  onBack: () => void;
  onNext: () => void;
}

const AccountSecurity: React.FC<AccountSecurityProps> = ({ onBack, onNext }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [is2FAEnabled, setIs2FAEnabled] = useState(true);

  return (
    <div className="bg-background-light min-h-screen text-slate-900 font-display">
      {/* Navigation Header */}
      <header className="flex items-center justify-between border-b border-solid border-slate-200 bg-white px-6 lg:px-40 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
          <div className="w-10 h-10 flex items-center justify-center bg-primary rounded-lg text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined">medical_services</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight">Telmed</h2>
        </div>
        <button className="flex items-center justify-center rounded-xl h-10 bg-slate-50 text-slate-700 px-4 font-bold text-sm border border-slate-100 hover:bg-slate-100 transition-colors">
          <span className="material-symbols-outlined mr-2">account_circle</span>
          Profile
        </button>
      </header>

      <main className="flex justify-center py-8 px-4 lg:px-40">
        <div className="flex flex-col max-w-[1000px] flex-1">
          {/* Progress Bar Section */}
          <div className="flex flex-col gap-3 mb-8 bg-white p-8 rounded-2xl shadow-2xl shadow-slate-200/20 border border-slate-100">
            <div className="flex justify-between items-center">
              <p className="text-slate-900 text-sm font-black uppercase tracking-widest">Step 3 of 4</p>
              <p className="text-primary text-xs font-black bg-primary/10 px-3 py-1 rounded-full">75% COMPLETE</p>
            </div>
            <div className="rounded-full bg-slate-100 h-2.5 overflow-hidden">
              <div className="h-full rounded-full bg-primary transition-all duration-700 ease-out" style={{ width: '75%' }}></div>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Account Security</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Form */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-2xl shadow-slate-200/20 border border-slate-100">
                <h1 className="text-2xl font-bold text-slate-900 mb-2 text-left">Account Security</h1>
                <p className="text-slate-500 text-sm font-medium mb-10 text-left">Create your credentials to secure your health records. We recommend a strong, unique password.</p>
                
                <form className="space-y-6 text-left">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input 
                      className="w-full h-14 rounded-xl border border-slate-200 bg-slate-50 px-4 text-slate-900 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium" 
                      placeholder="patient@example.com" 
                      type="email"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700">Password</label>
                    <div className="relative group">
                      <input 
                        className="w-full h-14 rounded-xl border border-slate-200 bg-slate-50 px-4 pr-12 text-slate-900 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium" 
                        placeholder="••••••••" 
                        type={showPassword ? "text" : "password"}
                      />
                      <button 
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors" 
                        type="button"
                      >
                        <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                      </button>
                    </div>
                    <div className="mt-2">
                      <div className="flex gap-1 h-1.5 w-full rounded-full overflow-hidden bg-slate-100">
                        <div className="bg-emerald-500 w-1/3"></div>
                        <div className="bg-emerald-500 w-1/3"></div>
                        <div className="bg-slate-200 w-1/3"></div>
                      </div>
                      <p className="text-[10px] mt-1.5 text-emerald-600 font-bold uppercase tracking-wider">Strong password</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700">Confirm Password</label>
                    <input 
                      className="w-full h-14 rounded-xl border border-slate-200 bg-slate-50 px-4 text-slate-900 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium" 
                      placeholder="••••••••" 
                      type="password"
                    />
                  </div>

                  {/* 2FA Toggle Section */}
                  <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/10 flex items-start gap-4">
                    <div className="pt-1">
                      <span className="material-symbols-outlined text-primary fill-1">verified_user</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-900">Enable Two-Factor Authentication (2FA)</h4>
                      <p className="text-[11px] text-slate-500 mt-1 font-medium leading-relaxed">Adds an extra layer of security to your account. We'll send a code to your email or phone when you log in.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        className="sr-only peer" 
                        type="checkbox" 
                        checked={is2FAEnabled}
                        onChange={() => setIs2FAEnabled(!is2FAEnabled)}
                      />
                      <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center gap-4 pt-6">
                    <button 
                      onClick={onBack}
                      className="flex-1 h-14 rounded-xl border border-slate-200 font-bold text-slate-500 hover:bg-slate-50 transition-colors" 
                      type="button"
                    >
                      Back
                    </button>
                    <button 
                      onClick={onNext}
                      className="flex-[2] h-14 rounded-xl bg-primary text-white font-bold shadow-xl shadow-primary/30 hover:brightness-110 active:scale-[0.98] transition-all" 
                      type="button"
                    >
                      Continue to Final Step
                    </button>
                  </div>
                </form>
              </div>

              {/* Security Footer Badges */}
              <div className="flex flex-wrap items-center justify-center gap-10 py-4 opacity-70 grayscale hover:grayscale-0 transition-all">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xl fill-1">lock</span>
                  <span className="text-[10px] font-black uppercase tracking-widest">256-bit SSL</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xl fill-1">policy</span>
                  <span className="text-[10px] font-black uppercase tracking-widest">HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xl fill-1">shield</span>
                  <span className="text-[10px] font-black uppercase tracking-widest">ISO 27001</span>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar Benefits */}
            <div className="space-y-6">
              <div className="bg-primary p-10 rounded-2xl text-white shadow-2xl shadow-primary/20 overflow-hidden relative text-left">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                
                <h3 className="text-xl font-bold mb-8 relative z-10">Why join Telmed?</h3>
                <ul className="space-y-8 relative z-10">
                  <li className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined fill-1">schedule</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">24/7 Access</h4>
                      <p className="text-xs text-white/80 mt-1 font-medium leading-relaxed">Connect with doctors anytime, anywhere, day or night.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined fill-1">chat</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Secure Messaging</h4>
                      <p className="text-xs text-white/80 mt-1 font-medium leading-relaxed">Your data is encrypted and private. We use bank-grade security.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined fill-1">medication</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">E-Prescriptions</h4>
                      <p className="text-xs text-white/80 mt-1 font-medium leading-relaxed">Get your medications sent directly to your preferred pharmacy.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/20 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary fill-1">support_agent</span>
                  <h4 className="font-bold text-slate-900">Need help?</h4>
                </div>
                <p className="text-xs text-slate-500 font-medium mb-6 leading-relaxed">Our support team is available 24/7 to assist you with the sign-up process.</p>
                <a className="text-primary font-bold text-xs uppercase tracking-widest hover:underline" href="#">Contact Support</a>
              </div>

              {/* Trust Image Card */}
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-slate-200/20 border border-slate-100">
                <img 
                  alt="Healthcare technology" 
                  className="w-full h-44 object-cover" 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                />
                <div className="p-5 bg-white text-left">
                  <p className="text-[10px] text-slate-500 italic font-medium leading-relaxed">
                    "Telmed has transformed how I manage my health. Secure and simple." — Sarah J.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
        © 2024 Telmed Health Services Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default AccountSecurity;
