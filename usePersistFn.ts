/**
 * MapSection — آليات الديزل
 * قسم خريطة Google Maps مع معلومات الموقع
 * فلسفة: خريطة تفاعلية مع معلومات الاتصال
 */
import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { MapView } from "./Map";

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

export default function MapSection() {
  const { ref, inView } = useInView();
  const mapRef = useRef<HTMLDivElement>(null);

  return (
    <section id="map" className="relative py-24 overflow-hidden bg-[oklch(0.10_0.005_260)]" aria-label="قسم الموقع ومعلومات الاتصال في جازان">
      {/* رقم خلفي */}
      <span className="bg-number" style={{ top: "50%", right: "-2rem", transform: "translateY(-50%)" }}>
        06
      </span>

      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* رأس القسم */}
        <div
          className={`mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="yellow-bar h-8" />
            <span className="text-[oklch(0.87_0.19_88)] font-semibold uppercase tracking-widest text-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>
              موقعنا
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight" style={{ fontFamily: 'Cairo, sans-serif' }}>
            تجدنا في
            <br />
            <span className="text-[oklch(0.87_0.19_88)]">جازان - المنطقة الصناعية</span>
          </h2>
        </div>

        {/* محتوى الخريطة والمعلومات */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* الخريطة */}
          <div
            className={`lg:col-span-2 card-industrial overflow-hidden h-96 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            style={{ transitionDelay: "0.1s" }}
            ref={mapRef}
          >
            <MapView
              onMapReady={(map: google.maps.Map) => {
                // تعيين الموقع الافتراضي لجازان
                const companyLocation = { lat: 16.836941, lng: 42.627643 };
                map.setCenter(companyLocation);
                map.setZoom(16);

                // إضافة marker
                new (window as any).google.maps.Marker({
                  position: companyLocation,
                  map: map,
                  title: "آليات الديزل الحديث - المنطقة الصناعية",
                });
              }}
            />
          </div>

          {/* معلومات الاتصال */}
          <div
            className={`space-y-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            {/* بطاقة الموقع */}
            <div className="card-industrial p-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-[oklch(0.87_0.19_88)] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-white font-black mb-2" style={{ fontFamily: 'Cairo, sans-serif' }}>
                    الموقع
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                    جازان - المنطقة الصناعية
                    <br />
                    المملكة العربية السعودية
                  </p>
                </div>
              </div>
            </div>

            {/* بطاقة الهاتف */}
            <div className="card-industrial p-6">
              <div className="flex items-start gap-4">
                <Phone className="text-[oklch(0.87_0.19_88)] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-white font-black mb-2" style={{ fontFamily: 'Cairo, sans-serif' }}>
                    الهاتف
                  </h3>
                  <a href="tel:0563010375" className="text-[oklch(0.87_0.19_88)] text-sm font-semibold hover:underline" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                    0563010375
                  </a>
                </div>
              </div>
            </div>

            {/* بطاقة البريد الإلكتروني */}
            <div className="card-industrial p-6">
              <div className="flex items-start gap-4">
                <Mail className="text-[oklch(0.87_0.19_88)] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-white font-black mb-2" style={{ fontFamily: 'Cairo, sans-serif' }}>
                    البريد الإلكتروني
                  </h3>
                  <a href="mailto:AlyatAldiesel@gmail.com" className="text-[oklch(0.87_0.19_88)] text-sm font-semibold hover:underline break-all" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                    AlyatAldiesel@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* بطاقة ساعات العمل */}
            <div className="card-industrial p-6">
              <div className="flex items-start gap-4">
                <Clock className="text-[oklch(0.87_0.19_88)] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-white font-black mb-2" style={{ fontFamily: 'Cairo, sans-serif' }}>
                    ساعات العمل
                  </h3>
                  <p className="text-white/60 text-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                    السبت - الخميس
                    <br />
                    8:00 ص - 6:00 م
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
