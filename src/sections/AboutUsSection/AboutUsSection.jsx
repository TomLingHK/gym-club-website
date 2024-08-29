import { useState } from 'react';
import './AboutUsSection.scss'

function AboutUsSection() {
    const [activeItem, setActiveItem] = useState('aboutUs');

    return (
        <div className='aboutUsSection'>
            <div className='img'>
            </div>
            <div className='aboutUsContainer'>
                <div className='menu'>
                    <h3 className='mainTitle'>
                        HKGC
                    </h3>
                    <div className='item aboutUs' onClick={ () => setActiveItem('aboutUs')} >
                        About Us
                    </div>
                    <div className='item contactUs' onClick={ () => setActiveItem('contactUs')} >
                        Contact Us
                    </div>
                </div>
                <div className='content'>
                    { activeItem === 'aboutUs' && <div>About Us content</div>}
                    { activeItem === 'contactUs' && <div>Contact Us content</div>}
                </div>
            </div>
        </div>
    )
}

export default AboutUsSection;