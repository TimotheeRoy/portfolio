import "../style/header.css"

function Header (){


    return (
        <header className="header">
            
            <div className="logo">
                <img src="" alt="logo" />
            </div>

            <nav>
                <ul>
                    <li><a href="">My Projects</a></li>
                    <li><a href="">Contact Me</a></li>
                </ul>
            </nav>
            
        </header>
    )
}


export default Header;