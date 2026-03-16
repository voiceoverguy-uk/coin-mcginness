export interface Film {
  slug: string
  title: string
  year: string
  poster: string
  gallery: string[]
  description: string
  type: string
  soundcloudEmbed?: string
  soundcloudUrl?: string
  trailerUrl?: string
}

export const films: Film[] = [
  {
    slug: "girl-next",
    title: "Girl Next",
    year: "",
    poster: "/images/films/girl-next.jpg",
    gallery: [
      "/images/films/girl-next.jpg",
      "/images/films/girl-next-2.jpg",
      "/images/films/girl-next-3.jpg",
      "/images/films/giorl-next-3.jpg"
    ],
    description: "Original score composed for this feature film. An award-winning production recognised at multiple international film festivals including Barcelona, Anatolia and Beyond the Curve.",
    type: "Feature Film",
    soundcloudEmbed: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A1516240744&color=%231d0c0b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    soundcloudUrl: "https://on.soundcloud.com/PVaLCKYsQn5jrr71J4",
    trailerUrl: "https://www.youtube.com/watch?v=nj5IAkSOe6k"
  },
  {
    slug: "sacrilege",
    title: "Sacrilege",
    year: "",
    poster: "/images/films/sacrilege-film-poster.jpg",
    gallery: [
      "/images/films/sacrilege-film-poster.jpg",
      "/images/films/sacrilege.jpg",
      "/images/films/sacrilege-2.jpg",
      "/images/films/sacrilege-album-cover.jpg",
      "/images/films/sacrilege-premiere2.jpg"
    ],
    description: "Original score composed for this feature film. Nominated for an RTS West of England Award for composition.",
    type: "Feature Film",
    soundcloudEmbed: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2205712412&color=%231d0c0b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    soundcloudUrl: "https://on.soundcloud.com/ZZCbP0hQx68hNjYNdl",
    trailerUrl: "https://www.youtube.com/watch?v=PRGUPk2dAmc"
  },
  {
    slug: "the-quantum-devil",
    title: "The Quantum Devil",
    year: "",
    poster: "/images/films/quantum-devil-poster.jpg",
    gallery: [
      "/images/films/quantum-devil-poster.jpg",
      "/images/films/the-quantum-devil.jpg",
      "/images/films/quantum-devil.jpg",
      "/images/films/quantum-devil-2.jpg",
      "/images/films/quantum-devil-3.jpg",
      "/images/films/qd-actor-premeire.jpg"
    ],
    description: "Original score composed for this feature film. A sci-fi thriller exploring the boundaries of quantum physics and human consciousness.",
    type: "Feature Film",
    soundcloudEmbed: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2205688589&color=%231d0c0b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    soundcloudUrl: "https://on.soundcloud.com/h1i1Zb1B80ZTtUDrD1",
    trailerUrl: "https://www.youtube.com/watch?v=t4i1PSA2f88"
  },
  {
    slug: "angels-tide",
    title: "Angel's Tide",
    year: "",
    poster: "/images/films/angel-s-tide.jpg",
    gallery: [
      "/images/films/angel-s-tide.jpg"
    ],
    description: "Original score composed for this feature film.",
    type: "Feature Film",
    soundcloudEmbed: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2205698660&color=%231d0c0b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    soundcloudUrl: "https://on.soundcloud.com/fSdr7J0lq0rvBtz5FR",
    trailerUrl: "https://www.youtube.com/watch?v=-rl6PjlLM1A"
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
      "/images/films/thedarksideofsociety-poster-large.jpg",
      "/images/films/DSOG.jpg"
    ],
    description: "Original score composed for this feature film. A dramatic exploration of society's hidden undercurrents.",
    type: "Feature Film",
    soundcloudEmbed: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A1667688787&color=%231d0c0b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    soundcloudUrl: "https://on.soundcloud.com/6hSUGzBGSrfoc9fZUj",
    trailerUrl: "https://www.youtube.com/watch?v=izKziLTgqoM"
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
    type: "Feature Film",
    trailerUrl: "https://www.youtube.com/watch?v=BTZ-d53jyiw"
  }
]
