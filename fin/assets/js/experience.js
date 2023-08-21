'use strict';

const e = React.createElement;
const company_names = ["Traba","University of Virginia", "Cortina"]

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
        {this.indButton(company_names[2],2)}


    </div>
  }
  contentSelector = function(sel){
      switch (sel) {
        default:
            return(
                <div className="">
                      <p className="test2 white">Research Assistant<br></br><a>Jun 2023 - present</a></p>
                      <ul className="test3 white">
                          <li>Oversaw the entire operations in Tennessee, including sales and contract negotiations, consistently dedicating 12+
hour workdays and, at times, working over the weekend </li>
                          <li>Leveraged Python and SQL for systematic worker-job matching, optimizing workforce placement</li>
                          <li>Utilized Python Web Scraping and ChatGPT to discover and qualify over 1000 leads</li>
                          <li>Integrated Salesforce with Dialpad, Chrome, and Google Sheets to optimize lead qualification and traveled to 4
markets for in-person sales</li>
                          <li><a target ="_blank" href="https://www.traba.work">Learn About The Company</a></li>
                      </ul>
                  </div>
            )
          case 1:
              return (
                  <div className="">
                      <p className="test2 white">Research Assistant<br></br><a>Sep 2021 - May 2023</a></p>
                      <ul className="test3 white">
                          <li>Planned and developed IOS and Android App with the UVA Psychology department </li>
                          <li>Integrated Qualtrics, google sheets and firebase with APIs or a web view </li>
                          <li>Explained technical concepts to non-technical people</li>
                          <li>Created detailed and clear documentation</li>
                          <li><a target ="_blank" href="projects.html#hoosville">Learn About The Project</a></li>
                      </ul>
                  </div>

              )
          case 2:
              return (
                  <div className="">
                      <p className="test2 white">Cortina<br></br><a>Jun 2022 - Nov 2022</a></p>
                      <ul className="test3 white">
                          <li>Researched and documented 6 other system’s APIs for integration purposes</li>
                          <li>Diagrammed an integration solution for 2 systems</li>
                          <li>Delivered 2 market research papers</li>
                          <li> Presented integration solution to clients alongside other teammates.</li>
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