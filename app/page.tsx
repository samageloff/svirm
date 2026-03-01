"use client";

import Image from "next/image";
import { brands, tech } from "../lib/projectsConfig";

const expertise = [
  "Product Design",
  "UX Engineering",
  "Frontend Development",
  "Technical Leadership",
  "Design Systems",
  "Web Performance",
];

export default function PortfolioHome() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-20">
        <div className="flex-1 max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Software Engineer &amp; Technical Leader
          </p>
          <h1 className="mb-6 text-6xl font-extrabold">Sam Ageloff</h1>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            A product and UX-focused engineer with 20 years of experience
            bridging design and technology. I&apos;ve built websites and digital
            products for major brands and startups — as an individual
            contributor and technical lead — from concept through shipped code.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {expertise.map((label) => (
              <span
                key={label}
                className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {label}
              </span>
            ))}
          </div>
          <div className="flex gap-6">
            <a
              href="<https://www.linkedin.com/in/samageloff/>"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-800 dark:text-gray-100 border-b-2 border-gray-400 hover:border-gray-800 dark:hover:border-white pb-0.5 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-800 dark:text-gray-100 border-b-2 border-gray-400 hover:border-gray-800 dark:hover:border-white pb-0.5 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="w-36 h-36 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg flex-shrink-0">
          <Image
            src="/me.png"
            alt="Sam Ageloff"
            width={224}
            height={224}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Brands & Tech */}
      <div className="mb-12">
        <h3 className="text-xl mb-4">Brands</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center">
              <Image
                src={brand.logo}
                width="96"
                height="96"
                alt={brand.name}
                className="mr-2"
              />
              <span className="text-lg">{brand.name}</span>
            </div>
          ))}
        </div>

        <h3 className="text-xl mb-4">Tech</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tech.map((category) => (
            <div key={category.category} className="mb-6">
              <h4 className="text-md font-semibold mb-2">
                {category.category}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((item) => (
                  <div key={item} className="flex items-center">
                    <span className="text-md">• {item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
