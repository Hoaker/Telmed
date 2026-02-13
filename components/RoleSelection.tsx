
import React from 'react';

interface RoleSelectionProps {
  onBack: () => void;
  onSelectRole: (role: 'patient' | 'provider') => void;
  onSignUp: () => void;
}

const RoleSelection: React.FC<RoleSelectionProps> = ({ onBack, onSelectRole, onSignUp }) => {
  return (
    <div className="bg-[#f0f7ff] min-h-screen flex items-center justify-center p-4 font-display">
      <div className="max-w-[1000px] w-full flex flex-col items-center">
        {/* Logo Section */}
        <div className="mb-12 flex flex-col items-center gap-2 cursor-pointer" onClick={onBack}>
          <div className="bg-primary text-white p-3 rounded-xl shadow-lg shadow-primary/20 transition-transform hover:scale-105">
            <span className="material-symbols-outlined text-4xl block">medical_services</span>
          </div>
          <h1 className="text-[#101418] text-3xl font-bold tracking-tight mt-4 uppercase">Telmed</h1>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[#101418] text-4xl font-extrabold tracking-tight mb-3">Welcome to Telmed</h2>
          <p className="text-[#5e758d] text-lg font-medium">Please select your account type to continue</p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-4">
          {/* Patient Card */}
          <button 
            onClick={() => onSelectRole('patient')}
            className="group relative flex flex-col items-center text-center bg-white p-8 rounded-2xl border-2 border-transparent shadow-sm hover:shadow-2xl hover:border-primary transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20"
          >
            <div className="w-full h-48 mb-6 overflow-hidden rounded-xl bg-primary/5 flex items-center justify-center transition-colors group-hover:bg-primary/10">
              <div className="relative">
                <span className="material-symbols-outlined text-primary text-7xl opacity-80 group-hover:scale-110 transition-transform duration-300">person</span>
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1.5 shadow-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl fill-1">favorite</span>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#101418] mb-2">Patient</h3>
            <p className="text-[#5e758d] text-base leading-relaxed mb-8 font-medium">
              Access your records, book appointments, and connect with your doctor instantly.
            </p>
            <div className="mt-auto w-full inline-flex items-center justify-center h-14 px-8 bg-primary text-white rounded-xl font-bold group-hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Continue as Patient
            </div>
          </button>

          {/* Healthcare Provider Card */}
          <button 
            onClick={() => onSelectRole('provider')}
            className="group relative flex flex-col items-center text-center bg-white p-8 rounded-2xl border-2 border-transparent shadow-sm hover:shadow-2xl hover:border-primary transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20"
          >
            <div className="w-full h-48 mb-6 overflow-hidden rounded-xl bg-primary/5 flex items-center justify-center transition-colors group-hover:bg-primary/10">
              <div className="relative">
                <span className="material-symbols-outlined text-primary text-7xl opacity-80 group-hover:scale-110 transition-transform duration-300">stethoscope</span>
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1.5 shadow-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">verified_user</span>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#101418] mb-2">Healthcare Provider</h3>
            <p className="text-[#5e758d] text-base leading-relaxed mb-8 font-medium">
              Manage your patient appointments, view clinical history, and provide remote care.
            </p>
            <div className="mt-auto w-full inline-flex items-center justify-center h-14 px-8 bg-primary text-white rounded-xl font-bold group-hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Continue as Provider
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center pb-8">
          <p className="text-[#5e758d] text-base font-medium">
            New to Telmed? 
            <button 
              onClick={onSignUp}
              className="text-primary font-black hover:underline underline-offset-4 ml-1"
            >
              Create an account
            </button>
          </p>
          <div className="mt-12 flex items-center justify-center gap-6 opacity-30">
            <span className="text-[10px] font-black tracking-[0.2em] uppercase">Secured by Telmed Health Systems</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
