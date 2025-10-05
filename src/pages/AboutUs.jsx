// Components
import { useLocation } from "react-router-dom";
import AboutUsSection from "../sections/AboutUsSection/AboutUsSection";

function AboutUs() {
    const { state } = useLocation();

    return (
        <div>
            <AboutUsSection defaultMenu={state?.activeMenu} />
        </div>
    )
}

export default AboutUs;