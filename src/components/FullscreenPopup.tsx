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
          <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
            <video
              className="w-full h-full object-cover"
              poster="/images/happy-couple-phones.png"
              controls
            >
              <source src="https://example.com/video.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                <Play className="w-8 h-8 text-gray-800 ml-1" />
              </button>
            </div>
          </div>
          <div className="mt-4 bg-green-500 text-white px-4 py-2 rounded-b-lg">
            <p className="font-medium">Plano Pérola com benefícios de internet e ligações</p>
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
                Ao escolher um plano da Vivo 30GB com ligação ilimitada, você 
                pode simplesmente comprar um chip básico em qualquer 
                farmácia, loja, banca de jornal e solicitar ativação de forma 
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
          
          <button className="w-full bg-blue-100 text-blue-600 py-4 rounded-lg font-semibold text-lg hover:bg-blue-200 transition-colors flex items-center justify-center gap-2">
            <div className="w-5 h-5 bg-blue-600 rounded-full"></div>
            Dúvidas? Clique aqui
          </button>
        </div>
      </div>
    </div>
  );
}