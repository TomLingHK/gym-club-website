// Components
import EmptySection from '../sections/EmptySection/EmptySection';
import FeaturesSection from '../sections/FeaturesSection/FeaturesSection';
import FeedbackSection from '../sections/FeedbackSection/FeedbackSection';
import HeroSection from '../sections/HeroSection/HeroSection';
import PricingSection from '../sections/PricingSection/PricingSection';

function Home({ setActiveNav }) {
    return (
        <>
            <HeroSection/>
            <FeaturesSection/>
            <PricingSection/>
            <FeedbackSection/>
            <EmptySection setActiveNav={setActiveNav} />
        </>
    )
}

export default Home;