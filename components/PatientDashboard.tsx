
import React from 'react';

interface PatientDashboardProps {
  onLogout: () => void;
}

const PatientDashboard: React.FC<PatientDashboardProps> = ({ onLogout }) => {
  return (
    <div className="flex min-h-screen bg-[#f5f7f8] font-display text-[#101418] overflow-x-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 h-screen hidden md:flex flex-col p-6 z-50">
        <div className="flex items-center gap-3 mb-10 text-left">
          <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-2xl">health_and_safety</span>
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-primary uppercase">Telmed</h1>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Patient Portal</p>
          </div>
        </div>
        <nav className="flex-1 space-y-2 text-left">
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-bold group" href="#">
            <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">dashboard</span>
            <span className="text-sm">Overview</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all font-bold group" href="#">
            <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">calendar_today</span>
            <span className="text-sm">Appointments</span>
          </a>
          <a className="flex items-center justify-between px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all font-bold group" href="#">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">chat_bubble</span>
              <span className="text-sm">Messages</span>
            </div>
            <span className="size-2 bg-red-500 rounded-full group-hover:animate-pulse"></span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all font-bold group" href="#">
            <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">description</span>
            <span className="text-sm">Medical Records</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all font-bold group" href="#">
            <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">receipt_long</span>
            <span className="text-sm">Billing History</span>
          </a>
        </nav>
        <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 space-y-2 text-left">
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 transition-all font-bold group" href="#">
            <span className="material-symbols-outlined text-2xl group-hover:rotate-45 transition-transform">settings</span>
            <span className="text-sm">Settings</span>
          </a>
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all font-bold group"
          >
            <span className="material-symbols-outlined text-2xl group-hover:-translate-x-1 transition-transform">logout</span>
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto px-6 md:px-12 py-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 text-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Good morning, Alex</h2>
            <p className="text-slate-500 mt-2 font-medium">You have one appointment scheduled for today.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button className="size-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:shadow-md transition-all">
                <span className="material-symbols-outlined text-2xl">notifications</span>
              </button>
              <span className="absolute top-2 right-2 size-3 bg-red-500 border-2 border-white rounded-full"></span>
            </div>
            <div className="flex items-center gap-3 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm">
              <div 
                className="size-10 rounded-full bg-primary/20 bg-cover bg-center border border-slate-100" 
                style={{ backgroundImage: "url('https://i.pravatar.cc/100?img=12')" }}
              ></div>
              <div className="hidden lg:block text-left">
                <p className="text-sm font-bold text-slate-900 leading-none">Alex Thompson</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Patient ID: 8842</p>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Upcoming Appointments Widget */}
          <section className="xl:col-span-2 space-y-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-xl shadow-slate-200/40 relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 p-6">
                <span className="bg-blue-100 text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-primary/10">Live now</span>
              </div>
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Upcoming Appointment</h3>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div 
                  className="size-28 bg-slate-100 rounded-2xl bg-cover bg-center shrink-0 border border-slate-200 shadow-sm" 
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559839734-2b71f1536783?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80')" }}
                ></div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-2xl font-black text-slate-900 tracking-tight">Annual Wellness Visit</h4>
                  <p className="text-slate-500 font-medium text-lg">Dr. Sarah Johnson <span className="mx-2 opacity-30">•</span> Cardiology Specialist</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6">
                    <div className="flex items-center gap-2.5 text-slate-700 font-bold bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                      <span className="material-symbols-outlined text-primary text-xl">calendar_today</span>
                      <span className="text-sm">Today, Oct 24</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-slate-700 font-bold bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                      <span className="material-symbols-outlined text-primary text-xl">schedule</span>
                      <span className="text-sm">10:30 AM (Online)</span>
                    </div>
                  </div>
                </div>
                <button className="w-full md:w-auto px-10 py-4 bg-primary text-white font-black rounded-xl hover:brightness-110 shadow-2xl shadow-primary/30 transition-all flex items-center justify-center gap-3 active:scale-95">
                  <span className="material-symbols-outlined text-2xl fill-1">video_call</span>
                  Join Call
                </button>
              </div>
            </div>

            {/* Recent Test Results */}
            <div className="text-left">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Health Metrics</h3>
                <button className="text-primary text-sm font-black uppercase tracking-widest hover:underline">View History</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Trend Card 1 */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between h-44 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Blood Pressure</p>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-3xl font-black text-slate-900">120/80</span>
                        <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">mmHg</span>
                      </div>
                    </div>
                    <span className="text-emerald-500 bg-emerald-50 border border-emerald-100 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest">Normal</span>
                  </div>
                  <div className="mt-6 h-12 w-full flex items-end gap-1.5">
                    {[30, 50, 40, 35, 60, 45, 50].map((h, i) => (
                      <div 
                        key={i} 
                        className={`flex-1 rounded-t-lg transition-all ${i === 6 ? 'bg-primary' : 'bg-slate-100 group-hover:bg-slate-200'}`} 
                        style={{ height: `${h}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
                {/* Trend Card 2 */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between h-44 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Heart Rate</p>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-3xl font-black text-slate-900">72</span>
                        <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">bpm</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-500 font-black text-[10px] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 uppercase tracking-widest">
                      <span className="material-symbols-outlined text-sm font-black">trending_down</span>
                      2%
                    </div>
                  </div>
                  <div className="mt-6 h-12 w-full flex items-end gap-1.5">
                    {[40, 45, 55, 40, 50, 45, 35].map((h, i) => (
                      <div 
                        key={i} 
                        className={`flex-1 rounded-t-lg transition-all ${i === 6 ? 'bg-primary' : 'bg-slate-100'}`} 
                        style={{ height: `${h}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sidebar Content */}
          <section className="space-y-8 text-left">
            {/* Notifications Alert */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 flex items-start gap-5 shadow-sm">
              <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-xl fill-1">mail</span>
              </div>
              <div>
                <h4 className="font-black text-slate-900 text-sm uppercase tracking-wide">New Message</h4>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed font-medium">Dr. Aris Thorne sent you a follow-up about your recent labs.</p>
                <button className="text-primary text-xs font-black mt-3 hover:underline uppercase tracking-widest">Read Message</button>
              </div>
            </div>

            {/* Current Medications */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-black text-slate-900 tracking-tight">Medications</h3>
                <button className="text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-2xl">more_horiz</span>
                </button>
              </div>
              <div className="space-y-6">
                {/* Med Item 1 */}
                <div className="pb-6 border-b border-slate-50 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h5 className="font-bold text-slate-900 text-base">Lisinopril</h5>
                      <p className="text-xs text-slate-400 font-medium">10mg <span className="mx-1">•</span> Once daily</p>
                    </div>
                    <button className="px-4 py-2 border border-slate-200 text-slate-700 text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-slate-50 hover:border-primary/20 transition-all">Refill</button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="size-2 bg-emerald-500 rounded-full"></span>
                    <span className="text-[10px] text-emerald-600 uppercase font-black tracking-widest">Active Prescription</span>
                  </div>
                </div>
                {/* Med Item 2 */}
                <div className="pb-6 border-b border-slate-50 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h5 className="font-bold text-slate-900 text-base">Atorvastatin</h5>
                      <p className="text-xs text-slate-400 font-medium">20mg <span className="mx-1">•</span> Every night</p>
                    </div>
                    <button className="px-4 py-2 border border-slate-200 text-slate-700 text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-slate-50 hover:border-primary/20 transition-all">Refill</button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="size-2 bg-emerald-500 rounded-full"></span>
                    <span className="text-[10px] text-emerald-600 uppercase font-black tracking-widest">Active Prescription</span>
                  </div>
                </div>
                {/* Med Item 3 */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h5 className="font-bold text-slate-900 text-base">Metformin</h5>
                      <p className="text-xs text-slate-400 font-medium">500mg <span className="mx-1">•</span> Twice daily</p>
                    </div>
                    <button className="px-4 py-2 bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-lg cursor-not-allowed">Pending</button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="size-2 bg-amber-500 rounded-full"></span>
                    <span className="text-[10px] text-amber-600 uppercase font-black tracking-widest">Refill requested</span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-10 py-4 bg-slate-50 text-slate-700 font-black text-xs uppercase tracking-widest rounded-xl hover:bg-slate-100 transition-all">
                View History
              </button>
            </div>

            {/* Health Tips Card */}
            <div className="relative h-56 rounded-2xl overflow-hidden bg-primary p-8 group cursor-pointer shadow-xl shadow-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-indigo-700 opacity-90"></div>
              <img 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 group-hover:scale-110 transition-transform duration-700" 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Health lifestyle" 
              />
              <div className="relative z-10 h-full flex flex-col justify-end">
                <span className="text-blue-200 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Daily Health Tip</span>
                <h4 className="text-white font-black text-xl leading-tight mb-6 tracking-tight">How to manage seasonal allergies effectively.</h4>
                <div className="flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest">
                  Read more
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;
