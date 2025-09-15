import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { X, Zap, CheckCircle, ExternalLink } from 'lucide-react';

interface FullscreenPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullscreenPopup: React.FC<FullscreenPopupProps> = ({ isOpen, onClose }) => {
  const handleCadastroClick = () => {
    // Aqui você vai colocar o link de cadastro que vai me passar
    window.open('https://formulario.conecteseagora.com.br', '_blank');
    onClose();
  };

  const handleWhatsAppClick = () => {
    // Aqui você vai colocar o novo link do WhatsApp que vai me passar
    window.open('https://wa.me/5584981321396?text=Ol%C3%A1%2C%20estou%20vindo%20do%20site%20da%20Federal%20Associados.%20Gostaria%20de%20saber%20mais%20como%20funciona%20essa%20internet%2C%20como%20funciona%20a%20contrata%C3%A7%C3%A3o.%20Gostaria%20de%20saber%20de%20todos%20os%20detalhes', '_blank');
    onClose();
  };

  const activationOptions = [
    {
      operator: "Vivo",
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      title: "Ativação Imediata",
      description: "Ao escolher um plano da Vivo 80GB com ligação acima, você pode simplesmente comprar um chip lacrado em qualquer farmácia, loja, banca de jornal e solicitar ativação de forma imediata.",
      highlight: true,
      badge: "ATIVAÇÃO INSTANTÂNEA"
    },
    {
      operator: "Tim & Claro",
      icon: <CheckCircle className="h-6 w-6 text-blue-500" />,
      title: "Ativação Tradicional",
      description: "Receba seu chip em casa e solicite a ativação após a entrega. Simples e prático.",
      highlight: false,
      badge: "Chip Físico"
    },
    {
      operator: "Chip Virtual",
      icon: <Zap className="h-6 w-6 text-green-500" />,
      title: "Ativação Instantânea",
      description: "Ao escolher a opção de chip virtual (se o seu aparelho for compatível), você realiza a ativação de forma imediata através de um QR Code exclusivo fornecido pela nossa equipe de ativação.",
      highlight: false,
      badge: "Virtual"
    }
  ];

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-white z-50" />
        <Dialog.Content className="fixed inset-0 z-50 overflow-y-auto">
          <VisuallyHidden.Root>
            <Dialog.Title>Federal Associados - Cadastro</Dialog.Title>
          </VisuallyHidden.Root>
          
          <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="relative bg-white p-4 border-b border-gray-200">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
                aria-label="Fechar"
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>

              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="h-8 w-8" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Federal Associados</h2>
                <p className="text-gray-600">Conheça como funciona nosso processo de associação</p>
              </div>
            </div>

            {/* Breadcrumb */}
            <div className="bg-gray-800 text-white p-4">
              <div className="flex items-center text-sm">
                <span className="text-gray-400">HOME</span>
                <span className="mx-2 text-gray-400">›</span>
                <span>AFILIE-SE</span>
              </div>
              <h3 className="text-2xl font-bold mt-2 mb-1">Seja bem vindo (a)</h3>
              <p className="text-gray-300 text-sm">
                Nesta sessão você pode escolher em qual plano quer se afiliar a Federal Associados.
              </p>
            </div>

            {/* Botão Mostrar Todos */}
            <div className="p-4">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg">
                MOSTRAR TODOS
              </button>
            </div>

            {/* Vídeo Section */}
            <div className="p-4">
              <div className="relative mb-6 rounded-xl overflow-hidden shadow-lg">
                <video
                  className="w-full h-auto object-contain bg-black"
                  controls
                  controlsList="nodownload"
                  playsInline
                  preload="metadata"
                  poster=""
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
                  Seu navegador não suporta a reprodução de vídeos.
                </video>
              </div>
            </div>

            {/* Opções de Ativação */}
            <div className="p-4">
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Opções de Ativação
                </h3>
                <p className="text-gray-600">
                  Escolha a melhor opção para sua operadora preferida
                </p>
              </div>
              
              <div className="space-y-4">
                {activationOptions.map((option, index) => (
                  <div 
                    key={index}
                    className={`rounded-xl p-4 border-2 transition-all duration-300 ${
                      option.highlight 
                        ? 'border-yellow-400 bg-yellow-50' 
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    {option.highlight && (
                      <div className="flex items-center justify-center mb-3">
                        <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                          {option.badge}
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center mb-3">
                      {option.icon}
                      <h4 className="text-lg font-bold ml-3 text-gray-900">
                        {option.operator}
                      </h4>
                      {!option.highlight && (
                        <span className="ml-auto bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                          {option.badge}
                        </span>
                      )}
                    </div>
                    
                    <h5 className="text-base font-semibold mb-2 text-gray-900">
                      {option.title}
                    </h5>
                    
                    <p className="text-sm text-gray-600">
                      {option.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons Section */}
            <div className="p-4 space-y-3">
              <button
                onClick={handleCadastroClick}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Realizar Cadastro Agora
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  className="text-white mr-2"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" />
                </svg>
                Dúvidas? Clique aqui
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default FullscreenPopup;