import './Footer.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Context
import OrientationContext from '../../store/orientationContext';

function Footer({ setActiveNav }) {
    const orientation = useContext(OrientationContext);
    const navigate = useNavigate();

    function onPageClick($page, $activeMenu = '' ) {
        switch ($page) {
            case "aboutUs": 
            case "classes":
            case "trainers":
                break;
            default: 
                console.warn('Navigation mapping error, page: ', $page); return;
        }

        if ($page !== '') {
            $activeMenu !== '' ? navigate(`/${$page}`, { state: { activeMenu: $activeMenu } }) : navigate(`/${$page}`);
            setActiveNav($page);
            window.scrollTo(0, 0);
        }
    }

    return (
        <div className={`footer ${orientation}`}>
            <div className='logoContainer'>
                <div className='logo'>logo</div>
                <div className='description'>
                    One of the largest gym centre in HK with 10+ years experience.
                </div>
            </div>
            <div className='pagesContainer'>
                <div className='pageContainer'>
                    <h3 className='category'>
                        HKGC
                    </h3>
                    <div className='page aboutUs' onClick={() => onPageClick('aboutUs', 'aboutUs')} >
                        About Us
                    </div>
                    <div className='page' onClick={() => onPageClick('aboutUs', 'contactUs')} >
                        Contact Us
                    </div>
                </div>
                <div className='pageContainer'>
                    <h3 className='category'>
                        Our Classes
                    </h3>
                    <div className='page popular' onClick={() => onPageClick('classes', 'popular')} >
                        Most Popular
                    </div>
                    <div className='page gym' onClick={() => onPageClick('classes', 'gym')} >
                        Gym
                    </div>
                    <div className='page yoga' onClick={() => onPageClick('classes', 'yoga')} >
                        Yoga
                    </div>
                </div>
                <div className='pageContainer'>
                    <h3 className='category'>
                        Our Trainers
                    </h3>
                    <div className='page ambassador' onClick={() => onPageClick('trainers', 'ambassador')} >
                        Brand Ambassador
                    </div>
                    <div className='page trainers' onClick={() => onPageClick('trainers', 'trainers')} >
                        All Trainers
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;