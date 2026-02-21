/**
 * BucketsSection — آليات الديزل
 * قسم البوكلينات والبوبكات مع صور درامية
 * فلسفة: صور كبيرة + معلومات مختصرة + شريط أصفر
 */
import { useEffect, useRef, useState } from "react";
import { Zap, Wrench } from "lucide-react";

const BOBCAT_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/XYmtPNZCE66YhTJXhMqDtJ/sandbox/zW9XQCuqHYyaZv6YgdKhPY-img-1_1771604224000_na1fn_Ym9iY2F0LXNraWQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWFltdFBOWkNFNjZZaFRKWGhNcUR0Si9zYW5kYm94L3pXOVhRQ3VxSFl5YVp2NllnZEtoUFktaW1nLTFfMTc3MTYwNDIyNDAwMF9uYTFmbl9Ym9iY2F0LXNraWQuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=wIIVEFLu-kWyeLTputiLWNwiFlrVz4AvsxUkaTwPThn5kBG63b5Fvvw5HNZgKVG9fv85kVJWhlO4s6MhrmjCdUzT8QJuHo~PSxQ~3JE9nqo-6zQPnTu5raKiHthEKjNbAZghTPdKwnscoI2pCBHyvejXzG~ngcQllaNR6OPENO7H~4y7Fjy46MwiFUFo3yWGiaEP7LOKI89qovnpCoCn1qVbTHwv8xrPLY4OaYKLXGK7-eMJfnBZCEKeA7I1E4bMCiuknknbsOSPZsSAg8PY3CyTE41eND7msDtwikcU9TvKr6nivBsY4Y3e3pWycUBIQV1O-GOjCMM0RyVtGVD7lw__";
const JCB_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/XYmtPNZCE66YhTJXhMqDtJ/sandbox/zW9XQCuqHYyaZv6YgdKhPY-img-2_1771604223000_na1fn_amNiLWJhY2tob2U.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWFltdFBOWkNFNjZZaFRKWGhNcUR0Si9zYW5kYm94L3pXOVhRQ3VxSFl5YVp2NllnZEtoUFktaW1nLTJfMTc3MTYwNDIyMzAwMF9uYTFmbl9hbU5pTFdKaFkydG9iMlUuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=H4ITORKg18pD0uluqscDzGA~9425Oy7pEvcCk23GQCP6PUNbDaltgah~7T-8ztq2Ad~3sTmIKM7blxL8-48aiehlKnE-bfvv4BfjsV79JyVxn2bR~F4y7uQXn3PBT02dc0Fi8uqawt04v0i4Qcg4NOksQM4RbMZh5W34gZdfDQ1Sz-1G0pXzui~Erlyz8rCnUqKDmczgULX1yznh25mKFa6-n-HVse-Frkbj6uye50MFMCplqKkpUBnJVduf5REZwmZLAdPtgCMNXghLeW6GpDhTSlhQMFfpCZRFoXaQhwk9IWrcMGne3ntwvmfwbQdUEKqW6V-KjMnXmE~IWBB7GQ__";

const buckets = [
  {
    icon: Zap,
    name: "البوبكات",
    subtitle: "Bobcat Skid Steer Loader",
    description: "آلة صغيرة وقوية متعددة الاستخدامات للعمل في المساحات الضيقة والمشاريع الصغيرة والمتوسطة",
    image: BOBCAT_IMAGE,
    parts: [
      "أسنان الدلو",
      "أسطوانات هيدروليكية",
      "مضخات الحركة",
      "أطواق الربط",
      "عجلات وإطارات",
      "محركات الدوران",
    ],
  },
  {
    icon: Wrench,
    name: "البوكلينات",
    subtitle: "JCB Backhoe Loader",
    description: "آلة متعددة الأغراض تجمع بين قوة الحفر والتحميل، مثالية للمشاريع الكبيرة والمتوسطة",
    image: JCB_IMAGE,
    parts: [
      "ذراع الحفر",
      "أسنان الدلو",
      "أسطوانات هيدروليكية",
      "نظام التحويل",
      "محركات رئيسية",
      "أنظمة التوجيه",
    ],
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

export default function BucketsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="buckets" className="relative bg-[oklch(0.10_0.005_260)] py-24 overflow-hidden">
      {/* رقم خلفي */}
      <span className="bg-number" style={{ top: "50%", right: "-2rem", transform: "translateY(-50%)" }}>
        05
      </span>

      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* رأس القسم */}
        <div
          className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="yellow-bar h-8" />
            <span className="text-[oklch(0.87_0.19_88)] font-semibold uppercase tracking-widest text-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>
              البوكلينات والبوبكات
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight" style={{ fontFamily: 'Cairo, sans-serif' }}>
            قطع غيار
            <br />
            <span className="text-[oklch(0.87_0.19_88)]">البوكلينات والبوبكات</span>
          </h2>
        </div>

        {/* البطاقات */}
        <div className="grid lg:grid-cols-2 gap-8">
          {buckets.map((bucket, i) => (
            <div
              key={i}
              className={`card-industrial overflow-hidden group transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${0.1 + i * 0.2}s` }}
            >
              {/* الصورة */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={bucket.image}
                  alt={bucket.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.005_260)] via-[oklch(0.10_0.005_260/0.3)] to-transparent" />
                {/* شارة */}
                <div className="absolute top-4 right-4 bg-[oklch(0.87_0.19_88)] text-[oklch(0.10_0.005_260)] px-4 py-2 rounded font-black" style={{ fontFamily: 'Cairo, sans-serif' }}>
                  {bucket.name}
                </div>
              </div>

              {/* المحتوى */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <bucket.icon size={22} className="text-[oklch(0.87_0.19_88)]" />
                  <h3 className="text-2xl font-black text-white" style={{ fontFamily: 'Cairo, sans-serif' }}>
                    {bucket.name}
                  </h3>
                </div>
                <p className="text-[oklch(0.87_0.19_88)] text-sm font-medium mb-3" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                  {bucket.subtitle}
                </p>
                <p className="text-white/60 text-sm leading-relaxed mb-5" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                  {bucket.description}
                </p>

                {/* شريط أصفر */}
                <div className="w-12 h-1 bg-[oklch(0.87_0.19_88)] rounded mb-4" />

                {/* قائمة القطع */}
                <div className="grid grid-cols-2 gap-2">
                  {bucket.parts.map((part, j) => (
                    <div key={j} className="flex items-center gap-2 text-white/60 text-xs" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.87_0.19_88)] flex-shrink-0" />
                      {part}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
