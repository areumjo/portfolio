import Image from "next/image";
import { getImageSrc } from "@/lib/imagePath";
import Link from "next/link";

export const metadata = {
  title: "Stock Situation - Areum Jo",
  description: "Data-driven stock market analysis platform with ML-powered due diligence",
};

export default function StockSituationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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

      {/* Hero */}
      <div className="bg-blue-500 text-white">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <h1 className="text-5xl font-bold mb-6">Stock Situation</h1>
          <p className="text-xl text-blue-50 mb-4 max-w-3xl">
            Stock Situation was a data-driven stock market analysis platform using ML-powered due diligence.
            The website provided actionable insights for thousands of stocks across different time frames (intraday, nextday, nextweek, nextmonth).
          </p>
          <div className="bg-blue-600/50 backdrop-blur-sm rounded-lg p-4 mb-6 max-w-3xl">
            <p className="text-blue-50 text-sm">
              <strong>Note:</strong> This project was retired in November 2022. The live website is no longer available, but you can view archived versions on{" "}
              <a
                href="https://web.archive.org/web/20221100000000*/stocksituation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                the Wayback Machine
              </a>.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://web.archive.org/web/20221100000000*/stocksituation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-white text-blue-500 rounded-full font-medium hover:bg-blue-50 transition-colors"
            >
              View on Wayback Machine →
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16 prose prose-lg prose-headings:font-bold">
        <div className="border-t border-gray-200 pt-8 md:pt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 md:mt-12">Situation</h2>
          <p>
            After I finished working on my last side project (One Quiet Night), I knew I wanted to build another
            data-driven product. I started talking to people about what data they struggled to understand and wanted
            to understand better. Number one was stock market data. Stock market data is very important for personal
            financial well-being and society at large. But it is also very difficult to understand and use. I wanted
            to make a product that provides actionable and accessible insights so more financial decisions are made well.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 md:mt-12">Task</h2>
          <p>
            What I heard was two questions: "which stocks will go up" and "why?" I wanted to focus on building a
            product to answer these questions by providing due diligence.
          </p>
          <p>
            My first idea was to build a website where people can post their due diligence. This would have been
            like TradingView Ideas, with a focus on communicating financial insights, rather than just chart reading.
          </p>
          <p>
            I ran into the problem of quality while working on this idea. How can we verify whether independent due
            diligence is any good? How many samples do we need to trust an independent analyst?
          </p>
          <p>
            This led me to the idea that ultimately became Stock Situation: use ML to automatically generate due
            diligence. This solved the quality problem and generated a differentiating factor.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 md:mt-12">Action</h2>
          <p>
            There were two main components: the due-diligence engine and the end product. For the due-diligence
            engine, I started looking into algorithmic trading, but I realized I'm way out of my depth. So I
            partnered with a former colleague, who is a brilliant data scientist, to create the due-diligence engine.
            We decided that the main goal was predictive accuracy, with explainability and longevity requirements.
            We also agreed on the model interfaces, so that it would integrate with the rest of the system.
          </p>
          <p>
            For the end product, my goal was to create a simple and intuitive web and mobile design for communicating
            the analysis and documenting it well, to answer "which stocks will go up" and "why?" Users should be able
            to browse different analyses and relevant information (e.g. industry, price, P/E ratio, EPS, beta, dividend
            yield, events). I also worked very closely with the data scientist here and learned a lot about financial
            analysis during the process.
          </p>

          <div className="not-prose my-8">
            <Image
              src={getImageSrc("/images/ss-ver1.png")}
              alt="Stock Situation Version 1"
              width={800}
              height={500}
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <p>
            <strong>Version 1:</strong> The main page shows the current analyses. I used React to create a SPA to
            filter the analyses. There are stock-specific pages with all the information about the stock as well as
            the current analysis and the past analyses. I used Recharts and React to create a custom chart that
            displays all the relevant information. I also wrote custom logic to adjust prices on the fly and collect
            corporate events so they can be plotted in this way.
          </p>

          <div className="not-prose my-8">
            <Image
              src={getImageSrc("/images/ss-ver2-1.png")}
              alt="Stock Situation Version 2"
              width={800}
              height={500}
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <p>
            <strong>Version 2:</strong> In testing version 1, I saw there was a mismatch between how users would
            consume information and the UI on the website. Users would first choose a time frame (e.g. intraday vs
            nextday) then the current analyses and the past analyses (e.g. how accurate were recent analyses, past
            analyses, and historical analyses). I redesigned the website around this flow. I also switched to using
            Next.js to serve a lot of static pages using CDN.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 md:mt-12">Key Features</h2>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Homepage & Navigation</h3>
          <p>
            The homepage organized stock signals by time frame (Intraday, Nextday, Nextweek, Nextmonth), making it easy
            for users to find predictions that matched their investment strategy. Each stock card showed the company name,
            industry, market cap, and signal type (BUY/SELL).
          </p>

          <div className="not-prose my-8">
            <Image
              src={getImageSrc("/images/ss-homepage.png")}
              alt="Stock Situation Homepage"
              width={800}
              height={500}
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Smart Search</h3>
          <p>
            Implemented a search engine using <code>fuse.js</code> for fuzzy matching stock symbols or company names.
            Users could quickly find any stock by typing just a few letters.
          </p>

          <div className="not-prose my-8">
            <Image
              src={getImageSrc("/images/ss-search.png")}
              alt="Stock Situation Search Feature"
              width={400}
              height={300}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Stock Detail Page</h3>
          <p>
            Each stock had a detailed page showing current financial metrics (P/E ratio, EPS, beta, dividend yield) and
            a bar chart breaking down the driving factors behind each buy/sell signal. Factors were categorized into
            new earnings, recent earnings, and past earnings, helping users understand exactly why the model made its prediction.
          </p>

          <div className="not-prose my-8">
            <Image
              src={getImageSrc("/images/ss-stock-detail.png")}
              alt="Stock Detail Page with Driving Factors"
              width={800}
              height={500}
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Past Performance Tracking</h3>
          <p>
            Users could view historical signals to evaluate the model's accuracy. The "Past Posts" view showed all previous
            buy/sell signals with their predicted scores and actual outcomes. This transparency built trust and helped users
            make informed decisions.
          </p>

          <div className="not-prose my-8">
            <Image
              src={getImageSrc("/images/ss-past-posts.png")}
              alt="Past Posts Performance View"
              width={800}
              height={500}
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Performance Analytics</h3>
          <p>
            Comprehensive performance metrics showed how well the signals performed over different time periods. The "Days"
            view displayed daily statistics including the number of buy/sell signals, returns by category, and comparison
            to S&P 500. The "Years" view provided long-term performance charts showing cumulative returns since 2017.
          </p>

          <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
            <div>
              <Image
                src={getImageSrc("/images/ss-performance-days.png")}
                alt="Daily Performance Metrics"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full"
              />
              <p className="text-center text-gray-600 mt-2 text-sm">Daily performance table</p>
            </div>
            <div>
              <Image
                src={getImageSrc("/images/ss-performance-years.png")}
                alt="Yearly Performance Charts"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full"
              />
              <p className="text-center text-gray-600 mt-2 text-sm">Historical performance charts</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">About & Mission</h3>
          <p>
            The about page clearly communicated the mission: "To help everyone understand the stock market" and "Save time
            and money." It explained our data-driven approach covering 2,000+ stocks with 2,000+ factors analyzed to generate
            signals from intraday to monthly timeframes.
          </p>

          <div className="not-prose my-8">
            <Image
              src={getImageSrc("/images/ss-about.png")}
              alt="About Page - Mission and Team"
              width={800}
              height={500}
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Technical Features</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Created a circle logo for each company using the first letter of the company name and the company color based on a dimensionality reduction algorithm.
            </li>
            <li>
              Added a bar plot for the driving factors in each buy/sell signal, breaking down fundamental signals into new earnings, recent earnings, and past earnings.
            </li>
            <li>
              Implemented fuzzy search with <code>fuse.js</code> for quick stock lookups.
            </li>
            <li>
              Added custom Incremental Static Regeneration strategy in Next.js v13 to update the cache when data updates, allowing hosting on a $5 Digital Ocean server while scaling to thousands of global concurrent users
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 md:mt-12">Results & Retirement</h2>
          <p>
            Stock Situation successfully ran from early 2022 until November 2022, providing ML-powered stock analysis to users.
            The website was retired when my collaborator took a new role that made it impossible to continue maintaining the ML service.
            While the live site is no longer available, you can explore archived versions on{" "}
            <a href="https://web.archive.org/web/20221100000000*/stocksituation.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
              the Wayback Machine
            </a>.
          </p>
          <p>
            This project taught me invaluable lessons about product design, engineering, and collaboration. I gained hands-on
            experience building my first Next.js project, working with SQL and Prisma ORM, implementing custom ISR strategies
            for performance optimization, and learning about financial analysis and stock market data. Most importantly, I learned
            how to build a data-driven product that translates complex ML predictions into actionable insights for users.
          </p>

          <div className="not-prose mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "TailwindCSS", "Prisma", "Postgres", "SQL", "Recharts", "fuse.js"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-12 md:mt-16">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <Link href="/" className="text-blue-500 hover:text-blue-600 font-medium">
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
