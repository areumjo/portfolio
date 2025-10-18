import Image from "next/image";
import { getImageSrc } from "@/lib/imagePath";
import Link from "next/link";

export const metadata = {
  title: "API-IPA - RESTful Web API - Areum Jo",
  description: "RESTful API with MongoDB and Node Express showing beer ratings and data visualization",
};

export default function ApiIpaPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all group"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      <div className="bg-amber-100 text-gray-900">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <h1 className="text-5xl font-bold mb-6">API-IPA 🍺</h1>
          <p className="text-xl text-gray-700 mb-8">
            Built a RESTful API with MongoDB and Node Express to show ratings by year and detailed descriptions
            of IPA beers.
          </p>
          <a
            href="https://github.com/areumjo/api-ipa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-amber-600 text-white rounded-full font-medium hover:bg-amber-700 transition-colors"
          >
            View GitHub →
          </a>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16 prose prose-lg prose-headings:font-bold">
        <div className="border-t border-gray-200 pt-8 md:pt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 md:mt-12">Situation</h2>
          <p>
            This project started with an episode when I was first learning about <code>API</code> (Application
            programming interface), I mistakenly called IPA for API and the API-IPA idea came. I was already using
            Star Wars API, and Pokemon API to learn API and using it to build Single Page React app. I wanted to
            learn something new as well, so I chose <code>MongoDB</code> based on the NoSQL document store model.
          </p>
          <p>
            The data objects are stored as separate documents inside a collection, when you compare it to a traditional
            relational database (SQL - 2 dimensional row-column structure), the data store model is different.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 md:mt-12">Action</h2>
          <p>
            I gathered all beer reviews from <a href="https://www.beeradvocate.com/beer/?view=all" target="_blank" rel="noopener noreferrer">beeradvocate</a> and
            created database based on the review -- beer style, beer ABV (alcohol by volume), score, average rating,
            a number of reviews, brewery.
          </p>
          <p>
            And I added a little tweak. API-IPA project is not only providing Web API, it is also showing data
            visualization using <code>d3.js</code>. Since I am getting beer rating yearly, I can create a simple line
            graph so a user can see a trend of the rating by year. And I provided the beer image from the review
            because seeing an image always gives better user experience.
          </p>
          <p>
            I wanted to give more reactive user interface and React, the front end tech stack of this app, is known
            for better reactive experience, I added selection of all beers you can choose, it will create a web API
            address as well as information of the beer with data visualization.
          </p>

          <div className="not-prose my-8">
            <Image
              src={getImageSrc("/images/ipa-api.png")}
              alt="API-IPA Interface"
              width={800}
              height={500}
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 md:mt-12">Solution</h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Feature - Search by beer name</h3>
          <p>
            When I completed a version 1 prototype for this project, I noticed it would be hard for a user to find a
            certain beer name, since the list of selection goes so long. I decided to add a search feature with the
            selection tool. Basic layout is still same, but now you can type anything you want to search and the
            result will appear at the bottom of the selection tool.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Deployment</h3>
          <p>
            I deployed the back end of this project on Heroku and you can find it on the GitHub page with examples
            of RESTful API endpoints.
          </p>

          <div className="not-prose mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express", "MongoDB", "RESTful API", "React", "D3.js", "Data Visualization"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      <footer className="border-t border-gray-200 mt-12 md:mt-16">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <Link href="/" className="text-amber-700 hover:text-amber-900 font-medium">
            ← Back to Portfolio
          </Link>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-400 text-sm">© 2025 Areum Jo</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
