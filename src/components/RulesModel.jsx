import React from 'react';

const RulesModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed font-monasans inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/30" onClick={onClose}></div>

            <div className="relative bg-white/90 backdrop-blur-sm rounded-xl shadow-lg max-w-md w-full mx-4 border-2 border-slate-200/60">
                <div className="bg-gradient-to-br from-slate-50 via-blue-100 to-indigo-100 p-4 rounded-t-xl border-b border-slate-200/60">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-medium text-slate-700">Game Rules</h2>
                        <button
                            onClick={onClose}
                            className="w-6 h-6 rounded-full bg-slate-200/60 flex items-center justify-center hover:bg-slate-300/60 transition-colors"
                        >
                            <span className="text-slate-600 text-sm">×</span>
                        </button>
                    </div>
                </div>

                <div className="p-6">
                    <div className="text-center mb-4">
                        <h3 className="text-lg font-medium text-slate-700 mb-3">How to Win</h3>
                        <p className="text-slate-600 text-sm mb-4">Form a line of 3 of your emojis to win!</p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between bg-slate-50/50 p-2 rounded">
                            <span className="text-sm text-slate-600 w-16">Horizontal:</span>
                            <div className="flex space-x-1">
                                <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-sm">🐶</div>
                                <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-sm">🐶</div>
                                <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-sm">🐶</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between bg-slate-50/50 p-2 rounded">
                            <span className="text-sm text-slate-600 w-16">Vertical:</span>
                            <div className="flex flex-col space-y-1">
                                <div className="w-6 h-6 bg-rose-100 rounded flex items-center justify-center text-sm">🍕</div>
                                <div className="w-6 h-6 bg-rose-100 rounded flex items-center justify-center text-sm">🍕</div>
                                <div className="w-6 h-6 bg-rose-100 rounded flex items-center justify-center text-sm">🍕</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between bg-slate-50/50 p-2 rounded">
                            <span className="text-sm text-slate-600 w-16">Diagonal:</span>
                            <div className="grid grid-cols-3 gap-1">
                                <div className="w-5 h-5 bg-indigo-100 rounded flex items-center justify-center text-xs">⚽</div>
                                <div className="w-5 h-5 bg-slate-200/40 rounded"></div>
                                <div className="w-5 h-5 bg-slate-200/40 rounded"></div>
                                <div className="w-5 h-5 bg-slate-200/40 rounded"></div>
                                <div className="w-5 h-5 bg-indigo-100 rounded flex items-center justify-center text-xs">⚽</div>
                                <div className="w-5 h-5 bg-slate-200/40 rounded"></div>
                                <div className="w-5 h-5 bg-slate-200/40 rounded"></div>
                                <div className="w-5 h-5 bg-slate-200/40 rounded"></div>
                                <div className="w-5 h-5 bg-indigo-100 rounded flex items-center justify-center text-xs">⚽</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 text-center">
                        <button
                            onClick={onClose}
                            className="px-6 py-2 bg-gradient-to-br from-indigo-500 cursor-pointer to-blue-600 text-white rounded-lg text-sm font-medium hover:from-indigo-600 hover:to-blue-700 transition-all duration-200"
                        >
                            Got it!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RulesModal;