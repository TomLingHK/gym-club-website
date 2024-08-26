import './HeroSection.scss';
import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";

function HeroSection() {
    const { ref, inView } = useInView({
        threshold: 0.28,
    });

    useEffect(() => {
        const video = document.getElementById('heroVideo');
        if (inView) video.play();
        else video.pause();
    }, [inView])

    return (
        <section ref={ref} className={'heroSection scroll-checkpoint ' + (inView ? 'active' : '')}>
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
                <div className='btn exploreBtn'>
                    Explore
                </div>
            </div>
            <div className='img'>
            </div>
        </section>
    )
}

export default HeroSection;