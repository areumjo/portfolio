import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Seattle Restaurants - Areum Jo",
  description: "Personal restaurant tracking app with Yelp API integration",
};

export default function SeattleRestaurantsPage() {
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

      <div className="bg-emerald-100 text-gray-900">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <h1 className="text-5xl font-bold mb-6">Seattle Restaurants</h1>
          <p className="text-xl text-gray-700 mb-8">
            Where do we have dinner tonight?<br />
            A useful application for someone who recently moved to Seattle or who wants to keep track of restaurants they have been to.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16 prose prose-lg prose-headings:font-bold">
        <div className="border-t border-gray-200 pt-8 md:pt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 md:mt-12">Situation</h2>
          <p>
            As a foodie who recently became a Seattle-ite, one of the most crucial things to <em>survive</em> in
            the city is finding good restaurants. I knew that Seattle was known for its various foodie scenes, and
            I wanted to research restaurants in the area.
          </p>
          <p>
            I like to see all restaurants locals love and share on Yelp. But Yelp has so much information that it
            almost feels overwhelming at times. I really only want to know where I have visited and how I rated the
            food. So I set out to build my ideal version of Yelp.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 md:mt-12">Action</h2>
          <div className="not-prose grid md:grid-cols-2 gap-8 my-8 items-start">
            <Image
              src="/images/seattle-yelp-1.png"
              alt="Seattle Restaurants App"
              width={400}
              height={600}
              className="rounded-lg shadow-lg w-full"
            />
            <div className="prose">
              <h3>Skills I used to build this app</h3>
              <ul>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>jQuery library</li>
                <li>React and React Hooks -- <code>useState</code>, <code>useEffect</code></li>
                <li>Single Page Application -- <code>React Router</code></li>
                <li>React design library - Ant Design of React</li>
                <li>Yelp fusion Restful API</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 md:mt-12">Solution</h2>
          <p>
            First of all, the app is getting restaurant list from Yelp filtered by most-reviewed in Seattle. Starting
            from the number 1 restaurant (for now the most-reviewed restaurant) you will meet basic information about
            the restaurant and categories you can select.
          </p>

          <div className="not-prose flex gap-8 justify-center items-center my-8">
            <Image
              src="/images/seattle-yelp-2.png"
              alt="Seattle Restaurants Mobile View 1"
              width={250}
              height={450}
              className="rounded-lg shadow-lg"
            />
            <div className="w-px h-40 bg-gray-300"></div>
            <Image
              src="/images/seattle-yelp-3.png"
              alt="Seattle Restaurants Mobile View 2"
              width={250}
              height={450}
              className="rounded-lg shadow-lg"
            />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Category functionality</h3>
          <p>
            The app has a simple structure so users can easily utilize its features. There are three categories to keep
            track of the restaurants in Seattle -- <code>Visited</code>, <code>Promising</code> meaning I would like
            to go one day, and lastly <code>I don't want it</code>. I am the type of person who believes in second chances,
            so I added a 'Second-Chance' page for the <code>I don't want it</code> category, and you can look up what
            you have missed and change your mind about the restaurant.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Rating functionality</h3>
          <p>
            The app allows users to rate different restaurants that they've visited. For this functionality, you move
            to <code>My Page</code> first. This rating provides half-star increments, so you can rate them more accurately for
            your taste.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 md:mt-12">Demo of the app</h2>
          <div className="not-prose my-8">
            <Image
              src="/images/seattle-yelp-gif.gif"
              alt="Seattle Restaurants Demo"
              width={800}
              height={500}
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 md:mt-12">Stretch goals for future</h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">User registration and authentication</h3>
          <p>
            Allow users to securely persist their lists and ratings of the restaurants and easily share their favorite
            restaurants with friends later on.
          </p>
          <p>
            After researching tools for authentication, I would like to use Firebase, a Google product. From the
            documentation, I found that we can even connect it to React/Redux frameworks, so it would be very useful
            for large-scale applications in terms of state management and security since this app needs a key for the Yelp API.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Increase search area</h3>
          <p>
            Develop customized restaurant lists for different cities in the US and other countries, perhaps
            using city data from Wikipedia with the Yelp Restful API.
          </p>

          <div className="not-prose mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "React Hooks", "React Router", "Ant Design", "Yelp API", "JavaScript", "jQuery"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-emerald-50 text-emerald-800 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      <footer className="border-t border-gray-200 mt-12 md:mt-16">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <Link href="/" className="text-emerald-700 hover:text-emerald-900 font-medium">
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
