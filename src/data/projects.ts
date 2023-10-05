export type Project = {
  title: string;
  techs: string[];
  link: string;
  image: string;
  alt: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: " Apotheose Project @O'clock",
    techs: ["React", "Symfony", "..."],
    link: "",
    image: '',
    alt: '',
    isComingSoon: true
  },
  {
    title: "PokedexWeb",
    techs: ["React", "Redux", "Laravel", "PostgreSQL", "Docker", "Vite"],
    image: '/PokedexWeb.jpeg',
    alt: 'HomePage of PokedexWeb, showing some pokemons',
    link: "https://pokedex-web-yannicksendrey.vercel.app/",
  },
  {
    title: "Mock Reddit Client",
    techs: ["React", "Redux", "Vite"],
    image: '/MockRedditClient.jpeg',
    alt: 'homePage of MockRedditClient, show a mock article about React-redux',
    link: "https://mock-reddit-client-yannicksendrey.vercel.app/",
  },
];

export default projects;
