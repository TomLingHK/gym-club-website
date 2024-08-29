import './Navigation.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import OrientationContext from '../../store/orientationContext';

function Navigation({ activeNav, setActiveNav }) {
    const orientation = useContext(OrientationContext);
    const navigate = useNavigate();

    const navItems = [
        { key: 'home', text: 'Home' },
        { key: 'classes', text: 'Our Classes' },
        { key: 'trainers', text: 'Our Trainers' },
        { key: 'aboutUs', text: 'HKGC' },
    ];

    function onNavClick($item) {
        let _target = '';

        switch ($item) {
            case "home":  _target = 'home'; break;
            case "classes":  _target = 'classes'; break;
            case "trainers": _target = 'trainers'; break;
            case "aboutUs": _target = 'aboutUs'; break;
            default: console.warn('Navigation mapping error, item: ', $item);
        }

        if (_target !== '') {
            navigate(`/${_target}`);
            setActiveNav(_target);
        }
    }

    return (
        <div className={`navBar ${orientation}`}>
            <div className='logo'>
                Logo
            </div>
            { orientation=='landscape' &&
                <div className='navContainer'>
                    {navItems.map(item => 
                        <div className={'navItem ' + (item.key === activeNav ? 'active' : '')} key={item.key} onClick={ () => onNavClick(item.key) }>{item.text}</div> 
                    )}
                </div>
            }
        </div>
    )
}

export default Navigation;