export function Header() {
    return (
        <>
            <nav>
                <div className='nav-wrapper green lighten-1'>
                    <a href='/#' className='brand-logo'>
                        React Shop
                    </a>
                    <ul id='nav-mobile' className='right hide-on-med-and-down'>
                        <li>
                            <a
                                href='https://github.com/AlisaKravchenko/react-shop-fortniteAPI'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Repo
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
