import "./TrainerCategory.scss";
import TrainerContainer from "../../../components/TrainerContainer/TrainerContainer";

// Constants
import trainer_info from "../../../constants/trainer_info.json";

function TrainerCategory({ 
    categoryTitle, 
    trainersArr,
}) {
    return (
        <div className='trainerCategory'>
            <h2 className='title'>{categoryTitle}</h2>
            <div className='trainersPanel'>
                {trainersArr.map((title, index) => {
                    const trainerDetails = trainer_info[title];
                    return (
                        <TrainerContainer
                            key={`${categoryTitle}${index}`}
                            index={index}
                            title={trainerDetails?.title}
                            fullTitle={trainerDetails?.fullTitle}
                            category={title}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default TrainerCategory;