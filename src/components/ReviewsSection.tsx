import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface Review {
  name: string;
  rating: number;
  service: string;
  text: string;
  date: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
  averageRating: number;
}

const ReviewsSection = ({ reviews, averageRating }: ReviewsSectionProps) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
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
  );
};

export default ReviewsSection;
