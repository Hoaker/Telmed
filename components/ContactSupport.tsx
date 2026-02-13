
import React from 'react';

interface ContactSupportProps {
  onBack: () => void;
  onSignUp: () => void;
}

const ContactSupport: React.FC<ContactSupportProps> = ({ onBack, onSignUp }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#101418] font-display min-h-screen flex flex-col">
      {/* Emergency Banner */}
      <div className="bg-emergency py-3 px-4 text-white text-center sticky top-0 z-[60] shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-white">emergency</span>
            <p className="text-sm md:text-base font-bold">EMERGENCY: If you are in a life-threatening situation, call 911 immediately.</p>
          </div>
          <a className="px-4 py-1 bg-white text-emergency rounded-full text-xs font-black uppercase tracking-wider hover:bg-white/90 transition-colors" href="tel:911">Call 911</a>
        </div>
      </div>

      {/* Navigation */}
      <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800 sticky top-[48px] md:top-[52px] z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
              <div className="text-primary">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary flex items-center justify-center rounded-lg text-white">
                  <span className="material-symbols-outlined text-2xl">medical_services</span>
                </div>
              </div>
              <span className="text-xl md:text-2xl font-black tracking-tight text-[#101418] dark:text-white uppercase">Telmed</span>
            </div>
            <nav className="hidden lg:flex items-center gap-8">
              <button onClick={onBack} className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Home</button>
              <a className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="#">Services</a>
              <a className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="#">Providers</a>
              <button className="text-sm font-black text-primary border-b-2 border-primary pb-1">Support</button>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={onSignUp}
              className="px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-lg shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 flex-grow">
        {/* Hero Section */}
        <div className="mb-16 text-left">
          <h1 className="text-4xl md:text-6xl font-black text-[#101418] dark:text-white mb-6 tracking-tight leading-tight">
            Contact Telmed Support
          </h1>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed font-medium">
            Whether you have a clinical question, a billing inquiry, or need technical help, our dedicated team is here to support your healthcare journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 dark:text-white text-left">
                <span className="material-symbols-outlined text-primary text-3xl">mail</span>
                Send us a Message
              </h2>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-8 text-left">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">Full Name</label>
                    <input className="w-full px-5 py-4 rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium" placeholder="John Doe" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">Email Address</label>
                    <input className="w-full px-5 py-4 rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium" placeholder="john@example.com" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">Reason for Inquiry</label>
                  <select className="w-full px-5 py-4 rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25em_1.25em] bg-[right_1.25rem_center] bg-no-repeat">
                    <option disabled value="">Select a reason...</option>
                    <option value="billing">Billing Inquiry</option>
                    <option value="tech">Technical Support</option>
                    <option value="medical">Medical Question</option>
                    <option value="general">General Feedback</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">Message</label>
                  <textarea className="w-full px-5 py-4 rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium" placeholder="How can we help you today?" rows={6}></textarea>
                </div>
                <button className="w-full md:w-auto px-12 py-5 bg-primary text-white font-black rounded-xl hover:brightness-110 shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-3 active:scale-95" type="submit">
                  Send Message
                  <span className="material-symbols-outlined text-2xl">send</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Direct Contact Info */}
          <div className="space-y-8 text-left">
            {/* Live Chat Card */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/30 dark:shadow-none group hover:border-primary/20 transition-all">
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">chat_bubble</span>
                </div>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-success/10 text-success border border-success/20">
                  <span className="w-2 h-2 rounded-full bg-success mr-2 animate-pulse"></span>
                  Online Now
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Live Chat</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium">Connect with our support agents instantly for immediate assistance.</p>
              <div className="flex items-center justify-between mb-6 bg-slate-50 dark:bg-slate-800 p-4 rounded-xl">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Wait Time</span>
                <span className="text-sm font-black text-primary">~ 2 mins</span>
              </div>
              <button className="w-full py-4 bg-primary text-white font-black rounded-xl hover:brightness-110 shadow-lg shadow-primary/20 transition-all active:scale-95">Start Chatting</button>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-5 hover:border-primary/20 transition-all">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <span className="material-symbols-outlined text-2xl">phone_in_talk</span>
                </div>
                <div>
                  <h3 className="text-base font-bold dark:text-white">Call Support</h3>
                  <a className="text-lg font-black text-primary hover:underline" href="tel:1800835633">+1 (800) TEL-MED</a>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Mon-Fri, 8am-8pm PST</p>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-5 hover:border-primary/20 transition-all">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <span className="material-symbols-outlined text-2xl">alternate_email</span>
                </div>
                <div>
                  <h3 className="text-base font-bold dark:text-white">Email Us</h3>
                  <a className="text-lg font-black text-primary hover:underline" href="mailto:support@telmed.com">support@telmed.com</a>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">24 Hour Response Time</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-700">
              <h3 className="font-black mb-6 text-[10px] tracking-[0.2em] text-slate-400 uppercase">
                Helpful Resources
              </h3>
              <ul className="space-y-4">
                {[
                  { label: 'Knowledge Base', icon: 'auto_stories' },
                  { label: 'Insurance FAQ', icon: 'description' },
                  { label: 'Find a Provider', icon: 'search' },
                  { label: 'Privacy Policy', icon: 'shield_person' }
                ].map((link, idx) => (
                  <li key={idx}>
                    <a className="text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary transition-colors flex items-center justify-between group" href="#">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[20px] text-slate-400 group-hover:text-primary transition-colors">{link.icon}</span>
                        {link.label}
                      </div>
                      <span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">arrow_forward</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Headquarters & Map Section */}
        <div className="mt-24 text-left">
          <h2 className="text-3xl font-black text-[#101418] dark:text-white mb-8 tracking-tight">Our Headquarters</h2>
          <div className="grid md:grid-cols-3 gap-0 items-stretch bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-200/50">
            <div className="p-10 md:col-span-1 space-y-8 flex flex-col justify-center">
              <div>
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Location</p>
                <p className="text-xl font-black dark:text-white mb-2">San Francisco Corporate Center</p>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                  123 Healthcare Way, Suite 500<br />
                  San Francisco, CA 94105
                </p>
              </div>
              <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Office Hours</p>
                <p className="text-slate-500 dark:text-slate-400 font-medium">
                  Monday - Friday: 9am - 6pm PST<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
            <div className="md:col-span-2 h-[400px] md:h-full relative">
              <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800">
                <img 
                  alt="Map of Headquarters" 
                  className="w-full h-full object-cover grayscale opacity-80" 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                />
                <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <span className="material-symbols-outlined text-emergency text-6xl drop-shadow-2xl fill-1">location_on</span>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/20 rounded-full blur-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
              <div className="w-8 h-8 bg-slate-200 dark:bg-slate-800 flex items-center justify-center rounded-lg text-slate-500">
                <span className="material-symbols-outlined text-xl">medical_services</span>
              </div>
              <span className="text-xs font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.3em]">© 2024 TELMED HEALTH</span>
            </div>
            <div className="flex gap-8">
              <a className="text-xs font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest" href="#">Accessibility</a>
              <a className="text-xs font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest" href="#">HIPAA Compliance</a>
              <a className="text-xs font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest" href="#">Terms</a>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="size-10 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:text-primary transition-all cursor-pointer">
              <span className="material-symbols-outlined text-xl">language</span>
            </div>
            <div className="size-10 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:text-primary transition-all cursor-pointer">
              <span className="material-symbols-outlined text-xl">public</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactSupport;
