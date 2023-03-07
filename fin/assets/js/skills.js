'use strict';

const e = React.createElement;
const skill_names = ["Backend", "Developer", "Data Science", "Other"]

class ReactExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  indButton = function(buttonText, toSet){
    if(this.state.counter==toSet){
        return <div>
        <div className="side-by-side">
            <div className="skill-tracker selected-skill-tracker"></div>
            <button className="skill-button selected-button" onClick={() =>{ 
                this.setState({ counter: toSet })
            }}><h10>{buttonText}</h10></button>
        </div>
    </div>
    }else{
        return <div>
        <div className="side-by-side">
            <div className="skill-tracker"></div>
            <button className="skill-button not-selected-skill-button" onClick={() =>{ 
                this.setState({ counter: toSet })
            }}><h10>{buttonText}</h10></button>
        </div>
    </div>
    }

  }
  allButtons = function(){
    return <div className="">
        {this.indButton(skill_names[0],0)}
        {this.indButton(skill_names[1],1)}
        {this.indButton(skill_names[2],2)}
        {this.indButton(skill_names[3],3)}


    </div>
  }

  contentSelector = function(sel){
      switch (sel) {
          default:
              return (
                <div class="section-wrapper clearfix full-size">
                <div class="section-wrapper clearfix half-size">
            
                
                <div class="experience-title">Web Tools</div>
                <ul>
                    <li class="webTools">AWS(Amazon Web Services) EC2/RDS</li>
                    <li class="webTools">nginx/pm2</li>
                    <li class="webTools">SQL/MySQL</li>
                    <li class="webTools">NoSQL/MongoDB/Firebase</li>
                    <li class="webTools">Postman</li>
                    <li class="webTools">React</li>
                    <li class="webTools">Expo/React Native</li>
                    <li class="webTools">Gulp</li>


                </ul>
                </div>
                <div class="section-wrapper clearfix half-size">
                <div class="experience-title">Web Concepts</div>
                <ul>
                    <li class="webConcepts">Deploying</li>
                    <li class="webConcepts">Cloud</li>
                    <li class="webConcepts">APIs</li>
                    <li class="webConcepts">Databases</li>
                </ul>
                </div>
            
            </div>
              )
          case 1:
            return (
                <div class="section-wrapper clearfix full-size">
                <div class="section-wrapper clearfix half-size">
            
                <div class="experience-title">Developer Tools</div>
                <ul>
                    <li class="devTools">Python</li>
                    <li class="devTools">Java</li>
                    <li class="devTools">c/c++</li>
                    <li class="devTools">Github</li>
                    <li class="devTools">Selenium</li>
                    <li class="devTools">Terminal/Bash</li>
                </ul>
                </div>
                <div class="section-wrapper clearfix half-size">
                <div class="experience-title">Developer Concepts</div>
                <ul>
                    <li class="devConcepts">Data Structures</li>
                    <li class="devConcepts">Algorithms</li>
                    <li class="devConcepts">Software Testing</li>
                    <li class="devConcepts">Git</li>
                </ul>
                </div>
            
            </div>
              )
          case 2:
            return (
                <div class="section-wrapper clearfix full-size">
                <div class="section-wrapper clearfix half-size">
            
                <div class="experience-title">DS Tools</div>
                <ul>
                    <li class="dsTools">R/RStudio/Rmd</li>
                    <li class="dsTools">Python/Pandas/Numpy</li>
                    <li class="dsTools">Plotly/ggplot</li>
                    <li class="dsTools">Shiny</li>
                    <li class="dsTools">Rpubs/Shiny.io</li>
                </ul>
                </div>
                <div class="section-wrapper clearfix half-size">
                <div class="experience-title">DS Concepts</div>
                <ul>
                    <li class="dsConcepts">Databases</li>
                    <li class="dsConcepts">Basic ML(knn, decision trees, random forests...)</li>
                    <li class="dsConcepts">Feature Engineering</li>
                    <li class="dsConcepts">NPL(natural language processing)</li>
                </ul>
                </div>
            
            </div>
              )
        case 3:
            return(
                <div className="section-wrapper clearfix full-size">
                    <div class="section-wrapper clearfix half-size">
                    <div class="experience-title">Languages</div> 
                    <ul>
                        <li class="languages">Portuguese</li>
                        <li class="languages">English</li>
                        <li class="languages">Spanish</li>
                    </ul>
                    <div class="experience-title">Frontend</div> 
                    <ul>
                        <li class="frontend">HTML</li>
                        <li class="frontend">CSS/SCSS</li>
                    </ul>
                </div>
                </div>
            )

      }

  }
  render() {
    return <div className="side-by-side">
        {this.allButtons()}
        {this.contentSelector(this.state.counter)}
    </div>
}}
const domContainer = document.querySelector('#skills_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(ReactExperience));