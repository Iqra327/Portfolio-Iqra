import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import {works, htmlcssProjects, jsProjects, reactProjects} from './index.js';

const Work = () => {
  const[selectedCategory, setSelectedCategory] = useState(null);
  
  const handleClick = (title) => {
    switch (title) {
      case 'HTML CSS Projects':
        setSelectedCategory(htmlcssProjects);
        break;
      case 'JavaScript Projects':
        setSelectedCategory(jsProjects);
        break;
      case 'React-JS Projects':
        setSelectedCategory(reactProjects);
        break;
      default:
        setSelectedCategory(null);
    }
  }
  
  console.log(selectedCategory);
  
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="headline-2 mb-8">My Portfolio highlights</h2>

        {/* back btn */}
        {
          selectedCategory && (
            <button 
              className="bg-sky-300 text-center font-bold items-center flex text-zinc-700 rounded-md px-2 py-2 mb-5"
              onClick={() => setSelectedCategory(null)}
            >
              <span 
                className="material-symbols-rounded me-1"
                aria-hidden='true'
              >
               arrow_backward
              </span>
              Back
            </button>
          )
        }
        
        {/* cards */}
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {!selectedCategory ? (
            works.map(({ imgSrc, title, tags }, key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                onClick={() => handleClick(title)}
                classes=" cursor-pointer"
              />
            ))) : (
              selectedCategory.map(({ imgSrc, title, tags, projectLink, github }, key) => (
                <ProjectCard
                  key={key}
                  imgSrc={imgSrc}
                  title={title}
                  tags={tags}
                  projectLink={projectLink}
                  github={github}
                  classes=" cursor-pointer"
                />
              )))
            }
        </div>
      </div>
    </section>
  );
};

export default Work;