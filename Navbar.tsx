/**
 * BrandsSection — آليات الديزل
 * قسم شعارات الشركات المدعومة مع قوالب احترافية
 * فلسفة: بطاقات مميزة لكل شركة مع لوجو وتأثيرات hover
 */
import { useEffect, useRef, useState } from "react";

const brands = [
  {
    name: "Caterpillar",
    shortName: "CAT",
    description: "معدات ثقيلة عالية الجودة",
    color: "from-yellow-500 to-yellow-600",
    textColor: "text-yellow-600",
  },
  {
    name: "Komatsu",
    shortName: "Komatsu",
    description: "تكنولوجيا يابانية متقدمة",
    color: "from-blue-500 to-blue-600",
    textColor: "text-blue-600",
  },
  {
    name: "JCB",
    shortName: "JCB",
    description: "آلات بريطانية موثوقة",
    color: "from-orange-500 to-orange-600",
    textColor: "text-orange-600",
  },
  {
    name: "Volvo",
    shortName: "Volvo",
    description: "هندسة سويدية متطورة",
    color: "from-blue-700 to-blue-800",
    textColor: "text-blue-700",
  },
  {
    name: "Hitachi",
    shortName: "Hitachi",
    description: "ابتكار ياباني مستمر",
    color: "from-red-500 to-red-600",
    textColor: "text-red-600",
  },
  {
    name: "Bobcat",
    shortName: "Bobcat",
    description: "آلات صغيرة قوية",
    color: "from-yellow-400 to-yellow-500",
    textColor: "text-yellow-500",
  },
  {
    name: "Doosan",
    shortName: "Doosan",
    description: "معدات كورية عالية الأداء",
    color: "from-gray-700 to-gray-800",
    textColor: "text-gray-700",
  },
  {
    name: "Forklift",
    shortName: "FORKLIFT",
    description: "رافعات ومناولات متطورة",
    color: "from-red-600 to-red-700",
    textColor: "text-red-600",
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

export default function BrandsSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="brands"
      className="relative py-24 overflow-hidden"
      style={{ background: "oklch(0.13 0.007 260)" }}
    >
      {/* رقم خلفي */}
      <span className="bg-number" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        05
      </span>

      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* رأس القسم */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="yellow-bar h-6" />
            <span className="text-[oklch(0.87_0.19_88)] font-semibold uppercase tracking-widest text-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>
              الشركات المدعومة
            </span>
            <div className="yellow-bar h-6" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Cairo, sans-serif' }}>
            نوفر قطع غيار لأشهر الماركات
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            نحن متخصصون في توفير قطع غيار أصلية وبديلة لجميع الماركات العالمية الرائدة
          </p>
        </div>

        {/* بطاقات الشركات */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand, i) => (
            <div
              key={i}
              className={`card-industrial overflow-hidden group transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${0.05 + i * 0.08}s` }}
            >
              {/* رأس البطاقة بتدرج لوني */}
              <div className={`h-32 bg-gradient-to-br ${brand.color} flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                {/* نمط خلفي */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)"
                  }} />
                </div>
                {/* الشعار */}
                <div className="relative z-10 text-center" aria-label={`شعار شركة ${brand.name}`}>
                  <div className="text-white font-black text-4xl" style={{ fontFamily: 'Cairo, sans-serif' }}>
                    {brand.shortName}
                  </div>
                </div>
              </div>

              {/* محتوى البطاقة */}
              <div className="p-5">
                <h3 className="text-lg font-black text-white mb-2" style={{ fontFamily: 'Cairo, sans-serif' }}>
                  {brand.name}
                </h3>
                <p className="text-white/60 text-sm mb-4" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                  {brand.description}
                </p>
                
                {/* شريط أصفر */}
                <div className="w-8 h-1 bg-[oklch(0.87_0.19_88)] rounded mb-4" />

                {/* زر */}
                <button className="w-full py-2 px-3 bg-[oklch(0.87_0.19_88/0.1)] border border-[oklch(0.87_0.19_88)] text-[oklch(0.87_0.19_88)] rounded font-semibold text-sm hover:bg-[oklch(0.87_0.19_88)] hover:text-[oklch(0.10_0.005_260)] transition-all duration-300" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                  استفسر الآن
                </button>
              </div>

              {/* خط سفلي عند hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[oklch(0.87_0.19_88)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
            </div>
          ))}
        </div>

        {/* نص توضيحي */}
        <div
          className={`mt-16 p-8 rounded-lg border border-[oklch(0.87_0.19_88/0.3)] bg-[oklch(0.87_0.19_88/0.05)] transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "0.5s" }}
        >
          <p className="text-white/70 text-center leading-relaxed" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            بالإضافة إلى الماركات المعروضة أعلاه، نوفر قطع غيار لماركات أخرى عديدة. تواصل معنا لمعرفة توفر القطعة المطلوبة لمعدتك.
          </p>
        </div>
      </div>
    </section>
  );
}
