import React from 'react'
import { projects } from '../constants'
import cozyTest from '../assets/test.gif'

const Projects = () => {
  return (
<section className="bg-[oklch(20.5%_0_0)] min-h-screen">

        <div className='w-lv aspect-video relative'>
          <img src={cozyTest} alt="" className='w-full object-cover' />
          <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-[oklch(20.5%_0_0)]'></div>
          <div className="container">

            <h1 className="text-white font-bold md:text-5xl text-center absolute top-0 p-2 md:py-16">
              Mes projets
            </h1>
            <div className='absolute bottom-0 text-white p-2 md:py-16 flex flex-col md:gap-4'>
              <h2 className='font-bold text-2xl md:text-9xl'>Cozy Life</h2>
              <div className='flex gap-4'>
                <span className='bg-black px-4 py-2 rounded-full'>Unreal Engine</span>
                <span className='bg-black px-4 py-2 rounded-full'>Test</span>
              </div>
              <p className='text-lg md:text-2xl'>Texte de test pour le moment</p>
              <a className='bg-white text-black px-4 py-2 font-semibold rounded-md w-fit' href='https://steam.com'>Acheter</a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.values(projects).map((project) => (
          <div 
            key={project.name}
            className="bg-white bg-opacity-5 rounded-lg p-6 hover:bg-opacity-10 transition-all duration-300"
          >
            <h2 className="text-black font-semibold text-2xl mb-4 capitalize">
              {project.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span 
                  key={tech}
                  className="bg-white bg-opacity-10 text-black px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.img && (
              <img 
                src={project.img} 
                alt={project.name}
                className="w-full h-48 object-cover"
              />
            )}
            {project.desc && (
              <p>
                {project.desc}
                </p>
              )}
          </div>
        ))}
      </div>
</section>

  )
}

export default Projects