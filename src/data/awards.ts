export interface Award {
  image: string
  title: string
  result: "Winner" | "Nominee" | "Official Selection"
  project: string
  festival: string
  year: string
  category: string
}

export const awards: Award[] = [
  {
    image: "/images/awards/best-music-in-a-film.jpg",
    title: "Best Music in a Film",
    result: "Winner",
    project: "Girl Next",
    festival: "Barcelona International Film Festival",
    year: "",
    category: "Best Music in a Film"
  },
  {
    image: "/images/awards/best-original-score.jpg",
    title: "Best Original Score",
    result: "Winner",
    project: "Girl Next",
    festival: "Beyond the Curve International Film Festival",
    year: "",
    category: "Best Original Score"
  },
  {
    image: "/images/awards/anatolia-film-festival-2.jpg",
    title: "Best Original Score",
    result: "Winner",
    project: "Girl Next",
    festival: "Anatolia International Film Festival",
    year: "",
    category: "Best Original Score"
  },
  {
    image: "/images/awards/rts.jpg",
    title: "RTS West of England Awards",
    result: "Nominee",
    project: "Sacrilege",
    festival: "Royal Television Society",
    year: "",
    category: "Composer"
  },
  {
    image: "/images/awards/award-2.jpg",
    title: "Film Festival Recognition",
    result: "Official Selection",
    project: "Girl Next",
    festival: "International Film Festival",
    year: "",
    category: "Original Score"
  },
  {
    image: "/images/awards/girl-next-award.jpg",
    title: "Festival Award",
    result: "Winner",
    project: "Girl Next",
    festival: "Film Festival",
    year: "",
    category: "Original Score"
  },
  {
    image: "/images/awards/girl-next-film-festival-2.jpg",
    title: "Festival Selection",
    result: "Official Selection",
    project: "Girl Next",
    festival: "International Film Festival",
    year: "",
    category: "Original Score"
  },
  {
    image: "/images/awards/4d1ec20f-3b1b-4bba-a4d8-42343fb5c4d0.jpg",
    title: "Festival Recognition",
    result: "Official Selection",
    project: "",
    festival: "Film Festival",
    year: "",
    category: "Original Score"
  },
  {
    image: "/images/awards/984deaea-07bf-4656-bcaf-3a220c0352a6.jpg",
    title: "Festival Recognition",
    result: "Official Selection",
    project: "",
    festival: "Film Festival",
    year: "",
    category: "Original Score"
  }
]

export const featuredAwards = awards.filter(a => a.result === "Winner" || a.result === "Nominee").slice(0, 4)
export const wins = awards.filter(a => a.result === "Winner")
export const nominations = awards.filter(a => a.result === "Nominee")
