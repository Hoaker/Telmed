
import React, { useState, useEffect } from 'react';

interface LoginProps {
  onBack: () => void;
  onLogin: (role: 'patient' | 'provider') => void;
  onSignUp: () => void;
  initialRole?: 'patient' | 'provider';
}

const Login: React.FC<LoginProps> = ({ onBack, onLogin, onSignUp, initialRole = 'patient' }) => {
  const [role, setRole] = useState<'patient' | 'provider'>(initialRole);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setRole(initialRole);
  }, [initialRole]);

  const patientBgStyle = {
    backgroundImage: `linear-gradient(rgba(245, 247, 248, 0.8), rgba(245, 247, 248, 0.8)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5vsKoKw8Kajh7vx6CYtSC59GnRf1Y9txbRm3bX7ewiCrRMOtymYsFfK--cHKoGWRfe-BaN1sYUYvEHPbxC7Bkaq2IelGfQzVMqc7i7Fj0q1tgfTbkGcMDsjMYdOTSJRqv00YfucQorDJxJvniy-2pTTC1K2TwRGXF1Hv-mtxXJhIRjZogrh2vmQrtg5A9iQUcYKHqYrCbgNVv0CuJKaV7bGS3Cz7oJPWEXiauGl7a8OlldGB85-2BwhV93WJc3ygsN2047fJCOqwN')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backdropFilter: 'blur(20px)',
  };

  const providerBgStyle = {
    background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)',
  };

  const isPatient = role === 'patient';

  return (
    <div 
      className={`font-display min-h-screen flex flex-col items-center justify-center p-4 transition-all duration-500 ${!isPatient ? 'bg-background-light dark:bg-background-dark' : ''}`}
      style={isPatient ? patientBgStyle : providerBgStyle}
    >
      {/* Background decoration for Provider */}
      {!isPatient && (
        <div className="fixed top-0 right-0 -z-10 opacity-20 pointer-events-none hidden md:block">
          <svg fill="none" height="400" viewBox="0 0 400 400" width="400" xmlns="http://www.w3.org/2000/svg">
            <circle cx="300" cy="100" r="150" stroke="#007bff" strokeDasharray="10 10" strokeWidth="2"></circle>
            <circle cx="350" cy="50" r="100" stroke="#007bff" strokeWidth="1"></circle>
          </svg>
        </div>
      )}

      <div className="w-full max-w-[450px] relative">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="absolute -top-12 left-0 flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-bold text-sm group"
        >
          <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Selection
        </button>

        {/* Role Switcher (Subtle) */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex p-1 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <button 
              onClick={() => setRole('patient')}
              className={`px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${isPatient ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Patient
            </button>
            <button 
              onClick={() => setRole('provider')}
              className={`px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${!isPatient ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Provider
            </button>
          </div>
        </div>

        {/* Authentication Card */}
        <div className={`bg-white dark:bg-slate-900 rounded-lg overflow-hidden border transition-all duration-300 ${isPatient ? 'shadow-2xl border-white/20' : 'shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-[#e2e8f0] dark:border-slate-800'}`}>
          {/* Logo & Header */}
          <div className="px-8 pt-10 pb-6 text-center">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <div className="bg-primary text-white p-2 rounded-lg shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-3xl">{isPatient ? 'local_hospital' : 'medical_services'}</span>
              </div>
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">Telmed</h1>
            </div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">
              {isPatient ? 'Welcome back' : 'Welcome back, Clinician'}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              {isPatient ? 'Sign in to your secure health portal' : 'Secure access to patient records and telehealth tools.'}
            </p>
          </div>

          {/* Login Form */}
          <form 
            className="px-8 pb-8 space-y-5" 
            onSubmit={(e) => { e.preventDefault(); onLogin(role); }}
          >
            {/* Email Field */}
            <div className="space-y-1.5 text-left">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1" htmlFor="email">
                {isPatient ? 'Patient Email' : 'Professional Email Address'}
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </div>
                <input 
                  className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-medium" 
                  id="email" 
                  placeholder={isPatient ? "name@example.com" : "dr.smith@hospital.com"} 
                  type="email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5 text-left">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="password">Password</label>
                <a className="text-xs font-bold text-primary hover:underline transition-all" href="#">Forgot Password?</a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined text-xl">lock</span>
                </div>
                <input 
                  className="block w-full pl-11 pr-12 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-medium" 
                  id="password" 
                  placeholder="••••••••" 
                  type={showPassword ? "text" : "password"}
                  required
                />
                <button 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors" 
                  type="button"
                >
                  <span className="material-symbols-outlined text-xl">{showPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            {/* Primary Action */}
            <button 
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 uppercase tracking-widest text-sm" 
              type="submit"
            >
              <span>Sign In</span>
              {!isPatient && <span className="material-symbols-outlined text-xl">login</span>}
            </button>

            {/* Divider */}
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
              <span className="flex-shrink mx-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest">or continue with</span>
              <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
            </div>

            {/* Secondary Action: Biometric for Patient, Clinician ID for Provider */}
            <button 
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold py-3.5 rounded-lg transition-all flex items-center justify-center gap-3" 
              type="button"
            >
              <span className="material-symbols-outlined text-primary">{isPatient ? 'face' : 'badge'}</span>
              <span className="text-sm">{isPatient ? 'FaceID / Biometric' : 'Login with Clinician ID'}</span>
            </button>

            {/* Signup Link */}
            <div className="text-center pt-2">
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                Don't have an account? 
                <button 
                  onClick={onSignUp} 
                  className="text-primary font-bold hover:underline transition-all ml-1"
                >
                  {isPatient ? 'Sign Up' : 'Join our network'}
                </button>
              </p>
            </div>
          </form>

          {/* Bottom Alert/Badge */}
          {isPatient ? (
            /* Patient HIPAA Badge */
            <div className="bg-slate-50 dark:bg-slate-800/50 px-8 py-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm fill-1">verified_user</span>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400">Secure HIPAA Compliant Portal</span>
            </div>
          ) : (
            /* Provider 2FA Reminder */
            <div className="bg-primary/5 px-8 py-5 border-t border-primary/10 flex gap-3 items-start text-left">
              <span className="material-symbols-outlined text-primary mt-0.5 fill-1">verified_user</span>
              <div className="flex-1">
                <p className="text-xs font-bold text-[#101418] dark:text-slate-200">2FA Setup Reminder</p>
                <p className="text-[11px] text-[#5e758d] dark:text-slate-400 leading-relaxed mt-1">
                  Enhanced Security: Ensure your Two-Factor Authentication (2FA) is active to protect patient data and HIPAA compliance.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Support/Language Links */}
        <div className="mt-8 flex justify-between px-2">
          {isPatient ? (
            <div className="flex gap-4">
              <a className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors" href="#">Terms of Service</a>
            </div>
          ) : (
            <button className="flex items-center gap-2 text-[#5e758d] hover:text-[#101418] dark:hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-lg">help</span>
              <span>Need assistance? Contact support</span>
            </button>
          )}
          
          <div className="flex items-center gap-1 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
            <span className="material-symbols-outlined text-sm">language</span>
            <span>English (US)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
