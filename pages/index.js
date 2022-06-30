import Link from "next/link";

export default function Home() {
  const skills = [
    "Figma",
    "UX Design",
    "UI Design",
    "React",
    "GitHub",
    "HTML",
    "CSS",
    "JavaScript",
    "Product Design",
    "Wireframing",
    "Javascript",
    "Motion Design",
    "SaaS Products",
    "B2B Apps",
    "UX Research",
    "Product Management",
  ];
  return (
    <div className="flex h-full flex-col">
      <header className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="relative z-50 text-sm">
            <ul className="flex items-center">
              <li className="font-extrabold text-lg">
                <Link href="/#">
                  <a className="flex">
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="my-auto">Hey Noam</span>
                  </a>
                </Link>
              </li>
              <li className="ml-12">
                <Link href="/#work">
                  <a className="rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                    Work
                  </a>
                </Link>
              </li>
              <li className="ml-6">
                <Link href="/#testimonials">
                  <a className="rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                    Testimonials
                  </a>
                </Link>
              </li>
              <li className="ml-6">
                <Link href="/#contact">
                  <a className="rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                    Contact
                  </a>
                </Link>
              </li>
              <li>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
          <h1 className="mx-auto max-w-4xl font-display text-6xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
            Hey, I'm Noam Elbaz
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl tracking-tight text-slate-700">
            Noam Elbaz is a UX Designer and Frontend React Developer with a
            focus of creating web apps that are easy to use, simple, modern and
            attractive. He has extensive experience working closely with CEOs,
            product managers and developers. People who work with Noam find him
            to be creative, fast, motivated and flexible.
          </p>
          <section id="companies">
            <h2 className="font-extrabold text-2xl">
              Companies I've worked with
            </h2>
            <ul className=" grid grid-cols-4 mt-8 gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0">
              <li>ShipBoss</li>
              <li>Trullion</li>
              <li>cnvrg-io</li>
              <li>Wrist Cam</li>
              <li>Glide</li>
              <li>Mashr Labs</li>
              <li>Sifra Digital</li>
              <li>Vinci Works</li>
              <li>Levana Finance</li>
              <li>Twelve Tribes Films</li>
              <li>Common Crawl</li>
              <li>Tzur Investment</li>
            </ul>
          </section>
          <section id="testimonials">
            <h2 className="font-extrabold text-2xl">Testimoninals</h2>
            <ul className="grid grid-cols-4 space-x-4">
              <li>Jonathan Caras - quote</li>
              <li>Harry Hassoun - quote</li>
              <li>Leah Vogel - quote</li>
              <li>Avi Abelow - quote</li>
              <li>David Mark - quote</li>
              <li>Daniel Kohn - quote</li>
              <li>Ari Roisman - quote</li>
              <li>Raanan Grobman - quote</li>
              <li>Aaron Landy - quote</li>
            </ul>
          </section>
          <section id="skills">
            <h2 className="font-extrabold text-2xl">Skills & Talents</h2>
            <ul className="grid grid-cols-4 space-x-4">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
          <section id="resume">
            <h2 className="font-extrabold text-2xl">
              Work Experience & Resume
            </h2>
            <div className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
              <div className="w-0 flex-1 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
                <span className="ml-2 flex-1 w-0 truncate">file-name.pdf</span>
              </div>
              <div className="ml-4 flex-shrink-0">
                <div className="font-medium text-blue-600 hover:text-blue-500">
                  Download
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-16 flex">
            <div className="mx-auto bg-green-100">
              all the normal stuff you might put in a footer
            </div>
          </div>
          <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
            <div className="flex gap-x-6">
              <span className="sr-only">TaxPal on Twitter</span>
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84"></path>
              </svg>

              <span className="sr-only">TaxPal on GitHub</span>
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"></path>
              </svg>
            </div>
            <p className="mt-6 text-sm text-slate-500 sm:mt-0">
              Copyright © 2022 Hey, Noam. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
