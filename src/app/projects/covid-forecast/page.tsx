import Image from "next/image";
import { getImageSrc } from "@/lib/imagePath";
import Link from "next/link";

export const metadata = {
  title: "One Quiet Night - COVID-19 Forecast - Areum Jo",
  description: "COVID-19 forecast visualization using scientifically-driven machine learning models",
};

export default function CovidForecastPage() {
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

      <div className="bg-gray-200 text-gray-900">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <h1 className="text-5xl font-bold mb-6">One Quiet Night</h1>
          <p className="text-xl text-gray-700 mb-4">
            COVID-19 Forecast uses scientifically-driven machine learning models to accurately predict the spread
            of COVID-19 infections using real-time data from Delphi COVIDcast, JHU CSSE, The COVID Tracking Project,
            Apple Mobility Trend Reports, Google COVID-19 Community Mobility Reports, and C3 AI COVID-19 Data Lake.
          </p>
          <p className="text-xl text-gray-700 mb-8">
            We forecast the number of new COVID-19 cases per week for the next 4 weeks at the national, state, and
            county levels. We publish the forecasts through a web application and submit them to the CDC to help
            inform public health decision-making.
          </p>
          <div className="flex gap-4">
            <a
              href="https://one-quiet-night.github.io/vis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition-colors"
            >
              View Website →
            </a>
            <a
              href="https://github.com/One-Quiet-Night/COVID-19-forecast"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              GitHub →
            </a>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16 prose prose-lg prose-headings:font-bold">
        <div className="border-t border-gray-200 pt-8 md:pt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 md:mt-12">Task</h2>
          <p>
            As coronavirus cases continue to surge across the world and in the United States, healthcare institutions
            and data science communities have come together in an effort to produce more accurate forecasts. Accurate
            forecasts help healthcare providers manage resources and public health officials implement informed
            policies. One Quiet Night develops a scientifically-driven machine learning model to accurately predict
            the spread of COVID-19 infections.
          </p>
          <p>
            We use real-time data from the C3 AI COVID-19 Data Lake to estimate how many people are infectious and
            how much contact we should expect between people in the future. Our models use these factors to predict
            the number of new COVID-19 cases per week for the next 4 weeks at the national, state, and county levels.
            We validate our models using a historical backtest and show that they are competitive and outperform some
            well-established models.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 md:mt-12">Action</h2>
          <p>
            We collect and organize various data sets that may bear on the spread of COVID-19 -- daily case reports,
            movement trends, weather reports, and economic changes. Our models use this data to make predictions about
            future increases in COVID-19 cases at the county, state, and national levels in the United States. In
            order to learn the useful relations between variables with limited data, we use machine learning models
            with scientifically-driven features.
          </p>
          <p>
            We find that temporal and spatial features of the daily case reports and movement trends data predict
            future COVID-19 cases. Our models use these to make predictions for all counties, states, and the country
            for the next 4 weeks.
          </p>

          <div className="not-prose my-8">
            <Image
              src={getImageSrc("/images/oqn.png")}
              alt="One Quiet Night COVID-19 Forecast Visualization"
              width={800}
              height={500}
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 md:mt-12">My Role as a Full Stack Developer</h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Develop data visualization tool for understanding our forecast</h3>
          <p>
            Our React app is powered by <code>React-Simple-Maps</code> and <code>ReChart</code> showing a US map at
            the national/state/county level and the number of COVID-19 new cases. This choropleth map is visualized
            by the number of COVID-19 cases over the US at the state and county level. This intuitive map helps us
            understand a pattern of the infection at this moment.
          </p>
          <p>
            For better user experience, I implemented a search or select feature for the county. Users can just
            choose or search a word for the county they are looking for.
          </p>

          <div className="not-prose mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "React-Simple-Maps", "ReChart", "C3 AI Data Lake", "Machine Learning", "Data Visualization"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      <footer className="border-t border-gray-200 mt-12 md:mt-16">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
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
