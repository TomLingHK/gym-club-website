import './Navigation.scss';

function Navigation() {
    const navItems = ['Home', 'Our Classes', 'Our Trainers', "HKGC"];

    return (
        <div className='navBar'>
            <div className='logo'>
                Logo
            </div>
            <div className='navContainer'>
                {navItems.map(item => 
                    <div className='navItem' key={item}>{item}</div> 
                )}
            </div>
        </div>
    )
}

export default Navigation;