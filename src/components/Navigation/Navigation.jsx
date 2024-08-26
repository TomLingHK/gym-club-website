import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navigation.scss';
import OrientationContext from '../../store/orientationContext';

function Navigation() {
    const navItems = ['Home', 'Our Classes', 'Our Trainers', "HKGC"];
    const orientation = useContext(OrientationContext);
    const navigate = useNavigate();

    function onNavClick($item) {
        switch ($item) {
            case "Home": navigate('/'); break;
            case "Our Classes": navigate('/classes'); break;
            case "Our Trainers": navigate('/trainers'); break;
            case "HKGC": navigate('/aboutUs'); break;
            default: console.warn('Navigation mapping error, item: ', $item);
        }
    }

    return (
        <div className={'navBar ' + orientation}>
            <div className='logo'>
                Logo
            </div>
            {orientation=='landscape' &&
            <div className='navContainer'>
                {navItems.map(item => 
                    <div className='navItem' key={item} onClick={ () => onNavClick(item) }>{item}</div> 
                )}
            </div>
            }
        </div>
    )
}

export default Navigation;