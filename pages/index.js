import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {

  const titleStyle = 'font-extrabold uppercase mx-auto mt-6 max-w-7xl text-5xl text-slate-700 leading-[2.7rem] tracking-[0.3rem]'
  const listStyle = "p-24 text-3xl  font-mono grid grid-cols-2 mt-8 gap-x-2 gap-y-12 tracking-[0.3rem] uppercase"
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }


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

  const companies = [
    "Shipboss", 
    "Mashr Labs", 
    "Trullion",
    "cnvrg-io",
    "Wrist Cam",
    "Glide",
    "Sifra Digital",
    "Vinci Works",
    "Levana Finance",
    "Twelve Tribes Films",
    "Trullion",
    "Common Crawl",
    "Tzur Investment",
    "ViewO"
];

const testimonials = [
  "Jonathan Caras - quote",
  "Harry Hassoun - quote",
  "Leah Vogel - quote",
  "Avi Abelow - quote",
  "David Mark - quote",
  "Daniel Kohn - quote",
  "Ari Roisman - quote",
  "Asher ... - quote",
  "Raanan Grobman - quote",
  "Aaron Landy - quote",
  "David Price - quote",
]



  return (
    <div className="relative flex h-full flex-col pt-24">

      <main>
      
        <div className="mx-auto max-w-7xl text-center">
          
          <p className={classNames("font-extrabold uppercase mx-auto mt-6 max-w-7xl text-7xl text-slate-700 leading-[2.7em] tracking-[0.5em]")} >
            <span className="text-[120px]">Noam Elbaz</span> is a
            Full Stack React Developer and UX Designer
            with a focus on creating web apps
            that are easy to use,
            simple, modern and attractive.
            He has extensive experience working closely with
            CEOs, Biz Dev, PMs, Designers and Developers.
            People who work with Noam find him
            to be creative, fast, motivated and flexible.
          </p>
          <section id="companies">
            <h2 className={titleStyle}>
              Companies I've worked with
            </h2>
            <ul className={listStyle}>
              {companies.map((company, index) => (
                <li key={index}>{company}</li>
              ))}
            </ul>
          </section>
          <section id="testimonials">
            <h2 className={titleStyle}>Testimoninals</h2>
            <ul className={listStyle}>
              {testimonials.map((company, index) => (
                <li key={index}>{company}</li>
              ))}
            </ul>
            
            <ul className="grid grid-cols-4 space-x-4">

            </ul>
          </section>
          <section id="skills">
            <h2  className={titleStyle}>Skills & Talents</h2>
            <ul className={listStyle}>
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
          <section id="resume">
            <h2  className={titleStyle}>
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
                  strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
          <section id="articles"></section>
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
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84"></path>
              </svg>

              <span className="sr-only">TaxPal on GitHub</span>
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700">
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
