import './ClassSection.scss';
import { useState } from 'react';

// Components
import Menu from '../../components/Menu/Menu';
import ClassCategory from './ClassCategory/ClassCategory';

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

    const classCategoryObj = {
        "popular": {
            "title": "Most Popuplar Classes",
            "classesArr": [
                "gym_beginner",
                "badminton",
                "triathlon",
                "dumbell",
                "personal_trainer",
            ]
        },
        "gym": {
            "title": "Gym Classes",
            "classesArr": [
                "gym_beginner",
                "barbell",
                "dumbell",
                "advanced_weight_lifting",
                "spinning",
                "personal_trainer",
                "cardio",
                "full_body_workout",
                "core",
            ]
        },
        "yoga": {
            "title": "Yoga Classes",
            "classesArr": [
                "yoga_beginner",
                "aerial_beginner",
                "aerial_hoop",
                "pilates",
                "yoga_therapy",
                "yoga_wheel",
                "mat_pilates",
            ]
        },
    }

    function getActiveContent() {
        switch (activeMenu) {
            case 'popular':
            case 'gym':
            case 'yoga':
                return <ClassCategory categoryTitle={classCategoryObj[activeMenu]?.title} classesArr={classCategoryObj[activeMenu]?.classesArr} />
            // default: return <PopularClasses/>;
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