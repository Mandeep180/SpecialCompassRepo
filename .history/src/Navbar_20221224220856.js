import Logo from './Logo.png';
export default function navbar(){
    return <nav className="nav">
        <div className="App">
     <header className="App-header">
        <a href = "/" className="site-title"><img src={Logo} className="App-logo" alt="logo" /> </a>
        </header>
      </div>
        <ul>
            <li className="active">
                <a href="https://www.specialcompass.ca">Home</a>

            </li>
            <li>
                <a href="/pricing">Pricing</a>
            </li>
        </ul>
    </nav>
}