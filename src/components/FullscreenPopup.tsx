import React from 'react';
import { X, Play } from 'lucide-react';

interface FullscreenPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FullscreenPopup({ isOpen, onClose }: FullscreenPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded transform rotate-12"></div>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Federal Associados</h1>
            <p className="text-sm text-gray-600">Conheça como funciona nosso processo de associação</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto p-6">
        {/* Video Section */}
        <div className="mb-8">
          <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-[9/16] max-w-sm mx-auto">
            <video
              className="w-full h-full object-contain"
              controls
             controlsList="nodownload"
             onContextMenu={(e) => e.preventDefault()}
              src="https://fznhzqgulsyrjfrzcdqi.supabase.co/storage/v1/object/public/cadastro/cadastro.mp4"
            >
             <style>
               {`
                 video::-webkit-media-controls-overflow-menu-button,
                 video::-webkit-media-controls-overflow-menu-list,
                 video::-webkit-media-controls-download-button {
                   display: none !important;
                 }
                 video::-webkit-media-controls-enclosure {
                   overflow: hidden !important;
                 }
                 video::-webkit-media-controls-panel {
                   overflow: clip !important;
                 }
               `}
             </style>
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>

        {/* Activation Options */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-center mb-6 text-gray-900">Opções de Ativação</h2>
          <p className="text-center text-gray-600 mb-6">Escolha a melhor opção para sua operadora preferida</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {/* Vivo Option */}
            <div className="border-2 border-yellow-400 rounded-lg p-4 relative bg-yellow-50">
              <div className="absolute -top-2 left-4 bg-yellow-400 text-black px-3 py-1 rounded text-xs font-bold">
                ATIVAÇÃO INSTANTÂNEA
              </div>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Vivo</h3>
                  <p className="text-sm font-medium text-gray-700">Ativação Imediata</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-3">
                Ao escolher um plano da Vivo 80GB com ligação acima, você 
                pode simplesmente comprar um chip lacrado em qualquer 
                farmácia, loja, banca de jornal em sua cidade e solicitar ativação de forma 
                imediata.
              </p>
            </div>

            {/* Tim & Claro Option */}
            <div className="border rounded-lg p-4 bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TC</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Tim & Claro</h3>
                  <p className="text-sm font-medium text-gray-700">Ativação Tradicional</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-3">
                Receba seu chip em casa e solicite a ativação após a entrega. 
                Simples e prático.
              </p>
            </div>
          </div>

          {/* Virtual Chip Option */}
          <div className="border rounded-lg p-4 bg-blue-50 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Chip Virtual (eSIM)</h3>
                <p className="text-sm font-medium text-gray-700">Ativação Instantânea</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              Para aparelhos que suportam eSIM. Ativação imediata sem necessidade de chip físico.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
            <div className="w-5 h-5 border-2 border-white rounded"></div>
            Realizar Cadastro Agora
          </button>
          
          <button 
            onClick={() => window.open('https://wa.me/5584981321396?text=Ol%C3%A1%2C%20estou%20vindo%20do%20site%20da%20Federal%20Associados.%20Gostaria%20de%20saber%20mais%20como%20funciona%20essa%20internet%2C%20como%20funciona%20a%20contrata%C3%A7%C3%A3o.%20Gostaria%20de%20saber%20de%20todos%20os%20detalhes', '_blank')}
            className="w-full bg-green-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className="text-white"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" />
            </svg>
            Dúvidas? Clique aqui
          </button>
        </div>
      </div>
    </div>
  );
}