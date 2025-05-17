import './HeroSection.scss';
import { useEffect, useContext } from 'react';
import { useInView } from "react-intersection-observer";
import { useNavigate } from 'react-router-dom';
import OrientationContext from '../../store/orientationContext';

function HeroSection({ setActiveNav }) {
    const orientation = useContext(OrientationContext);
    const navigate = useNavigate();

    const { ref, inView } = useInView({
        threshold: 0.28,
    });

    useEffect(() => {
        const video = document.getElementById('heroVideo');
        if (inView) video.play();
        else video.pause();
    }, [inView])

    function onExploreClick() {
        let _target = 'classes';
        
        navigate(`/${_target}`);
        setActiveNav(_target);
    }

    return (
        <section ref={ref} className={`heroSection scroll-checkpoint ${orientation} ` + (inView ? 'active' : '')}>
            <video autoPlay muted loop id="heroVideo">
                <source src="./videos/hero_bg_vid.mp4" type="video/mp4" />
            </video>
            <div className='text'>
                <h1 className='title'>
                    Stop Thinking,
                </h1>
                <h1 className='title title2'>
                    Start Now!
                </h1>
                <div className='description'>
                    Try our free trial section from one of our 100+ classes
                </div>
                <div className='btn exploreBtn' onClick={onExploreClick}>
                    Explore
                </div>
            </div>
            <div className='img'>
            </div>
        </section>
    )
}

export default HeroSection;