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
                <div class="test">
                      <p class="test2 white">Territory Operations at Tennessee</p>
                      <ul class="test3 white">
                          <li>
                              <input type="checkbox" id="info1" class="toggle-input" />
                              <label for="info1" class="toggle-label">Managed Operations</label>
                              <div class="dropdown-content">Oversaw the entire operations in Tennessee, from sales and contract negotiations to recruiting and vetting, consistently dedicating 12+
hour workdays and, at times, working over the weekend.</div>
                          </li>
                          <li>
                              <input type="checkbox" id="info2" class="toggle-input" />
                              <label for="info2" class="toggle-label">Analyzed Data</label>
                              <div class="dropdown-content">Extracted data from internal database using SQL and used it to optimize worker placements.</div>
                          </li>
                          <li>
                              <input type="checkbox" id="info3" class="toggle-input" />
                              <label for="info3" class="toggle-label">Analytical Market Research</label>
                              <div class="dropdown-content">Acquired data through public data sets or scraping to analyze and make data-oriented decisions on sales strategy using Python.</div>
                          </li>
                          <li><a href="https://www.traba.work/">Learn About The Company</a></li>
                      </ul>
                  </div>
            )
          case 1:
              return (
                <div class="test">
                <p class="test2 white">Research Assistant at University of Virginia</p>
                <ul class="test3 white">
                    <li>
                        <input type="checkbox" id="info1" class="toggle-input" />
                        <label for="info1" class="toggle-label">UI Design</label>
                        <div class="dropdown-content">Engineered an interactive digital environment using JavaScript, Expo, and React Native, enabling the research.
.</div>
                    </li>
                    <li>
                        <input type="checkbox" id="info2" class="toggle-input" />
                        <label for="info2" class="toggle-label">User Friendliness</label>
                        <div class="dropdown-content">Connected Google Sheets API, granting non-programmer researchers intuitive control over all 15 app parameters.</div>
                    </li>
                    <li>
                        <input type="checkbox" id="info3" class="toggle-input" />
                        <label for="info3" class="toggle-label">Integration</label>
                        <div class="dropdown-content">Integrated a Qualtrics web view for candidate data collection and Firebase API for game data recording.</div>
                    </li>
                    <li>
                        <input type="checkbox" id="info4" class="toggle-input" />
                        <label for="info4" class="toggle-label">Organized</label>
                        <div class="dropdown-content">Maintained a secure GitHub repository, meticulously managing API keys and creating comprehensive
documentation to ensure the app’s sustainability post-departure.</div>
                    </li>
                    <li><a href="projects.html#hoosville">Learn About The Project</a></li>
                </ul>
            </div>
              )
          case 2:
              return (
                  <div class="test">
                      <p class="test2 white">Cortina</p>
                      <ul class="test3 white">
                          <li>
                              <input type="checkbox" id="info1" class="toggle-input" />
                              <label for="info1" class="toggle-label">Researched REST APIs </label>
                              <div class="dropdown-content">Conducted in-depth research on 5 distinct API architectures, mapping them to Cortina’s system for integraions.</div>
                          </li>
                          <li>
                              <input type="checkbox" id="info2" class="toggle-input" />
                              <label for="info2" class="toggle-label">Diagrammed Solutions</label>
                              <div class="dropdown-content">Documented detailed data integration schematics tailored to distinct use cases, considering system
                                  limitations and ensuring coders maintained a primary focus on programming.</div>
                          </li>
                          <li>
                              <input type="checkbox" id="info3" class="toggle-input" />
                              <label for="info3" class="toggle-label">Technical Market Research</label>
                              <div class="dropdown-content">Evaluated 8 inverse logistics systems, ensuring the selection of the most suitable contenders for integration based
                                  on their system nuances.</div>
                          </li>
                          <li><a href="https://www.cortinaplatform.com/">Learn About The Company</a></li>
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