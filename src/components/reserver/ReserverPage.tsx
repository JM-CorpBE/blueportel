import Link from "next/link";
import Image from "next/image";

import type { Locale } from "../../i18n/locales";

/** Liens externes de réservation par plateforme. */
export const bookingPlatforms: Record<
  "prestige" | "horizon",
  { booking?: string; airbnb?: string }
> = {
  prestige: {
    booking: "https://www.booking.com/hotel/fr/blueportel.fr.html",
    airbnb: "https://www.airbnb.com/rooms/1389190512266062716",
  },
  horizon: {
    // Fiche Booking commune à la propriété ; pas encore d'annonce Airbnb dédiée.
    booking: "https://www.booking.com/hotel/fr/blueportel.fr.html",
  },
};

type ReserverCopy = {
  metaTitle: string;
  metaDescription: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  pretitle: string;
  title: string;
  description: string;
  benefits: string[];
  prestigeName: string;
  prestigeDetails: string;
  horizonName: string;
  horizonDetails: string;
  bookingLabel: string;
  airbnbLabel: string;
  availabilityLabel: string;
  viewLabel: string;
};

export const reserverCopy: Record<Locale, ReserverCopy> = {
  fr: {
    metaTitle: "Réserver | Blueportel — mobil-home face à la mer, Le Portel",
    metaDescription:
      "Réservez votre mobil-home Blueportel face à la mer à Le Portel sur Booking.com ou Airbnb. Deux hébergements au choix : Prestige (6 pers.) et Horizon (4 pers.). Contact direct avec les propriétaires.",
    breadcrumbHome: "Accueil",
    breadcrumbCurrent: "Réserver",
    pretitle: "Réservation",
    title: "Réservez votre séjour face à la mer",
    description:
      "Choisissez votre hébergement et réservez en quelques clics sur Booking.com ou Airbnb. Pour toute question avant de réserver (dates, lits bébé, arrivée tardive…), contactez-nous directement : nous répondons en général dans la journée.",
    benefits: [
      "Réservation simple et rapide sur Booking.com ou Airbnb",
      "Paiement sécurisé via la plateforme de votre choix",
      "Contact direct avec les propriétaires, avant et pendant le séjour",
    ],
    prestigeName: "Blueportel Prestige",
    prestigeDetails: "6 personnes · 3 chambres · terrasse couverte vue mer · climatisation",
    horizonName: "Blueportel Horizon",
    horizonDetails: "4 personnes · 2 chambres · même emplacement face à la mer",
    bookingLabel: "Réserver sur Booking.com",
    airbnbLabel: "Réserver sur Airbnb",
    availabilityLabel: "Voir les disponibilités",
    viewLabel: "Découvrir l'hébergement",
  },
  en: {
    metaTitle: "Book | Blueportel — seafront mobile home, Le Portel",
    metaDescription:
      "Book your Blueportel seafront mobile home in Le Portel on Booking.com or Airbnb. Two accommodations to choose from: Prestige (sleeps 6) and Horizon (sleeps 4). Direct contact with the owners.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Book",
    pretitle: "Booking",
    title: "Book your seafront stay",
    description:
      "Choose your accommodation and book in a few clicks on Booking.com or Airbnb. For any question before booking (dates, cots, late arrival…), contact us directly — we usually reply within the day.",
    benefits: [
      "Quick and easy booking on Booking.com or Airbnb",
      "Secure payment via the platform of your choice",
      "Direct contact with the owners, before and during your stay",
    ],
    prestigeName: "Blueportel Prestige",
    prestigeDetails: "Sleeps 6 · 3 bedrooms · covered sea-view terrace · air conditioning",
    horizonName: "Blueportel Horizon",
    horizonDetails: "Sleeps 4 · 2 bedrooms · same seafront location",
    bookingLabel: "Book on Booking.com",
    airbnbLabel: "Book on Airbnb",
    availabilityLabel: "Check availability",
    viewLabel: "View the accommodation",
  },
  nl: {
    metaTitle: "Reserveren | Blueportel — stacaravan aan zee, Le Portel",
    metaDescription:
      "Reserveer uw Blueportel-stacaravan aan zee in Le Portel op Booking.com of Airbnb. Twee accommodaties: Prestige (6 pers.) en Horizon (4 pers.). Rechtstreeks contact met de eigenaars.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Reserveren",
    pretitle: "Reservering",
    title: "Reserveer uw verblijf aan zee",
    description:
      "Kies uw accommodatie en reserveer in een paar klikken op Booking.com of Airbnb. Voor vragen vóór het boeken (data, kinderbedje, late aankomst…) kunt u ons rechtstreeks contacteren — we antwoorden meestal binnen de dag.",
    benefits: [
      "Snel en eenvoudig reserveren op Booking.com of Airbnb",
      "Veilige betaling via het platform van uw keuze",
      "Rechtstreeks contact met de eigenaars, vóór en tijdens uw verblijf",
    ],
    prestigeName: "Blueportel Prestige",
    prestigeDetails: "6 personen · 3 slaapkamers · overdekt terras met zeezicht · airco",
    horizonName: "Blueportel Horizon",
    horizonDetails: "4 personen · 2 slaapkamers · dezelfde ligging aan zee",
    bookingLabel: "Reserveren op Booking.com",
    airbnbLabel: "Reserveren op Airbnb",
    availabilityLabel: "Beschikbaarheid bekijken",
    viewLabel: "Bekijk de accommodatie",
  },
};


export default function ReserverPage({ locale }: { locale: Locale }) {
  const copy = reserverCopy[locale];

  return (
    <div className="flex min-h-screen justify-center bg-white font-sans w-full overflow-x-hidden">
      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center py-6 px-3 sm:py-8 sm:px-4 md:py-12 md:px-6 lg:py-16 lg:px-8 bg-white">
        <nav aria-label="Breadcrumb" className="w-full max-w-7xl mb-4 sm:mb-6">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 px-3 sm:px-4">
            <li>
              <Link href={`/${locale}`} className="hover:text-blue-500 transition-colors">
                {copy.breadcrumbHome}
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium" aria-current="page">
              {copy.breadcrumbCurrent}
            </li>
          </ol>
        </nav>

        <header className="w-full max-w-3xl text-center mb-8 sm:mb-10">
          <p className="text-xs sm:text-sm text-blue-500 font-semibold uppercase tracking-wide mb-2">
            {copy.pretitle}
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight mb-4">
            {copy.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-600">{copy.description}</p>
        </header>

        <section className="w-full max-w-xl mb-12 sm:mb-16">
          <ul className="flex flex-col gap-2">
            {copy.benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm sm:text-base text-gray-700"
              >
                <span className="text-blue-500 font-bold mt-0.5" aria-hidden="true">✓</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Prestige */}
          <article className="flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            <div className="aspect-[16/9]">
              <Image
                src="/galerie/blueportel-terrasse-couverte-1920x1280.jpg"
                alt={copy.prestigeName}
                width={800}
                height={450}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col flex-1 p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                {copy.prestigeName}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mb-5">{copy.prestigeDetails}</p>
              <div className="flex flex-col gap-3 mt-auto">
                {bookingPlatforms.prestige.booking && (
                  <a
                    href={bookingPlatforms.prestige.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white font-semibold px-5 py-3 text-sm sm:text-base hover:bg-blue-700 transition-colors"
                  >
                    {copy.bookingLabel}
                  </a>
                )}
                {bookingPlatforms.prestige.airbnb && (
                  <a
                    href={bookingPlatforms.prestige.airbnb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-pink-500 text-pink-600 font-semibold px-5 py-3 text-sm sm:text-base hover:bg-pink-50 transition-colors"
                  >
                    {copy.airbnbLabel}
                  </a>
                )}
                <Link
                  href={`/${locale}/pages/disponibilites`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 text-gray-700 font-semibold px-5 py-3 text-sm sm:text-base hover:bg-gray-50 transition-colors"
                >
                  {copy.availabilityLabel}
                </Link>
                <Link
                  href={`/${locale}/pages/prestige`}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800 text-center transition-colors"
                >
                  {copy.viewLabel} →
                </Link>
              </div>
            </div>
          </article>

          {/* Horizon */}
          <article className="flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            <div className="aspect-[16/9]">
              <Image
                src="/galerie/blueportel-vue-mer-cote-opale.jpg"
                alt={copy.horizonName}
                width={800}
                height={450}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col flex-1 p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                {copy.horizonName}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mb-5">{copy.horizonDetails}</p>
              <div className="flex flex-col gap-3 mt-auto">
                {bookingPlatforms.horizon.booking && (
                  <a
                    href={bookingPlatforms.horizon.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white font-semibold px-5 py-3 text-sm sm:text-base hover:bg-blue-700 transition-colors"
                  >
                    {copy.bookingLabel}
                  </a>
                )}
                {bookingPlatforms.horizon.airbnb && (
                  <a
                    href={bookingPlatforms.horizon.airbnb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-pink-500 text-pink-600 font-semibold px-5 py-3 text-sm sm:text-base hover:bg-pink-50 transition-colors"
                  >
                    {copy.airbnbLabel}
                  </a>
                )}
                <Link
                  href={`/${locale}/pages/disponibilites`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 text-gray-700 font-semibold px-5 py-3 text-sm sm:text-base hover:bg-gray-50 transition-colors"
                >
                  {copy.availabilityLabel}
                </Link>
                <Link
                  href={`/${locale}/pages/horizon`}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800 text-center transition-colors"
                >
                  {copy.viewLabel} →
                </Link>
              </div>
            </div>
          </article>
        </section>

        {/* Que faire autour — maillage interne */}
        <section className="w-full max-w-4xl mt-12 sm:mt-16">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 text-center">
            {locale === "nl" ? "Wat te doen in de buurt" : locale === "en" ? "What to do nearby" : "Que découvrir pendant votre séjour"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href={`/${locale}/blog/${locale === "nl" ? "nausicaa-bezoeken-complete-gids" : locale === "en" ? "visit-nausicaa-complete-guide" : "visiter-nausicaa-guide-complet"}`}
              className="rounded-xl border border-gray-100 p-5 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-gray-900 mb-1">Nausicaá</p>
              <p className="text-sm text-gray-500">
                {locale === "nl" ? "Complete gids: tickets & tips" : locale === "en" ? "Complete guide: tickets & tips" : "Guide complet : tarifs et astuces"}
              </p>
            </Link>
            <Link
              href={`/${locale}/blog/${locale === "nl" ? "wat-te-doen-opaalkust" : locale === "en" ? "things-to-do-opal-coast" : "que-faire-cote-opale"}`}
              className="rounded-xl border border-gray-100 p-5 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-gray-900 mb-1">
                {locale === "nl" ? "25 activiteiten" : locale === "en" ? "25 activities" : "25 incontournables"}
              </p>
              <p className="text-sm text-gray-500">
                {locale === "nl" ? "Opaalkust ontdekken" : locale === "en" ? "Discover the Opal Coast" : "Côte d'Opale"}
              </p>
            </Link>
            <Link
              href={`/${locale}/blog/${locale === "nl" ? "mooiste-stranden-opaalkust" : locale === "en" ? "best-beaches-opal-coast" : "plus-belles-plages-cote-opale"}`}
              className="rounded-xl border border-gray-100 p-5 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-gray-900 mb-1">
                {locale === "nl" ? "Mooiste stranden" : locale === "en" ? "Best beaches" : "Plus belles plages"}
              </p>
              <p className="text-sm text-gray-500">
                {locale === "nl" ? "Top 12 gerangschikt" : locale === "en" ? "Top 12 ranked" : "Top 12 classées"}
              </p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
