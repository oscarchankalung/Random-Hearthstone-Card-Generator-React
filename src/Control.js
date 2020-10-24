import React from 'react';

class Control extends React.Component {

  constructor(props) {
    super(props);
    this.setCardPage = this.setCardPage.bind(this);
  }

  setCardPage(call) {
    let newCardPage;
    if (typeof call === "string") {
      switch (call) {
        case "Prev" :
          newCardPage = this.props.cardPage - 1;
          break;
        case "Rand":
          newCardPage = Math.floor(Math.random() * this.props.cardCount) + 1;
          break;
        case "Next":
          newCardPage = this.props.cardPage + 1;
          break;
        default:
          break;
      }
    } else {
      newCardPage = call;
    }
    this.props.requestCard(newCardPage);
  }

  render() {

    let prevVisibility = 
    this.props.cardPage && this.props.cardPage > 1 
    ? "visible" : "hidden";
    let nextVisibility = 
    this.props.cardPage && this.props.cardPage < this.props.cardCount 
    ? "visible" : "hidden";

    return (
      <div className="Control">
        <button 
          className="Prev" 
          onClick={() => this.setCardPage("Prev")} 
          style={{visibility: prevVisibility}}
        >
          Prev
        </button>
        <button 
          className="Rand" 
          onClick={() => this.setCardPage("Rand")}
        >
          Rand
        </button>
        <button 
          className="Next" 
          onClick={() => this.setCardPage("Next")} 
          style={{visibility: nextVisibility}}
        >
          Next
        </button>
      </div>
    )
  }
}

export default Control;