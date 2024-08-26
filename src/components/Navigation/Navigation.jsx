import { useEffect, useState } from 'react';
import './Navigation.scss';
import { useNavigate } from 'react-router-dom';

function Navigation() {
    const navigate = useNavigate();
    const navItems = ['Home', 'Our Classes', 'Our Trainers', "HKGC"];
    const [isPortrait, setIsPortrait] = useState(undefined);

    useEffect(() => {
        window.matchMedia("(orientation: portrait)").addEventListener("change", e => {
            const portrait = e.matches;
        
            if (portrait) {
                setIsPortrait('portrait');
            } else {
                setIsPortrait('landscape');
                
            }
        });

        if (isPortrait == undefined){
            window.matchMedia("(orientation: portrait)").matches ? setIsPortrait('portrait') : setIsPortrait('landscape');
        }
    }, [])
    

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
        <div className={'navBar ' + (isPortrait=='portrait' ? 'portrait' : 'landscape')}>
            <div className='logo'>
                Logo
            </div>
            {isPortrait=='landscape' &&
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