import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Slide {
  id: number;
  title: string;
  period: string;
  content: string;
  icon: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Древний мир',
    period: '3000 до н.э. - 476 н.э.',
    content: 'В Древней Греции физическая культура была частью воспитания гармоничной личности. Олимпийские игры, начавшиеся в 776 году до н.э., стали символом спортивного духа. Гимнастика, борьба, бег и метание диска были основными дисциплинами.',
    icon: 'Trophy'
  },
  {
    id: 2,
    title: 'Средневековье',
    period: '476 - 1453',
    content: 'В эпоху Средневековья физическое воспитание приобрело военный характер. Рыцарские турниры, фехтование и верховая езда были важнейшими навыками. Монастыри сохраняли традиции физической культуры через дисциплину и труд.',
    icon: 'Swords'
  },
  {
    id: 3,
    title: 'Возрождение',
    period: '1453 - 1600',
    content: 'Эпоха Возрождения вернула интерес к античным идеалам гармонии тела и духа. Гуманисты включили физическое воспитание в образовательные программы. Появились первые трактаты о пользе физических упражнений для здоровья.',
    icon: 'BookOpen'
  },
  {
    id: 4,
    title: 'Просвещение',
    period: '1600 - 1789',
    content: 'В эпоху Просвещения философы обосновали необходимость физического воспитания для развития личности. Жан-Жак Руссо призывал к естественному воспитанию через движение и игры на природе. Появились первые гимнастические системы.',
    icon: 'Lightbulb'
  },
  {
    id: 5,
    title: 'XIX век',
    period: '1800 - 1900',
    content: 'Создание национальных систем физического воспитания: шведская, немецкая, сокольская. Физкультура стала обязательным предметом в школах. Возрождение Олимпийских игр в 1896 году положило начало современному спорту.',
    icon: 'GraduationCap'
  },
  {
    id: 6,
    title: 'Начало XX века',
    period: '1900 - 1945',
    content: 'Развитие массового спорта и физкультурного движения. Создание международных спортивных федераций. В СССР физкультура стала частью государственной политики, появились комплексы ГТО и массовые спортивные праздники.',
    icon: 'Users'
  },
  {
    id: 7,
    title: 'Послевоенный период',
    period: '1945 - 1970',
    content: 'Бурное развитие спортивной науки и методик тренировок. Олимпийское движение приобрело глобальный масштаб. Появились новые виды спорта и дисциплин. Физкультура стала важным элементом здорового образа жизни.',
    icon: 'Atom'
  },
  {
    id: 8,
    title: 'Современная эра',
    period: '1970 - 2000',
    content: 'Профессионализация спорта, появление фитнес-индустрии. Развитие спортивной медицины и реабилитации. Массовое распространение оздоровительных программ. Внедрение компьютерных технологий в тренировочный процесс.',
    icon: 'Dumbbell'
  },
  {
    id: 9,
    title: 'XXI век',
    period: '2000 - настоящее время',
    content: 'Цифровизация физкультуры: фитнес-трекеры, онлайн-тренировки, виртуальная реальность. Популярность функционального тренинга и кроссфита. Олимпийские игры включают новые дисциплины: скейтбординг, серфинг, скалолазание.',
    icon: 'Smartphone'
  },
  {
    id: 10,
    title: 'Будущее',
    period: 'Перспективы',
    content: 'Искусственный интеллект в персональных тренировках. Биотехнологии для улучшения спортивных показателей. Киберспорт как новая форма соревнований. Интеграция физической и цифровой активности для здоровья будущих поколений.',
    icon: 'Rocket'
  }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection('left');
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection('right');
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 'left' : 'right');
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-4xl">
          <div 
            key={currentSlide}
            className={`animate-${direction === 'left' ? 'slide-left' : 'slide-right'}`}
          >
            <div className="text-center space-y-8">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name={slide.icon} size={40} className="text-primary" />
                </div>
              </div>

              <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <p className="text-primary text-sm font-semibold tracking-wider uppercase">
                  {slide.period}
                </p>
                <h1 className="text-4xl md:text-6xl font-bold font-heading text-foreground">
                  {slide.title}
                </h1>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  {slide.content}
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 pt-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'w-8 bg-primary' 
                        : 'w-2 bg-border hover:bg-primary/50'
                    }`}
                    aria-label={`Перейти к слайду ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="lg"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="gap-2"
            >
              <Icon name="ChevronLeft" size={20} />
              Назад
            </Button>

            <div className="text-sm text-muted-foreground font-medium">
              {currentSlide + 1} / {slides.length}
            </div>

            <Button
              size="lg"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="gap-2"
            >
              Далее
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
