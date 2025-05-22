import React, { use } from 'react'
import { motion } from 'framer-motion'
import bot from '../assets/bot.png'
import friend from '../assets/friends.png'
import Header from '../components/Header'
import { useNavigate } from 'react-router'

const WelcomePage = () => {
  const naviagte = useNavigate();
  const floatVariant = {
    animate: {
      y: [-0, -15, -25, -10, 0],
      rotate: [0, 5, -5, 3, 0],
      scale: [1, 1.05, 1.1, 1.05, 1],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity
      }
    }
  };
  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8 relative">

      <div className="text-center z-10 max-w-5xl mx-auto">
        <div className="mb-8">
          <Header />
          <div className="flex justify-center items-center gap-4 mt-4">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            <div className="text-2xl font-bold text-indigo-400">⚡</div>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </div>
        </div>

        <p className="text-base md:text-lg font-bold text-slate-600 mb-10 tracking-wide uppercase" style={{ fontFamily: '"Trebuchet MS", system-ui, sans-serif', letterSpacing: '0.1em' }}>
          Think Fast • Play Smart • Win Big
        </p>
        <div className="mb-8 space-y-4 font-monasans">
          <h3 className="text-xl font-bold text-slate-700 text-center mb-6">
            Choose Your Battle Mode
          </h3>

          <div className="space-x-3 flex">
            <label className="cursor-pointer block">
              <input type="radio" name="gameMode" value="bot" className="sr-only peer" />
              <div className="w-64 px-6 py-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 border-2 border-slate-300/50 rounded-xl transition-all duration-200 peer-checked:border-indigo-400 peer-checked:bg-gradient-to-br peer-checked:from-indigo-50 peer-checked:via-blue-100 peer-checked:to-slate-100 hover:border-slate-400/60 shadow-sm hover:shadow-md">
                <div className="flex justify-between items-center gap-3">
                  <span className="text-slate-700 font-medium">
                    Play with Bot
                  </span>
                  <img src={bot} alt="user-group" className="w-6 h-6" />
                </div>
              </div>
            </label>

            <label className="cursor-pointer block">
              <input type="radio" name="gameMode" value="friends" className="sr-only peer" />
              <div className="w-64 px-6 py-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 border-2 border-slate-300/50 rounded-xl transition-all duration-200 peer-checked:border-indigo-400 peer-checked:bg-gradient-to-br peer-checked:from-indigo-50 peer-checked:via-blue-100 peer-checked:to-slate-100 hover:border-slate-400/60 shadow-sm hover:shadow-md">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-slate-700 font-medium">
                    Play with Friends
                  </span>
                  <img src={friend} alt="user-group" className="w-6 h-6" />
                </div>
              </div>
            </label>
          </div>
        </div>

        <div className="mb-8 ">
          <button onClick={() => naviagte('/playerdetails')} className="group cursor-pointer relative px-8 py-4 text-sm  tracking-widest text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/40 active:scale-95 overflow-hidden border-2 border-white/20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 rounded-2xl  opacity-0 group-hover:opacity-60 transition-all duration-500 animate-pulse"></div>
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

      <motion.div
        variants={floatVariant}
        animate="animate"
        style={{ top: '25%', left: '20%' }}
        className="absolute text-8xl font-black text-blue-200/30 font-anton"
      >
        X
      </motion.div>

      <motion.div
        variants={floatVariant}
        animate="animate"
        style={{ top: '33%', right: '20%' }}
        className="absolute text-8xl font-black text-indigo-200/30 font-anton"
      >
        O
      </motion.div>

      <motion.div
        variants={floatVariant}
        animate="animate"
        style={{ bottom: '25%', left: '16.6667%' }}
        className="absolute text-8xl font-black text-cyan-200/30 font-anton"
      >
        X
      </motion.div>

      <motion.div
        variants={floatVariant}
        animate="animate"
        style={{ bottom: '20%', right: '14.2857%' }}
        className="absolute text-8xl font-black text-purple-200/30 font-anton"
      >
        O
      </motion.div>

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