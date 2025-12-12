"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import TechIcons from "@/components/techIcons";
import { LinkedQueueTimeline } from "@/components/3d/experience";
import { ProjectCardStack } from "@/components/3d/projects";
import {
  SiDotnet,
  SiLaravel,
  SiNestjs,
  SiNextdotjs,
  SiAngular,
  SiMicrosoftazure,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiKubernetes,
  SiNodedotjs,
  SiMysql,
  SiMicrosoftsqlserver,
  SiElasticsearch,
  SiSwagger,
  SiTailwindcss,
  SiRabbitmq,
  SiD3Dotjs,
  SiGrafana,
  SiJenkins,
  SiPrometheus,
  SiLaravelhorizon,
} from "react-icons/si";

const stats = [
  { label: "YEARS OF EXPERIENCE", value: "7" },
  { label: "SATISFIED CLIENTS", value: "15" },
  { label: "FINISHED PROJECTS", value: "35" },
  { label: "ACHIEVEMENTS", value: "NaN" },
];

const services = [
  {
    title: "Backend Development",
    description: "Scalable and efficient server-side solutions",
    icon: <SiDotnet />,
  },
  {
    title: "Frontend Development",
    description: "Interactive and responsive user interfaces",
    icon: <SiNextdotjs />,
  },
  {
    title: "Database Management",
    description: "Optimized data storage and retrieval",
    icon: <SiPostgresql />,
  },
  {
    title: "Cloud Services",
    description: "AWS and Azure cloud infrastructure",
    icon: <SiMicrosoftazure />,
  },
];

// Experience data formatted for LinkedQueueTimeline
const experiences = [
  {
    id: 1,
    company: "Amatis",
    role: "Fullstack Developer",
    period: "01/2021 – 12/2021",
    achievements: [
      "Spearheaded end-to-end development of microservices-based, AI-driven healthcare projects.",
      "Successfully implemented Hangfire for event monitoring and management, handling 84 events.",
      "Developed user role-specific and subscribable mail and notification services, enhancing engagement by around 25%.",
      "Led the development of advanced filtering features using Expressions and Reflections.",
    ],
    technologies: [
      SiDotnet,
      SiAngular,
      SiPostgresql,
      SiDocker,
      SiRabbitmq,
      SiD3Dotjs,
    ],
  },
  {
    id: 2,
    company: "Siskon",
    role: "Mid Backend Developer",
    period: "01/2022 – 03/2023",
    achievements: [
      "Developed a scalable and efficient backend using .NET Core, leveraging Docker and Kubernetes.",
      "Reduced data collection waiting time from 20 minutes to 1 minute through advanced algorithms.",
      "Developed an automated data extraction tool for XML output files.",
      "Mentored two interns and played a role in their technical growth.",
    ],
    technologies: [SiDotnet, SiMicrosoftsqlserver, SiMicrosoftazure],
  },
  {
    id: 3,
    company: "Mallconomy",
    role: "Mid+ Backend Developer",
    period: "03/2023 – 07/2023",
    achievements: [
      "Achieved increase in user engagement through performance enhancements.",
      "Led the Docker and Kubernetes infrastructure migration.",
      "Developed automated system leveraging Google Sheet API for ban operations.",
      "Integrated Web3 tools on Node.js to retrieve NFT data from Smart Contracts.",
    ],
    technologies: [SiDotnet, SiMongodb, SiRedis, SiNodedotjs, SiDocker],
  },
  {
    id: 4,
    company: "Forwardie",
    role: "Senior Backend Developer",
    period: "08/2023 – 02/2025",
    achievements: [
      "Contributed to the development and optimization of a large-scale microservices project.",
      "Played a key role in the architectural and system design phase of all new features.",
      "Designed the infrastructure for AI automations using OpenAI API.",
      "Achieved first place in six sprints over three months.",
    ],
    technologies: [SiLaravel, SiMysql, SiRedis, SiDotnet, SiNestjs, SiDocker],
  },
  {
    id: 5,
    company: "SSTTEK",
    role: "Senior Backend Developer",
    period: "02/2025 – 09/2025",
    achievements: [
      "Led the architectural refactoring of the WMS/TMS microservices project (DDD, Clean Architecture, MediatR & CQRS).",
      "Implemented cargo service integrations using Adapter, Strategy, and Factory Design Patterns.",
      "Assumed leadership of the development team during the team leader's leave.",
      "Participated in technical interviews for Senior Backend Developer candidates.",
    ],
    technologies: [
      SiDotnet,
      SiPostgresql,
      SiDocker,
      SiRabbitmq,
      SiJenkins,
      SiGrafana,
      SiPrometheus,
      SiElasticsearch,
      SiKubernetes,
    ],
  },
  {
    id: 6,
    company: "Eatzy",
    role: "Senior Software Engineer",
    period: "11/2025 – Present",
    achievements: [
      "Led the development of a new AI & OCR Accounting System using Laravel and Docker.",
      "Decided project structure and architecture, system design and database design.",
      "Developed and managed the entire project independently.",
    ],
    technologies: [SiLaravel, SiLaravelhorizon, SiDocker, SiRedis, SiMysql],
  },
];

// Projects data formatted for ProjectCardStack
const projects = [
  {
    id: 1,
    name: "ChronoPlan - AI Habit Tracker",
    description:
      "AI-driven personalization for habit tracking and time-blocking",
    longDescription:
      "Developed ChronoPlan AI with .NET 8 & .NET Aspire and Flutter, providing personalized time management and habit-building guidance for users with ADHD traits. Integrated AI-driven personalization (LLM) to analyze user behaviors.",
    image: "/images/chronoplan.jpg",
    liveLink: "https://chronoplanapp.com/",
    sourceCode: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    techStack: [
      SiDotnet,
      SiNextdotjs,
      SiTailwindcss,
      SiMicrosoftazure,
      SiMicrosoftsqlserver,
      SiDocker,
      SiSwagger,
      SiElasticsearch,
      SiRedis,
    ],
    designPatterns: [
      "Clean Architecture",
      "CQRS",
      "Event-Driven",
      "Repository Pattern",
      "Factory Pattern",
    ],
    complexity: 5,
  },
  {
    id: 2,
    name: "Accounting OCR",
    description: "AI-powered OCR for financial documents",
    longDescription:
      "An Accounting OCR application that extracts data from invoices, receipts, and other financial documents using Google Document AI and OpenAI API. Built with .NET 8 and Next.js 14.",
    image: "/images/FinancialOCR.gif",
    liveLink: "https://github.com/ScannyBear/FinancialOCR-Client",
    sourceCode: "https://github.com/ScannyBear/FinancialOCR-Backend",
    techStack: [
      SiDotnet,
      SiNextdotjs,
      SiTailwindcss,
      SiMicrosoftazure,
      SiDocker,
      SiSwagger,
    ],
    designPatterns: [
      "Clean Architecture",
      "CQRS",
      "Repository Pattern",
      "Adapter Pattern",
    ],
    complexity: 5,
  },
  {
    id: 3,
    name: "Clean Architecture Project",
    description:
      "Robust infrastructure using Clean Architecture, CQRS, and more",
    longDescription:
      "A project utilizing the Clean Architecture approach with .NET Core 6. Technologies include Automapper, MediatR, FluentValidation, Entity Framework Core, and more.",
    image:
      "https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg",
    liveLink: "https://github.com/haliltokszz/Kodlama.io.Devs",
    sourceCode: "https://github.com/haliltokszz/Kodlama.io.Devs",
    techStack: [
      SiDotnet,
      SiMicrosoftsqlserver,
      SiElasticsearch,
      SiRedis,
      SiDocker,
      SiSwagger,
    ],
    designPatterns: [
      "Clean Architecture",
      "CQRS",
      "Repository Pattern",
      "Factory Pattern",
    ],
    complexity: 4,
  },
  {
    id: 4,
    name: "Rent a Car",
    description: "End-to-end car rental web application",
    longDescription:
      "Developed with .NET Core and Angular 12, implementing Cross-Cutting Concerns with AOP principles. The project includes layered architecture and JWT authentication.",
    image: "https://gh-card.dev/repos/haliltokszz/RentaCar-Frontend.svg",
    liveLink: "https://github.com/haliltokszz/RentaCar",
    sourceCode: "https://github.com/haliltokszz/RentaCar",
    techStack: [SiDotnet, SiAngular, SiSwagger, SiPostgresql],
    designPatterns: ["AOP", "Repository Pattern", "Factory Pattern"],
    complexity: 3,
  },
  {
    id: 5,
    name: "HR Management System",
    description: "Desktop application using advanced data structures",
    longDescription:
      "A desktop application built with C# for HR management, utilizing data structures like Binary Trees and Graphs for efficient data handling.",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--KW1vPrlM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b0ib4migxql3ugwzfqoa.png",
    liveLink:
      "https://github.com/haliltokszz/VeriYapilariProje-InsanKaynaklariBilgiSistemi",
    sourceCode:
      "https://github.com/haliltokszz/VeriYapilariProje-InsanKaynaklariBilgiSistemi",
    techStack: [SiDotnet],
    designPatterns: ["Data Structures", "Algorithms"],
    complexity: 2,
  },
];

export default function AboutMe() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 sm:p-8 my-6 relative">
      {/* Background layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-25 z-0"></div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto w-full space-y-20 relative z-10"
      >
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          <div className="lg:w-1/2 flex flex-col space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white">
              Crafting <span className="text-blue-500">robust</span> backend
              solutions.
            </h1>
            <p className="text-gray-300 text-base sm:text-lg">
              With 7 years of experience in backend development, I specialize in
              creating scalable, efficient, and secure server-side applications.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-500">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-400 text-center">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="/images/profile.jpg"
              alt="Profile Image"
              width={500}
              height={500}
              className="rounded-lg shadow-lg max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]"
            />
          </div>
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">
            Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={`service-${service.title}`}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 group"
              >
                <div className="text-3xl sm:text-4xl mb-4 text-blue-500 group-hover:text-purple-500 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section - Linked Queue Timeline */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <LinkedQueueTimeline experiences={experiences} />
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">
            Skills
          </h2>
          <TechIcons size={40} />
        </motion.div>

        {/* Projects Section - Separate BST + Card Stack */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <ProjectCardStack projects={projects} />
        </motion.div>
      </motion.section>
    </div>
  );
}
