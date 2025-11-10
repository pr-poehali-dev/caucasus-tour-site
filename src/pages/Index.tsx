import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [date, setDate] = useState<Date>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const tours = [
    {
      id: 1,
      title: "Эльбрус - Покорение вершин",
      duration: "7 дней",
      price: "45 000 ₽",
      image: "https://cdn.poehali.dev/projects/5dfca2ca-ec71-4c5e-84ce-e106fc37c861/files/385bf49a-cace-4090-a2bc-9088c24f4cd4.jpg",
      description: "Восхождение на высочайшую вершину Европы",
      difficulty: "Сложный",
      participants: "До 12 человек"
    },
    {
      id: 2,
      title: "Горные аулы Дагестана",
      duration: "5 дней",
      price: "32 000 ₽",
      image: "https://cdn.poehali.dev/projects/5dfca2ca-ec71-4c5e-84ce-e106fc37c861/files/c63fc78a-3ca2-4c91-81ca-ce4ff465b707.jpg",
      description: "Знакомство с культурой и традициями горцев",
      difficulty: "Средний",
      participants: "До 15 человек"
    },
    {
      id: 3,
      title: "Грузия: Казбек и Сванетия",
      duration: "10 дней",
      price: "58 000 ₽",
      image: "https://cdn.poehali.dev/projects/5dfca2ca-ec71-4c5e-84ce-e106fc37c861/files/385bf49a-cace-4090-a2bc-9088c24f4cd4.jpg",
      description: "Треккинг по древним горным тропам",
      difficulty: "Сложный",
      participants: "До 10 человек"
    }
  ];

  const reviews = [
    {
      name: "Анна Волкова",
      text: "Незабываемые впечатления! Гиды профессиональны, маршруты продуманы до мелочей.",
      rating: 5,
      tour: "Эльбрус"
    },
    {
      name: "Дмитрий Соколов",
      text: "Эльбрус покорён! Спасибо команде за организацию и поддержку на всём пути.",
      rating: 5,
      tour: "Эльбрус"
    },
    {
      name: "Мария Петрова",
      text: "Горные аулы - это что-то невероятное. Гостеприимство и красота природы поразили.",
      rating: 5,
      tour: "Дагестан"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Icon name="Mountain" size={32} className="text-accent" />
              <h1 className="text-2xl md:text-3xl font-bold text-primary">Кавказ Тур</h1>
            </div>
            
            <button 
              className="md:hidden text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={28} />
            </button>

            <div className="hidden md:flex gap-8 items-center">
              {["main", "about", "tours", "reviews", "contacts"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-foreground hover:text-accent transition-colors font-medium relative group"
                >
                  {section === "main" && "Главная"}
                  {section === "about" && "О нас"}
                  {section === "tours" && "Туры"}
                  {section === "reviews" && "Отзывы"}
                  {section === "contacts" && "Контакты"}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                </button>
              ))}
              <Button 
                size="sm" 
                className="bg-accent hover:bg-accent/90"
                onClick={() => scrollToSection("tours")}
              >
                Забронировать
              </Button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-3 pb-2 animate-fade-in">
              {["main", "about", "tours", "reviews", "contacts"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-foreground hover:text-accent transition-colors font-medium text-left py-2"
                >
                  {section === "main" && "Главная"}
                  {section === "about" && "О нас"}
                  {section === "tours" && "Туры"}
                  {section === "reviews" && "Отзывы"}
                  {section === "contacts" && "Контакты"}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section 
        id="main" 
        className="relative min-h-screen flex items-center justify-center pt-20"
      >
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/5dfca2ca-ec71-4c5e-84ce-e106fc37c861/files/c63fc78a-3ca2-4c91-81ca-ce4ff465b707.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center z-10 py-20">
          <Badge className="mb-6 text-sm px-4 py-2 bg-accent/20 text-accent border-accent/30">
            🏔️ Путешествия с 2009 года
          </Badge>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in">
            Откройте Кавказ
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Величие гор, древние традиции и незабываемые впечатления в самом сердце Кавказа
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 font-semibold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              onClick={() => scrollToSection("tours")}
            >
              Выбрать тур
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-6 text-lg rounded-full"
              onClick={() => scrollToSection("about")}
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">О компании</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Почему выбирают нас</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Мы создаём незабываемые путешествия, сочетая профессионализм и любовь к горам
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                icon: "Mountain", 
                title: "15 лет опыта", 
                desc: "Организуем безопасные туры с 2009 года",
                color: "text-secondary"
              },
              { 
                icon: "Users", 
                title: "5000+ туристов", 
                desc: "Довольных путешественников со всей России",
                color: "text-accent"
              },
              { 
                icon: "Award", 
                title: "100% безопасность", 
                desc: "Сертифицированные маршруты и гиды",
                color: "text-primary"
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="group text-center border-2 hover:border-accent transition-all duration-300 hover:shadow-2xl bg-white rounded-2xl"
              >
                <CardContent className="pt-8 pb-8">
                  <div className="bg-gradient-to-br from-accent/10 to-secondary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={item.icon as any} size={36} className={item.color} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tours" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Наши туры</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Популярные направления</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Выберите приключение по душе и отправляйтесь покорять горные вершины
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
            {tours.map((tour) => (
              <Card 
                key={tour.id} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent bg-white rounded-2xl"
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-primary backdrop-blur-sm">
                      {tour.difficulty}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{tour.description}</p>
                  
                  <div className="flex flex-col gap-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} className="text-secondary" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Users" size={16} className="text-secondary" />
                      <span>{tour.participants}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="text-3xl font-bold text-primary">{tour.price}</div>
                    <Button 
                      size="sm" 
                      className="bg-accent hover:bg-accent/90 rounded-full"
                      onClick={() => scrollToSection("tours")}
                    >
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-3xl mx-auto border-2 shadow-2xl bg-white rounded-2xl">
            <CardContent className="p-8 md:p-10">
              <div className="text-center mb-8">
                <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Бронирование</Badge>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">Забронировать тур</h3>
                <p className="text-muted-foreground">Заполните форму и мы свяжемся с вами</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium mb-2 block">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" required className="rounded-xl" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium mb-2 block">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required className="rounded-xl" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium mb-2 block">Email</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" required className="rounded-xl" />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Выберите тур</Label>
                    <Select required>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Выберите тур" />
                      </SelectTrigger>
                      <SelectContent>
                        {tours.map((tour) => (
                          <SelectItem key={tour.id} value={tour.id.toString()}>
                            {tour.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium mb-2 block">Дата начала</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal rounded-xl"
                        >
                          <Icon name="Calendar" className="mr-2" size={16} />
                          {date ? format(date, "PPP", { locale: ru }) : "Выберите дату"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 rounded-xl">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          locale={ru}
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium mb-2 block">Комментарий</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Дополнительные пожелания или вопросы" 
                    rows={3}
                    className="rounded-xl"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 font-semibold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                >
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={18} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Что говорят наши клиенты</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Более 5000 довольных путешественников уже побывали с нами на Кавказе
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-accent transition-all duration-300 hover:shadow-xl bg-white rounded-2xl"
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed italic">"{review.text}"</p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="font-bold text-primary">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.tour}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white font-bold">
                      {review.name.charAt(0)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Контакты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Готовы ответить на любые вопросы о турах и помочь с выбором маршрута
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="bg-accent w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Телефон</h3>
                <p className="text-white/80 text-lg">+7 (928) 123-45-67</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Email</h3>
                <p className="text-white/80 text-lg">info@kavkaz-tour.ru</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="bg-accent w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Адрес</h3>
                <p className="text-white/80 text-lg">г. Владикавказ, ул. Горная, 15</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary/95 text-white/60 py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2024 Кавказ Тур. Все права защищены.</p>
            <div className="flex gap-4">
              {["Instagram", "Facebook", "Youtube"].map((social) => (
                <button 
                  key={social}
                  className="hover:text-white transition-colors"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
