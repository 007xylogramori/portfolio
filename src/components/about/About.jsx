import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Hey there! I am 3rd year undergrad at IIITDM JABALPUR
        </p>
        <p className="a-desc">
       Welcome to my portfolio! I'm Himanshu, a developer specializing in the MERN stack. Currently, I am working as a React.js intern at QuadB, honing my skills and gaining hands-on experience in building dynamic web applications.
       <br/>

With a strong focus on MongoDB, Express.js, React.js, and Node.js, I am passionate about creating innovative and user-friendly digital solutions. I thrive on solving complex challenges and delivering seamless experiences to end-users.<br/>
Let's collaborate and turn your ideas into reality. Feel free to explore my portfolio and reach out to discuss potential projects!
        </p>
        
      </div>
    </div>
  );
};

export default About;
