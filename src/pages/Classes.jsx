import { useParams } from "react-router-dom";

// Components
import ClassSection from "../sections/ClassSection/ClassSection";

function Classes() {
    const { classId } = useParams();

    return (
        <div>
            <ClassSection classId={classId}/>
        </div>
    )
}

export default Classes;