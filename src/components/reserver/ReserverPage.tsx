"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import type { Locale } from "../../i18n/locales";
import { bookingPlatforms, reserverCopy, type ReserverCopy } from "./reserver-data";


function DirectBookingDropdown({ copy }: { copy: ReserverCopy }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 text-white font-semibold px-5 py-3 text-sm sm:text-base hover:bg-emerald-700 transition-colors"
      >
        {copy.directBookingLabel}
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="mt-2 rounded-xl border border-gray-200 bg-white shadow-lg p-4 flex flex-col gap-3">
          <a
            href="tel:+33745324836"
            className="flex items-center gap-3 text-sm text-gray-700 hover:text-emerald-700 transition-colors"
          >
            <svg className="h-4 w-4 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>
              <span className="font-medium">{copy.phoneLabel}</span>
              <span className="block text-xs text-gray-500">+33 7 45 32 48 36</span>
            </span>
          </a>
          <a
            href="tel:+32488832091"
            className="flex items-center gap-3 text-sm text-gray-700 hover:text-emerald-700 transition-colors"
          >
            <svg className="h-4 w-4 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>
              <span className="font-medium">{copy.phoneLabel}</span>
              <span className="block text-xs text-gray-500">+32 488 83 20 91</span>
            </span>
          </a>
          <a
            href="mailto:info@blueportel.fr"
            className="flex items-center gap-3 text-sm text-gray-700 hover:text-emerald-700 transition-colors"
          >
            <svg className="h-4 w-4 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>
              <span className="font-medium">{copy.emailLabel}</span>
              <span className="block text-xs text-gray-500">info@blueportel.fr</span>
            </span>
          </a>
        </div>
      )}
    </div>
  );
}

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

        <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 items-start gap-6 sm:gap-8">
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
                <DirectBookingDropdown copy={copy} />
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
                <DirectBookingDropdown copy={copy} />
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
