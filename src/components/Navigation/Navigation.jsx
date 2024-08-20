import './Navigation.scss';
import { useNavigate } from 'react-router-dom';

function Navigation() {
    const navigate = useNavigate();
    const navItems = ['Home', 'Our Classes', 'Our Trainers', "HKGC"];

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
        <div className='navBar'>
            <div className='logo'>
                Logo
            </div>
            <div className='navContainer'>
                {navItems.map(item => 
                    <div className='navItem' key={item} onClick={ () => onNavClick(item) }>{item}</div> 
                )}
            </div>
        </div>
    )
}

export default Navigation;