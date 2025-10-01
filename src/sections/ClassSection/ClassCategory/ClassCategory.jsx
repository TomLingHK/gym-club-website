import './ClassCategory.scss';

// Components
import ClassContainer from "../../../components/ClassContainer/ClassContainer";

// Constants
import class_info from "../../../constants/class_info.json";

function ClassCategory({
    categoryTitle,
    classesArr,
}) {
    return (
        <div className='classCategory'>
            <h2 className='title'>{categoryTitle}</h2>
            <div className='classesPanel'>
                {classesArr.map((title, index) => {
                    const classDetails = class_info[title];
                    return (
                        <ClassContainer
                            key={`${categoryTitle}${index}`}
                            index={index}
                            title={classDetails?.title}
                            fullTitle={classDetails?.fullTitle}
                            category={title}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default ClassCategory;