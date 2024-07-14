import c from "../assets/img/c.svg";
import cpp from "../assets/img/cpp.svg"; 
import html from "../assets/img/html.svg"; 
import css from "../assets/img/css.svg"; 
import js from "../assets/img/js.svg"; 
import bootstrap from "../assets/img/bootstrap.svg"; 
import tailwindcss from "../assets/img/tailwindcss.svg"; 
import react from "../assets/img/react.svg"; 
import mongo from "../assets/img/mongo.svg"; 
import mysql from "../assets/img/mysql.svg"; 
import jquery from "../assets/img/jquery.svg"; 
import node from "../assets/img/node.svg";
import express from "../assets/img/express.svg"; 
import git from "../assets/img/git.svg";  
import github from "../assets/img/github.svg"; 
import atom from "../assets/img/atom.svg"; 
import vscode from "../assets/img/vscode.svg"; 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>In frontend development, I know HTML, CSS, JavaScript, Tailwind, Bootstrap, and React. In backend development, I am proficient in Node.js, Express, API, and RestAPI, as well as databases like MongoDB and MySQL. I am also familiar with version control tools like Git and GitHub and comfortable using development tools such as VSCode and Atom.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={c} alt="image" /> 
                                <h1>C</h1>
                            </div>
                            <div className="item">
                                <img src={cpp} alt="Image" /> 
                                <h1>C++</h1>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" /> 
                                <h1>Html</h1>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h1>CSS</h1> 
                            </div>
                            <div className="item">
                                <img src={js} alt="Image" /> 
                                <h1>JavaScript</h1>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Image" /> 
                                <h1>Bootstrap</h1>
                            </div>
                            <div className="item">
                                <img src={tailwindcss} alt="Image" /> 
                                <h1>Tailwindcss</h1>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" /> 
                                <h1>React</h1>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="Image" /> 
                                <h1>MySQL</h1>
                            </div>
                            <div className="item">
                                <img src={mongo} alt="Image" />
                                <h1>MongoDB</h1>
                            </div>
                            <div className="item">
                                <img src={node} alt="Image" /> 
                                <h1>Node.js</h1>
                            </div>
                            <div className="item">
                                <img src={express} alt="Image" /> 
                                <h1>Express</h1>
                            </div>
                            <div className="item">
                                <img src={jquery} alt="Image" />
                                <h1>jQuery</h1> 
                            </div>
                            <div className="item">
                                <img src={git} alt="Image" /> 
                                <h1>Git</h1>
                            </div>
                            <div className="item">
                                <img src={github} alt="Image" /> 
                                <h1>Github</h1>
                            </div>
                            <div className="item">
                                <img src={vscode} alt="Image" /> 
                                <h1>VSCode</h1>
                            </div>
                            <div className="item">
                                <img src={atom} alt="Image" /> 
                                <h1>Atom</h1>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
