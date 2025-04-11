import { Project } from "@/types";

export const projects = [
  {
    key: "stockx-pro-manifests",
    type: "video" as Project["type"],
    category: "work" as Project["category"],
    title: "StockX Pro - Manifests",
    author: "Sam Ageloff, StockX Pro Team",
    description:
      "I built the manifest shipment system for StockX Pro, which allows sellers to create and manage shipments and drop-offs.",
    poster: "/posters/pro-wordmark.png",
    technologies: [
      "React",
      "Chakra UI",
      "Redux",
      "GraphQL",
      "TypeScript",
      "React Query",
      "YCBM",
    ],
    year: "2024",
    path: "/project/stockx-pro-manifests",
    embed:
      "https://www.loom.com/embed/cb1f4a937ca94ab6a5c92cadb0ed066b?sid=6c8a9849-0abe-4af6-b999-aafd7828a6f0",
  },
  {
    key: "stockx-size-selector",
    type: "video" as Project["type"],
    category: "work" as Project["category"],
    title: "StockX - Product Page",
    author: "Sam Ageloff, StockX Team",
    description:
      "I lead the StockX team to build the product page, size selector and 360 product spinner, including Chakra UI design system integration.",
    poster: "/posters/sx-wordmark.png",
    technologies: ["React", "Redux", "GraphQL", "TypeScript", "React Query"],
    year: "2021",
    path: "/project/stockx-size-selector",
    embed:
      "https://www.loom.com/embed/9e7d2eb4614d4d429679cc0f278c83cb?sid=3c116f60-1108-4066-89db-41aa1d9d3572",
  },
  {
    key: "scout-listings",
    type: "video" as Project["type"],
    category: "work" as Project["category"],
    title: "Scout - Listings",
    author: "Sam Ageloff, Scout Team",
    description:
      "A demo of the Scout app listing interface and UX. This is a work in progress and not all features are available.",
    poster: "/posters/scout-wordmark.png",
    technologies: ["React", "MobX", "Next.js", "TypeScript", "SWR"],
    year: "2022",
    path: "/project/scout-listings",
    embed:
      "https://www.loom.com/embed/5982af7f70c54e399ed29117f96b44c4?sid=b9d57e3f-af9e-456f-ac75-85db4d3dce37",
  },
  {
    key: "julio-le-parc",
    type: "all" as Project["type"],
    category: "side" as Project["category"],
    title: "Séquences quantitatives",
    author: "Julio Le Parc",
    description:
      "A digital exploration of Julio Le Parc's 'Séquences quantitatives' series. Custom algorithm to generate the sequences, using React and Styled Components.",
    poster: "/posters/julio-le-parc.png",
    technologies: ["React", "Styled Components", "TypeScript"],
    year: "2018",
    path: "/project/julio-le-parc",
    embed:
      "https://www.loom.com/embed/b0555b45e5684dbca463946b96d9afb2?sid=887cc5c0-04f4-40ac-a2bd-b615a272a198",
  },
  {
    key: "instability",
    type: "component" as Project["type"],
    category: "side" as Project["category"],
    title: "Inestabilidad",
    author: "Julio Le Parc",
    description:
      'This is an exploration of instability in visual perception through geometric patterns. My goal was to use "basic" algorithms to generate the DOM, using React and Styled Components. ',
    poster: "/posters/instability.jpg",
    technologies: ["React", "Redux", "Styled Components", "TypeScript"],
    year: "2018",
    path: "/project/instability",
  },
  {
    key: "timer",
    type: "component" as Project["type"],
    category: "side" as Project["category"],
    title: "Countdown Timer",
    author: "Oleg Frolov",
    description:
      "I originally build this component 6 years ago, to see how close I could come to replicating the UX and animation. It works really well, however it needs to be ported to a modern framework, which is why it's coming soon.",
    technologies: ["React", "Redux", "Styled Components", "TypeScript"],
    poster:
      "https://cdn.dribbble.com/userupload/20677007/file/original-8511829d307bf2c8eecd8b53b56a19dd.gif",
    year: "2018",
    path: "/project/countdown-timer",
    disabled: true,
  },
  {
    key: "sequences",
    type: "component" as Project["type"],
    category: "side" as Project["category"],
    title: "Secuencias en rotación en blanco y negro",
    author: "Julio Le Parc",
    description:
      "A series examining rotation sequences in black and white. Custom algorithms generate the DOM, using React and Styled Components. Inspect the DOM for more information.",
    poster: "/posters/sequences.jpg",
    year: "1959-2014",
    path: "/project/sequences",
    disabled: true,
  },
];

export const brands = [
  {
    name: "StockX",
    logo: "/logos/stockx.png",
  },
  {
    name: "Ambassador",
    logo: "/logos/ambassador.png",
  },
  {
    name: "Huge",
    logo: "/logos/huge.png",
  },
  {
    name: "Google",
    logo: "/logos/google.png",
  },
  {
    name: "HGTV",
    logo: "/logos/hgtv.png",
  },
  {
    name: "Food Network",
    logo: "/logos/food_network.png",
  },
  {
    name: "JWT",
    logo: "/logos/jwt.png",
  },
  {
    name: "Greater Than One",
    logo: "/logos/greater_than_one.png",
  },
  {
    name: "VoiceZam",
    logo: "/logos/voicezam.png",
  },
];

export const tech = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Svelte/Kit", "Redux", "CSS"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "GraphQL", "RESTful APIs"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "DynamoDB"],
  },
  {
    category: "Cloud & DevOps (working knowledge)",
    items: ["AWS", "Vercel", "CI/CD", "Docker"],
  },
  {
    category: "Monitoring & Security",
    items: ["Datadog", "Auth0"],
  },
];
