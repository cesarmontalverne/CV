'use strict';

const e = React.createElement;
const company_names = ["UVA", "Cortina"]
const position_names = ["Reseach Assistant", "Junior Solutions Architect"]

class LikeButton extends React.Component {
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
    return <div>
        {this.indButton(company_names[0],0)}
        {this.indButton(company_names[1],1)}

    </div>
  }
  render() {
    return <div className="side-by-side experience-wrapper">
        {this.allButtons()}
        <p className="experience-title">{position_names[this.state.counter]}</p>
    </div>
}}
const domContainer = document.querySelector('#experience_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));