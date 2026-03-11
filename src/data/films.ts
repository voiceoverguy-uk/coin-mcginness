export interface Film {
  slug: string
  title: string
  year: string
  poster: string
  gallery: string[]
  description: string
  type: string
}

export const films: Film[] = [
  {
    slug: "girl-next",
    title: "Girl Next",
    year: "",
    poster: "/images/films/girl-next.jpg",
    gallery: [
      "/images/films/girl-next.jpg",
      "/images/films/girl-next.jpeg",
      "/images/films/girl-next-2.jpeg"
    ],
    description: "Original score composed for this feature film. An award-winning production recognised at multiple international film festivals including Barcelona, Anatolia and Beyond the Curve.",
    type: "Feature Film"
  },
  {
    slug: "sacrilege",
    title: "Sacrilege",
    year: "",
    poster: "/images/films/sacrilege-film-poster.jpeg",
    gallery: [
      "/images/films/sacrilege-film-poster.jpeg",
      "/images/films/sac.jpeg",
      "/images/films/sacrilege-album-cover.jpeg",
      "/images/films/sacrilege-premiere.jpg",
      "/images/films/sacrilege-premiere2.jpg"
    ],
    description: "Original score composed for this feature film. Nominated for an RTS West of England Award for composition.",
    type: "Feature Film"
  },
  {
    slug: "the-quantum-devil",
    title: "The Quantum Devil",
    year: "",
    poster: "/images/films/856317-the-quantum-devil-0-500-0-750-crop.jpg",
    gallery: [
      "/images/films/856317-the-quantum-devil-0-500-0-750-crop.jpg",
      "/images/films/qd1.jpeg",
      "/images/films/qd2.jpeg",
      "/images/films/qd-actor-premeire.jpg"
    ],
    description: "Original score composed for this feature film. A sci-fi thriller exploring the boundaries of quantum physics and human consciousness.",
    type: "Feature Film"
  },
  {
    slug: "angels-tide",
    title: "Angel's Tide",
    year: "",
    poster: "/images/films/angel-s-tide.jpeg",
    gallery: [
      "/images/films/angel-s-tide.jpeg"
    ],
    description: "Original score composed for this feature film.",
    type: "Feature Film"
  },
  {
    slug: "cash",
    title: "Cash",
    year: "",
    poster: "/images/films/cash.jpg",
    gallery: [
      "/images/films/cash.jpg"
    ],
    description: "Original score composed for this feature film.",
    type: "Feature Film"
  },
  {
    slug: "the-dark-side-of-society",
    title: "The Dark Side of Society",
    year: "",
    poster: "/images/films/thedarksideofsociety-poster-large.jpg",
    gallery: [
      "/images/films/thedarksideofsociety-poster-large.jpg"
    ],
    description: "Original score composed for this feature film. A dramatic exploration of society's hidden undercurrents.",
    type: "Feature Film"
  },
  {
    slug: "the-impact",
    title: "The Impact",
    year: "2022",
    poster: "/images/films/the-impact-2022.jpg",
    gallery: [
      "/images/films/the-impact-2022.jpg"
    ],
    description: "Original score composed for this production.",
    type: "Feature Film"
  }
]
