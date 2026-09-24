export const services = [
  {
    id: "1",
    slug: "unterhaltsreinigung",
    image: "/assets/office.jpg",
    title: "Unterhaltsreinigung",
    description: "Regelmäßige Sauberkeit für Büros, Praxen und Gewerbeflächen.",
    intro: "Eine zuverlässig gepflegte Arbeitsumgebung – abgestimmt auf Ihre Abläufe und Öffnungszeiten.",
    benefits: ["Individueller Reinigungsplan", "Flexible Reinigungsintervalle", "Feste und geschulte Teams"],
  },
  {
    id: "2",
    slug: "industriereinigung",
    image: "/assets/hero.jpg",
    title: "Industriereinigung",
    description: "Sichere und gründliche Pflege anspruchsvoller Produktionsbereiche.",
    intro: "Professionelle Reinigung für Produktionshallen, Maschinenumfelder und belastete Gewerbeflächen.",
    benefits: ["Auf Ihren Betrieb abgestimmte Abläufe", "Sorgfältige Flächen- und Hallenreinigung", "Flexible Einsatzzeiten"],
  },
  {
    id: "3",
    slug: "glasreinigung",
    image: "/assets/glass.jpg",
    title: "Glasreinigung",
    description: "Streifenfreie Fenster und Glasflächen für einen klaren Eindruck.",
    intro: "Klare Sicht und ein gepflegter erster Eindruck für Fenster, Glasfassaden und Trennwände.",
    benefits: ["Streifenfreie Ergebnisse", "Innen- und Außenreinigung", "Passende Intervalle nach Bedarf"],
  },
  {
    id: "4",
    slug: "grundreinigung",
    image: "/assets/office.jpg",
    title: "Grundreinigung",
    description: "Intensive Reinigung bis ins Detail – einmalig oder nach Bedarf.",
    intro: "Gründliche Pflege schwer erreichbarer und stark beanspruchter Bereiche bis ins Detail.",
    benefits: ["Intensive Oberflächenreinigung", "Passend für viele Bodenarten", "Einmalig oder regelmäßig"],
  },
  {
    id: "5",
    slug: "baureinigung",
    image: "/assets/renovation.jpg",
    title: "Baureinigung",
    description: "Bezugsfertige Sauberkeit nach Neubau, Umbau oder Renovierung.",
    intro: "Vom groben Bauschmutz bis zur bezugsfertigen Übergabe nach Neubau oder Renovierung.",
    benefits: ["Bauzwischen- und Bauendreinigung", "Entfernung von Staub und Rückständen", "Termingerechte Übergabe"],
  },
  {
    id: "6",
    slug: "sonderreinigung",
    image: "/assets/aalen.jpg",
    title: "Sonderreinigung",
    description: "Flexible Speziallösungen für besondere Anforderungen.",
    intro: "Individuelle Reinigungskonzepte für Aufgaben, die über die regelmäßige Pflege hinausgehen.",
    benefits: ["Persönliche Bedarfsanalyse", "Geeignete Verfahren und Mittel", "Transparent geplante Umsetzung"],
  },
];

export function getService(slug) {
  return services.find((service) => service.slug === slug);
}
