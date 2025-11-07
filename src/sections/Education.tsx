import React, {useRef, useEffect} from 'react'
import { education } from '../constants'
import { gsap } from 'gsap'
import TimelineCard from '../components/TimelineCard'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Education = () => {

  const educationList = Object.values(education);

  const main = useRef(null)

  useEffect(() => {
    
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.card-left').forEach((card) => {
        gsap.from(card, {
            autoAlpha: 0,
            x: -100,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });
      });

      gsap.utils.toArray('.card-right').forEach((card) => {
        gsap.from(card, {
            autoAlpha: 0,
            x: 100,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });
    });

    gsap.utils.toArray('.timeline-item').forEach((item) => {
      gsap.from(item, {
        autoAlpha: 0,
        scale: 0.5,
        duration: 0.5,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      });
    });

    }, main);

    return () => ctx.revert();
  }, []);

  return (
  <section ref={main} className="bg-black py-16 md:py-24 font-sans overflow-hidden">
    <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 md:mb-24 text-white">
        Mon parcours
    </h2>
    
    <div className="container mx-auto px-4 relative">
        
        <div className="absolute w-1 h-full left-4 md:left-1/2 md:-translate-x-1/2 z-0 bg-gradient-to-t from-black via-blue-300 to-black"></div>

        <div className="relative flex flex-col gap-y-12">
        
            {educationList.map((edu, index) => (
                <div 
                    key={index} 
                    // Correction de la classe : 'timeline-item' pour l'animation
                    // La logique d'inversion était incorrecte, je l'ai corrigée.
                    className={`timeline-item relative md:flex md:items-center ${
                        index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                    }`}
                >
                    
                    
                        <TimelineCard 
                            edu={edu} 
                            position={index % 2 === 0 ? 'left' : 'right'} 
                        />

                    <div className="hidden md:flex w-2/12 justify-center">
                        <span className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full z-10">
                            {edu.dates}
                        </span>
                    </div>

                    <div className="hidden md:block w-5/12"></div>
                    
                    <div className="md:hidden absolute w-4 h-4 bg-white border-2 border-blue-500 rounded-full left-4 -translate-x-1/2 top-4 z-10"></div>
                    
                    <div className="md:hidden absolute left-10 top-2">
                        <span className="bg-blue-500 text-white font-semibold py-1 px-3 rounded-full z-10 text-sm">
                            {edu.dates}
                        </span>
                    </div>
                </div>
            ))}

        </div>
    </div>
</section>
  )
}

export default Education