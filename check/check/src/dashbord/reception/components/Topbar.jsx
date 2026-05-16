const Topbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-[#081028]/80 backdrop-blur-xl border-b border-white/10 p-5 flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold text-white">Reception Dashboard</h2>

        <p className="text-zinc-400 text-sm">Hospital Management System</p>
      </div>

      <div className="w-11 h-11 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold">
        R
      </div>
    </div>
  );
};

export default Topbar;
