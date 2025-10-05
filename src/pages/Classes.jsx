import { useLocation, useParams } from "react-router-dom";

// Components
import ClassSection from "../sections/ClassSection/ClassSection";

function Classes() {
    const { classId } = useParams();
    const { state } = useLocation();

    return (
        <div>
            <ClassSection classId={classId} defaultMenu={state?.activeMenu} />
        </div>
    )
}

export default Classes;