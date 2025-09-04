import './ClassSection.scss';
import { useState } from 'react';

import Menu from '../../components/Menu/Menu';
import PopularClasses from './PopularClasses/PopularClasses';
import GymClasses from './GymClasses/GymClasses';
import YogaClasses from './YogaClasses/YogaClasses';

function ClassSection({ classId }) {
    const [activeMenu, setActiveMenu] = useState('popular');
    const menuData = {
        mainTitle: "Our Classes",
        menuItem: [
            { key: 'popular', text: 'Most Popular' },
            { key: 'gym', text: 'Gym' },
            { key: 'yoga', text: 'Yoga' },
        ]
    }

    function getActiveContent() {
        switch (activeMenu) {
            case 'popular': return <PopularClasses/>;
            case 'gym': return <GymClasses/>;
            case 'yoga': return <YogaClasses/>;
            default: return <PopularClasses/>;
        }
    }

    return (
        <div className='classSection'>
            <div className='img'>
            </div>
            <div className='classesContainer'>
                <Menu menuData={menuData} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                <div className='content'>
                    { !!classId 
                    ?
                        classId
                    :
                        getActiveContent() 
                    }
                </div>
            </div>
        </div>
    )
}

export default ClassSection;