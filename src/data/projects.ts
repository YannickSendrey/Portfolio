export type Project = {
  title: string;
  techs: string[];
  link: string;
  image: string;
  alt: string;
  date: string;
  description: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Apotheose Project @O'clock",
    techs: ["React", "Symfony", "..."],
    link: "",
    image: '',
    alt: '',
    date: '',
    description: '',
    isComingSoon: true
  },
  {
    title: "PokedexWeb",
    techs: ["React", "Redux", "Laravel", "PostgreSQL", "Docker", "Vite"],
    image: '/PokedexWeb.jpeg',
    alt: 'HomePage of PokedexWeb, showing some pokemons',
    date: 'September 2023',
    description: 'Solo-project built in one month (around ~50 hours). *Front-end* displaying a homepage list of pokemons which you can filter by regions deployed on Vercel. A detailed page onClick where you can consult each stat/type of a specific pokemon. *Back-end API* handling a user registration/connection with JWT tokens and a CRUD (add to favorite/remove from favorite). API *dockerized* to deploy it on Render',
    link: "https://pokedex-web-yannicksendrey.vercel.app/",
  },
  {
    title: "Mock Reddit Client",
    techs: ["React", "Redux", "Vite"],
    image: '/MockRedditClient.jpeg',
    alt: 'homePage of MockRedditClient, show a mock article about React-redux',
    date: 'July-August 2023',
    description: 'Solo-project built in ~25 hours. Only a Front-end using *React* to display a user-friendly interface where you can up/downvote an article using *Redux* state handling. You can also access to a detailed article page where you can also read comments and up/downvote them. Deployed on Vercel.',
    link: "https://mock-reddit-client-yannicksendrey.vercel.app/",
  },
];

export default projects;
