import './TrainerSection.scss';
import { useState } from 'react';

// Components
import Menu from '../../components/Menu/Menu';
import TrainerCategory from './TrainerCategory/TrainerCategory';

function TrainerSection({ 
    trainerId,
    defaultMenu = 'ambassador'
}) {
    const [activeMenu, setActiveMenu] = useState(defaultMenu);
    const menuData = {
        mainTitle: "Our Classes",
        menuItem: [
            { key: 'ambassador', text: 'Brand Ambassador' },
            { key: 'trainers', text: 'All Trainers' },
        ]
    }

    const trainerCategoryObj = {
        "trainers": {
            "title": "All Trainers",
            "trainersArr": [
                "timothy",
                "shawn",
                "janice",
                "sofia",
            ] 
        }
    }

    function getActiveContent() {
        switch (activeMenu) {
            case 'ambassador':
                return <div>Brand Ambassador Content</div>;
            case 'trainers':
                return <TrainerCategory categoryTitle={trainerCategoryObj[activeMenu]?.title} trainersArr={trainerCategoryObj[activeMenu]?.trainersArr} />
        }
    }

    return (
        <div className='trainerSection'>
            <div className='img'>
            </div>
            <div className='trainersContainer'>
                <Menu menuData={menuData} setActiveMenu={setActiveMenu} />
                <div className='content'>
                    { !!trainerId
                    ? 
                        trainerId
                    :
                        getActiveContent()
                    }
                </div>
            </div>
        </div>
    )
}

export default TrainerSection;