/**
 * ProductsSection — آليات الديزل
 * قسم المنتجات مع صور المعدات الثقيلة
 * فلسفة: بطاقات كبيرة مع صور درامية وتسميات واضحة
 */
import { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";

const EXCAVATOR_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/XYmtPNZCE66YhTJXhMqDtJ/sandbox/1PYPukLdV1EFfOt4Lr4JfU-img-3_1771589607000_na1fn_ZXhjYXZhdG9yLWNhcmQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWFltdFBOWkNFNjZZaFRKWGhNcUR0Si9zYW5kYm94LzFQWVB1a0xkVjFFRmZPdDRMcjRKZlUtaW1nLTNfMTc3MTU4OTYwNzAwMF9uYTFmbl9aWGhqWVhaaGRHOXlMV05oY21RLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qApoikESpTxKs-qVdL1A0cAqWtrCrRqQXEZZmNRMFNfh7MSMGOSwsptodGD-FKYVat01xzh10L3hnmSv1bYn2Qka6vwJ7dclued69WIxyIP-OIjJnzz1N6t-gFIdy3QOqSqUl3qBeW5j8dmWfbJ7kn2Dh-yiFf7ehfqDL2Dc96mddM0WDvserrFyj69~3L3HAaJEX7Ow0EChV9LjYilKGDMAEbvqnUVsemez4atl-J1fVQROz0HHolmd3ir24xkhyD~pS97U6CRdpHKQXQ3Uley8ono~oemfwBsQYvzLsuQlpZXG4JMCF7T6l3JmPCvS0rPIbsXhTf8neFfwN0koKw__";
const BULLDOZER_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/XYmtPNZCE66YhTJXhMqDtJ/sandbox/1PYPukLdV1EFfOt4Lr4JfU-img-4_1771589601000_na1fn_YnVsbGRvemVyLWNhcmQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWFltdFBOWkNFNjZZaFRKWGhNcUR0Si9zYW5kYm94LzFQWVB1a0xkVjFFRmZPdDRMcjRKZlUtaW1nLTRfMTc3MTU4OTYwMTAwMF9uYTFmbl9ZblZzYkdSdmVtVnlMV05oY21RLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=IRuh1kYgPtMAFqc2cDCu-A5okH3nboOcjpZ3W1Q~z7bOgpiD-IBICAQMDrAmm5WjTPsfd6QXEqdL6uFDvvI0H5Xe7seMLQFZSQhbpvQdz-BKtZVn2RBQKdsvfRkPV7oogu0qhbodf5q-0yLQlb7zMOhKG5g4ahXXE-DR5B3hXuY574G5~LWg99F6YPlX746fkAPIygkmtEj1XyyaMR2hIEyALL92EMApxwfcuo3lx1tqNZIULlT7EUSw40h0GToWAHLk1X5QqR9MnjWqT-G~NIEQLpbW~SGxrTuUn0uGkuSz2-zRL3fyfcxdGFV~zXBV8NGb0~DyBnMsz~JTbiAlQw__";
const TRACKS_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/XYmtPNZCE66YhTJXhMqDtJ/sandbox/1PYPukLdV1EFfOt4Lr4JfU-img-5_1771589604000_na1fn_dHJhY2tzLWNhcmQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWFltdFBOWkNFNjZZaFRKWGhNcUR0Si9zYW5kYm94LzFQWVB1a0xkVjFFRmZPdDRMcjRKZlUtaW1nLTVfMTc3MTU4OTYwNDAwMF9uYTFmbl9kSEpoWTJ0ekxXTmhjbVEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fEEFeTy1M2MV~xQJJHImE5SDbXlkRV7upu6ZIbNB1yDCIDK4H2xL7IYj9UKSQopaWFaDAR9qivLMPf5RO93J0CLP6oteLoFCq5DQGE3SwyqAw9fjoQs91Q83D7rzxks~3w7NuGtM0IJpEhAS~umaztJ5g-vsrcklKtkc2DAm-ehacMogr-kXjLoPhiR3KJY82oO0drkW8VnRpWxFsZTorPOttXY0rqSdIHKPmMEGnOFLay2M4D19-gbY2BaoRqAsp2OXFj8VLUFw~GblIPliFk-tL0vOGMuCimd5VCwsQK7iHAsJFzBZvGrQEGHIRVB46yOAEDu8LfbRI~YMxyAFgw__";
const BOBCAT_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/XYmtPNZCE66YhTJXhMqDtJ/sandbox/7Qc2wD6DoCcbuixWmUdnmI-img-1_1771608368000_na1fn_Ym9iY2F0LWxvYWRlci1uZXc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWFltdFBOWkNFNjZZaFRKWGhNcUR0Si9zYW5kYm94LzdRYzJ3RDZEb0NjYnVpeFdtVWRubUktaW1nLTFfMTc3MTYwODM2ODAwMF9uYTFmbl9ZbTlpWTJGMExXeHZZV1JsY2kxdVpYYy5qcGc+eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=OMHt3HOt9zWRAJOg8W4QMnc72dMgmOyZ1Atz0i7-HAQTs~xlIpKp5fZuzpH7EhbDJo3k2ntRmzeImqsjbAKzVopjFqMl3cwODKzYtD1vSTGQ50~ssA939tzTH8jneLmdoz4cI9zGgm-qALr77A9emitkqgiHMSzVForLJUpD8FQsU87aPrrRKtp-aJTx-3LFkf3tnDxgHdS-qsXbw4MWxwq7rIi2Og88WuRVAYSZHYMjdzxkVNfRlM-bsLraVhIV04J0u6KVCsKEE1RTNSKvT3drDVfrSSpsSwZvhSdlkFTBTMqOJLRUBhavXH~RcD0wsDXFan2c1D6erKOHqDb9~Q__";
const JCB_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/XYmtPNZCE66YhTJXhMqDtJ/sandbox/zW9XQCuqHYyaZv6YgdKhPY-img-2_1771604223000_na1fn_amNiLWJhY2tob2U.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWFltdFBOWkNFNjZZaFRKWGhNcUR0Si9zYW5kYm94L3pXOVhRQ3VxSFl5YVp2NllnZEtoUFktaW1nLTJfMTc3MTYwNDIyMzAwMF9uYTFmbl9hbU5pTFdKaFkydG9iMlUuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=H4ITORKg18pD0uluqscDzGA~9425Oy7pEvcCk23GQCP6PUNbDaltgah~7T-8ztq2Ad~3sTmIKM7blxL8-48aiehlKnE-bfvv4BfjsV79JyVxn2bR~F4y7uQXn3PBT02dc0Fi8uqawt04v0i4Qcg4NOksQM4RbMZh5W34gZdfDQ1Sz-1G0pXzui~Erlyz8rCnUqKDmczgULX1yznh25mKFa6-n-HVse-Frkbj6uye50MFMCplqKkpUBnJVduf5REZwmZLAdPtgCMNXghLeW6GpDhTSlhQMFfpCZRFoXaQhwk9IWrcMGne3ntwvmfwbQdUEKqW6V-KjMnXmE~IWBB7GQ__";

const products = [
  {
    image: TRACKS_IMAGE,
    category: "عرجات",
    title: "قطع غيار العرجات",
    subtitle: "جنازير · بكرات · عجلات قيادة",
    items: ["جنازير فولاذية", "بكرات علوية وسفلية", "عجلات القيادة", "عجلات الدعم", "مشابك الجنازير"],
  },
  {
    image: EXCAVATOR_IMAGE,
    category: "شيولات",
    title: "قطع غيار الشيولات",
    subtitle: "هيدروليك · محركات · ذراع",
    items: ["أسطوانات هيدروليكية", "مضخات هيدروليكية", "أسنان الدلو", "محركات الحركة", "ذراع الحفر"],
  },
  {
    image: BULLDOZER_IMAGE,
    category: "دركترات",
    title: "قطع غيار الدركترات",
    subtitle: "شفرات · هياكل · محركات",
    items: ["شفرات الجرافة", "أطواق الجرافة", "محركات الدوران", "أنظمة التحويل", "هياكل الإطار"],
  },
  {
    image: BOBCAT_IMAGE,
    category: "بوبكات",
    title: "قطع غيار البوبكات",
    subtitle: "مضخات · أسطوانات · محركات",
    items: ["أسطوانات هيدروليكية", "مضخات الحركة", "أسنان الدلو", "عجلات وإطارات", "نظام الارتفاع"],
  },
  {
    image: JCB_IMAGE,
    category: "بوكلينات",
    title: "قطع غيار البوكلينات",
    subtitle: "ذراع · مضخات · هيدروليك",
    items: ["ذراع الحفر", "أسنان الدلو", "أسطوانات هيدروليكية", "مضخات الحركة", "نظام التحويل"],
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

export default function ProductsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="products" className="relative bg-[oklch(0.10_0.005_260)] py-24 overflow-hidden">
      {/* رقم خلفي */}
      <span className="bg-number" style={{ top: "50%", right: "-2rem", transform: "translateY(-50%)" }}>
        04
      </span>

      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* رأس القسم */}
        <div
          className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="yellow-bar h-8" />
            <span className="text-[oklch(0.87_0.19_88)] font-semibold uppercase tracking-widest text-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>
              منتجاتنا
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight" style={{ fontFamily: 'Cairo, sans-serif' }}>
              تخصصنا في
              <br />
              <span className="text-[oklch(0.87_0.19_88)]">خمسة أنواع رئيسية</span>
            </h2>
            <p className="text-white/60 max-w-md text-lg" style={{ fontFamily: 'Tajawal, sans-serif' }}>
              نغطي جميع احتياجاتك من قطع الغيار للمعدات الثقيلة
            </p>
          </div>
        </div>

        {/* بطاقات المنتجات */}
        <div className="grid lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div
              key={i}
              className={`card-industrial group overflow-hidden transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${0.1 + i * 0.15}s` }}
            >
              {/* الصورة */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.005_260)] via-[oklch(0.10_0.005_260/0.3)] to-transparent" />
                {/* شارة الفئة */}
                <div className="absolute top-4 right-4 bg-[oklch(0.87_0.19_88)] text-[oklch(0.10_0.005_260)] px-3 py-1 rounded text-sm font-black" style={{ fontFamily: 'Cairo, sans-serif' }}>
                  {product.category}
                </div>
              </div>

              {/* المحتوى */}
              <div className="p-6">
                <h3 className="text-xl font-black text-white mb-1" style={{ fontFamily: 'Cairo, sans-serif' }}>
                  {product.title}
                </h3>
                <p className="text-[oklch(0.87_0.19_88)] text-sm font-medium mb-4" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                  {product.subtitle}
                </p>

                {/* قائمة القطع */}
                <ul className="space-y-2 mb-6">
                  {product.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-white/60 text-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.87_0.19_88)] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* زر الاستفسار */}
                <a
                  href="https://wa.me/966563010375"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[oklch(0.87_0.19_88)] font-bold text-sm group-hover:gap-3 transition-all duration-300"
                  style={{ fontFamily: 'Cairo, sans-serif' }}
                >
                  استفسر الآن
                  <ArrowLeft size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
