import "./HeroSection.css";
import SearchBar from "../../layouts/common/SearchBar";

const HeroSection = () => {
  return (
    <div className="banner-container">
      <div className="hero-wrapper">
        <div className="banner">
          <div className="banner-text">
            <h1>ยินดีต้อนรับสู่</h1>
            <h2>บาราลี บีช รีสอร์ท เกาะช้าง</h2>
          </div>
        </div>
        <div className="search-bar-box">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
