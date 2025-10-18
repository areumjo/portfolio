import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Empowered Conversation - Areum Jo",
  description: "Survivor-activated tool that prepares the person they will disclose to before the conversation takes place",
};

export default function EmpoweredConversationPage() {
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

      <div className="bg-red-200 text-gray-900">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <h1 className="text-5xl font-bold mb-6">Empowered Conversation</h1>
          <p className="text-xl text-gray-700 mb-4">
            A survivor-activated tool that educates and prepares the person they will disclose to before the
            conversation takes place.
          </p>
          <p className="text-lg text-gray-700 mb-8">Lambda School Build-Week Project</p>
          <div className="flex gap-4">
            <a
              href="https://empowered-convo-ui-aj.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors"
            >
              View Website →
            </a>
            <a
              href="https://github.com/empowered-convo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-2 border-red-600 text-red-700 rounded-full font-medium hover:bg-red-300 transition-colors"
            >
              GitHub →
            </a>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16 prose prose-lg prose-headings:font-bold">
        <div className="border-t border-gray-200 pt-8 md:pt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 md:mt-12">Situation</h2>
          <p>
            Empowered Conversation aims to re-envision the future of social support. With the phone text-based tool,
            the person you want to have a "hard conversation" with will be texted before the conversation with a
            heads-up so they can emotionally prepare themselves.
          </p>
          <p>
            From sexual assault disclosure to coming out, transitioning, grief and loss, we set the stage for
            relationships that are radically more supportive and meaningful than you ever imagined they could be.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 md:mt-12">Action</h2>
          <div className="not-prose grid md:grid-cols-2 gap-8 my-8 items-start">
            <Image
              src="/images/empower-gif.gif"
              alt="Empowered Conversation Animation"
              width={400}
              height={600}
              className="rounded-lg shadow-lg w-full"
            />
            <div className="prose">
              <p>
                We want the web application to be informative and supportive enough to reach out. Adding a text message
                toolbox shows how this application is going to work and gives the expectation that you would get some sort
                of text-based notification on your phone.
              </p>
              <p>
                I built this feature with a JavaScript library called <code>ScrollReveal</code> and implemented it in the middle
                of the webpage. Every time a user passes this text section, it will refresh the conversation and give a
                texting experience, providing a little easier approach.
              </p>
              <p>
                Reading about its documentation and figuring out how to implement this library to an already-developed
                webpage was not easy. But this experience taught me how a programmer sees a problem and develops
                the solution.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 md:mt-12">Solution</h2>
          <p>
            We connected the marketing page to a form-based React app that the user can fill in their name and phone
            number as well as family/friend's information whom they want to talk to. The family member or friend will
            get a text notification through <code>Twilio</code> with enough time to start a conversation.
          </p>

          <div className="not-prose my-8">
            <Image
              src="/images/empower-react.png"
              alt="Empowered Conversation React App"
              width={800}
              height={500}
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <p>
            After the user click continue, a pop-up about consent/liability waiver will show up and then the
            confirmation will give the user one last time to think about the conversation. The user will get helpful
            resources to read before they initiate the conversation.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 md:mt-12">My Role as a web UI developer</h2>
          <div className="not-prose grid md:grid-cols-2 gap-8 my-8 items-start">
            <div>
              <Image
                src="/images/empower-mobile.png"
                alt="Empowered Conversation Mobile View"
                width={300}
                height={550}
                className="rounded-lg shadow-lg w-full"
              />
              <p className="text-center text-gray-600 mt-2">Mobile view of the website</p>
            </div>
            <div className="prose">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Understanding web fundamentals</h3>
              <p>
                My role is to build out a multi-page marketing website that matches the theme chosen by my team and
                provides the user with details about the product the team has selected to build. Understanding web
                fundamentals such as HTML, CSS and JavaScript and combining them with other libraries, and programming
                paradigms into a project is a main goal of this project.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Responsive web design - LESS preprocessing</h3>
              <p>
                I used LESS preprocessor to keep CSS organized and easy to read the code and get full responsiveness
                for mobile, tablet, and desktop screen. So users can get the best user experience whichever screen
                size they use to access the website.
              </p>
            </div>
          </div>

          <div className="not-prose my-8">
            <Image
              src="/images/empower-desktop.png"
              alt="Empowered Conversation Desktop View"
              width={800}
              height={500}
              className="rounded-lg shadow-lg w-full"
            />
            <p className="text-center text-gray-600 mt-2">Desktop view of the website</p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 md:mt-12">Collaboration</h2>
          <p>
            One of the most important and valuable things I learned from the <em>Lambda School Build Week project</em> is
            learning how a team for web development works. UI developers like my role for this project ensure that the
            web app looks great on screens of any size and works well in any browser.
          </p>

          <div className="not-prose my-8">
            <Image
              src="/images/empower-collab.png"
              alt="Team Collaboration"
              width={800}
              height={500}
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 md:mt-12">Result</h2>
          <p>
            Our team got selected to present our product in front of about 500 Lambda School students and meet
            stakeholders to get feedback. Since my design was the one we chose to submit, I played the presenter
            role by nature. We added a live demo session showing how users would use our app and we got a lot of positive feedback.
          </p>

          <div className="not-prose mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "HTML", "CSS", "JavaScript", "LESS", "ScrollReveal", "Twilio", "UI/UX"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-red-50 text-red-800 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      <footer className="border-t border-gray-200 mt-12 md:mt-16">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <Link href="/" className="text-red-700 hover:text-red-900 font-medium">
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
