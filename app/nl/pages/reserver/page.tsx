import type { Metadata } from "next";

import ReserverPage from "../../../../src/components/reserver/ReserverPage";
import { reserverCopy } from "../../../../src/components/reserver/reserver-data";

export const metadata: Metadata = {
  title: reserverCopy.nl.metaTitle,
  description: reserverCopy.nl.metaDescription,
  alternates: {
    canonical: "https://blueportel.fr/nl/pages/reserver",
    languages: {
      "fr-FR": "https://blueportel.fr/fr/pages/reserver",
      "en-GB": "https://blueportel.fr/en/pages/reserver",
      "nl-NL": "https://blueportel.fr/nl/pages/reserver",
      "x-default": "https://blueportel.fr/fr/pages/reserver",
    },
  },
};

export default function Page() {
  return <ReserverPage locale="nl" />;
}
