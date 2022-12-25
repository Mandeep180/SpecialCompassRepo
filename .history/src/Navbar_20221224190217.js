export default function Navbar(){
    return <nav className="nav">
        <a href="/" className="site-title">Special Compass</a>
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