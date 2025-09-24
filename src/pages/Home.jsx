// Components
import GoToTopBtn from '../components/GoToTopBtn/GoToTopBtn';
import EmptySection from '../sections/EmptySection/EmptySection';
import FeaturesSection from '../sections/FeaturesSection/FeaturesSection';
import FeedbackSection from '../sections/FeedbackSection/FeedbackSection';
import HeroSection from '../sections/HeroSection/HeroSection';
import PricingSection from '../sections/PricingSection/PricingSection';

function Home({ setActiveNav }) {
    return (
        <>
            <HeroSection setActiveNav={setActiveNav} />
            <FeaturesSection/>
            <PricingSection/>
            <FeedbackSection/>
            <EmptySection/>
            <GoToTopBtn/>
        </>
    )
}

export default Home;