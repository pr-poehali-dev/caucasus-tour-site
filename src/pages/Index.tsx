import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
      description: "Восхождение на высочайшую вершину Европы"
    },
    {
      id: 2,
      title: "Горные аулы Дагестана",
      duration: "5 дней",
      price: "32 000 ₽",
      image: "https://cdn.poehali.dev/projects/5dfca2ca-ec71-4c5e-84ce-e106fc37c861/files/c63fc78a-3ca2-4c91-81ca-ce4ff465b707.jpg",
      description: "Знакомство с культурой и традициями горцев"
    },
    {
      id: 3,
      title: "Грузия: Казбек и Сванетия",
      duration: "10 дней",
      price: "58 000 ₽",
      image: "https://cdn.poehali.dev/projects/5dfca2ca-ec71-4c5e-84ce-e106fc37c861/files/385bf49a-cace-4090-a2bc-9088c24f4cd4.jpg",
      description: "Треккинг по древним горным тропам"
    }
  ];

  const reviews = [
    {
      name: "Анна Волкова",
      text: "Незабываемые впечатления! Гиды профессиональны, маршруты продуманы до мелочей.",
      rating: 5
    },
    {
      name: "Дмитрий Соколов",
      text: "Эльбрус покорён! Спасибо команде за организацию и поддержку на всём пути.",
      rating: 5
    },
    {
      name: "Мария Петрова",
      text: "Горные аулы - это что-то невероятное. Гостеприимство и красота природы поразили.",
      rating: 5
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
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-accent/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-accent">Кавказ Тур</h1>
            
            <button 
              className="md:hidden text-accent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={28} />
            </button>

            <div className="hidden md:flex gap-6">
              {["main", "about", "tours", "reviews", "contacts"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-accent hover:text-accent/80 transition-colors font-medium"
                >
                  {section === "main" && "Главная"}
                  {section === "about" && "О нас"}
                  {section === "tours" && "Туры"}
                  {section === "reviews" && "Отзывы"}
                  {section === "contacts" && "Контакты"}
                </button>
              ))}
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-3 pb-2 animate-fade-in">
              {["main", "about", "tours", "reviews", "contacts"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-accent hover:text-accent/80 transition-colors font-medium text-left"
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
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 0, 0, 0.5), rgba(139, 0, 0, 0.7)), url('https://cdn.poehali.dev/projects/5dfca2ca-ec71-4c5e-84ce-e106fc37c861/files/c63fc78a-3ca2-4c91-81ca-ce4ff465b707.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary"></div>
        <div className="container mx-auto px-4 text-center z-10 animate-fade-in">
          <div className="mb-6">
            <img 
              src="https://cdn.poehali.dev/projects/5dfca2ca-ec71-4c5e-84ce-e106fc37c861/files/338a66a2-6e55-4ae5-ab60-c2ed753ee328.jpg" 
              alt="ornament" 
              className="w-32 h-auto mx-auto opacity-80"
            />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-accent mb-6">
            Путешествия на Кавказ
          </h2>
          <p className="text-xl md:text-2xl text-accent/90 mb-8 max-w-2xl mx-auto">
            Откройте для себя величие гор, древние традиции и гостеприимство Кавказа
          </p>
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-6 text-lg"
            onClick={() => scrollToSection("tours")}
          >
            Выбрать тур
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">О нас</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: "Mountain", title: "15 лет опыта", desc: "Проводим туры с 2009 года" },
              { icon: "Users", title: "5000+ туристов", desc: "Довольных путешественников" },
              { icon: "Award", title: "Безопасность", desc: "Все маршруты сертифицированы" }
            ].map((item, index) => (
              <Card key={index} className="text-center border-accent/20 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tours" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Наши туры</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {tours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">{tour.title}</h3>
                  <p className="text-muted-foreground mb-4">{tour.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-secondary">
                      <Icon name="Clock" size={18} />
                      <span className="font-medium">{tour.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-primary">{tour.price}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-2xl mx-auto border-secondary/20 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-primary mb-6 text-center">Забронировать тур</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" required />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Выберите тур</Label>
                    <Select required>
                      <SelectTrigger>
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
                    <Label>Дата начала</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <Icon name="Calendar" className="mr-2" size={16} />
                          {date ? format(date, "PPP", { locale: ru }) : "Выберите дату"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
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
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Дополнительные пожелания или вопросы" 
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-6">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Отзывы</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="border-accent/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-primary">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-primary text-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={28} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Телефон</h3>
              <p className="text-accent/80">+7 (928) 123-45-67</p>
            </div>

            <div>
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={28} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-accent/80">info@kavkaz-tour.ru</p>
            </div>

            <div>
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={28} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Адрес</h3>
              <p className="text-accent/80">г. Владикавказ, ул. Горная, 15</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary/95 text-accent/60 py-8 border-t border-accent/20">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Кавказ Тур. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
