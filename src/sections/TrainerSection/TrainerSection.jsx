import './TrainerSection.scss';
import { useState } from 'react';

import Menu from '../../components/Menu/Menu';

function TrainerSection() {
    const [activeMenu, setActiveMenu] = useState('ambassador');
    const menuData = {
        mainTitle: "Our Classes",
        menuItem: [
            { key: 'ambassador', text: 'Brand Ambassador' },
            { key: 'trainers', text: 'All Trainers' },
        ]
    }

    return (
        <div className='trainerSection'>
            <div className='img'>
            </div>
            <div className='trainerContainer'>
                <Menu menuData={menuData} setActiveMenu={setActiveMenu} />
                <div className='content'>
                    { activeMenu === 'ambassador' && <div>Brand Ambassador Content</div>}
                    { activeMenu === 'trainers' && <div>Trainers Content</div>}
                </div>
            </div>
        </div>
    )
}

export default TrainerSection;