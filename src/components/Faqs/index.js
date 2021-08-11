import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    console.log(faqsList)
    return (
      <div className="bgContainer">
        <h1 className="mainHeading">FAQs</h1>
        {faqsList.map(eachItem => (
          <FaqItem item={eachItem} />
        ))}
      </div>
    )
  }
}

export default Faqs
