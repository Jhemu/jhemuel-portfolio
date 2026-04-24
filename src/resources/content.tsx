import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Jhemuel",
  lastName: "Lagos",
  name: `Jhemuel Lagos`,
  role: "Video Editor & AI Video Prompt Specialist",
  avatar: "/images/avatar.png",
  email: "jhemuellagos5@gmail.com",
  location: "Asia/Manila", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Filipino"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      My weekly newsletter about video editing and AI-driven creative workflows
    </>
  ),
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Jhemu",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jhemuel-lagos-51371a285/",
    essential: true,
  },
  // {
  //   name: "Instagram",
  //   icon: "instagram",
  //   link: "https://www.instagram.com/once_ui/",
  //   essential: false,
  // },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  //   essential: false,
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Crafting compelling visual stories through video editing</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">AI Video Creations</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/automate-design-handovers-with-a-figma-to-code-pipeline",
  },
  subline: (
    <>
      I'm Jhemuel, a Video Editor & AI Video Prompt Specialist, where I craft
      engaging <br /> video content and explore AI-driven creative workflows.
      After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/jhemuel-lagos-lzseyq/15min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Jhemuel is a Philippines-based Video Editor and AI Video Prompt
        Specialist focused on turning complex concepts into visually engaging
        and impactful video content. He specializes in video editing, AI-driven
        creative workflows, and exploring the intersection of storytelling and
        generative AI technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Growth Spurt Ph",
        timeframe: "2025 - Present",
        role: "Video Editor & AI Video Prompt Specialist",
        achievements: [
          // <>
          //   Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
          //   engagement and 30% faster load times.
          // </>,
          // <>
          //   Spearheaded the integration of AI tools into design workflows, enabling designers to
          //   iterate 50% faster.
          // </>,
        ],
        // images: [
        //   // optional: leave the array empty if you don't want to display images
        //   {
        //     src: "/images/projects/project-01/cover-01.jpg",
        //     alt: "Once UI Project",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Ramon Magsaysay Memorial College",
        description: <>Bachelor of Science in Information Technology.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Video Editing",
        description: (
          <>
            Crafting clean, engaging, and professional video edits with strong
            pacing, storytelling, and visual impact.
          </>
        ),
        tags: [
          {
            name: "Adobe Premiere Pro",
            icon: "premiere",
          },
          {
            name: "After Effects",
            icon: "aftereffects",
          },
          {
            name: "Google Flow",
            icon: "googleflow",
          },
          {
            name: "Chat GPT",
            icon: "chatgpt",
          },
        ],
      },
      {
        title: "AI Video Prompt Engineering",
        description: (
          <>
            Designing precise AI prompts to generate high-quality video content,
            cinematic scenes, and creative visual outputs.
          </>
        ),
        tags: [
          {
            name: "AI Prompting",
            icon: "ai",
          },
          {
            name: "Generative AI",
            icon: "ai",
          },
        ],
      },
      {
        title: "Motion & Visual Storytelling",
        description: (
          <>
            Transforming ideas into visually compelling narratives using motion,
            rhythm, and cinematic composition.
          </>
        ),
        tags: [
          {
            name: "Motion Design",
            icon: "motion",
          },
          {
            name: "Storytelling",
            icon: "story",
          },
        ],
      },
      {
        title: "Creative Direction",
        description: (
          <>
            Developing clean, impactful visual styles focused on branding, mood,
            and audience engagement.
          </>
        ),
        tags: [
          {
            name: "Visual Direction",
            icon: "design",
          },
          {
            name: "Cinematic Style",
            icon: "film",
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
