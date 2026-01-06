export type Social = {
  name: string;
  href: string;
  icon: {
    light: string;
    dark: string;
  };
};

export const socials: Social[] = [
  {
    name: "Email",
    href: "mailto:navya.sriv.1110@gmail.com",
    icon: {
      light: "/socials/email-dark.png",
      dark: "/socials/email-light.png",
    },
  },
  {
    name: "GitHub",
    href: "https://github.com/codeitnav/",
    icon: {
      light: "/socials/github-dark.png",
      dark: "/socials/github-light.png",
    },
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/navya-srivastava2810/",
    icon: {
      light: "/socials/linkedin-dark.png",
      dark: "/socials/linkedin-light.png",
    },
  },
];
