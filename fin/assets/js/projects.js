'use strict';

const e = React.createElement;
const project_names = ["Hoosville", "Project Hunt", "WhatsApp Analyzer","FUT Price Prediction", 
"USA Fast Food and Obesity", "Winning Chess Openings", "Gate Dilemma", "Libertadores"]

class ReactProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  indButton = function(buttonText, toSet){
    if(this.state.counter==toSet){
        return <div>
        <div className="side-by-side">
            <div className="experience-tracker selected-experience-tracker"></div>
            <button className="experience-button selected-button" onClick={() =>{ 
                this.setState({ counter: toSet })
            }}>{buttonText}</button>
        </div>
    </div>
    }else{
        return <div>
        <div className="side-by-side">
            <div className="experience-tracker"></div>
            <button className="experience-button" onClick={() =>{ 
                this.setState({ counter: toSet })
            }}>{buttonText}</button>
        </div>
    </div>
    }

  }
  allButtons = function(){
    return <div className="allbuttons">
        {this.indButton(project_names[0],0)}
        {this.indButton(project_names[1],1)}
        {this.indButton(project_names[2],2)}
        {this.indButton(project_names[3],3)}
        {this.indButton(project_names[4],4)}
        {this.indButton(project_names[5],5)}
        {this.indButton(project_names[6],6)}
        {this.indButton(project_names[7],7)}

    </div>
  }
  contentSelector = function(sel){
      switch (sel) {
          default:
              return (
                  <div className="">
                      <p className="test2 white">Hoosville<br></br><a>Sep 2021 - present</a></p>
                      <ul className="test3 white">
                          <li>Planned and developed IOS and Android App with the UVA Psychology deparment.</li>
                          <li>The research aims at gaining insight about how income and propensity to move influence people's friend-making strategy.</li>
                          <li>The app tries to mimic the world. You need to befriend people while events happen to you.</li>
                          <li><a target ="_blank" href="projects.html#hoosville">Learn More</a></li>
                      </ul>
                  </div>

              )
          case 1:
            return(
                <div>
                    <p className="test2 white">Project Hunt<br></br><a>2021</a></p>
                      <ul className="test3 white">
                          <li>Built a Relational Database schema for a sample web app.</li>
                          <li>Developed full stack application using React and MySQL, and deployed it with AWS.</li>
                          <li><a target ="_blank" href="projects.html#projecthunt">Learn More</a></li>
                      </ul>
                </div>
            )
          case 2:
              return (
                  <div className="">
                      <p className="test2 white">WhatsApp Analyzer<br></br><a>2023</a></p>
                      <ul className="test3 white">
                          <li>Wrote a script in R that creates a data analytics report for any WhatsApp conversation inputted.</li>
                          <li>Designed relevant and interactive plots</li>
                          <li>Used Natural Language Processing tools such as TF-IDF</li>
                          <li><a target ="_blank" href="projects.html#whatsapp">Learn More</a></li>
                      </ul>
                  </div>
              )
          case 3:
              return (
                  <div className="">
                      <p className="test2 white">FUT Price Prediction<br></br><a>2023</a></p>
                      <ul className="test3 white">
                          <li>Predicted prices of Fifa Ultimate Team players based on all of their attributes.</li>
                          <li>Used a Random Forests algorithm to find out which factors were the most important for each position.</li>
                          <li><a target ="_blank" href="projects.html#fut">Learn More</a></li>
                          <li><a target ="_blank" href="live_FUT.html">See Project!</a></li>
                      </ul>
                  </div>
              )
          case 4:
              return (
                  <div className="">
                      <p className="test2 white">USA Fast Food and Obesity<br></br><a>2022</a></p>
                      <ul className="test3 white">
                          <li>Predicted obesity rates on american counties using multiple factors, including fast food restaurants.</li>
                          <li>Used the importance metric from the Random Forests algortithm to establish a correlation between number of fast food restaurants in a county and its obesity rate.</li>
                          <li><a target ="_blank" href="projects.html#usaobesity">Learn More</a></li>
                          <li><a target ="_blank" href="live_USAObesity.html">See Project!</a></li>
                      </ul>
                  </div>
              )
          case 5:
              return (
                  <div className="">
                      <p className="test2 white">Winning Chess Openings<br></br><a>2021</a></p>
                      <ul className="test3 white">
                          <li>Programmed an IOS and Android app for the Deparment of Psychology at UVA to research strategies people use to make friends</li>
                          <li>Leveraged a combination of redux architecture along with firebase and google sheets apis to allow researchers complete control of the variables and events in the game</li>
                          <li><a target ="_blank" href="projects.html#winningchessopenings">Learn More</a></li>
                          <li><a target ="_blank" href="live_WinningChessOpenings.html">See Project!</a></li>
                      </ul>
                  </div>
              )
          case 6:
              return (
                  <div className="">
                      <p className="test2 white">Gate Dilemma<br></br><a>2020</a></p>
                      <ul className="test3 white">
                          <li>Players are presented with boolean inputs and a boolean output and the player is prompted to choose a logical gate that will make the statement correct before the time is up.</li>
                          <li><a target ="_blank" href="projects.html#gatedilemma">Learn More</a></li>
                      </ul>
                  </div>
              )
          case 7:
              return (
                  <div className="">
                      <p className="test2 white">Libertadores<br></br><a>2019</a></p>
                      <ul className="test3 white">
                          <li>One or two players need to control soccer gloves to avoid goals beeing scored.</li>
                          <li><a target ="_blank" href="projects.html#libertadores">Learn More</a></li>
                      </ul>
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
const domContainer = document.querySelector('#projects_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(ReactProjects));