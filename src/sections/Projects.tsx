import React, { useState, useRef, useEffect, useMemo } from "react";
import { projects } from "../constants";
import cozyTest from "../assets/test.gif";
import Info from "../components/Info";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

interface Link {
  text: string;
  href: string;
}
interface Project {
  id: string;
  name: string;
  image: string; // Le carrousel utilise cette propriété
  tech: string[];
  slogan: string;
  link: Link;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList: Project[] = useMemo(() => {
    return Object.values(projects);
  }, []);

  // État pour suivre l'index de la diapositive actuelle
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const sloganRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const cursorRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const typeTimeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // 1. Nettoyer l'animation précédente (si elle existe)
    if (typeTimeline.current) {
      typeTimeline.current.kill(); // Arrête et nettoie l'ancienne timeline
    }

    // 2. Réinitialiser tous les éléments
    gsap.set(cursorRefs.current, { autoAlpha: 0 }); // Cache tous les curseurs
    sloganRefs.current.forEach((el) => {
      if (el) el.textContent = ""; // Vide tous les slogans
    });

    // 3. Cibler les éléments du slide ACTUEL
    const sloganEl = sloganRefs.current[currentIndex];
    const cursorEl = cursorRefs.current[currentIndex];

    if (!sloganEl || !cursorEl) return; // Sécurité

    const sloganText = projectList[currentIndex].slogan;

    // 4. Créer la nouvelle timeline d'animation
    typeTimeline.current = gsap.timeline();

    typeTimeline.current
      .set(cursorEl, { autoAlpha: 1 })
      .to(cursorEl, {
        autoAlpha: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        ease: "steps(1)",
      })

      .to(
        sloganEl,
        {
          text: sloganText,
          duration: sloganText.length * 0.05, // Vitesse de frappe
          ease: "none",
        },
        0
      ); // Le '0' démarre l'animation en même temps

    // 6. Fonction de nettoyage
    return () => {
      typeTimeline.current?.kill();
    };
  }, [currentIndex, projectList]);

  // Fonction pour aller à la diapositive précédente
  const goToPrevious = (): void => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projectList.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Fonction pour aller à la diapositive suivante
  const goToNext = (): void => {
    const isLastSlide = currentIndex === projectList.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Fonction pour aller à une diapositive spécifique (pour les points)
  const goToSlide = (slideIndex: number): void => {
    setCurrentIndex(slideIndex);
  };

  // NOUVEAU: Effet pour s'assurer que la vidéo se lance au changement de slide
  useEffect(() => {
    const timer = setTimeout(() => {
      const activeVideo = document.querySelector(
        `[data-index="${currentIndex}"] video`
      );
      if (activeVideo) {
        (activeVideo as HTMLVideoElement).currentTime = 0;
        (activeVideo as HTMLVideoElement)
          .play()
          .catch((e) => console.error("Erreur de lecture vidéo:", e));
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    // J'utilise votre <section> et sa couleur de fond
    <section className="bg-black">
      {/* Conteneur principal du carrousel (le "viewport") */}
      <div className="h-[70vh] md:h-screen relative overflow-hidden shadow-2xl">
        <div className="container">
          <h1 className="text-white font-bold text-3xl md:text-5xl text-center pt-8 absolute md:py-16 top-0 z-10">
            Mes projets
          </h1>
        </div>
        {/* Le "track" qui contient toutes les diapositives */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {/* On map sur la liste des projets pour créer chaque diapositive */}
          {projectList.map((project: Project, index: number) => (
            <div
              key={project.id}
              className="w-full flex-shrink-0 h-full relative"
            >
              <video
                // Lecture automatique
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
                src={project.img}
                alt={`Projet ${project.name}`}
                className="w-full h-full object-cover"
              >
                <source src={project.img} type="video/mp4" />
                Votre navigateur ne supporte pas la balise vidéo.
              </video>
              {/* Le dégradé pour la lisibilité */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-[oklch(20.5%_0_0)]"></div>

              {/* Le contenu textuel */}
              <div className="container absolute bottom-0 md:py-16 text-white flex flex-col md:gap-4">
                <h2 className="font-bold text-3xl md:text-5xl lg:text-7xl shadow-black [text-shadow:_0_2px_4px_var(--tw-shadow-color)]">
                  {project.name}
                </h2>
                <div className="flex gap-2 md:gap-3 flex-wrap">
                  {project.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="bg-black/50 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-lg md:text-2xl mt-2 shadow-black [text-shadow:_0_2px_4px_var(--tw-shadow-color)]">
                  <p
                    ref={(el) => (sloganRefs.current[index] = el)}
                    className="min-h-[1.5em] md:min-h-[1.5em]" // Garde l'espace
                  >
                    {/* Le texte sera injecté par GSAP */}
                  </p>
                  <span
                    ref={(el) => (cursorRefs.current[index] = el)}
                    className="text-2xl md:text-3xl"
                    style={{ opacity: 0 }} // Caché par défaut
                  >
                    |
                  </span>
                </div>
                <div className="flex gap-4">
                  <button
                    className="bg-black text-whtie px-5 py-2 font-semibold rounded-md w-fit mt-3 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    Voir plus
                  </button>
                  {project.link && (
                    <a
                      className="bg-white text-black px-5 py-2 font-semibold rounded-md w-fit mt-3 hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.link.text}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flèche de navigation Précédent */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 -translate-y-1/2 z-10 p-2 bg-white/20 rounded-full text-white hover:bg-white/40 transition-colors duration-200 cursor-pointer"
          aria-label="Projet précédent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 md:w-6 md:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Flèche de navigation Suivant */}
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 -translate-y-1/2 z-10 p-2 bg-white/20 rounded-full text-white hover:bg-white/40 transition-colors duration-200 cursor-pointer"
          aria-label="Projet suivant"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 md:w-6 md:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        {/* Indicateurs (points) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {projectList.map((_, slideIndex: number) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === slideIndex
                  ? "bg-white scale-110"
                  : "bg-white/50"
              }`}
              aria-label={`Aller au projet ${slideIndex + 1}`}
            ></button>
          ))}
        </div>
        <Info
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;
