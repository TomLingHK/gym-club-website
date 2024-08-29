import './ClassSection.scss';
import { useState } from 'react';

import Menu from '../../components/Menu/Menu';

function ClassSection() {
    const [activeMenu, setActiveMenu] = useState('popular');
    const menuData = {
        mainTitle: "Our Classes",
        menuItem: [
            { key: 'popular', text: 'Most Popular' },
            { key: 'gym', text: 'Gym' },
            { key: 'yoga', text: 'Yoga' },
        ]
    }

    return (
        <div className='classSection'>
            <div className='img'>
            </div>
            <div className='classContainer'>
                <Menu menuData={menuData} setActiveMenu={setActiveMenu} />
                <div className='content'>
                    { activeMenu === 'popular' && <div>Most Popular</div>}
                    { activeMenu === 'gym' && <div>Gym</div>}
                    { activeMenu === 'yoga' && <div>Yoga</div>}
                </div>
            </div>
        </div>
    )
}

export default ClassSection;