import { Link } from 'react-router-dom';
import './MainNavbar.css'; // ไฟล์ CSS ที่คุณจะสร้าง

const MainNavbar = ({ isUser, logOut }) => {
    return (
        <nav className="main-navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="/src/assets/logo.png" alt="Barali Logo" width="60" height="40" />
                </Link>
                <input type="checkbox" id="menu-toggle" className="menu-toggle" />
                <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>

                <div className="navbar-links">
                    <ul className="nav-left">
                        <li><Link to="/">หน้าแรก</Link></li>
                        <li><Link to="/villas">วิลลา</Link></li>
                        <li><Link to="/location">โลเคชั่น</Link></li>
                        <li><Link to="/offers">ข้อเสนอพิเศษ</Link></li>
                    </ul>

                    <ul className="nav-right">
                        <li><Link to="/help">ช่วยเหลือ</Link></li>
                        {isUser ? (
                            <li className="user-section">
                                <span>สวัสดี, <strong>{isUser.name} {isUser.lastname}</strong></span>
                                <button className="btn-outline" onClick={logOut}>ออกจากระบบ</button>
                            </li>
                        ) : (
                            <li><Link to="/login" className="btn-primary">เข้าสู่ระบบ</Link></li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MainNavbar;
