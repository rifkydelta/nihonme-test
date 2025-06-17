import React, { useState } from 'react';
import { ArrowLeft, PlayCircle, BookOpen, Monitor } from 'lucide-react';
import urls from './config/urls.json';

type ViewState = 'initial' | 'media' | 'material';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('initial');

  const handleMediaClick = () => setCurrentView('media');
  const handleMaterialClick = () => setCurrentView('material');
  const handleBackClick = () => setCurrentView('initial');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Desktop Only Alert */}
      <div className="lg:hidden fixed inset-0 bg-slate-900/95 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md text-center">
          <div className="flex justify-center mb-4">
            <Monitor size={48} className="text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Tampilan Desktop Diperlukan</h2>
          <p className="text-slate-600 mb-6">
            Aplikasi ini dioptimalkan untuk tampilan desktop. Silakan akses halaman ini menggunakan komputer desktop atau laptop untuk pengalaman terbaik.
          </p>
          <div className="text-sm text-slate-500">
            <p>Lebar layar minimum: 1024px</p>
          </div>
        </div>
      </div>

      <div className="w-full h-screen p-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-[calc(100vh-2rem)] max-w-[99vw] mx-auto">
          {/* Left Column - Website Preview */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-200/50 backdrop-blur-sm flex flex-col">
            <div className="bg-slate-800/95 px-6 py-4 border-b border-slate-700/50 flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="ml-4 text-slate-300 text-sm font-medium">
                  rifkydelta.github.io/nihonme
                </div>
              </div>
            </div>
            <div className="flex-1 min-h-0">
              <iframe
                src={urls.urlwebtest}
                className="w-full h-full border-0"
                title="Website Preview"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-camera allow-microphone"
                allow="camera; microphone"
              />
            </div>
          </div>

          {/* Right Column - Form Panel */}
          <div className="lg:col-span-1 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden border border-slate-200/50 flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-8 py-10 flex-shrink-0">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-white">
                  Uji Validitas Prototipe
                </h1>
                {currentView !== 'initial' && (
                  <button
                    onClick={handleBackClick}
                    className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-xl px-4 py-2 text-white backdrop-blur-sm"
                  >
                    <ArrowLeft size={18} />
                    <span>Kembali</span>
                  </button>
                )}
              </div>
              <p className="text-white/80 mt-2">
                Pengembangan Aplikasi Pembelajaran Bahasa Jepang Dengan Implementasi AI Object Detection
              </p>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-8 overflow-y-auto">
              {currentView === 'initial' && (
                <div className="h-full flex flex-col justify-center space-y-8">
                  <div className="text-center">
                  <p className="text-slate-600 text-lg leading-relaxed text-left">
                    Dengan hormat, saya, Arindra Rifky Saputra, memohon kesediaan Bapak/Ibu untuk berkenan menjadi validator ahli media atau materi dalam pengembangan aplikasi ini, dengan memilih salah satu menu <strong>"Validator Media"</strong> atau <strong>"Validator Materi"</strong>. Atas perhatian dan kesediaan Bapak/Ibu, saya ucapkan terima kasih.
                  </p>
                  </div>
                  
                  <div className="space-y-4">
                    <button
                      onClick={handleMediaClick}
                      className="w-full bg-gradient-to-br from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium py-5 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-3 group"
                    >
                      <PlayCircle size={24} className="transform group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-lg">Validator Media</span>
                    </button>
                    
                    <button
                      onClick={handleMaterialClick}
                      className="w-full bg-gradient-to-br from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium py-5 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-3 group"
                    >
                      <BookOpen size={24} className="transform group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-lg">Validator Materi</span>
                    </button>
                  </div>

                  <div className="text-center mt-8 pt-8 border-t border-slate-200/50">
                    <p className="text-slate-500 text-sm">
                      NihonMe
                    </p>
                  </div>
                </div>
              )}

              {currentView === 'media' && (
                <div className="h-full">
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-slate-800 flex items-center space-x-3">
                      <PlayCircle className="text-indigo-500" size={24} />
                      <span>Form Validator Media</span>
                    </h2>
                    <p className="text-slate-600 mt-2">
                      Evaluasi elemen media dan presentasi
                    </p>
                  </div>
                  <div className="bg-slate-50/50 rounded-2xl p-4 h-full backdrop-blur-sm">
                    <iframe
                      src={urls.forms.media}
                      className="w-full h-full border-0 rounded-xl"
                      title="Media Validator Form"
                      frameBorder="0"
                    />
                  </div>
                </div>
              )}

              {currentView === 'material' && (
                <div className="h-full">
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-slate-800 flex items-center space-x-3">
                      <BookOpen className="text-blue-500" size={24} />
                      <span>Form Validator Materi</span>
                    </h2>
                    <p className="text-slate-600 mt-2">
                      Nilai kualitas konten dan nilai edukatif
                    </p>
                  </div>
                  <div className="bg-slate-50/50 rounded-2xl p-4 h-full backdrop-blur-sm">
                    <iframe
                      src={urls.forms.material}
                      className="w-full h-full border-0 rounded-xl"
                      title="Material Validator Form"
                      frameBorder="0"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;