import './ClassContainer.scss';

function ClassContainer({ title }) {
    return (
    <div className='classContainer'>
        <img src={`./images/${title}_img.jpg`} alt={`title ` + 'img'} className='img' />
        <div className='text'>{ title }</div>
    </div>);
}

export default ClassContainer;