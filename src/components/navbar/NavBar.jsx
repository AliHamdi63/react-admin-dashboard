import './navbar.scss'



const NavBar = () => {



    return (
        <div className='navbar'>
            <div className='logo'>
                <img src="/src/assets/logo.svg" />
                <span>Dashboard</span>
            </div>
            <div className='icons'>
                <img src='/src/assets/search.svg' className='icon' />
                <img src='/src/assets/app.svg' className='icon' />
                <img src='/src/assets/expand.svg' className='icon' />
                <div className='notification'>
                    <img src='/src/assets/notifications.svg' className='icon' />
                    <span>1</span>
                </div>
                <div className='user'>
                    <img src='/src/assets/noavatar.png' className='icon' />
                    <span>Ali</span>
                </div>
                <img src='/src/assets/settings.svg' className='icon' />
            </div>
        </div>
    )
}

export default NavBar