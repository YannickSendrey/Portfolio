type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "yannicksendrey@gmail.com",
  title: "Hi, I’m Yannick 👋",
  description:
    "Bonjour, i'm a *french fullstack developer* currently looking for an *apprenticeship contract* as soon as January 2024. So far, I am mostly working with *React* (mainly with *Redux*), *Laravel, Symfony*, but I'm also practicing day to day on other technologies such as *TypeScript, NodeJS*",
  socials: [
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/yannick-sendrey/",
    },
    {
      label: "Github",
      link: "https://github.com/YannickSendrey",
    },
  ],
};

export default presentation;
