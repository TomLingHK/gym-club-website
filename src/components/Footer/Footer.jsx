import './Footer.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import OrientationContext from '../../store/orientationContext';

function Footer() {
    const orientation = useContext(OrientationContext);
    const navigate = useNavigate();

    function onPageClick($item) {
        switch ($item) {
            case "aboutUs": navigate('/aboutUs'); break;
            case "popularClasses": navigate('/classes'); break;
            default: console.warn('Navigation mapping error, item: ', $item);
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
                    <div className='page'>
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