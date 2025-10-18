import Image from "next/image";
import Link from "next/link";
import { getImageSrc } from "@/lib/imagePath";

const projects = [
  {
    id: "stock-situation",
    title: "Stock Situation",
    description: "Data-driven stock market analysis platform with ML-powered due diligence (Retired 2022)",
    tags: ["Next.js", "React", "TailwindCSS", "Prisma", "Postgres"],
    color: "bg-blue-500",
    image: "/images/ss-1.png",
    featured: true,
  },
  {
    id: "covid-forecast",
    title: "One Quiet Night",
    description: "COVID-19 forecast visualization submitted to CDC using real-time data",
    tags: ["React", "D3.js", "Machine Learning"],
    color: "bg-gray-300",
    text: "black",
    image: "/images/oqn.png",
    featured: true,
  },
  {
    id: "seattle-restaurants",
    title: "Seattle Restaurants",
    description: "Personal restaurant tracking app with Yelp API integration",
    tags: ["React", "Yelp API", "Ant Design"],
    color: "bg-emerald-100",
    text: "black",
    image: "/images/seattle-yelp-1.png",
    featured: false,
  },
  {
    id: "empowered-conversation",
    title: "Empowered Conversation",
    description: "Survivor-activated tool for preparing hard conversations",
    tags: ["React", "UI/UX", "Twilio"],
    color: "bg-red-200",
    text: "black",
    image: "/images/empower.png",
    featured: false,
  },
  {
    id: "api-ipa",
    title: "API-IPA",
    description: "RESTful API with data visualization for beer ratings",
    tags: ["Node.js", "MongoDB", "D3.js"],
    color: "bg-amber-100",
    text: "black",
    image: "/images/ipa-api.png",
    featured: false,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <h1 className="text-xl font-semibold">Areum Jo Portfolio</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 md:py-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-4">
            <h2 className="text-6xl md:text-7xl font-bold tracking-tight">
              Areum Jo
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Software engineer with 3 years of experience building tools and
              web applications at Microsoft Azure. Previously a neuroscientist and scientific reporter, I bring a unique perspective
              to problem-solving and love creating intuitive software solutions.
            </p>
            <p className="text-lg text-gray-500">Find me in Seattle, WA 👋</p>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/areumjo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/areum-jo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:areumjo1@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-full hover:border-gray-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <Image
              src={getImageSrc("https://avatars0.githubusercontent.com/u/50808975?s=460&v=4")}
              alt="Areum Jo"
              width={250}
              height={250}
              className="rounded-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto p-6 md:py-8">
        <div className="border-t border-gray-200 pt-12 md:pt-16">
          <h3 className="text-3xl font-bold mb-8">Featured Projects</h3>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Featured Projects - Full Width */}
            {projects.filter(p => p.featured).map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}/`}
                className="lg:col-span-12 group"
              >
                <div className={`${project.color} rounded-2xl p-8 md:p-12 ${project.text === 'black' ? 'text-black' : 'text-white'} min-h-[400px] flex flex-col justify-between transition-transform hover:scale-[1.01]`}>
                  <div>
                    <div className={`inline-block px-4 py-2 ${project.text === 'black' ? 'bg-black/20' : 'bg-white/20'} backdrop-blur-sm rounded-full text-sm font-medium mb-4`}>
                      {project.tags[0]}
                    </div>
                    <h4 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h4>
                    <p className={`text-lg mb-6 max-w-2xl ${project.text === 'black' ? 'text-black/90' : 'text-white/90'}`}>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <code key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded text-sm">
                          {tag}
                        </code>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
                    <Image
                      src={getImageSrc(project.image)}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {projects.filter(p => !p.featured).map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}/`}
                className="group h-full"
              >
                <div className={`${project.color} rounded-2xl p-8 ${project.text === 'black' ? 'text-black' : 'text-white'} h-full flex flex-col justify-between transition-transform hover:scale-[1.02]`}>
                  <div>
                    <div className={`inline-block px-4 py-2 ${project.text === 'black' ? 'bg-black/20' : 'bg-white/20'} backdrop-blur-sm rounded-full text-sm font-medium mb-4`}>
                      {project.tags[0]}
                    </div>
                    <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
                    <p className={`mb-6 ${project.text === 'black' ? 'text-black/90' : 'text-white/90'}`}>{project.description}</p>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg mx-auto w-4/5">
                      <Image
                        src={getImageSrc(project.image)}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="border-t border-gray-200 pt-12 md:pt-16">
          <h3 className="text-3xl font-bold mb-8">Skills & Technologies</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Frontend</h4>
              <ul className="space-y-2 text-gray-600">
                <li>React & Next.js</li>
                <li>TypeScript & JavaScript</li>
                <li>TailwindCSS</li>
                <li>Data Visualization (D3.js, Recharts)</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Backend</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Node.js & Express</li>
                <li>RESTful APIs</li>
                <li>SQL & NoSQL (Postgres, MongoDB)</li>
                <li>Prisma ORM</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Tools & Practices</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Git & GitHub</li>
                <li>Responsive Design</li>
                <li>UI/UX Principles</li>
                <li>Agile Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-12 md:mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 md:py-12 text-center">
          <h3 className="text-2xl font-bold mb-2">Areum Jo</h3>
          <p className="text-gray-600 mb-1">Feel free to contact me</p>
          <a href="mailto:areumjo1@gmail.com" className="text-gray-600 hover:text-gray-900">
            areumjo1@gmail.com
          </a>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-400 text-sm">© 2025 Areum Jo</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
