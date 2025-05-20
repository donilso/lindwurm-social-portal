
import React from 'react';
import { Instagram, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialButtonProps {
  type: 'instagram' | 'whatsapp';
  link: string;
  className?: string;
}

const SocialButton = ({ type, link, className }: SocialButtonProps) => {
  const getIcon = () => {
    switch (type) {
      case 'instagram':
        return <Instagram className="mr-2" />;
      case 'whatsapp':
        return <MessageSquare className="mr-2" />;
      default:
        return null;
    }
  };

  const getLabel = () => {
    switch (type) {
      case 'instagram':
        return 'Follow on Instagram';
      case 'whatsapp':
        return 'Join WhatsApp Group';
      default:
        return '';
    }
  };

  const getButtonClass = () => {
    switch (type) {
      case 'instagram':
        return 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600';
      case 'whatsapp':
        return 'bg-[#25D366] hover:bg-[#1ea952]';
      default:
        return 'bg-gray-800 hover:bg-gray-700';
    }
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 shadow-lg',
        getButtonClass(),
        className
      )}
    >
      {getIcon()}
      <span>{getLabel()}</span>
    </a>
  );
};

export default SocialButton;
