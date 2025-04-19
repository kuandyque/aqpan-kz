import React from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="bg-white w-64 h-full shadow-md">
        <button onClick={onClose} className="p-4 text-gray-700">
          Close
        </button>
          <Link href="/" className="hover:text-primary">Главная</Link>
          <a href="/services" className="hover:text-primary">Услуги</a>
          <a href="/about" className="hover:text-primary">О нас</a>
          <a href="/projects" className="hover:text-primary">Проекты</a>
          <a href="/blog" className="hover:text-primary">Блог</a>
          <a href="/contacts" className="hover:text-primary">Контакты</a>
      </div>
    </div>
  );
};

export default MobileMenu;