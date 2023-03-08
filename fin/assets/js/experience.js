'use strict';

const e = React.createElement;
const company_names = ["University of Virginia", "Cortina"]

class ReactExperience extends React.Component {
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
        {this.indButton(company_names[0],0)}
        {this.indButton(company_names[1],1)}

    </div>
  }
  contentSelector = function(sel){
      switch (sel) {
          default:
              return (
                  <div className="">
                      <p className="test2 white">Research Assistant<br></br><a>Sep 2021 - present</a></p>
                      <ul className="test3 white">
                          <li>Planned and developed IOS and Android App with the UVA Psychology department </li>
                          <li>Integrated Qualtrics, google sheets and firebase with APIs or a web view </li>
                          <li>Explained technical concepts to non-technical people</li>
                          <li>Created detailed and clear documentation</li>
                          <li><a target ="_blank" href="projects.html#hoosville">Learn About The Project</a></li>
                      </ul>
                  </div>

              )
          case 1:
              return (
                  <div className="">
                      <p className="test2 white">Cortina<br></br><a>Jun 2022 - Nov 2022</a></p>
                      <ul className="test3 white">
                          <li>Researched and documented other system's APIs for integration purposes</li>
                          <li>Created diagrams that specified how to integrate to a particular system, in a high level</li>
                          <li>Wrote market research papers</li>
                          <li><a target ="_blank" href="https://www.cortinaplatform.com/">Learn About The Company</a></li>
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
const domContainer = document.querySelector('#experience_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(ReactExperience));