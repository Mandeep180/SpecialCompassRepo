import Logo from './Logo.jpg';
export default function navbar(){
    return <nav className="nav">
        <a href="/" className="site-title">Special Compass</a>
        <div className="App">
     <header className="App-header">
        <a href = "/" ><img src={Logo} className="App-logo" alt="logo" /> </a>
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