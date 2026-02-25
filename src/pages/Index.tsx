import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Aachen | Prince of bel Hair 2</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop Prince of bel Hair 2 in Aachen für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Aachen, Prince of bel Hair"
        />
        <link rel="canonical" href="https://princeofbelhair.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Prince of bel Hair 2 | Premium Barbershop Aachen" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Aachen."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://princeofbelhair.de" />
        <meta property="og:image" content="https://princeofbelhair.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Prince of bel Hair 2 | Premium Barbershop Aachen" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://princeofbelhair.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Prince of bel Hair 2",
            "image": "https://princeofbelhair.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Pontstraße 151a",
              "addressLocality": "Aachen",
              "postalCode": "52062",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "50.7813",
              "longitude": "6.0831"
            },
            "url": "https://princeofbelhair.de",
            "telephone": "+49 176 31141759",
            "openingHours": "Mo-Fr 10:00-19:00, Sa 10:00-17:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/princeofbelhair",
              "https://www.instagram.com/princeofbelhair"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

