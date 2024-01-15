import './navbar.scss'



const NavBar = () => {



    return (
        <div className='navbar'>
            <div className='logo'>
                <img src="logo.svg" />
                <span>Dashboard</span>
            </div>
            <div className='icons'>
                <img src='search.svg' className='icon' />
                <img src='app.svg' className='icon' />
                <img src='expand.svg' className='icon' />
                <div className='notification'>
                    <img src='notifications.svg' className='icon' />
                    <span>1</span>
                </div>
                <div className='user'>
                    <img src='noavatar.png' className='icon' />
                    <span>Ali</span>
                </div>
                <img src='settings.svg' className='icon' />
            </div>
        </div>
    )
}

export default NavBar