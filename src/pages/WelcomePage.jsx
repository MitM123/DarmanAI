
const WelcomePage = () => {

  return (
    <div className="h-screen w-screen overflow-hidden  bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8 relative">

      <div className="text-center  z-10 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500 mb-2 tracking-wider leading-none drop-shadow-lg" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            TIC TAC TOE
          </h1>
          <div className="flex justify-center items-center gap-4 mt-4">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            <div className="text-2xl font-bold text-indigo-400">⚡</div>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </div>
        </div>

        <p className="text-base md:text-lg font-bold text-slate-600 mb-10 tracking-wide uppercase" style={{ fontFamily: '"Trebuchet MS", system-ui, sans-serif', letterSpacing: '0.1em' }}>
          Think Fast • Play Smart • Win Big
        </p>

        <div className="mb-8">
          <button className="group relative px-8 py-4 text-sm font-black uppercase tracking-widest text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/40 active:scale-95 overflow-hidden border-2 border-white/20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 rounded-2xl blur-sm opacity-0 group-hover:opacity-60 transition-all duration-500 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 rounded-2xl"></div>
            <span className="relative z-10 flex items-center justify-center gap-2" style={{ fontFamily: '"Arial Black", system-ui, sans-serif' }}>
              <svg className="w-4 h-4 transform group-hover:rotate-90 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              START BATTLE
              <svg className="w-4 h-4 transform group-hover:-rotate-90 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
            <div className="absolute inset-0 skew-x-12 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-1200 delay-200"></div>
          </button>
        </div>
      </div>

      <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>

    </div>
  )
}

export default WelcomePage