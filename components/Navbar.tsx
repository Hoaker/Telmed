
import React from 'react';

interface NavbarProps {
  onSignUp?: () => void;
  onLogin?: () => void;
  onAbout?: () => void;
  onContact?: () => void;
  onPrivacy?: () => void;
  onProviderLanding?: () => void;
  onServices?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onSignUp, 
  onLogin, 
  onAbout, 
  onContact, 
  onPrivacy, 
  onProviderLanding,
  onServices 
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = '/'}>
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg text-white">
            <span className="material-symbols-outlined text-2xl">medical_services</span>
          </div>
          <span className="text-2xl font-black tracking-tight text-primary uppercase">Telmed</span>
        </div>
        <nav className="hidden lg:flex items-center gap-10 text-slate-700 dark:text-slate-200">
          <button 
            onClick={onServices}
            className="text-sm font-bold hover:text-primary transition-colors"
          >
            Services
          </button>
          <button 
            onClick={onAbout}
            className="text-sm font-bold hover:text-primary transition-colors"
          >
            About Us
          </button>
          <button 
            onClick={onProviderLanding}
            className="text-sm font-black text-primary border border-primary/20 px-3 py-1.5 rounded-lg hover:bg-primary hover:text-white transition-all"
          >
            For Providers
          </button>
          <button 
            onClick={onPrivacy}
            className="text-sm font-bold hover:text-primary transition-colors"
          >
            Privacy
          </button>
          <button 
            onClick={onContact}
            className="text-sm font-bold hover:text-primary transition-colors"
          >
            Support
          </button>
        </nav>
        <div className="flex items-center gap-3">
          <button 
            onClick={onLogin}
            className="px-5 py-2.5 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
          >
            Login
          </button>
          <button 
            onClick={onSignUp}
            className="px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-lg shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
