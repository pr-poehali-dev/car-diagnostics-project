import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const ContactsSection = () => {
  return (
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
  );
};

export default ContactsSection;
