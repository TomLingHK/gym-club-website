// Components
import { useLocation } from "react-router-dom";
import TrainerSection from "../sections/TrainerSection/TrainerSection";

function Trainers() {
    const { state } = useLocation();

    return (
        <div>
            <TrainerSection defaultMenu={state?.activeMenu} />
        </div>
    )
}

export default Trainers;