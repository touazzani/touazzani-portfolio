import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface Project {
  id: string;
  name: string;
  desc: string;
  tech: string[];
}

interface InfoProps {
  project: Project | null;
  onClose: () => void;
}

const Info: React.FC<InfoProps> = ({ project, onClose }) => {
    const [activeProject, setActiveProject] = useState<Project | null>(null);

    const backdropRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    const tl = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        
        if (project) {
            document.body.style.overflow= 'hidden';
            setActiveProject(project);

            if (tl.current) {
                tl.current.kill();
            }

            tl.current = gsap.timeline();

            tl.current.to(backdropRef.current, {
                opacity: 1,
                backdropFilter: 'blur(4px)',
                duration: 0.3
            }, 0);

            tl.current.fromTo(modalRef.current,
                { opacity: 0, scale: 0 },
                { opacity: 0.8, scale: 1.2, duration: 0.25 },
                0
            )
            .to(modalRef.current,
                { opacity: 1, scale: 1, duration: 0.25, ease: 'back.out(1.7)' },
                0.25
            );
        
        } else if (activeProject) {
            if (tl.current) {
                tl.current.eventCallback('onReverseComplete', () => {
                    setActiveProject(null);
                    document.body.style.overflow = '';
                });
                
                tl.current.reverse();
            } else {
                setActiveProject(null);
                document.body.style.overflow = '';
            }
        }
    }, [project, activeProject]);

    if (!activeProject) {
        return null;
    }

    return (
        <>
            <div
                ref={backdropRef}
                className="fixed inset-0 z-10 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
                aria-hidden="true"
                style={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            ></div>

            <div
                ref={modalRef}
                className='bg-white fixed max-h-3/5 w-2/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-3xl p-8 shadow-lg'
                style={{ opacity: 0, scale: 0 }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                    aria-label="Fermer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <span className='font-bold text-3xl mb-4 block'>{activeProject.name}</span>
                <p>
                    {activeProject.desc}
                </p>

                <div className='flex flex-wrap gap-2 mt-4'>
                    {activeProject.tech?.map((techName) => (
                        <span key={techName} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                            {techName}
                        </span>
                    ))}
                </div>

            </div>
        </>
    );
};

export default Info;