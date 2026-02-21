/**
 * AboutSection — آليات الديزل
 * قسم التعريف بالمؤسسة مع إحصائيات
 * فلسفة: خلفية داكنة + شريط أصفر + أرقام ضخمة
 */
import { useEffect, useRef, useState } from "react";
import { MapPin, Award, Users, Wrench } from "lucide-react";

const PARTS_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/XYmtPNZCE66YhTJXhMqDtJ/sandbox/1PYPukLdV1EFfOt4Lr4JfU-img-2_1771589609000_na1fn_cGFydHMtaGVybw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWFltdFBOWkNFNjZZaFRKWGhNcUR0Si9zYW5kYm94LzFQWVB1a0xkVjFFRmZPdDRMcjRKZlUtaW1nLTJfMTc3MTU4OTYwOTAwMF9uYTFmbl9jR0Z5ZEhNdGFHVnlidy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=hlruFn1sg1hW~urPsS70ppELuTJqKPa2NOd3cv95h2guaZDvMDwnt~ST7mXd57s4Th7Nj0QUiOa4~Daxf54n2qyqDpLD6nhtKyMVrunBfADm8U4WcsJ~aYkYpL8BmYQCKSpk0pkQCDEFwO4pe1HcmIKSMHNn8I51T~f5bHiwkABW3yanv5xDmLX0FqYOJEamrMl35YLbPi~XD8VUWvJhZbzYjVJzQ2ragel4oQ8kWAFb9z~7QjSKBTsAUjSD6OvE9tCzY4-a9htUnhZX7~XDMRlNCJqanx0u3sCM8ub~zJS15bsRzTODE7lh0vyJ8maiboKaPeA8p89HY~nRcv4WuA__";

const stats = [
  { icon: Award, value: "10+", label: "سنوات خبرة" },
  { icon: Wrench, value: "500+", label: "نوع قطعة غيار" },
  { icon: Users, value: "1000+", label: "عميل راضٍ" },
  { icon: MapPin, value: "جازان", label: "المنطقة الصناعية" },
];

function useInView(threshold = 0.2) {
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

export default function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="relative bg-[oklch(0.10_0.005_260)] py-24 overflow-hidden">
      {/* رقم خلفي */}
      <span className="bg-number" style={{ top: "50%", right: "-2rem", transform: "translateY(-50%)" }}>
        02
      </span>

      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* الصورة */}
          <div
            className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={PARTS_IMAGE}
                alt="قطع غيار المعدات الثقيلة"
                className="w-full h-80 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.005_260/0.6)] to-transparent" />
            </div>
            {/* شارة الموقع */}
            <div className="absolute -bottom-6 -right-6 bg-[oklch(0.87_0.19_88)] text-[oklch(0.10_0.005_260)] p-4 rounded-lg shadow-xl">
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <div>
                  <div className="font-black text-sm" style={{ fontFamily: 'Cairo, sans-serif' }}>جازان</div>
                  <div className="text-xs font-medium" style={{ fontFamily: 'Tajawal, sans-serif' }}>المنطقة الصناعية</div>
                </div>
              </div>
            </div>
            {/* شريط أصفر جانبي */}
            <div className="absolute top-0 right-0 w-1 h-full bg-[oklch(0.87_0.19_88)] rounded-full" />
          </div>

          {/* المحتوى */}
          <div
            className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            {/* تسمية القسم */}
            <div className="flex items-center gap-3 mb-6">
              <div className="yellow-bar h-8" />
              <span className="text-[oklch(0.87_0.19_88)] font-semibold uppercase tracking-widest text-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                من نحن
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'Cairo, sans-serif' }}>
              خبرة متراكمة في
              <br />
              <span className="text-[oklch(0.87_0.19_88)]">قطع الغيار الثقيلة</span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-6" style={{ fontFamily: 'Tajawal, sans-serif' }}>
              مؤسسة آليات الديزل متخصصة في توفير قطع غيار المعدات الثقيلة بجودة عالية وأسعار تنافسية. نخدم قطاع الإنشاءات والمقاولات في منطقة جازان وما حولها.
            </p>

            <p className="text-white/70 text-lg leading-relaxed mb-8" style={{ fontFamily: 'Tajawal, sans-serif' }}>
              نوفر قطع غيار أصلية وبديلة عالية الجودة للعرجات والشيولات والدركترات من مختلف الماركات العالمية، مع ضمان توفر القطعة وسرعة التسليم.
            </p>

            {/* الإحصائيات */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`card-industrial p-4 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
                >
                  <stat.icon size={20} className="text-[oklch(0.87_0.19_88)] mb-2" />
                  <div className="text-2xl font-black text-[oklch(0.87_0.19_88)]" style={{ fontFamily: 'Cairo, sans-serif' }}>
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
