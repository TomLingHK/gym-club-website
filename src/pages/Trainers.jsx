// Components
import { useLocation, useParams } from "react-router-dom";
import TrainerSection from "../sections/TrainerSection/TrainerSection";

function Trainers() {
    const { trainerId } = useParams();
    const { state } = useLocation();

    return (
        <div>
            <TrainerSection trainerId={trainerId} defaultMenu={state?.activeMenu} />
        </div>
    )
}

export default Trainers;