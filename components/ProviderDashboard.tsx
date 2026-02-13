
import React from 'react';

interface ProviderDashboardProps {
  onLogout: () => void;
}

const ProviderDashboard: React.FC<ProviderDashboardProps> = ({ onLogout }) => {
  return (
    <div className="flex h-screen bg-[#f5f7f8] dark:bg-background-dark text-slate-800 dark:text-slate-200 font-display overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col h-full z-50">
        <div className="p-6 flex items-center gap-3 text-left">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-xl">medical_services</span>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight text-primary uppercase">Telmed</h1>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Provider Pro</p>
          </div>
        </div>
        <nav className="flex-1 px-3 space-y-1 text-left">
          <a className="flex items-center gap-3 px-4 py-3 text-sm font-bold bg-primary/10 text-primary border-r-4 border-primary rounded-lg" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
            <span className="material-symbols-outlined">person</span>
            Patients
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
            <span className="material-symbols-outlined">calendar_today</span>
            Schedule
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
            <span className="material-symbols-outlined">mail</span>
            Messages
            <span className="ml-auto bg-primary text-white text-[10px] px-1.5 py-0.5 rounded-full">5</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
            <span className="material-symbols-outlined">description</span>
            Reports
          </a>
        </nav>
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 text-left">
          <a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </a>
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors mt-1"
          >
            <span className="material-symbols-outlined">logout</span>
            Logout
          </button>
          <div className="mt-6 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">DS</div>
              <div className="text-left">
                <p className="text-xs font-black text-slate-900 dark:text-white leading-none">Dr. Smith</p>
                <p className="text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-widest">Cardiologist</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-y-auto">
        {/* Header */}
        <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-8 py-5 flex items-center justify-between sticky top-0 z-40">
          <div className="w-1/3 text-left">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl group-focus-within:text-primary transition-colors">search</span>
              <input className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary/20 text-sm placeholder:text-slate-500 outline-none font-medium" placeholder="Search patients, records..." type="text"/>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-11 h-11 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl relative transition-all">
              <span className="material-symbols-outlined text-2xl">notifications</span>
              <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            <button className="w-11 h-11 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all">
              <span className="material-symbols-outlined text-2xl">help</span>
            </button>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>
            <div className="w-9 h-9 rounded-xl overflow-hidden bg-slate-200 shadow-sm border border-slate-100 dark:border-slate-700">
              <img className="w-full h-full object-cover" alt="Dr. Smith Profile" src="https://i.pravatar.cc/100?img=32"/>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8 max-w-7xl mx-auto w-full space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-800 flex items-center justify-between group hover:border-primary/30 transition-all text-left">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Today's Appointments</p>
                <h3 className="text-4xl font-black text-slate-900 dark:text-white">8</h3>
              </div>
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">event_available</span>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-800 flex items-center justify-between group hover:border-amber-500/30 transition-all text-left">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Pending Reports</p>
                <h3 className="text-4xl font-black text-slate-900 dark:text-white">3</h3>
              </div>
              <div className="w-14 h-14 bg-amber-50 dark:bg-amber-900/10 rounded-xl flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">pending_actions</span>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-800 flex items-center justify-between group hover:border-emerald-500/30 transition-all text-left">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Unread Messages</p>
                <h3 className="text-4xl font-black text-slate-900 dark:text-white">5</h3>
              </div>
              <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">chat</span>
              </div>
            </div>
          </div>

          {/* Main Section Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Today's Schedule */}
            <div className="lg:col-span-2 space-y-6 text-left">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Today's Schedule</h2>
                <button className="text-xs font-black text-primary uppercase tracking-widest hover:underline">View Calendar</button>
              </div>
              
              <div className="space-y-4">
                {/* Live/Next Appointment */}
                <div className="bg-white dark:bg-slate-900 border-l-4 border-primary rounded-2xl shadow-xl shadow-slate-200/30 dark:shadow-none p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-100 dark:border-slate-800 group hover:shadow-2xl hover:shadow-primary/5 transition-all">
                  <div className="flex gap-5 items-center w-full md:w-auto">
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm group-hover:scale-105 transition-transform">
                      <img className="w-full h-full object-cover" alt="Sarah Jenkins" src="https://i.pravatar.cc/150?img=47"/>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-black text-slate-900 dark:text-white">Sarah Jenkins</h4>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-emerald-100 text-emerald-700 border border-emerald-200">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5 animate-pulse"></span>
                          Online
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 font-bold flex items-center gap-2 mt-1">
                        <span className="material-symbols-outlined text-lg text-primary">schedule</span> 
                        10:30 AM <span className="opacity-30">•</span> HD Video Consultation
                      </p>
                    </div>
                  </div>
                  <button className="w-full md:w-auto bg-primary text-white px-8 py-3.5 rounded-xl font-black text-sm flex items-center justify-center gap-2.5 hover:brightness-110 shadow-xl shadow-primary/30 transition-all active:scale-95">
                    <span className="material-symbols-outlined text-xl fill-1">video_call</span>
                    Join Session
                  </button>
                </div>

                {/* Regular Appointment */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-100 dark:border-slate-800 opacity-90 hover:opacity-100 transition-all group">
                  <div className="flex gap-5 items-center w-full md:w-auto">
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden border border-slate-100 dark:border-slate-700">
                      <img className="w-full h-full object-cover grayscale" alt="Michael Ross" src="https://i.pravatar.cc/150?img=12"/>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-slate-900 dark:text-white">Michael Ross</h4>
                      <p className="text-sm text-slate-500 font-bold flex items-center gap-2 mt-1">
                        <span className="material-symbols-outlined text-lg">location_on</span> 
                        11:15 AM <span className="opacity-30">•</span> In-Person Clinic Visit
                      </p>
                    </div>
                  </div>
                  <button className="w-full md:w-auto px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all">
                    Patient Check-In
                  </button>
                </div>

                {/* Regular Appointment */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-100 dark:border-slate-800 opacity-90 hover:opacity-100 transition-all group">
                  <div className="flex gap-5 items-center w-full md:w-auto">
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden border border-slate-100 dark:border-slate-700">
                      <img className="w-full h-full object-cover grayscale" alt="Emily Blunt" src="https://i.pravatar.cc/150?img=32"/>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-slate-900 dark:text-white">Emily Blunt</h4>
                      <p className="text-sm text-slate-500 font-bold flex items-center gap-2 mt-1">
                        <span className="material-symbols-outlined text-lg">schedule</span> 
                        01:45 PM <span className="opacity-30">•</span> Video Follow-up
                      </p>
                    </div>
                  </div>
                  <button className="w-full md:w-auto px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all">
                    Prep Charts
                  </button>
                </div>
              </div>

              {/* Recent Patients Section */}
              <div className="pt-10 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Recent Patients</h2>
                  <button className="text-xs font-black text-slate-400 uppercase tracking-widest hover:text-primary transition-colors">See Directory</button>
                </div>
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/20 dark:shadow-none">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] border-b border-slate-100 dark:border-slate-800">
                        <th className="px-8 py-5">Patient Details</th>
                        <th className="px-8 py-5">Last Activity</th>
                        <th className="px-8 py-5">Status / Diagnosis</th>
                        <th className="px-8 py-5 text-right">Records</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-100 text-primary flex items-center justify-center font-black text-xs group-hover:bg-primary group-hover:text-white transition-all">JD</div>
                            <div>
                              <p className="text-sm font-bold text-slate-900 dark:text-white">John Doe</p>
                              <p className="text-[10px] font-bold text-slate-400 uppercase">DOB: 05/12/1985</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6 text-sm font-bold text-slate-600 dark:text-slate-400">Oct 24, 2023</td>
                        <td className="px-8 py-6">
                          <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-400 text-[10px] font-black rounded-full border border-blue-100 dark:border-blue-800 uppercase tracking-widest">Hypertension</span>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <button className="text-primary text-xs font-black uppercase tracking-widest hover:underline decoration-2 underline-offset-4">View EHR</button>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center font-black text-xs group-hover:bg-primary group-hover:text-white transition-all">AM</div>
                            <div>
                              <p className="text-sm font-bold text-slate-900 dark:text-white">Anna Maria</p>
                              <p className="text-[10px] font-bold text-slate-400 uppercase">DOB: 11/08/1992</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6 text-sm font-bold text-slate-600 dark:text-slate-400">Oct 23, 2023</td>
                        <td className="px-8 py-6">
                          <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/10 text-emerald-700 dark:text-emerald-400 text-[10px] font-black rounded-full border border-emerald-100 dark:border-emerald-800 uppercase tracking-widest">Post-Op Recovery</span>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <button className="text-primary text-xs font-black uppercase tracking-widest hover:underline decoration-2 underline-offset-4">View EHR</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Sidebar: Tasks & To-Do */}
            <div className="space-y-8 text-left">
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200/30 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex items-center justify-between">
                  <h3 className="font-black text-slate-900 dark:text-white flex items-center gap-2 text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-primary fill-1">task_alt</span>
                    Clinical Tasks
                  </h3>
                  <button className="size-9 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-400 hover:text-primary hover:border-primary transition-all">
                    <span className="material-symbols-outlined text-lg">add</span>
                  </button>
                </div>
                <div className="p-6 space-y-6">
                  {[
                    { title: 'Sign off on Blood Work', patient: 'Robert King', priority: 'High', color: 'red' },
                    { title: 'Refill Prescription - John Doe', patient: 'CVS Pharmacy #4421', priority: 'Medium', color: 'amber' },
                    { title: 'Complete Discharge Summary', patient: 'Due by EOD', priority: 'Low', color: 'slate' }
                  ].map((task, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div className="mt-1">
                        <input className="rounded-md border-slate-300 dark:border-slate-700 text-primary focus:ring-primary size-4 cursor-pointer" type="checkbox" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-snug group-hover:text-primary transition-colors cursor-pointer">{task.title}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">{task.patient}</p>
                      </div>
                      <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border ${
                        task.color === 'red' ? 'bg-red-50 text-red-600 border-red-100' :
                        task.color === 'amber' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                        'bg-slate-100 text-slate-500 border-slate-200'
                      }`}>
                        {task.priority}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-slate-50/50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 text-center">
                  <button className="text-[10px] font-black text-slate-400 hover:text-primary uppercase tracking-[0.2em] transition-colors">Archive Tasks</button>
                </div>
              </div>

              {/* Availability Widget */}
              <div className="bg-primary rounded-2xl shadow-2xl shadow-primary/20 p-8 text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></span>
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] opacity-80">Practice Hours</h4>
                  </div>
                  <p className="text-3xl font-black tracking-tight mb-1">On Call</p>
                  <p className="text-sm font-bold opacity-80">Shift: 08:00 AM - 05:00 PM</p>
                  <button className="mt-8 w-full py-4 bg-white text-primary rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all">
                    Update Availability
                  </button>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
                <div className="absolute -left-12 -top-12 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-700"></div>
              </div>

              {/* Research Tip Card */}
              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex items-start gap-4 group cursor-pointer hover:border-primary/30 transition-all">
                <div className="size-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined fill-1">school</span>
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-1">Continuing Education</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">New clinical guidelines for pediatric cardiology were published today.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProviderDashboard;
