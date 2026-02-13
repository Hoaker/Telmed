
import React from 'react';

interface ProviderRegistrationProps {
  onBack: () => void;
  onNext: () => void;
}

const ProviderRegistration: React.FC<ProviderRegistrationProps> = ({ onBack, onNext }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-4 md:p-8 font-display">
      <div className="max-w-6xl w-full bg-white dark:bg-slate-900 shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row min-h-[800px] border border-slate-100 dark:border-slate-800">
        
        {/* Left Sidebar: Benefits & Security */}
        <aside className="w-full md:w-1/3 bg-slate-50 dark:bg-slate-800/50 p-8 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700 flex flex-col justify-between">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined">medical_services</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Telmed <span className="text-primary">Pro</span></h2>
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">Provider Benefits</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">Join 10,000+ clinicians delivering world-class care.</p>
            </div>
            
            <nav className="space-y-4">
              {[
                { icon: 'wifi', title: 'Telehealth Flexibility', desc: 'Work from anywhere, anytime on your own schedule.' },
                { icon: 'database', title: 'Efficient EHR Integration', desc: 'Seamlessly sync with your existing patient workflows.' },
                { icon: 'receipt_long', title: 'Automated Billing', desc: 'Get paid faster with integrated claims processing.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary/20 transition-all">
                  <span className="material-symbols-outlined text-primary">{item.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </nav>
          </div>
          
          <div className="pt-8 space-y-4">
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <span className="material-symbols-outlined text-green-500 fill-1">verified_user</span>
              <span className="text-[10px] font-black uppercase tracking-widest">HIPAA Compliant Platform</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <span className="material-symbols-outlined text-blue-500 fill-1">lock</span>
              <span className="text-[10px] font-black uppercase tracking-widest">256-bit AES Encryption</span>
            </div>
          </div>
        </aside>

        {/* Right Content Area: Form */}
        <main className="flex-1 p-8 md:p-12 lg:p-16 bg-white dark:bg-slate-900">
          {/* Progress Section */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-black text-primary uppercase tracking-[0.2em]">Step 2 of 4</span>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">50% Complete</span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all duration-700 ease-out" style={{ width: '50%' }}></div>
            </div>
          </div>

          {/* Form Header */}
          <div className="mb-10 text-left">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Professional Credentials</h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium">Please provide your licensing details to verify your provider status.</p>
          </div>

          {/* Registration Form */}
          <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Full Name */}
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">Legal Full Name</label>
                <input 
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none font-medium" 
                  placeholder="Dr. Jane Doe" 
                  type="text"
                />
              </div>

              {/* License Number */}
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">Professional License Number</label>
                <div className="relative group">
                  <input 
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none font-medium" 
                    placeholder="e.g. 1234567890" 
                    type="text"
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl cursor-help hover:text-primary transition-colors">info</span>
                </div>
              </div>

              {/* State of Licensure */}
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">State of Licensure</label>
                <div className="relative">
                  <select className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none appearance-none font-medium">
                    <option value="">Select State</option>
                    <option value="CA">California</option>
                    <option value="NY">New York</option>
                    <option value="TX">Texas</option>
                    <option value="FL">Florida</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                </div>
              </div>

              {/* Medical Specialty */}
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">Medical Specialty</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
                  <input 
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none font-medium" 
                    placeholder="Search specialty (e.g. Cardiology, Pediatrics...)" 
                    type="text"
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                    Primary Care 
                    <button className="ml-2 hover:opacity-70 transition-opacity">
                      <span className="material-symbols-outlined text-sm leading-none">close</span>
                    </button>
                  </span>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    Internal Medicine 
                    <button className="ml-2 hover:opacity-70 transition-opacity">
                      <span className="material-symbols-outlined text-sm leading-none">close</span>
                    </button>
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-100 dark:border-slate-800 mt-8">
              <button 
                onClick={onBack}
                className="w-full sm:w-auto px-10 py-4 rounded-xl font-bold text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all border border-transparent hover:border-slate-200" 
                type="button"
              >
                Back
              </button>
              <button 
                onClick={onNext}
                className="w-full sm:w-auto px-12 py-4 rounded-xl font-bold text-white bg-primary hover:brightness-110 shadow-2xl shadow-primary/25 transition-all flex items-center justify-center gap-3 active:scale-95" 
                type="button"
              >
                Continue to Step 3
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-[0.1em] leading-relaxed max-w-lg mx-auto">
            By clicking continue, you agree to our <a href="#" className="underline hover:text-primary">Terms of Service</a> and <a href="#" className="underline hover:text-primary">Privacy Policy</a>. All license information is verified via official state databases.
          </p>
        </main>
      </div>
    </div>
  );
};

export default ProviderRegistration;
