import { useNavigate } from 'react-router-dom';
import './ClassContainer.scss';
import { useEffect } from 'react';

function ClassContainer({ index, title, fullTitle }) {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            document.getElementById(`classContainer${index}`).classList.add("fadeIn");
        }, index * 60);
    }, [])
    

    function onClassClick($title) {
        navigate(`/classes/${$title}`);
    }

    return (
        <div className='classContainer' id={`classContainer${index}`} onClick={() => onClassClick(title)}>
            <img className='img' src={`./images/class/${title}_img.jpg`} alt={`title ` + 'img'} />
            <div className='text'>{ fullTitle }</div>
        </div>
    );
}

export default ClassContainer;