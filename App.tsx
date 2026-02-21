/**
 * ServicesSection — آليات الديزل
 * قسم الخدمات مع بطاقات صناعية
 * فلسفة: خلفية رمادية داكنة + بطاقات بحواف أصفر عند التمرير
 */
import { useEffect, useRef, useState } from "react";
import { Settings, Truck, Shield, Clock, Search, Headphones } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "قطع غيار العرجات",
    description: "نوفر جميع قطع غيار العرجات (الجنازير) من جنازير وبكرات وعجلات قيادة وعجلات دعم لجميع الماركات.",
    color: "oklch(0.87_0.19_88)",
  },
  {
    icon: Truck,
    title: "قطع غيار الشيولات",
    description: "قطع غيار أصلية وبديلة للشيولات (الحفارات) تشمل الهيدروليك والمحركات والذراع والدلو.",
    color: "oklch(0.87_0.19_88)",
  },
  {
    icon: Shield,
    title: "قطع غيار الدركترات",
    description: "متخصصون في قطع غيار الدركترات (الجرافات) من شفرات وهياكل ومحركات وأنظمة تحويل.",
    color: "oklch(0.87_0.19_88)",
  },
  {
    icon: Search,
    title: "استشارة وتحديد القطعة",
    description: "فريق متخصص لمساعدتك في تحديد القطعة المناسبة لمعدتك بدقة عالية وسرعة في الاستجابة.",
    color: "oklch(0.87_0.19_88)",
  },
  {
    icon: Clock,
    title: "توفير سريع",
    description: "نضمن توفر القطع الأكثر طلباً في المخزن مع إمكانية الاستيراد السريع للقطع النادرة.",
    color: "oklch(0.87_0.19_88)",
  },
  {
    icon: Headphones,
    title: "دعم فني متواصل",
    description: "خدمة عملاء متاحة للإجابة على استفساراتك وتقديم الدعم الفني اللازم طوال أيام الأسبوع.",
    color: "oklch(0.87_0.19_88)",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function ServicesSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="services"
      className="relative py-24 overflow-hidden"
      style={{ background: "oklch(0.13 0.007 260)" }}
    >
      {/* رقم خلفي */}
      <span className="bg-number" style={{ top: "10%", left: "50%", transform: "translateX(-50%)" }}>
        03
      </span>

      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* رأس القسم */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="yellow-bar h-6" />
            <span className="text-[oklch(0.87_0.19_88)] font-semibold uppercase tracking-widest text-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>
              خدماتنا
            </span>
            <div className="yellow-bar h-6" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Cairo, sans-serif' }}>
            ما نقدمه لك
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            نوفر حلولاً شاملة لقطع غيار المعدات الثقيلة بجودة مضمونة وخدمة احترافية
          </p>
        </div>

        {/* بطاقات الخدمات */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`card-industrial p-6 group transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              {/* أيقونة */}
              <div className="w-12 h-12 bg-[oklch(0.87_0.19_88/0.1)] border border-[oklch(0.87_0.19_88/0.3)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[oklch(0.87_0.19_88)] transition-all duration-300">
                <service.icon
                  size={22}
                  className="text-[oklch(0.87_0.19_88)] group-hover:text-[oklch(0.10_0.005_260)] transition-colors duration-300"
                />
              </div>

              {/* شريط أصفر */}
              <div className="w-8 h-1 bg-[oklch(0.87_0.19_88)] rounded mb-4 group-hover:w-full transition-all duration-500" />

              <h3 className="text-xl font-black text-white mb-3" style={{ fontFamily: 'Cairo, sans-serif' }}>
                {service.title}
              </h3>
              <p className="text-white/60 leading-relaxed text-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
