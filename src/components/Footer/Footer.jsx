import React from "react";
import { ButtonPrimary } from "../Button";
import {socials, sitemap} from './index.js'

const Footer = () => {

  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
              Let&apos;s work together today!
            </h2>

            <ButtonPrimary
              href="mailto:iqrarasheed219@gmail.com"
              label="Start project"
              icon="chevron_right"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      target="_blank"
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="logo">
            {/* <img src="/images/logo.svg" width={40} height={40} alt="logo" /> */}
            <p>
              Iqra's <span className="text-sky-400 font-bold">Portfolio</span>
            </p>
          </a>

          <p className="text-zinc-500 text-sm">
            &copy; Copyright -{" "}
            <span className="text-zinc-200">Iqra Rasheed</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
