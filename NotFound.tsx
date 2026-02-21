/**
 * Schema — البيانات المنظمة (Structured Data)
 * تساعد محركات البحث على فهم محتوى الموقع بشكل أفضل
 */

export default function Schema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "آليات الديزل الحديث",
    "image": "https://aliyat-aldiesel.manus.space/logo.png",
    "description": "متخصصون في قطع غيار المعدات الثقيلة من عرجات وشيولات ودركترات وبوكلينات وبوبكات",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "المنطقة الصناعية",
      "addressLocality": "جازان",
      "addressCountry": "SA"
    },
    "telephone": "0563010375",
    "email": "AlyatAldiesel@gmail.com",
    "url": "https://aliyat-aldiesel.manus.space",
    "priceRange": "$$",
    "areaServed": "SA",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.facebook.com",
      "https://www.instagram.com",
      "https://www.twitter.com"
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "آليات الديزل الحديث",
    "url": "https://aliyat-aldiesel.manus.space",
    "logo": "https://aliyat-aldiesel.manus.space/logo.png",
    "description": "متخصصون في قطع غيار المعدات الثقيلة",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "0563010375",
      "contactType": "Customer Service",
      "email": "AlyatAldiesel@gmail.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
