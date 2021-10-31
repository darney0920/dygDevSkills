import React from "react";
import skill1 from "../assets/images/html5.jpg";
import skill2 from "../assets/images/css.jpg";
import skill3 from "../assets/images/js.png";
import skill4 from "../assets/images/jquery.png";
import skill5 from "../assets/images/react.svg";
import skill6 from "../assets/images/php.png";
import skill7 from "../assets/images/sql.jpg";
import skill8 from "../assets/images/mysql.png";
import skill9 from "../assets/images/larabel.png";
import skill10 from "../assets/images/wordpress.png";

class skills extends React.Component {
  render() {
    return (
      <div className="skills_box flex-col j-center al-center">
        <br></br>
        <br></br>
        <br></br>

        <h1>Habilidades</h1>
        <br></br>
        <br></br>
        <br></br>

        <div className="skills flex-row flex-wrap j-center al-center">
          <div className="skill sk1">
            <br></br>
            <img src={skill1}></img>

            <h5>HTML 5</h5>

            <div className="skill_rank flex-col j-center al-center skr1">
              <b>90%</b>
            </div>
          </div>

          <div className="skill">
            <br></br>
            <img src={skill2}></img>
            <h5>CSS</h5>

            <div className="skill_rank flex-col j-center al-center skr2">
              <b>90%</b>
            </div>
          </div>

          <div className="skill">
            <br></br>
            <img src={skill3}></img>
            <h5>Javascript</h5>
            <div className="skill_rank flex-col j-center al-center skr3">
              <b>50%</b>
            </div>
          </div>

          <div className="skill">
            <br></br>
            <img src={skill4}></img>
            <h5>JQuery</h5>

            <div className="skill_rank flex-col j-center al-center skr4">
              <b>40%</b>
            </div>
          </div>

          <div className="skill">
            <br></br>
            <img src={skill5}></img>
            <h5>React</h5>
            <div className="skill_rank flex-col j-center al-center skr5">
              <b>40%</b>
            </div>
          </div>
        </div>

        <div className="skills flex-row flex-wrap j-center al-center">
          <div className="skill">
            <br></br>
            <img src={skill6}></img>
            <h5>PHP</h5>
            <div className="skill_rank flex-col j-center al-center skr6">
              <b>50%</b>
            </div>
          </div>

          <div className="skill">
            <br></br>
            <img src={skill7}></img>
            <h5>SQL</h5>
            <div className="skill_rank flex-col j-center al-center skr7">
              <b>60%</b>
            </div>
          </div>

          <div className="skill">
            <br></br>
            <img src={skill8}></img>
            <h5>MYSQL</h5>
            <div className="skill_rank flex-col j-center al-center skr8">
              <b>70%</b>
            </div>
          </div>

          <div className="skill">
            <br></br>
            <img src={skill9}></img>
            <h5>Larabel</h5>
            <div className="skill_rank flex-col j-center al-center skr8">
              <b>50%</b>
            </div>
          </div>

          <div className="skill">
            <br></br>
            <img src={skill10}></img>
            <h5>Wordpress</h5>
            <div className="skill_rank flex-col j-center al-center skr8">
              <b>50%</b>
            </div>
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1e2b52"
            fill-opacity="1"
            d="M0,288L60,261.3C120,235,240,181,360,176C480,171,600,213,720,224C840,235,960,213,1080,192C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
  }
}

export default skills;
