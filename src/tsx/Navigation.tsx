import '../css/Navigation.css'

interface NavigationProps{}

const Navigation: React.FC<NavigationProps> = ({}) =>{ 
    return (
        <div>
            <nav id='navigation'>
                <ul>
                    <li><a href='/#about'>ABOUT</a></li>
                    <li><a href='/#experience'>EXPERIENCE</a></li>
                    <li><a href='/#projects'>PERSONAL PROJECTS</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;