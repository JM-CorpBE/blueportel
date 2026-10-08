import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AccommodationGallery from "../accommodations/AccommodationGallery";
import AccommodationFeatures from "../accommodations/AccommodationFeatures";
import { accommodations } from "../../data/accommodations";
import HomeFAQ from "../home/HomeFAQ";
import type { FAQItem } from "../home/HomeFAQ";
import { JsonLdVacationRental } from "../seo/JsonLdVacationRental";
import { JsonLdFAQPage } from "../seo/JsonLdFAQPage";
import type { Locale } from "../../i18n/locales";

type PrestigePageProps = {
  locale: string;
  labels: {
    backLabel: string;
    badge: string;
    tagline: string;
    bookLabel: string;
    discoverGalleryLabel: string;
    capacity: string;
    bedrooms: string;
    included: string;
    notIncluded: string;
    equipment: string;
    faqTitle: string;
    faqSubtitle: string;
    faqItems: FAQItem[];
    ctaTitle: string;
    ctaSubtitle: string;
  };
};

export default function PrestigePage({ locale, labels }: PrestigePageProps) {
  const prestige = accommodations.prestige;
  const bookUrl = prestige.bookingUrl[locale as "fr" | "en" | "nl"] ?? prestige.bookingUrl.fr;

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <JsonLdVacationRental locale={locale as Locale} />
      <JsonLdFAQPage items={labels.faqItems} />
      {/* Breadcrumb */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-6">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li>
                <Link href={`/${locale}`} className="hover:text-blue-600 transition-colors">
                  {locale === "fr" ? "Accueil" : locale === "en" ? "Home" : "Home"}
                </Link>
              </li>
              <li aria-hidden="true">·</li>
              <li className="font-medium text-slate-900">BluePortel Prestige</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Gallery */}
            <AccommodationGallery
              images={prestige.images}
              name={prestige.name}
              hasPlaceholder={false}
            />

            {/* Info */}
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                    BluePortel
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                    {prestige.badge}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  {locale === "en" ? "Prestige — Seafront Mobile Home for 6" : locale === "nl" ? "Prestige — Stacaravan aan zee voor 6" : "Prestige — Mobil-home 6 personnes face à la mer"}
                  <span className="mt-2 block text-base sm:text-lg font-normal text-slate-500">
                    {prestige.tagline}
                  </span>
                </h1>
              </div>

              {/* Key specs */}
              <div className="flex flex-wrap gap-3">
                {[
                  `${prestige.capacity} ${labels.capacity}`,
                  `${prestige.bedrooms} ${labels.bedrooms}`,
                  locale === "en" ? "Sea view" : locale === "nl" ? "Zeezicht" : "Vue mer",
                  locale === "en" ? "Terrace 12 m²" : locale === "nl" ? "Terras 12 m²" : "Terrasse 12 m²",
                  locale === "en" ? "Air conditioning" : locale === "nl" ? "Airco" : "Climatisation",
                ].map((spec) => (
                  <span
                    key={spec}
                    className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Features */}
              <AccommodationFeatures
                accommodation={prestige}
                labels={{ included: labels.included, notIncluded: labels.notIncluded }}
              />

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href={bookUrl}
                  target="_blank"
                  rel="noopener nofollow"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  {labels.bookLabel}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={`/${locale}/pages/galerie-photo`}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-6 py-3.5 text-sm font-bold text-slate-700 transition-all hover:border-blue-300 hover:text-blue-600 active:scale-[0.98]"
                >
                  {labels.discoverGalleryLabel}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <HomeFAQ
        title={labels.faqTitle}
        subtitle={labels.faqSubtitle}
        items={labels.faqItems}
      />

      {/* Que faire autour */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center">
            {locale === "nl" ? "Wat te doen in de buurt" : locale === "en" ? "What to do nearby" : "Que faire autour"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href={`/${locale}/blog/${locale === "nl" ? "nausicaa-bezoeken-complete-gids" : locale === "en" ? "visit-nausicaa-complete-guide" : "visiter-nausicaa-guide-complet"}`}
              className="rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-slate-900 mb-1">Nausicaá</p>
              <p className="text-sm text-slate-500">
                {locale === "nl" ? "Complete gids: tickets, openingsuren & tips" : locale === "en" ? "Complete guide: tickets, hours & tips" : "Guide complet : tarifs, horaires et astuces"}
              </p>
            </Link>
            <Link
              href={`/${locale}/blog/${locale === "nl" ? "wat-te-doen-opaalkust" : locale === "en" ? "things-to-do-opal-coast" : "que-faire-cote-opale"}`}
              className="rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-slate-900 mb-1">
                {locale === "nl" ? "25 activiteiten" : locale === "en" ? "25 activities" : "25 incontournables"}
              </p>
              <p className="text-sm text-slate-500">
                {locale === "nl" ? "Wat te doen aan de Opaalkust" : locale === "en" ? "Things to do on the Opal Coast" : "Que faire sur la Côte d'Opale"}
              </p>
            </Link>
            <Link
              href={`/${locale}/blog/${locale === "nl" ? "mooiste-stranden-opaalkust" : locale === "en" ? "best-beaches-opal-coast" : "plus-belles-plages-cote-opale"}`}
              className="rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-slate-900 mb-1">
                {locale === "nl" ? "Mooiste stranden" : locale === "en" ? "Best beaches" : "Plus belles plages"}
              </p>
              <p className="text-sm text-slate-500">
                {locale === "nl" ? "De 12 mooiste stranden, gerangschikt" : locale === "en" ? "The 12 best beaches, ranked" : "Les 12 plus belles plages, classées"}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 p-8 sm:p-12 text-center shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{labels.ctaTitle}</h2>
            <p className="text-blue-100 mb-8 max-w-lg mx-auto">{labels.ctaSubtitle}</p>
            <Link
              href={bookUrl}
              target="_blank"
              rel="noopener nofollow"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-blue-700 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
            >
              {labels.bookLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
