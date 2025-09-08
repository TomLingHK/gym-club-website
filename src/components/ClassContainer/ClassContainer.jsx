import { useNavigate } from 'react-router-dom';
import './ClassContainer.scss';

function ClassContainer({ title, fullTitle }) {
    const navigate = useNavigate();

    function onClassClick($title) {
        navigate(`/classes/${$title}`);
    }

    return (
        <div className='classContainer' onClick={() => onClassClick(title)}>
            <img className='img' src={`./images/class/${title}_img.jpg`} alt={`title ` + 'img'} />
            <div className='text'>{ fullTitle }</div>
        </div>
    );
}

export default ClassContainer;