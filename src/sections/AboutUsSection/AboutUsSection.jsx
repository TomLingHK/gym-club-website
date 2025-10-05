import './AboutUsSection.scss';
import { useState } from 'react';

// Components
import Menu from '../../components/Menu/Menu';

function AboutUsSection({ defaultMenu = 'aboutUs' }) {
    const [activeMenu, setActiveMenu] = useState(defaultMenu);
    const menuData = {
        mainTitle: "HKGC",
        menuItem: [
            { key: 'aboutUs', text: 'About Us' },
            { key: 'contactUs', text: 'Contact Us' },
        ]
    }

    return (
        <div className='aboutUsSection'>
            <div className='img'>
            </div>
            <div className='aboutUsContainer'>
                <Menu menuData={menuData} setActiveMenu={setActiveMenu} />
                <div className='content'>
                    { activeMenu === 'aboutUs' && <div>About Us content</div>}
                    { activeMenu === 'contactUs' && <div>Contact Us content</div>}
                </div>
            </div>
        </div>
    )
}

export default AboutUsSection;