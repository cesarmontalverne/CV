'use strict';

const e = React.createElement;
const project_names = ["Hoosville", "WhatsApp Analyzer", "FUT Price Prediction", "USA Fast Food and Obesity", "Winning Chess Openings", "Gate Dillemma", "Libertadores"]


class ReactProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  test = function(b){
    return String(b)
  }
  indButton = function(buttonText, toSet){
    if(this.state.counter==toSet){
        return <div>
        <div className="side-by-side">
            <div className="experience-tracker selected-tracker"></div>
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
    </div>
  }
  contentSelector = function(sel){
      switch (sel) {
          default:
              return (
                  <div className="">
                      <p className="test2">Hoosville<br></br><a>Sep 2021 - present</a></p>
                      <ul className="test3">
                          <li>Planned and developed IOS and Android App with the UVA Psychology deparment.</li>
                          <li>The research aims at gaining insight about how income and propensity to move influence people's friend-making strategy.</li>
                          <li>The app tries to mimic the world. You need to befriend people while events happen to you.</li>

                          <li><a target ="_blank" href="projects.html#hoosville">Learn More</a></li>
                      </ul>
                  </div>

              )
          case 1:
              return (
                  <div className="">
                      <p className="test2">WhatsApp Analyzer<br></br><a>2023</a></p>
                      <ul className="test3">
                          <li>Wrote a script in R that creates a data analytics report for any WhatsApp conversation inputted.</li>
                          <li>Designed relevant and interactive plots</li>
                          <li>Used Natural Language Processing tools such as TF-IDF</li>
                          <li><a target ="_blank" href="projects.html#whatsapp">Learn More</a></li>
                      </ul>
                  </div>
              )
          case 2:
              return (
                  <div className="">
                      <p className="test2">FUT Price Prediction<br></br><a>2023</a></p>
                      <ul className="test3">
                          <li>Predicted prices of Fifa Ultimate Team players based on all of their attributes.</li>
                          <li>Used a Random Forests algorithm to find out which factors were the most important for each position.</li>
                          <li><a target ="_blank" href="projects.html#fut">Learn More</a></li>
                      </ul>
                  </div>
              )
          case 3:
              return (
                  <div className="">
                      <p className="test2">USA Fast Food and Obesity<br></br><a>2022</a></p>
                      <ul className="test3">
                          <li>Predicted obesity rates on american counties using multiple factors, including fast food restaurants.</li>
                          <li>Used the importance metric from the Random Forests algortithm to establish a correlation between number of fast food restaurants in a county and its obesity rate.</li>
                          <li><a target ="_blank" href="projects.html#usaobesity">Learn More</a></li>
                      </ul>
                  </div>
              )
          case 4:
              return (
                  <div className="">
                      <p className="test2">Winning Chess Openings<br></br><a>2021</a></p>
                      <ul className="test3">
                          <li>Programmed an IOS and Android app for the Deparment of Psychology at UVA to research strategies people use to make friends</li>
                          <li>Leveraged a combination of redux architecture along with firebase and google sheets apis to allow researchers complete control of the variables and events in the game</li>
                          <li><a target ="_blank" href="projects.html#winningchessopenings">Learn More</a></li>
                      </ul>
                  </div>
              )
          case 5:
              return (
                  <div className="">
                      <p className="test2">Gate Dillemma<br></br><a>2020</a></p>
                      <ul className="test3">
                          <li>Programmed an IOS and Android app for the Deparment of Psychology at UVA to research strategies people use to make friends</li>
                          <li>Leveraged a combination of redux architecture along with firebase and google sheets apis to allow researchers complete control of the variables and events in the game</li>
                          <li><a target ="_blank" href="projects.html#gatedillemma">Learn More</a></li>
                      </ul>
                  </div>
              )
          case 6:
              return (
                  <div className="">
                      <p className="test2">Libertadores<br></br><a>2019</a></p>
                      <ul className="test3">
                          <li>Programmed an IOS and Android app for the Deparment of Psychology at UVA to research strategies people use to make friends</li>
                          <li>Leveraged a combination of redux architecture along with firebase and google sheets apis to allow researchers complete control of the variables and events in the game</li>
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