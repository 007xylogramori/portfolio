import Download from "../../download/Download";
import "./intro.css";
import webdev from "./webdev.svg"
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">HIMANSHU</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">ReactJS Developer</div>
              <div className="i-title-item">MERN Stack Developer</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            much more.
          </p>
          <div className="logos">
            <a href="https://github.com/007xylogramori" target="_blank" rel="noreferrer"><img className="connect" style={{backgroundColor:"black"}} src="github.png" alt="" /></a>
            <a href="http://www.linkedin.com/in/himanshu-a6a89023a" target="_blank" rel="noreferrer"><img className="connect" style={{backgroundColor:"black"}} src="LinkedIn.png" alt="" /></a>
            <Download/>
          </div>
          <div>
            
          </div>
        </div>
        
        
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={webdev} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
