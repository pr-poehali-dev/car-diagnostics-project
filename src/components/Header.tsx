import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

const Header = ({ activeSection, scrollToSection }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Car" size={32} className="text-primary" />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            AutoService Pro
          </span>
        </div>
        <nav className="hidden md:flex gap-6">
          {['home', 'services', 'portfolio', 'faq', 'reviews', 'contacts'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === section ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {section === 'home' && 'Главная'}
              {section === 'services' && 'Услуги'}
              {section === 'portfolio' && 'Портфолио'}
              {section === 'faq' && 'Вопросы'}
              {section === 'reviews' && 'Отзывы'}
              {section === 'contacts' && 'Контакты'}
            </button>
          ))}
        </nav>
        <Button className="hidden md:flex" onClick={() => scrollToSection('contacts')}>
          <Icon name="Phone" size={16} className="mr-2" />
          Связаться
        </Button>
      </div>
    </header>
  );
};

export default Header;
