/**
 * HeroSection — آليات الديزل
 * القسم البطولي الرئيسي — خلفية معدات ثقيلة مع نص ضخم
 * فلسفة: صورة درامية + تدرج داكن + نص أبيض وأصفر ضخم
 */
import { ChevronDown, Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const HERO_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/XYmtPNZCE66YhTJXhMqDtJ/sandbox/1PYPukLdV1EFfOt4Lr4JfU-img-1_1771589603000_na1fn_aGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWFltdFBOWkNFNjZZaFRKWGhNcUR0Si9zYW5kYm94LzFQWVB1a0xkVjFFRmZPdDRMcjRKZlUtaW1nLTFfMTc3MTU4OTYwMzAwMF9uYTFmbl9hR1Z5YnkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=k1AUa0VSByH9zavOBQ~UE9Az4meisuGX41Ba9lpK0sWPqAvFOZsecor2WxrCSALLFN7oxDGbYrcKKmPUdkIKLud~fMcyM3Yyftjs~1-9IelsDZ7pFRZiWSECcm4hatv4D1-9OvjFUtgQGp6EaEAPKrYxLhBcjJ9z93gtKkkJ47ikObwR8LprFXeEKC52zW0V1UMx64-dXIqvoaP6pwKCBlw9htxbeTbRJOvmsqJttJAg9t6BV5aIg4Ea4PSvT4zMbPDXwTwBai~26bwNw3zZowLsbCQFQ9yB1TPiYLnUaUrjWy4Q7TtlPM75acUNqfagxEVFx3KNn01insE4oCxy2A__";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="قسم البطل - معدات ثقيلة صناعية"
    >
      {/* تدرج داكن */}
      <div className="absolute inset-0 bg-gradient-to-l from-[oklch(0.10_0.005_260/0.95)] via-[oklch(0.10_0.005_260/0.75)] to-[oklch(0.10_0.005_260/0.4)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.005_260)] via-transparent to-transparent" />

      {/* رقم ضخم خلفي */}
      <span
        className="bg-number"
        style={{
          top: "50%",
          left: "-2rem",
          transform: "translateY(-50%)",
          fontSize: "20rem",
          opacity: 0.04,
        }}
      >
        01
      </span>

      {/* المحتوى */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24">
        <div className="max-w-3xl">
          {/* شارة */}
          <div
            className={`inline-flex items-center gap-2 bg-[oklch(0.87_0.19_88/0.15)] border border-[oklch(0.87_0.19_88/0.4)] text-[oklch(0.87_0.19_88)] px-4 py-2 rounded-full text-sm font-semibold mb-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: 'Tajawal, sans-serif', transitionDelay: '0.1s' }}
          >
            <span className="w-2 h-2 rounded-full bg-[oklch(0.87_0.19_88)] animate-pulse" />
            جازان — المنطقة الصناعية
          </div>

          {/* العنوان الرئيسي */}
          <h1
            className={`text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-tight mb-4 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: 'Cairo, sans-serif', transitionDelay: '0.2s' }}
          >
            آليات
            <br />
            <span className="text-[oklch(0.87_0.19_88)]">الديزل الحديث</span>
          </h1>

          {/* العنوان الفرعي */}
          <p
            className={`text-xl lg:text-2xl text-white/80 font-medium mb-8 leading-relaxed transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: 'Tajawal, sans-serif', transitionDelay: '0.3s' }}
          >
            متخصصون في قطع غيار المعدات الثقيلة
            <br />
            <span className="text-[oklch(0.87_0.19_88)]" style={{fontSize: '17px'}}>عرجات · شيولات · دركترات · بوكلينات · بوبكات</span>
          </p>

          {/* الأزرار */}
          <div
            className={`flex flex-wrap gap-4 mb-12 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            <a
              href="tel:0563010375"
              className="btn-industrial flex items-center gap-2"
              style={{ fontFamily: 'Cairo, sans-serif' }}
            >
              <Phone size={18} />
              اتصل الآن
            </a>
            <a
              href="https://wa.me/966563010375"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-[oklch(0.87_0.19_88)] text-[oklch(0.87_0.19_88)] px-6 py-3 rounded font-bold hover:bg-[oklch(0.87_0.19_88/0.1)] transition-all duration-200"
              style={{ fontFamily: 'Cairo, sans-serif' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              واتساب
            </a>
          </div>

          {/* معلومات سريعة */}
          <div
            className={`flex flex-wrap gap-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            <div className="flex items-center gap-2 text-white/60 text-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>
              <Phone size={14} className="text-[oklch(0.87_0.19_88)]" />
              0563010375
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>
              <Mail size={14} className="text-[oklch(0.87_0.19_88)]" />
              AlyatAldiesel@gmail.com
            </div>
          </div>
        </div>
      </div>

      {/* سهم التمرير */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-[oklch(0.87_0.19_88)] transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
