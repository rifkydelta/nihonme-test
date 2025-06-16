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

      <div className="w-full h-screen p-1">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 h-full max-w-[99vw] mx-auto">
          {/* Left Column - Website Preview */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="bg-slate-800 px-6 py-4 border-b">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="ml-4 text-slate-300 text-sm font-medium">
                  rifkydelta.github.io/nihonme
                </div>
              </div>
            </div>
            <div className="h-full">
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
          <div className="lg:col-span-1 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-white">
                    Uji Validitas Prototipe
                  </h1>
                  <p className="text-blue-100 mt-2">
                    Pilih jenis validasi untuk memulai
                  </p>
                </div>
                {currentView !== 'initial' && (
                  <button
                    onClick={handleBackClick}
                    className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 transition-colors duration-200 rounded-lg px-4 py-2 text-white"
                  >
                    <ArrowLeft size={18} />
                    <span>Kembali</span>
                  </button>
                )}
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6">
              {currentView === 'initial' && (
                <div className="h-full flex flex-col justify-center space-y-6">
                  <div className="text-center mb-8">
                    <p className="text-slate-600 text-lg">
                      Pilih jenis validasi yang ingin Anda lakukan
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <button
                      onClick={handleMediaClick}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-3"
                    >
                      <PlayCircle size={24} />
                      <span className="text-lg">Validator Media</span>
                    </button>
                    
                    <button
                      onClick={handleMaterialClick}
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-3"
                    >
                      <BookOpen size={24} />
                      <span className="text-lg">Validator Materi</span>
                    </button>
                  </div>

                  <div className="text-center mt-8 pt-8 border-t border-slate-200">
                    <p className="text-slate-500 text-sm">
                      Kedua validator akan membantu menilai berbagai aspek prototipe
                    </p>
                  </div>
                </div>
              )}

              {currentView === 'media' && (
                <div className="h-full">
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold text-slate-800 flex items-center space-x-2">
                      <PlayCircle className="text-purple-500" size={24} />
                      <span>Form Validator Media</span>
                    </h2>
                    <p className="text-slate-600 mt-1">
                      Evaluasi elemen media dan presentasi
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 h-full">
                    <iframe
                      src={urls.forms.media}
                      className="w-full h-full border-0 rounded-lg"
                      title="Media Validator Form"
                      frameBorder="0"
                    />
                  </div>
                </div>
              )}

              {currentView === 'material' && (
                <div className="h-full">
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold text-slate-800 flex items-center space-x-2">
                      <BookOpen className="text-blue-500" size={24} />
                      <span>Form Validator Materi</span>
                    </h2>
                    <p className="text-slate-600 mt-1">
                      Nilai kualitas konten dan nilai edukatif
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 h-full">
                    <iframe
                      src={urls.forms.material}
                      className="w-full h-full border-0 rounded-lg"
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