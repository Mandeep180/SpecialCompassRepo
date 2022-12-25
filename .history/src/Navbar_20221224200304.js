import{
    NavLink
} from './/NavbarElements'
export default function navbar(){
    return <nav className="nav">
        <NavLink to= "/">
            <h1>Logo</h1>
        </NavLink>
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