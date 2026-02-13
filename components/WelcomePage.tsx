
import React from 'react';

interface WelcomePageProps {
  onDashboard: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onDashboard }) => {
  return (
    <div className="bg-background-light min-h-screen flex flex-col font-display text-slate-900">
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-100 px-6 md:px-20 py-4 bg-white sticky top-0 z-50">
        <div className="flex items-center gap-3 text-primary">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-2xl">medical_services</span>
          </div>
          <h2 className="text-[#101418] text-xl font-bold leading-tight tracking-tight">Telmed</h2>
        </div>
        <div className="flex flex-1 justify-end gap-4 items-center">
          <span className="text-sm font-bold text-slate-700 hidden md:block">Alex Johnson</span>
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-slate-200 shadow-sm"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5DHgL4GUPvi-_xuhLUSZPiuQI6V7T3F1WBjCE9ZbvntPz772gZBWc6dpI2CkbPhVFyTTYk9YcDdk0HXDmgaFc0YgDYZk1OtaydcNUwyFFYLGRB3zA_Dm_ggk9OT5hY2EsYXHw-xGW6Beap0Y_Vxdot2x6t1GxjfYKzIaJ8h9vYQY7x4oKoLE0hcnNcyiyfyVBbMdek-jawVWNupRf54rHL3Ua_vuQK5k9XOhg7AVEzlFrgTygyBjY9euHWyCLBtFDmCWaBTxjS2lm")' }}
          ></div>
        </div>
      </header>

      <main className="flex flex-1 flex-col md:flex-row">
        {/* Left Sidebar: Benefits (Hidden on small screens) */}
        <aside className="hidden lg:flex w-80 flex-col bg-slate-50 border-r border-slate-100 p-8 gap-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-slate-900 text-lg font-bold">Telmed Benefits</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">Quality healthcare from anywhere, anytime.</p>
          </div>
          
          <div className="flex flex-col gap-4">
            {[
              { icon: 'schedule', title: '24/7 Access', fill: true },
              { icon: 'verified_user', title: 'Secure Data', fill: false },
              { icon: 'medical_services', title: 'Expert Doctors', fill: false },
              { icon: 'calendar_month', title: 'Easy Scheduling', fill: false }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm group hover:border-primary/20 transition-all">
                <div className={`text-primary ${item.fill ? 'fill-1' : ''}`}>
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <p className="text-slate-800 text-sm font-bold">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="mt-auto p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em] mb-3">Member Support</p>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">Need help with your account? Our team is available 24/7.</p>
            <button className="mt-4 text-xs font-black text-primary hover:underline uppercase tracking-widest">Chat with us</button>
          </div>
        </aside>

        {/* Right Content Area */}
        <div className="flex flex-1 flex-col items-center justify-start p-6 md:p-12 bg-white">
          {/* Progress Bar Section */}
          <div className="w-full max-w-2xl mb-16">
            <div className="flex justify-between items-end mb-3">
              <div>
                <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">Registration Complete</p>
                <p className="text-slate-900 text-base font-bold mt-0.5">Step 4 of 4</p>
              </div>
              <p className="text-primary text-sm font-black tracking-widest uppercase">100% COMPLETE</p>
            </div>
            <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" style={{ width: '100%' }}></div>
            </div>
          </div>

          {/* Success Hero */}
          <div className="flex flex-col items-center text-center max-w-xl">
            <div className="mb-8 flex items-center justify-center size-28 bg-green-50 text-green-500 rounded-full shadow-lg shadow-green-500/10">
              <span className="material-symbols-outlined text-7xl fill-1">check_circle</span>
            </div>
            <h1 className="text-slate-900 text-3xl md:text-5xl font-black leading-[1.1] mb-6 tracking-tight">
              Welcome to Telmed,<br />Alex!
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed mb-12 font-medium">
              Your account has been successfully created. You're now ready to access quality healthcare from the comfort of your home.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-20">
              <button 
                onClick={onDashboard}
                className="bg-primary hover:brightness-110 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl shadow-primary/30 transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                Go to Dashboard
                <span className="material-symbols-outlined text-2xl">arrow_forward</span>
              </button>
              <button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-sm active:scale-95">
                Complete History
              </button>
            </div>

            {/* What's Next Section */}
            <div className="w-full border-t border-slate-100 pt-12">
              <h3 className="text-slate-900 text-xl font-bold mb-8 text-left uppercase tracking-tight">What's Next?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {/* Tip 1 */}
                <div className="p-6 rounded-2xl border border-slate-100 bg-white hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all group cursor-pointer">
                  <div className="size-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-2xl">video_call</span>
                  </div>
                  <h4 className="text-slate-900 font-bold text-sm mb-2 uppercase tracking-wide">Book a Visit</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium opacity-80">Schedule your first video consultation with a specialist.</p>
                </div>
                {/* Tip 2 */}
                <div className="p-6 rounded-2xl border border-slate-100 bg-white hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all group cursor-pointer">
                  <div className="size-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-2xl">account_circle</span>
                  </div>
                  <h4 className="text-slate-900 font-bold text-sm mb-2 uppercase tracking-wide">Setup Profile</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium opacity-80">Add insurance details and emergency contacts for faster care.</p>
                </div>
                {/* Tip 3 */}
                <div className="p-6 rounded-2xl border border-slate-100 bg-white hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all group cursor-pointer">
                  <div className="size-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-2xl">notifications_active</span>
                  </div>
                  <h4 className="text-slate-900 font-bold text-sm mb-2 uppercase tracking-wide">Enable Alerts</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium opacity-80">Get reminders for appointments and new prescriptions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Decorative Element */}
          <div className="mt-auto pt-16 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
            © 2024 Telmed Health Inc. All rights reserved.
          </div>
        </div>
      </main>
    </div>
  );
};

export default WelcomePage;
