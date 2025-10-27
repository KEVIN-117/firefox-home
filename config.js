// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "kali",
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: true,
  timeZone: "America/La_Paz",

  // Greetings
  greetingMorning: "Good morning!",
  greetingAfternoon: "Good afternoon,",
  greetingEvening: "Good evening,",
  greetingNight: "Go to Sleep!",

  // Layout
  bentoLayout: "lists", // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: "8b05d62206f459e1d298cbe5844d7d87", // Write here your API Key
  weatherIcons: "OneDark", // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: "C", // 'F', 'C'
  language: "en", // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: "19.593",
  defaultLongitude: "-99.250",

  // Autochange
  autoChangeTheme: false,

  // Autochange by OS
  changeThemeByOS: true,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: "18:30",
  hourDarkThemeInactive: "07:00",

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: "1",
      name: "Github",
      icon: "github",
      link: "https://github.com/",
    },
    {
      id: "2",
      name: "Mail",
      icon: "mail",
      link: "https://mail.protonmail.com/",
    },
    {
      id: "3",
      name: "Todoist",
      icon: "trello",
      link: "https://todoist.com",
    },
    {
      id: "4",
      name: "Calendar",
      icon: "calendar",
      link: "https://calendar.google.com/calendar/r",
    },
    {
      id: "5",
      name: "Reddit",
      icon: "glasses",
      link: "https://reddit.com",
    },
    {
      id: "6",
      name: "Odysee",
      icon: "youtube",
      link: "https://odysee.com/",
    },
  ],

  secondButtonsContainer: [
    {
      id: "1",
      name: "Music",
      icon: "headphones",
      link: "https://open.spotify.com",
    },
    {
      id: "2",
      name: "twitter",
      icon: "twitter",
      link: "https://twitter.com/",
    },
    {
      id: "3",
      name: "bot",
      icon: "bot",
      link: "https://discord.com/app",
    },
    {
      id: "4",
      name: "Amazon",
      icon: "shopping-bag",
      link: "https://amazon.com/",
    },
    {
      id: "5",
      name: "Hashnode",
      icon: "pen-tool",
      link: "https://hashnode.com/",
    },
    {
      id: "6",
      name: "Figma",
      icon: "figma",
      link: "https://figma.com/",
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  favorites: {
    title: "Favorites",
    icon: "star",
    links: [
      {
        category: "General",
        description: "My most visited sites",
        icon: "star",
        id: "1",
        links: [
          {
            name: "z0mbi3 dots",
            link: "https://github.com/gh0stzk/dotfiles",
          },
          {
            name: "Arch Linux",
            link: "https://archlinux.org/",
          },
          {
            name: "ChatGPT",
            link: "https://chat.openai.com/",
          },
          {
            name: "MonkeyType",
            link: "https://monkeytype.com/",
          },
          {
            name: "z0mbi3 dots",
            link: "https://github.com/gh0stzk/dotfiles",
          },
          {
            name: "Arch Linux",
            link: "https://archlinux.org/",
          },
          {
            name: "ChatGPT",
            link: "https://chat.openai.com/",
          },
          {
            name: "MonkeyType",
            link: "https://monkeytype.com/",
          },
        ],
      },
      {
        category: "Streaming",
        description: "Movies and series",
        icon: "tv",
        id: "2",
        links: [
          {
            name: "YouTube",
            link: "https://www.youtube.com",
          },
          {
            name: "Netflix",
            link: "https://www.netflix.com",
          },
          {
            name: "Twitch",
            link: "https://www.twitch.tv",
          },
          {
            name: "Amazon Prime",
            link: "https://www.primevideo.com",
          },
        ],
      },
      {
        category: "Images",
        description: "Stock photo websites",
        id: "3",
        icon: "image-gallery",
        links: [
          {
            name: "Unsplash",
            link: "https://unsplash.com/",
          },
          {
            name: "Pexels",
            link: "https://www.pexels.com/",
          },
          {
            name: "Pixabay",
            link: "https://pixabay.com/",
          },
        ],
      },
    ],
  },

  repositories: {
    title: "Repositories",
    icon: "folder",
    links: [
      {
        category: "Code Hosting",
        description: "Where I host my code",
        icon: "code",
        id: "1",
        links: [
          {
            name: "GitHub",
            link: "https://github.com"
          },
          {
            name: "GitLab",
            link: "https://gitlab.com"
          },
          {
            name: "Bitbucket",
            link: "https://bitbucket.org"
          },
          
        ]
      },
      {
        category: "Package Registries",
        description: "Where I publish my packages",
        icon: "package",
        id: "2",
        links: [
          {
            name: "npm",
            link: "https://www.npmjs.com/"
          },
          {
            name: "PyPI",
            link: "https://pypi.org/"
          }
        ]
      },
    ],
  },

  programming: {
    title: "Programming",
    icon: "code-block",
    links: [
      {
        category: "Documentation",
        description: "Official docs for languages and frameworks",
        icon: "book-open",
        links: [
          {
            name: "MDN Web Docs",
            link: "https://developer.mozilla.org/"
          },
          {            name: "W3Schools",
            link: "https://www.w3schools.com/"
          },
          {            name: "Stack Overflow",
            link: "https://stackoverflow.com/"
          },
        ]
      },
      {
        category: "Learning",
        description: "Resources to learn programming",
        icon: "graduation-cap",
        links: [
          {
            name: "freeCodeCamp",
            link: "https://www.freecodecamp.org/"
          },
          {
            name: "Codecademy",
            link: "https://www.codecademy.com/"
          },
          {
            name: "Khan Academy",
            link: "https://www.khanacademy.org/"
          },
        ]
      },
      {
        category: "Tools",
        description: "Useful programming tools",
        icon: "toolbox",
        links: [
          {
            name: "Postman",
            link: "https://www.postman.com/"
          },
          {
            name: "Git",
            link: "https://git-scm.com/"
          },
          {
            name: "Docker",
            link: "https://www.docker.com/"
          },
        ]
      },
      {
        category: "Free Learning Labs",
        description: "Interactive coding environments",
        icon: "users",
        links: [
          {
            name: "Codecademy Labs",
            link: "https://www.codecademy.com/learn/paths"
          },
          {
            name: "Replit",
            link: "https://replit.com/"
          },
          {
            name: "Glitch",
            link: "https://glitch.com/"
          },
        ]
      },
      {
        category: "Programming Languages",
        description: "Official sites for programming languages",
        icon: "terminal",
        links: [
        {
          name: "Programming",
          link: "https://www.reddit.com/r/programming/",
        },
        {
          name: "Rust",
          link: "https://www.reddit.com/r/rust/",
        },
        {
          name: "Go",
          link: "https://www.reddit.com/r/golang/",
        },
        {
          name: "Python",
          link: "https://www.reddit.com/r/Python/",
        },
      ],
      }
    ]
  },

  // Second Links Container
  secondListsContainer: [
    {
      icon: "square-user-round",
      id: "1",
      links: [
        {
          name: "Spotify",
          link: "https://www.spotify.com",
        },
        {
          name: "r/unixporn",
          link: "https://www.reddit.com/r/unixporn",
        },
        {
          name: "Facebook",
          link: "https://www.facebook.com",
        },
        {
          name: "Twitter",
          link: "https://twitter.com",
        },
      ],
    },
    {
      icon: "binary",
      id: "2",
      
    },
  ],
};
