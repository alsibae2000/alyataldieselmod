/**
 * ContactSection — آليات الديزل
 * قسم التواصل مع معلومات الاتصال وخريطة الموقع
 * فلسفة: خلفية داكنة + بطاقات تواصل بارزة + خريطة
 */
import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "الهاتف",
    value: "0563010375",
    link: "tel:0563010375",
    linkText: "اتصل الآن",
    bg: "oklch(0.87_0.19_88)",
  },
  {
    icon: MessageCircle,
    title: "واتساب",
    value: "0563010375",
    link: "https://wa.me/966563010375",
    linkText: "راسلنا",
    bg: "oklch(0.87_0.19_88)",
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "AlyatAldiesel@gmail.com",
    link: "mailto:AlyatAldiesel@gmail.com",
    linkText: "أرسل بريد",
    bg: "oklch(0.87_0.19_88)",
  },
  {
    icon: MapPin,
    title: "الموقع",
    value: "جازان — المنطقة الصناعية",
    link: "https://maps.google.com/?q=جازان+المنطقة+الصناعية",
    linkText: "عرض الخريطة",
    bg: "oklch(0.87_0.19_88)",
  },
];

function useInView(threshold = 0.1) {
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

export default function ContactSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="contact"
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
              تواصل معنا
            </span>
            <div className="yellow-bar h-6" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Cairo, sans-serif' }}>
            نحن هنا لمساعدتك
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            تواصل معنا عبر أي من القنوات التالية وسنرد عليك في أقرب وقت ممكن
          </p>
        </div>

        {/* بطاقات التواصل */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactCards.map((card, i) => (
            <div
              key={i}
              className={`card-industrial p-6 text-center group transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              {/* أيقونة */}
              <div className="w-14 h-14 mx-auto bg-[oklch(0.87_0.19_88/0.1)] border border-[oklch(0.87_0.19_88/0.3)] rounded-full flex items-center justify-center mb-4 group-hover:bg-[oklch(0.87_0.19_88)] transition-all duration-300">
                <card.icon
                  size={24}
                  className="text-[oklch(0.87_0.19_88)] group-hover:text-[oklch(0.10_0.005_260)] transition-colors duration-300"
                />
              </div>

              <h3 className="text-white font-bold mb-2" style={{ fontFamily: 'Cairo, sans-serif' }}>
                {card.title}
              </h3>
              <p className="text-white/60 text-sm mb-4 break-all" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                {card.value}
              </p>
              <a
                href={card.link}
                target={card.link.startsWith("http") ? "_blank" : undefined}
                rel={card.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1 text-[oklch(0.87_0.19_88)] font-bold text-sm hover:underline"
                style={{ fontFamily: 'Cairo, sans-serif' }}
              >
                {card.linkText}
              </a>
            </div>
          ))}
        </div>

        {/* قسم ساعات العمل + CTA */}
        <div
          className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "0.5s" }}
        >
          {/* ساعات العمل */}
          <div className="card-industrial p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock size={24} className="text-[oklch(0.87_0.19_88)]" />
              <h3 className="text-xl font-black text-white" style={{ fontFamily: 'Cairo, sans-serif' }}>
                ساعات العمل
              </h3>
            </div>
            <div className="space-y-3">
              {[
                { day: "السبت — الخميس", time: "8:00 ص — 6:00 م" },
                { day: "الجمعة", time: "مغلق" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-[oklch(0.25_0.01_260)] last:border-0">
                  <span className="text-white/70" style={{ fontFamily: 'Tajawal, sans-serif' }}>{item.day}</span>
                  <span
                    className={`font-bold ${item.time === "مغلق" ? "text-red-400" : "text-[oklch(0.87_0.19_88)]"}`}
                    style={{ fontFamily: 'Cairo, sans-serif' }}
                  >
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA واتساب */}
          <div
            className="relative rounded-lg overflow-hidden p-8 flex flex-col justify-between"
            style={{
              background: "linear-gradient(135deg, oklch(0.87 0.19 88 / 0.15), oklch(0.87 0.19 88 / 0.05))",
              border: "1px solid oklch(0.87 0.19 88 / 0.3)",
            }}
          >
            <div>
              <h3 className="text-2xl font-black text-white mb-3" style={{ fontFamily: 'Cairo, sans-serif' }}>
                تحتاج قطعة غيار؟
              </h3>
              <p className="text-white/70 mb-6" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                أرسل لنا رسالة على واتساب مع اسم المعدة ورقم القطعة وسنوافيك بالسعر فوراً
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/966563010375"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-industrial flex items-center justify-center gap-2 flex-1"
                style={{ fontFamily: 'Cairo, sans-serif' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                راسلنا على واتساب
              </a>
              <a
                href="tel:0563010375"
                className="flex items-center justify-center gap-2 border-2 border-[oklch(0.87_0.19_88)] text-[oklch(0.87_0.19_88)] px-6 py-3 rounded font-bold hover:bg-[oklch(0.87_0.19_88/0.1)] transition-all duration-200 flex-1"
                style={{ fontFamily: 'Cairo, sans-serif' }}
              >
                <Phone size={18} />
                اتصل مباشرة
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
