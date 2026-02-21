/**
 * Navbar — آليات الديزل
 * شريط التنقل العلوي الثابت مع تأثير الشفافية عند التمرير
 * فلسفة: خلفية شفافة تصبح داكنة عند التمرير، شعار أصفر
 */
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "من نحن", href: "#about" },
  { label: "خدماتنا", href: "#services" },
  { label: "منتجاتنا", href: "#products" },
  { label: "الشركات", href: "#brands" },
  { label: "موقعنا", href: "#map" },
  { label: "تواصل معنا", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.10_0.005_260/0.97)] shadow-lg shadow-black/50 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* الشعار */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[oklch(0.87_0.19_88)] rounded flex items-center justify-center">
              <span className="text-[oklch(0.10_0.005_260)] font-black text-lg" style={{ fontFamily: 'Cairo, sans-serif' }}>آ</span>
            </div>
            <div>
              <div className="text-white font-black text-lg leading-none" style={{ fontFamily: 'Cairo, sans-serif' }}>
                آليات الديزل الحديث
              </div>
              <div className="text-[oklch(0.87_0.19_88)] text-xs font-medium" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                قطع غيار المعدات الثقيلة
              </div>
            </div>
          </div>

          {/* روابط التنقل — سطح المكتب */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white/80 hover:text-[oklch(0.87_0.19_88)] transition-colors duration-200 font-medium text-sm relative group"
                style={{ fontFamily: 'Cairo, sans-serif' }}
              >
                {link.label}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[oklch(0.87_0.19_88)] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* زر الاتصال */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:0563010375"
              className="flex items-center gap-2 bg-[oklch(0.87_0.19_88)] text-[oklch(0.10_0.005_260)] px-4 py-2 rounded font-bold text-sm hover:bg-[oklch(0.92_0.20_88)] transition-all duration-200"
              style={{ fontFamily: 'Cairo, sans-serif' }}
            >
              <Phone size={16} />
              اتصل بنا
            </a>
          </div>

          {/* زر القائمة — الجوال */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* القائمة المنسدلة — الجوال */}
      {menuOpen && (
        <div className="lg:hidden bg-[oklch(0.10_0.005_260/0.98)] backdrop-blur-md border-t border-[oklch(0.25_0.01_260)]">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white/80 hover:text-[oklch(0.87_0.19_88)] transition-colors py-3 text-right font-medium border-b border-[oklch(0.20_0.01_260)] last:border-0"
                style={{ fontFamily: 'Cairo, sans-serif' }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:0563010375"
              className="flex items-center justify-center gap-2 bg-[oklch(0.87_0.19_88)] text-[oklch(0.10_0.005_260)] px-4 py-3 rounded font-bold mt-2"
              style={{ fontFamily: 'Cairo, sans-serif' }}
            >
              <Phone size={16} />
              0563010375
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
