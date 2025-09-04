import { useNavigate } from 'react-router-dom';
import './Menu.scss';

function Menu({ menuData, activeMenu, setActiveMenu }) {
    const { mainTitle, menuItem } = menuData;
    const navigate = useNavigate();
    
    function onMenuClick($item) {
        setActiveMenu($item.key);
        navigate('/classes');
    }

    return (
        <div className='menu'>
            <h3 className='mainTitle'>
                {mainTitle}
            </h3>
            {menuItem.map(item => {
            return(
                <div className={`item ${item.key} ${activeMenu === item.key ? 'active' : ''}`} onClick={ () => onMenuClick(item) } key={item.key} >
                    {item.text}
                </div>
            )})}
        </div>
    )
}

export default Menu;