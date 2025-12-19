import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ReviewsSection from '@/components/ReviewsSection';
import ContactsSection from '@/components/ContactsSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
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
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      <HeroSection scrollToSection={scrollToSection} />

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

      <ReviewsSection reviews={reviews} averageRating={averageRating} />

      <ContactsSection />

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