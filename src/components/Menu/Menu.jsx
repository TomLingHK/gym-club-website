import './Menu.scss';

function Menu({ menuData, setActiveMenu }) {
    const { mainTitle, menuItem } = menuData;

    return (
        <div className='menu'>
            <h3 className='mainTitle'>
                {mainTitle}
            </h3>
            {menuItem.map(item => {
            return(
                <div key={item.key} className={`item ${item.key}`} onClick={ () => setActiveMenu(item.key) }>
                    {item.text}
                </div>
            )})}
        </div>
    )
}

export default Menu;