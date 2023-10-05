export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: " Apotheose Project @O'clock",
    techs: ["React", "Symfony", "..."],
    link: "",
    isComingSoon: true
  },
  {
    title: "PokedexWeb",
    techs: ["React", "Redux", "Laravel", "PostgreSQL", "Docker", "Vite"],
    link: "https://pokedex-web-yannicksendrey.vercel.app/",
  },
  {
    title: "Mock Reddit Client",
    techs: ["React", "Redux", "Vite"],
    link: "https://mock-reddit-client-yannicksendrey.vercel.app/",
  },
];

export default projects;
