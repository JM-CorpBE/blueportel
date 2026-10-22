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

export type ReserverCopy = {
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
  directBookingLabel: string;
  phoneLabel: string;
  emailLabel: string;
  bookingLabel: string;
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
    directBookingLabel: "Réservation directe",
    phoneLabel: "Téléphone",
    emailLabel: "Email",
    bookingLabel: "Réserver sur Booking.com",
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
    directBookingLabel: "Book direct",
    phoneLabel: "Phone",
    emailLabel: "Email",
    bookingLabel: "Book on Booking.com",
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
    directBookingLabel: "Rechtstreeks reserveren",
    phoneLabel: "Telefoon",
    emailLabel: "E-mail",
    bookingLabel: "Reserveren op Booking.com",
    viewLabel: "Bekijk de accommodatie",
  },
};
