
import React from 'react';

interface ProviderHowItWorksProps {
  onBack: () => void;
  onJoin: () => void;
}

const ProviderHowItWorks: React.FC<ProviderHowItWorksProps> = ({ onBack, onJoin }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased font-display min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
            <div className="bg-primary p-2 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white">medical_services</span>
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">Telmed</h2>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Solutions</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Pricing</a>
            <a className="text-sm font-semibold text-primary transition-colors" href="#">How It Works</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Support</a>
          </nav>
          <div className="flex items-center gap-4">
            <button 
              onClick={onJoin}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md shadow-primary/20"
            >
              Join Our Network
            </button>
            <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border-2 border-primary/20">
              <img 
                alt="Doctor Profile" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPCN8lgGgmpLUVN491yt5oTvC2IhT3fkfgpAxEuyDPg28TOCDn_QXFMxXKua4UxCOqaOMhVu1cntameqNgu70LQQyCsaN93EV3W5-oCc5n6Af5qWaUqQg7PlVTlniIIOsvrQ3u1rV2vnMrcoSg1j9aQHkP2524eDGbjmKL-TUFJfHKm6fKhAydHYji-40QF1EQhwEfDB54duFnIraA6PPDocJXl2zaOG4MVGXnUsESWeOpgLimGhzR0b2jqmub8PRkActIQfWKMeXI" 
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            <span className="text-xs font-bold uppercase tracking-wider">Provider Network 2024</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
            Empowering Your Practice with Telmed
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Join our premium telehealth network and start providing care to patients nationwide with our easy-to-use platform. Designed by clinicians, for clinicians.
          </p>
        </section>

        {/* How It Works Grid */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="group bg-white dark:bg-slate-900 p-8 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <div className="mb-6 flex justify-between items-start">
                <div className="size-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">badge</span>
                </div>
                <span className="text-4xl font-black text-slate-100 dark:text-slate-800">01</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white leading-tight">Verify Credentials</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Securely upload your medical license and credentials. Our team verifies your profile within 24 hours to maintain our network quality.
              </p>
            </div>
            {/* Step 2 */}
            <div className="group bg-white dark:bg-slate-900 p-8 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <div className="mb-6 flex justify-between items-start">
                <div className="size-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">calendar_month</span>
                </div>
                <span className="text-4xl font-black text-slate-100 dark:text-slate-800">02</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white leading-tight">Set Availability</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Manage your clinic hours with precision. Use our flexible scheduling tool to open slots for same-day visits or routine follow-ups.
              </p>
            </div>
            {/* Step 3 */}
            <div className="group bg-white dark:bg-slate-900 p-8 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <div className="mb-6 flex justify-between items-start">
                <div className="size-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">sync</span>
                </div>
                <span className="text-4xl font-black text-slate-100 dark:text-slate-800">03</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white leading-tight">Seamless Integration</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Sync effortlessly with your existing EHR systems. We support HL7 and FHIR standards for a truly unified and automated workflow.
              </p>
            </div>
            {/* Step 4 */}
            <div className="group bg-white dark:bg-slate-900 p-8 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <div className="mb-6 flex justify-between items-start">
                <div className="size-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">videocam</span>
                </div>
                <span className="text-4xl font-black text-slate-100 dark:text-slate-800">04</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white leading-tight">Host Consultations</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Launch secure, HIPAA-compliant video calls instantly. Access patient charts and write prescriptions directly from the call interface.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits & CTA Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-8 text-left">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Why Providers Choose Us</h2>
                <p className="text-slate-600 dark:text-slate-400 font-medium">We handle the administrative overhead so you can focus on patient care.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm">
                    <span className="material-symbols-outlined text-primary">payments</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Automated Billing</h4>
                    <p className="text-xs text-slate-500 font-medium">Fast, accurate reimbursements.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm">
                    <span className="material-symbols-outlined text-primary">security</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">HIPAA Compliant</h4>
                    <p className="text-xs text-slate-500 font-medium">Bank-level data encryption.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm">
                    <span className="material-symbols-outlined text-primary">groups</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Patient Referrals</h4>
                    <p className="text-xs text-slate-500 font-medium">Built-in marketing for you.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm">
                    <span className="material-symbols-outlined text-primary">support_agent</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">24/7 Support</h4>
                    <p className="text-xs text-slate-500 font-medium">Dedicated provider assistance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-auto flex flex-col items-center bg-white dark:bg-slate-900 p-8 rounded-xl shadow-2xl shadow-primary/10 border border-slate-100 dark:border-slate-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center tracking-tight">Ready to get started?</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 text-center max-w-xs font-medium">Join 5,000+ medical professionals already using Telmed.</p>
              <button 
                onClick={onJoin}
                className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-primary/30 mb-4"
              >
                Join Our Network
              </button>
              <p className="text-xs text-slate-400 flex items-center gap-1 font-bold">
                <span className="material-symbols-outlined text-[14px]">lock</span>
                Secure Professional Onboarding
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-12 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-sm">medical_services</span>
            </div>
            <span className="font-bold text-slate-900 dark:text-white uppercase tracking-tight">Telmed Inc.</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-[10px]">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-primary transition-colors" href="#">Compliance</a>
            <a className="hover:text-primary transition-colors" href="#">Contact</a>
          </div>
          <p className="text-sm text-slate-400 font-bold uppercase tracking-widest text-[10px]">© 2024 Telmed. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProviderHowItWorks;
