/**
 * Footer — آليات الديزل
 * التذييل مع الشعار ومعلومات الاتصال وحقوق الملكية
 * فلسفة: خلفية سوداء داكنة + خط فاصل أصفر
 */
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[oklch(0.08_0.004_260)] border-t border-[oklch(0.87_0.19_88/0.3)]">
      {/* الشريط الأصفر العلوي */}
      <div className="h-1 bg-[oklch(0.87_0.19_88)]" />

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* الشعار والوصف */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[oklch(0.87_0.19_88)] rounded flex items-center justify-center">
                <span className="text-[oklch(0.10_0.005_260)] font-black text-xl" style={{ fontFamily: 'Cairo, sans-serif' }}>آ</span>
              </div>
              <div>
                <div className="text-white font-black text-xl" style={{ fontFamily: 'Cairo, sans-serif' }}>آليات الديزل</div>
                <div className="text-[oklch(0.87_0.19_88)] text-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>قطع غيار المعدات الثقيلة</div>
              </div>
            </div>
            <p className="text-white/50 leading-relaxed mb-6 max-w-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>
              مؤسسة متخصصة في توفير قطع غيار المعدات الثقيلة من عرجات وشيولات ودركترات بجودة عالية وأسعار تنافسية في جازان المنطقة الصناعية.
            </p>
            {/* روابط التواصل الاجتماعي */}
            <div className="flex gap-3">
              <a
                href="https://wa.me/966563010375"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[oklch(0.87_0.19_88/0.1)] border border-[oklch(0.87_0.19_88/0.3)] rounded flex items-center justify-center text-[oklch(0.87_0.19_88)] hover:bg-[oklch(0.87_0.19_88)] hover:text-[oklch(0.10_0.005_260)] transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* روابط سريعة */}
          <div>
            <h4 className="text-white font-black mb-5 flex items-center gap-2" style={{ fontFamily: 'Cairo, sans-serif' }}>
              <span className="w-1 h-5 bg-[oklch(0.87_0.19_88)] rounded" />
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {[
                { label: "الرئيسية", href: "#hero" },
                { label: "من نحن", href: "#about" },
                { label: "خدماتنا", href: "#services" },
                { label: "منتجاتنا", href: "#products" },
                { label: "تواصل معنا", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/50 hover:text-[oklch(0.87_0.19_88)] transition-colors text-sm"
                    style={{ fontFamily: 'Tajawal, sans-serif' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* معلومات التواصل */}
          <div>
            <h4 className="text-white font-black mb-5 flex items-center gap-2" style={{ fontFamily: 'Cairo, sans-serif' }}>
              <span className="w-1 h-5 bg-[oklch(0.87_0.19_88)] rounded" />
              معلومات التواصل
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[oklch(0.87_0.19_88)] mt-0.5 flex-shrink-0" />
                <a href="tel:0563010375" className="text-white/50 hover:text-white transition-colors text-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                  0563010375
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[oklch(0.87_0.19_88)] mt-0.5 flex-shrink-0" />
                <a href="mailto:AlyatAldiesel@gmail.com" className="text-white/50 hover:text-white transition-colors text-sm break-all" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                  AlyatAldiesel@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[oklch(0.87_0.19_88)] mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                  جازان — المنطقة الصناعية
                  <br />
                  المملكة العربية السعودية
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* حقوق الملكية */}
      <div className="border-t border-[oklch(0.25_0.01_260)]">
        <div className="container mx-auto px-4 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/30 text-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>
              © 2025 آليات الديزل — جميع الحقوق محفوظة
            </p>
            <p className="text-white/20 text-xs" style={{ fontFamily: 'Tajawal, sans-serif' }}>
              متخصصون في قطع غيار المعدات الثقيلة
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
