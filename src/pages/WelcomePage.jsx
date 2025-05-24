import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import bot from '../assets/bot.png'
import friend from '../assets/friends.png'
import Header from '../components/Header'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'
import { PlayerContext } from '../contexts/PlayerContexts'
import Footer from '../components/Footer'

const WelcomePage = () => {
  const naviagte = useNavigate();
  const { BattleMode, setBattleMode } = useContext(PlayerContext);
  console.log('Battle Mode:', BattleMode);

  const handleBattleModeChange = (mode) => {
    setBattleMode(mode);
    localStorage.setItem('BattleMode', mode);
  };

  const handlenbutton = () => {
    if (BattleMode === '') {
      toast.error('Please select a battle mode');
      return;
    }
    naviagte('/playerdetails');
  };

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
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 md:p-8 relative">

      <div className="text-center z-10 w-full max-w-5xl mx-auto px-4">
        <div className="mb-4 md:mb-8">
          <Header />
          <div className="flex justify-center items-center gap-2 md:gap-4 mt-2 md:mt-4">
            <div className="w-8 md:w-12 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            <div className="text-xl md:text-2xl font-bold text-indigo-400">⚡</div>
            <div className="w-8 md:w-12 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </div>
        </div>

        <p className="text-sm md:text-lg font-bold text-slate-600 mb-6 md:mb-10 tracking-wide uppercase" style={{ fontFamily: '"Trebuchet MS", system-ui, sans-serif', letterSpacing: '0.1em' }}>
          Think Fast • Play Smart • Win Big
        </p>
        <div className="mb-6 md:mb-8 space-y-4 font-monasans">
          <h3 className="text-lg md:text-xl font-bold text-slate-700 text-center mb-4 md:mb-6">
            Choose Your Battle Mode
          </h3>

          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 items-center justify-center">
            <label className="cursor-pointer block w-full md:w-auto">
              <input type="radio" name="gameMode" onClick={() => handleBattleModeChange('bot')} value="bot" className="sr-only peer" />
              <div className="w-full md:w-64 px-4 py-3 md:px-6 md:py-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 border-2 border-slate-300/50 rounded-xl transition-all duration-200 peer-checked:border-indigo-400 peer-checked:bg-gradient-to-br peer-checked:from-indigo-50 peer-checked:via-blue-100 peer-checked:to-slate-100 hover:border-slate-400/60 shadow-sm hover:shadow-md">
                <div className="flex justify-between items-center gap-2 md:gap-3">
                  <span className="text-sm md:text-base text-slate-700 font-medium">
                    Play with Bot
                  </span>
                  <img src={bot} alt="user-group" className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
            </label>

            <label className="cursor-pointer block w-full md:w-auto">
              <input type="radio" name="gameMode" onClick={() => handleBattleModeChange('friends')} value="friends" className="sr-only peer" />
              <div className="w-full md:w-64 px-4 py-3 md:px-6 md:py-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 border-2 border-slate-300/50 rounded-xl transition-all duration-200 peer-checked:border-indigo-400 peer-checked:bg-gradient-to-br peer-checked:from-indigo-50 peer-checked:via-blue-100 peer-checked:to-slate-100 hover:border-slate-400/60 shadow-sm hover:shadow-md">
                <div className="flex items-center justify-between gap-2 md:gap-3">
                  <span className="text-sm md:text-base text-slate-700 font-medium">
                    Play with Friends
                  </span>
                  <img src={friend} alt="user-group" className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
            </label>
          </div>
        </div>

        <div className="mb-6 md:mb-8">
          <button onClick={handlenbutton} className="group cursor-pointer relative w-full md:w-auto px-6 py-3 md:px-8 md:py-4 text-xs md:text-sm tracking-widest text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/40 active:scale-95 overflow-hidden border-2 border-white/20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl md:rounded-2xl"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-60 transition-all duration-500 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 rounded-xl md:rounded-2xl"></div>
            <span className="relative z-10 flex items-center justify-center gap-1 md:gap-2" style={{ fontFamily: '"Arial Black", system-ui, sans-serif' }}>
              <svg className="w-3 h-3 md:w-4 md:h-4 transform group-hover:rotate-90 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              START BATTLE
              <svg className="w-3 h-3 md:w-4 md:h-4 transform group-hover:-rotate-90 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
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
        style={{ top: '20%', left: '10%' }}
        className="absolute text-4xl md:text-8xl font-black text-blue-200/30 font-anton"
      >
        X
      </motion.div>

      <motion.div
        variants={floatVariant}
        animate="animate"
        style={{ top: '30%', right: '10%' }}
        className="absolute text-4xl md:text-8xl font-black text-indigo-200/30 font-anton"
      >
        O
      </motion.div>

      <motion.div
        variants={floatVariant}
        animate="animate"
        style={{ bottom: '20%', left: '10%' }}
        className="absolute text-4xl md:text-8xl font-black text-cyan-200/30 font-anton"
      >
        X
      </motion.div>

      <motion.div
        variants={floatVariant}
        animate="animate"
        style={{ bottom: '15%', right: '10%' }}
        className="absolute text-4xl md:text-8xl font-black text-purple-200/30 font-anton"
      >
        O
      </motion.div>
      <div className="absolute top-6 md:top-10 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-1 md:space-x-2">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 md:w-3 md:h-3 bg-indigo-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default WelcomePage