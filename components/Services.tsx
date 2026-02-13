
import React from 'react';

interface ServicesProps {
  onBack: () => void;
  onSignUp: () => void;
  onLogin: () => void;
  onAbout: () => void;
}

const Services: React.FC<ServicesProps> = ({ onBack, onSignUp, onLogin, onAbout }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#101418] antialiased min-h-screen flex flex-col font-display">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-solid border-primary/10 px-6 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary cursor-pointer" onClick={onBack}>
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-2xl">medical_services</span>
            </div>
            <h2 className="text-[#101418] dark:text-white text-xl font-bold tracking-tight uppercase">Telmed</h2>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <button className="text-primary text-sm font-bold" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Services</button>
            <a className="text-[#5e758d] hover:text-primary transition-colors text-sm font-medium" href="#">Specialists</a>
            <a className="text-[#5e758d] hover:text-primary transition-colors text-sm font-medium" href="#">Mental Health</a>
            <button className="text-[#5e758d] hover:text-primary transition-colors text-sm font-medium" onClick={onAbout}>About Us</button>
          </nav>
          <div className="flex items-center gap-3">
            <button 
              onClick={onLogin}
              className="hidden sm:flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 transition-all"
            >
              Login
            </button>
            <button 
              onClick={onSignUp}
              className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-20 py-12 flex-grow">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 text-left">
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div className="flex flex-col gap-4">
              <span className="text-primary font-bold text-sm tracking-widest uppercase">Healthcare evolved</span>
              <h1 className="text-[#101418] dark:text-white text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                Comprehensive <span className="text-primary">Healthcare</span> Services
              </h1>
              <p className="text-[#5e758d] dark:text-gray-400 text-lg leading-relaxed max-w-xl font-medium">
                Access world-class medical care from the comfort of your home. Telmed connects you with top-tier professionals 24/7, ensuring your health is always the priority.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onSignUp}
                className="h-14 px-8 bg-primary text-white font-bold rounded-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/30"
              >
                Book a Consultation
              </button>
              <button className="h-14 px-8 bg-white dark:bg-background-dark border border-primary/20 text-primary font-bold rounded-lg hover:bg-primary/5 transition-all">
                View Pricing
              </button>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-4 bg-primary/10 rounded-xl blur-2xl"></div>
            <div 
              className="relative w-full aspect-[4/3] rounded-lg bg-cover bg-center shadow-2xl border-4 border-white dark:border-gray-800" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgmzBYzM1eYGtGiiI0ROfEsFJ3FIqTMN06KfZmoUz5nCQy5ir9oyC_-NE7ZRZj5cmzoAkLA-jO7xeFEt8lrf6iOas9UCCdn0ZpXu9yFLhe9GgcdIYIpbZGk1FP5pTkfV7X0SatNquIbOxt0DCUwpLr94UZdoTycaPQ18enFTfoTxT_t2s9zYyYcSYJg6xzlWJ_QZOUv24czRBPE8Jr6MwKO28BVdu0HUs_fydF8YG83k6b22epV9s5PSFkurzrjDGxd3HWGGCuOxJk')" }}
            >
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#101418] dark:text-white mb-4">Our Core Services</h2>
            <p className="text-[#5e758d] dark:text-gray-400 max-w-2xl mx-auto font-medium">Specialized care paths designed for your unique health journey, available whenever you need them.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {/* Service Card 1 */}
            <div className="group flex flex-col gap-4 p-6 bg-white dark:bg-gray-800/50 border border-primary/10 rounded-lg hover:border-primary/40 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">history_toggle_off</span>
              </div>
              <h3 className="text-lg font-bold text-[#101418] dark:text-white">24/7 Virtual Visits</h3>
              <p className="text-[#5e758d] dark:text-gray-400 text-sm leading-relaxed font-medium">Immediate care for urgent needs anytime, anywhere. No appointments necessary.</p>
            </div>
            {/* Service Card 2 */}
            <div className="group flex flex-col gap-4 p-6 bg-white dark:bg-gray-800/50 border border-primary/10 rounded-lg hover:border-primary/40 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">stethoscope</span>
              </div>
              <h3 className="text-lg font-bold text-[#101418] dark:text-white">Specialist Consultations</h3>
              <p className="text-[#5e758d] dark:text-gray-400 text-sm leading-relaxed font-medium">Book time with board-certified experts across 30+ medical specialties.</p>
            </div>
            {/* Service Card 3 */}
            <div className="group flex flex-col gap-4 p-6 bg-white dark:bg-gray-800/50 border border-primary/10 rounded-lg hover:border-primary/40 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">psychology</span>
              </div>
              <h3 className="text-lg font-bold text-[#101418] dark:text-white">Mental Health Support</h3>
              <p className="text-[#5e758d] dark:text-gray-400 text-sm leading-relaxed font-medium">Licensed therapists and psychiatrists providing compassionate, confidential care.</p>
            </div>
            {/* Service Card 4 */}
            <div className="group flex flex-col gap-4 p-6 bg-white dark:bg-gray-800/50 border border-primary/10 rounded-lg hover:border-primary/40 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">monitor_heart</span>
              </div>
              <h3 className="text-lg font-bold text-[#101418] dark:text-white">Chronic Care</h3>
              <p className="text-[#5e758d] dark:text-gray-400 text-sm leading-relaxed font-medium">Long-term support and continuous monitoring for ongoing medical conditions.</p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 rounded-xl bg-white dark:bg-gray-900/50 border border-primary/5 mb-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-8 lg:px-16 items-center">
            <div className="flex flex-col gap-10 text-left">
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-black tracking-tight text-[#101418] dark:text-white leading-tight">
                  How our services help you
                </h2>
                <p className="text-[#5e758d] dark:text-gray-400 text-lg font-medium">
                  We prioritize your well-being by providing accessible, affordable, and high-quality healthcare solutions tailored to your modern lifestyle.
                </p>
              </div>
              <ul className="flex flex-col gap-8">
                <li className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl">verified</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#101418] dark:text-white">Unmatched Convenience</h4>
                    <p className="text-sm text-[#5e758d] dark:text-gray-400 font-medium">Skip the waiting room and consult with doctors from your home or office on any device.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl">payments</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#101418] dark:text-white">Cost-Effective Care</h4>
                    <p className="text-sm text-[#5e758d] dark:text-gray-400 font-medium">Reduce out-of-pocket expenses with our affordable virtual care plans and transparent pricing.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl">workspace_premium</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#101418] dark:text-white">Top-Tier Professionals</h4>
                    <p className="text-sm text-[#5e758d] dark:text-gray-400 font-medium">Our network includes board-certified clinicians from the nation's top medical institutions.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <div 
                  className="w-full aspect-square bg-cover bg-center" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBe7FcaJUwhFn4QoXd-ZB2EiCM9IoxNZtbwyE-5xUr6q22I7lg_XX4hxvyNA8yvVrt-9evTgBLutlNS1m8sZRknH2142i8jWPX5y2V09qLeB2OkOEBTDIQTSI8gCw--ZnnRIn7frBd34ZDpn4CY3IzTugS0zL_DLAMX406fU0d-KRAI59rhMSlxzs4Q95i5E_s07bRfk_PeEXA94TOIdbYmCN0dmT_AwRkqAQQZ9FIcAmjsgPleooJboL7f99azbpRkZrhDiMQVNHa7')" }}
                >
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-lg text-white shadow-xl max-w-[200px] text-left">
                <p className="text-2xl font-black">98%</p>
                <p className="text-[10px] font-bold opacity-80 uppercase tracking-wider">Patient satisfaction rate across all services</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-xl bg-primary px-8 py-16 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"></path>
                </pattern>
              </defs>
              <rect fill="url(#grid)" height="100%" width="100%"></rect>
            </svg>
          </div>
          <div className="relative z-10 flex flex-col items-center gap-8">
            <h2 className="text-4xl font-black max-w-2xl leading-tight tracking-tight">Ready to prioritize your health with modern medical care?</h2>
            <p className="text-lg opacity-90 max-w-xl font-medium">Join thousands of patients who have transformed their healthcare experience with Telmed today.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={onSignUp}
                className="h-14 px-10 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 hover:scale-[1.05] transition-all shadow-lg"
              >
                Get Started Now
              </button>
              <button className="h-14 px-10 bg-transparent border border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all">
                Talk to Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-background-dark border-t border-primary/10 py-12 px-6 lg:px-20 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
            <div className="size-6 bg-primary rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-sm">medical_services</span>
            </div>
            <h2 className="text-[#101418] dark:text-white text-lg font-bold tracking-tight uppercase">Telmed</h2>
          </div>
          <div className="flex gap-8 text-[#5e758d] text-sm font-bold uppercase tracking-widest text-[10px]">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-primary transition-colors" href="#">Help Center</a>
            <a className="hover:text-primary transition-colors" href="#">Contact</a>
          </div>
          <p className="text-[#5e758d] text-[10px] font-bold uppercase tracking-widest">© 2024 Telmed Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Services;
