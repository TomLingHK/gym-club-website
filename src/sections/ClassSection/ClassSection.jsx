import './ClassSection.scss';
import { useState } from 'react';

import Menu from '../../components/Menu/Menu';
import PopularClasses from './PopularClasses/PopularClasses';
import GymClasses from './GymClasses/GymClasses';
import YogaClasses from './YogaClasses/YogaClasses';

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
            <div className='classesContainer'>
                <Menu menuData={menuData} setActiveMenu={setActiveMenu} />
                <div className='content'>
                    { activeMenu === 'popular' && <PopularClasses/> }
                    { activeMenu === 'gym' && <GymClasses/> }
                    { activeMenu === 'yoga' && <YogaClasses/> }
                </div>
            </div>
        </div>
    )
}

export default ClassSection;