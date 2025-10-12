import { useNavigate } from "react-router-dom";
import "./TrainerContainer.scss";
import { useEffect } from "react";

function TrainerContainer({ 
    index,
    title, 
    fullTitle, 
}) {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            document.getElementById(`trainerContainer${index}`).classList.add("fadeIn");
        }, index * 60);
    }, [])
    
    function onTrainerClick($title) {
        navigate(`/trainers/${$title}`);
    }

    return (
        <div className='trainerContainer' id={`trainerContainer${index}`} onClick={() => onTrainerClick(title)}>
            <img className='img' src={`./images/trainers/${title}_img_1.jpg`} alt={`title ` + 'img'} />
            <div className='text'>{ fullTitle }</div>
        </div>
    );
}

export default TrainerContainer;