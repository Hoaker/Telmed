
import React, { useState, useEffect } from 'react';
import PatientRegistration from './PatientRegistration';
import ProviderRegistration from './ProviderRegistration';
import AccountSecurity from './AccountSecurity';
import ProviderAccountSecurity from './ProviderAccountSecurity';
import WelcomePage from './WelcomePage';

interface SignUpProps {
  onBack: () => void;
  onSuccess?: (role: 'patient' | 'provider') => void;
  initialRole?: 'patient' | 'provider';
}

const SignUp: React.FC<SignUpProps> = ({ onBack, onSuccess, initialRole = 'patient' }) => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<'patient' | 'provider'>(initialRole);

  // If initialRole is provider, we might want to start at step 2 directly 
  // if coming from the dedicated landing page.
  useEffect(() => {
    if (initialRole === 'provider') {
      setRole('provider');
      setStep(1); // Keep it at 1 for explicit confirmation, or change to 2 for faster flow
    }
  }, [initialRole]);

  // Step 2 Branching
  if (step === 2) {
    if (role === 'patient') {
      return <PatientRegistration onBack={() => setStep(1)} onNext={() => setStep(3)} />;
    } else {
      return <ProviderRegistration onBack={() => setStep(1)} onNext={() => setStep(3)} />;
    }
  }

  // Step 3 Branching
  if (step === 3) {
    if (role === 'patient') {
      return <AccountSecurity onBack={() => setStep(2)} onNext={() => setStep(4)} />;
    } else {
      return <ProviderAccountSecurity onBack={() => setStep(2)} onNext={() => setStep(4)} />;
    }
  }

  // Step 4 (Common/Success)
  if (step === 4) {
    return <WelcomePage onDashboard={() => onSuccess?.(role) || onBack()} />;
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      {/* Top Navigation */}
      <header className="flex items-center justify-between border-b border-solid border-primary/10 bg-white px-6 md:px-10 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-2xl">medical_services</span>
          </div>
          <h2 className="text-[#101418] text-xl font-bold tracking-tight uppercase">Telmed</h2>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-sm text-[#5e758d] font-medium">Already have an account?</span>
          <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold transition-all hover:bg-primary/20">
            Log In
          </button>
        </div>
      </header>

      <main className="flex-1 flex flex-col md:flex-row max-w-[1440px] mx-auto w-full">
        {/* Sidebar: Why join Telmed */}
        <aside className="w-full md:w-[360px] lg:w-[420px] bg-white p-8 md:p-12 flex flex-col gap-8 border-r border-slate-100">
          <div className="flex flex-col gap-2 text-left">
            <h3 className="text-2xl font-bold text-[#101418]">Why join Telmed?</h3>
            <p className="text-[#5e758d] text-base font-medium">Experience the future of healthcare with our secure, integrated platform.</p>
          </div>
          <nav className="flex flex-col gap-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
              <div className="flex size-10 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div className="text-left">
                <p className="text-[#101418] font-semibold text-sm">24/7 Access</p>
                <p className="text-[#5e758d] text-xs font-medium">Care whenever you need it most.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors group">
              <div className="flex size-10 items-center justify-center rounded-full bg-white text-[#101418] shadow-sm group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined">shield_person</span>
              </div>
              <div className="text-left">
                <p className="text-[#101418] font-semibold text-sm">Secure Messaging</p>
                <p className="text-[#5e758d] text-xs font-medium">Direct and encrypted communication.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors group">
              <div className="flex size-10 items-center justify-center rounded-full bg-white text-[#101418] shadow-sm group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined">medication</span>
              </div>
              <div className="text-left">
                <p className="text-[#101418] font-semibold text-sm">Digital Prescriptions</p>
                <p className="text-[#5e758d] text-xs font-medium">Instant refills and pharmacy tracking.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors group">
              <div className="flex size-10 items-center justify-center rounded-full bg-white text-[#101418] shadow-sm group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined">videocam</span>
              </div>
              <div className="text-left">
                <p className="text-[#101418] font-semibold text-sm">HD Consultations</p>
                <p className="text-[#5e758d] text-xs font-medium">Crystal clear video appointments.</p>
              </div>
            </div>
          </nav>
          <div className="mt-auto pt-8">
            <div className="p-5 rounded-xl bg-[#f0f2f5] border border-dashed border-[#dae0e7] text-left">
              <p className="text-xs text-[#5e758d] leading-relaxed italic">
                "Telmed has completely changed how I manage my health. The 24/7 access gives me peace of mind."
              </p>
              <p className="text-xs font-bold text-[#101418] mt-3">— Sarah J., Patient</p>
            </div>
          </div>
        </aside>

        {/* Main Content: Role Selection */}
        <section className="flex-1 p-6 md:p-12 lg:p-20 bg-[#fbfcfd]">
          <div className="max-w-[640px] mx-auto text-left">
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex justify-between items-end mb-3">
                <div>
                  <h1 className="text-3xl font-bold text-[#101418] mb-1">Join Telmed</h1>
                  <p className="text-[#5e758d] text-sm font-medium">Step 1 of 4: Role Selection</p>
                </div>
                <span className="text-primary font-bold text-xs bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">25% Complete</span>
              </div>
              <div className="h-2 w-full bg-[#e5e7eb] rounded-full overflow-hidden">
                <div className="h-full bg-primary transition-all duration-500 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>

            {/* Question */}
            <h2 className="text-2xl font-bold text-center text-[#101418] mb-8">Tell us who you are</h2>

            {/* Role Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <label 
                className={`relative flex flex-col gap-4 p-6 rounded-2xl border-2 transition-all cursor-pointer group shadow-sm hover:shadow-md ${role === 'patient' ? 'border-primary bg-primary/5' : 'border-transparent bg-white'}`}
              >
                <input 
                  type="radio" 
                  name="role" 
                  className="sr-only" 
                  checked={role === 'patient'} 
                  onChange={() => setRole('patient')} 
                />
                <div className="w-full aspect-video rounded-xl overflow-hidden relative mb-2">
                  <img alt="Patient" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
                  <div className={`absolute inset-0 bg-primary/10 transition-colors ${role === 'patient' ? 'opacity-0' : 'opacity-20 group-hover:opacity-0'}`}></div>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-[#101418]">Patient</h3>
                  <p className="text-[#5e758d] text-xs leading-relaxed mt-1 font-medium">I want to receive care, talk to doctors, and manage my health records.</p>
                </div>
                <div className={`absolute top-4 right-4 size-6 rounded-full border-2 flex items-center justify-center transition-all ${role === 'patient' ? 'bg-primary border-primary' : 'bg-white border-[#dae0e7]'}`}>
                  {role === 'patient' && <span className="material-symbols-outlined text-white text-[16px]">check</span>}
                </div>
              </label>

              <label 
                className={`relative flex flex-col gap-4 p-6 rounded-2xl border-2 transition-all cursor-pointer group shadow-sm hover:shadow-md ${role === 'provider' ? 'border-primary bg-primary/5' : 'border-transparent bg-white'}`}
              >
                <input 
                  type="radio" 
                  name="role" 
                  className="sr-only" 
                  checked={role === 'provider'} 
                  onChange={() => setRole('provider')} 
                />
                <div className="w-full aspect-video rounded-xl overflow-hidden relative mb-2">
                  <img alt="Provider" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559839734-2b71f1536783?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
                  <div className={`absolute inset-0 bg-primary/10 transition-colors ${role === 'provider' ? 'opacity-0' : 'opacity-20 group-hover:opacity-0'}`}></div>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-[#101418]">Provider</h3>
                  <p className="text-[#5e758d] text-xs leading-relaxed mt-1 font-medium">I want to manage my patient list, provide video consultations, and prescribe.</p>
                </div>
                <div className={`absolute top-4 right-4 size-6 rounded-full border-2 flex items-center justify-center transition-all ${role === 'provider' ? 'bg-primary border-primary' : 'bg-white border-[#dae0e7]'}`}>
                  {role === 'provider' && <span className="material-symbols-outlined text-white text-[16px]">check</span>}
                </div>
              </label>
            </div>

            <div className="flex flex-col gap-6">
              <button 
                onClick={() => setStep(2)}
                className="flex w-full cursor-pointer items-center justify-center rounded-xl h-14 bg-primary text-white text-lg font-bold shadow-xl shadow-primary/30 transition-all hover:scale-[1.01] active:scale-[0.98]"
              >
                <span>Continue to Next Step</span>
              </button>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#f0f2f5] shadow-sm">
                <div className="text-primary mt-0.5">
                  <span className="material-symbols-outlined text-[28px] fill-1">verified_user</span>
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-[#101418]">Security Check</h4>
                  <p className="text-[#5e758d] text-xs leading-relaxed mt-1 font-medium">
                    Your privacy is our priority. All medical data is protected by <strong>256-bit AES encryption</strong> and is fully <strong>HIPAA compliant</strong> to ensure your information remains confidential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="md:hidden p-6 text-center border-t border-slate-100 bg-white">
        <p className="text-xs font-bold text-[#5e758d] uppercase tracking-widest">© 2024 Telmed Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SignUp;
