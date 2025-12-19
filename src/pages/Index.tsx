import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const services = [
    {
      icon: 'Search',
      title: 'Диагностика автомобилей',
      description: 'Комплексная проверка всех систем автомобиля с использованием профессионального оборудования',
      features: ['Компьютерная диагностика', 'Проверка двигателя', 'Диагностика подвески', 'Электронные системы']
    },
    {
      icon: 'Radio',
      title: 'Программирование ПДУ',
      description: 'Профессиональное программирование пультов дистанционного управления для любых марок авто',
      features: ['Все марки авто', 'Быстрое программирование', 'Гарантия качества', 'Доступные цены']
    },
    {
      icon: 'Key',
      title: 'Дубликат ключей',
      description: 'Изготовление дубликатов автомобильных ключей с чипом и без',
      features: ['Все типы ключей', 'Экспресс-изготовление', 'Программирование чипа', 'Работа на выезде']
    },
    {
      icon: 'Zap',
      title: 'Чип для автозапуска',
      description: 'Установка и программирование чипов для систем автозапуска',
      features: ['Обход иммобилайзера', 'Любые системы', 'Профессиональная установка', 'Тестирование']
    }
  ];

  const portfolio = [
    { brand: 'Mercedes-Benz', model: 'E-Class', service: 'Программирование ключа', year: 2023 },
    { brand: 'BMW', model: 'X5', service: 'Диагностика и чип-тюнинг', year: 2023 },
    { brand: 'Audi', model: 'A6', service: 'Дубликат ключа с чипом', year: 2024 },
    { brand: 'Toyota', model: 'Camry', service: 'Установка автозапуска', year: 2024 },
    { brand: 'Volkswagen', model: 'Tiguan', service: 'Полная диагностика', year: 2024 },
    { brand: 'Lexus', model: 'RX350', service: 'Программирование ПДУ', year: 2024 }
  ];

  const faqs = [
    {
      question: 'Сколько времени занимает диагностика?',
      answer: 'Комплексная диагностика обычно занимает от 30 минут до 2 часов в зависимости от марки автомобиля и объема проверки.'
    },
    {
      question: 'Можно ли сделать дубликат ключа без оригинала?',
      answer: 'Да, мы можем изготовить ключ по коду автомобиля или по замку зажигания. Процедура займет больше времени, но это возможно.'
    },
    {
      question: 'Какие гарантии вы предоставляете?',
      answer: 'На все виды работ предоставляется гарантия от 6 месяцев до 1 года. На изготовленные ключи - гарантия 1 год.'
    },
    {
      question: 'Работаете ли вы с иномарками?',
      answer: 'Да, мы работаем со всеми марками автомобилей: европейскими, азиатскими, американскими. Имеем опыт работы с редкими моделями.'
    },
    {
      question: 'Возможен ли выезд на место?',
      answer: 'Да, наши специалисты могут выехать к вам для большинства видов работ. Стоимость выезда зависит от расстояния.'
    }
  ];

  const reviews = [
    {
      name: 'Алексей М.',
      rating: 5,
      service: 'Программирование ключа BMW',
      text: 'Отличный сервис! Быстро запрограммировали ключ для моего BMW X5. Профессионалы своего дела, рекомендую!',
      date: '15.12.2024'
    },
    {
      name: 'Мария К.',
      rating: 5,
      service: 'Диагностика Mercedes',
      text: 'Очень довольна! Провели полную диагностику, все подробно объяснили. Цены адекватные, работают быстро.',
      date: '10.12.2024'
    },
    {
      name: 'Дмитрий П.',
      rating: 5,
      service: 'Установка автозапуска',
      text: 'Установили автозапуск на Camry. Всё работает отлично, зимой очень удобно. Спасибо большое!',
      date: '05.12.2024'
    },
    {
      name: 'Ольга С.',
      rating: 4,
      service: 'Дубликат ключа Audi',
      text: 'Сделали дубликат ключа для Audi A4. Качественно, но немного дольше обещанного срока.',
      date: '28.11.2024'
    },
    {
      name: 'Игорь В.',
      rating: 5,
      service: 'Диагностика и ремонт',
      text: 'Нашли проблему, которую не могли найти в других сервисах. Профессиональное оборудование и опытные мастера!',
      date: '20.11.2024'
    },
    {
      name: 'Елена Т.',
      rating: 5,
      service: 'Программирование ПДУ',
      text: 'Быстро и качественно запрограммировали пульт. Приятные цены и отличное обслуживание!',
      date: '15.11.2024'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
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

      <section id="home" className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <Badge className="mb-6 text-sm" variant="secondary">
              <Icon name="Award" size={14} className="mr-2" />
              Профессиональный автосервис с 2010 года
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-slide-up">
              Диагностика и программирование автомобилей
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Компьютерная диагностика • Программирование ПДУ • Дубликаты ключей • Чипы для автозапуска
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="group" onClick={() => scrollToSection('contacts')}>
                Записаться на диагностику
                <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
                <Icon name="Info" size={18} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Icon name="Wrench" size={14} className="mr-2" />
              Наши услуги
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что мы предлагаем</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по диагностике и программированию автомобильной электроники
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white group-hover:scale-110 transition-transform">
                      <Icon name={service.icon} size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Icon name="Briefcase" size={14} className="mr-2" />
              Наши работы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Примеры наших работ за последний год
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon name="Car" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">{item.brand}</h3>
                      <p className="text-sm text-muted-foreground">{item.model}</p>
                    </div>
                  </div>
                  <p className="text-sm mb-2">{item.service}</p>
                  <Badge variant="secondary" className="text-xs">
                    {item.year}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Icon name="HelpCircle" size={14} className="mr-2" />
              FAQ
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-muted-foreground">
              Ответы на популярные вопросы наших клиентов
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Icon name="Star" size={14} className="mr-2" />
              Отзывы клиентов
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят наши клиенты</h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon
                    key={star}
                    name="Star"
                    size={24}
                    className={star <= Math.round(averageRating) ? 'fill-accent text-accent' : 'text-muted'}
                  />
                ))}
              </div>
              <span className="text-2xl font-bold">{averageRating.toFixed(1)}</span>
              <span className="text-muted-foreground">из 5 ({reviews.length} отзывов)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold">{review.name}</h3>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon
                          key={star}
                          name="Star"
                          size={14}
                          className={star <= review.rating ? 'fill-accent text-accent' : 'text-muted'}
                        />
                      ))}
                    </div>
                  </div>
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {review.service}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Оставьте свой отзыв</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input placeholder="Введите ваше имя" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Услуга</label>
                  <Input placeholder="Какую услугу вы получили?" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Оценка</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setRating(star)}
                        className="transition-transform hover:scale-110"
                      >
                        <Icon
                          name="Star"
                          size={32}
                          className={
                            star <= (hoverRating || rating)
                              ? 'fill-accent text-accent'
                              : 'text-muted hover:text-accent/50'
                          }
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваш отзыв</label>
                  <Textarea placeholder="Поделитесь своим опытом..." rows={4} />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить отзыв
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4" variant="outline">
                <Icon name="MapPin" size={14} className="mr-2" />
                Контакты
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-muted-foreground">
                Мы работаем ежедневно с 9:00 до 21:00
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary text-white">
                      <Icon name="Phone" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Телефон</h3>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                      <p className="text-muted-foreground">+7 (999) 765-43-21</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-accent text-white">
                      <Icon name="Mail" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Email</h3>
                      <p className="text-muted-foreground">info@autoservice.ru</p>
                      <p className="text-muted-foreground">support@autoservice.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary text-white">
                      <Icon name="MapPin" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Автомобильная, 123</p>
                      <p className="text-muted-foreground">БЦ "Автоцентр", офис 45</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-accent text-white">
                      <Icon name="Clock" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Режим работы</h3>
                      <p className="text-muted-foreground">Пн-Вс: 9:00 - 21:00</p>
                      <p className="text-muted-foreground">Без выходных</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Записаться на услугу</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Телефон" />
                  <Input placeholder="Марка автомобиля" />
                  <Input placeholder="Модель" />
                  <div className="md:col-span-2">
                    <Textarea placeholder="Опишите проблему или выберите услугу..." rows={3} />
                  </div>
                  <div className="md:col-span-2">
                    <Button className="w-full" size="lg">
                      <Icon name="Calendar" size={18} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Car" size={28} className="text-primary" />
              <span className="text-xl font-bold">AutoService Pro</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 AutoService Pro. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Phone" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="MapPin" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
