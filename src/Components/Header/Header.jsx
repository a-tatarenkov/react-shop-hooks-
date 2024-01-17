import logo from '../../assets/img/logo.avif';
import './Header.css';

const Header = () => {
    return (
        <header className='Header'>
            <img src={logo} alt=""/>
            <nav>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                {/*<Link to='/ololo'>Link</Link>*/}
                {/*<Link to='#'>Link</Link>*/}
                {/*<Link to='#'>Link</Link>*/}
            </nav>
        </header>
    )
}

export default Header;