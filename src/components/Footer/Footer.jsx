import './Footer.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import OrientationContext from '../../store/orientationContext';

function Footer({ setActiveNav }) {
    const orientation = useContext(OrientationContext);
    const navigate = useNavigate();

    function onPageClick($item) {
        let _target = '';

        switch ($item) {
            case "aboutUs": _target = 'aboutUs'; break;
            case "popularClasses": _target = 'classes'; break;
            case "ambassador": _target = 'trainers'; break;
            default: console.warn('Navigation mapping error, item: ', $item);
        }

        if (_target !== '') {
            navigate(`/${_target}`);
            setActiveNav(_target);
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
                    <div className='page aboutUs' onClick={() => onPageClick('aboutUs')} >
                        About Us
                    </div>
                    <div className='page'>
                        Contact Us
                    </div>
                </div>
                <div className='pageContainer'>
                    <h3 className='category'>
                        Our Classes
                    </h3>
                    <div className='page popularClasses' onClick={() => onPageClick('popularClasses')} >
                        Most Popular
                    </div>
                    <div className='page'>
                        Gym
                    </div>
                    <div className='page'>
                        Yoga
                    </div>
                </div>
                <div className='pageContainer'>
                    <h3 className='category'>
                        Our Trainers
                    </h3>
                    <div className='page ambassador' onClick={() => onPageClick('ambassador')} >
                        Brand Ambassador
                    </div>
                    <div className='page'>
                        All Trainers
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;