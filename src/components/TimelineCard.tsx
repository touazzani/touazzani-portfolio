import React from 'react'

const TimelineCard = ({ edu, position }) => {

    const handleImageError = (e) => {
                const target = e.target;
                target.onerror = null;
                target.src = 'https://placehold.co/600x400/333/fff?text=Image+introuvable';
            };

    return (
        <div className={`w-full md:w-5/12 flex ${position === 'left' && 'justify-end'} `}>
                <div className={`timeline-card ${position === 'left' ? 'card-left' : 'card-right'} 
                                 w-full md:w-1/2 overflow-hidden relative
                                 ml-10 md:ml-0`}>
                    
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rotate-45 
                                    ${position === 'left' ? 'right-0 -mr-2' : 'left-0 -ml-2'}`}>
                    </div>

                    <img 
                        src={edu.image} 
                        alt={edu.title} 
                        className="w-full h-56 object-cover rounded-lg mb-2" 
                        onError={handleImageError}
                    />
                    <div>
                        <h3 className="font-bold text-xl mb-1 text-white">{edu.title}</h3>
                        <p className="text-neutral-200">{edu.school}</p>
                        <p className="text-neutral-50 text-sm">{edu.place}</p>
                    </div>
                </div>
            </div>
            );
}

export default TimelineCard