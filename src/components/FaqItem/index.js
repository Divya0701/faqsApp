import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {hide: false}

  changeState = () => {
    const {hide} = this.state
    if (hide === true) {
      this.setState({hide: false})
    } else {
      this.setState({hide: true})
    }
  }

  render() {
    const {hide} = this.state
    const {item} = this.props
    return (
      <div className="itemContainer">
        <div className="innerDiv">
          <h1 className="heading">{item.questionText}</h1>
          {hide ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
              alt="plus"
              onClick={this.changeState}
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
              alt="minus"
              onClick={this.changeState}
            />
          )}
        </div>
        {hide ? (
          <div className="outerDiv">
            <hr />
            <p className="para">{item.answerText}</p>
          </div>
        ) : null}
      </div>
    )
  }
}
export default FaqItem
