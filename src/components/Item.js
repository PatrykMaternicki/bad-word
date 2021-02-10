import { Component } from 'react'

export default class Item extends Component {
  static defaultProps = {
    setPoint: null,
    word: null,
    isBadWord: false,
    setItem: null,
    removeItem: null,
    finished: false,
  }
  
  state = {
    checked: false,
  }

  setVariant = () => {
    if (this.props.finished && this.state.checked) {
      return this.setFinishedClass()
    } else {
      return this.setCheckedClass()
    }
  }
  

  setFinishedClass = () => {
    const { isBadWord, baseClass } = this.props
    return isBadWord ? 'text-success text-bold cursor-pointer' : 'text-danger text-bold cursor-pointer'
  }

  setAnswer = () => {
    const { finished, isBadWord } = this.props
    if(this.state.checked && finished) {
      return isBadWord ? 'Good' : 'Bad'
    }
  }

  setPoint = (word, isBadWord) => {
    const checked = this.state.checked
    this.props.setPoint({checked, word, isBadWord})
  }

  setCheckedClass = () => this.state.checked ? 'text-black-50 cursor-pointer' : 'text-dark cursor-pointer'

  handleClick = () => {
    if(!this.props.finished) {
      const checked = !this.state.checked
      this.setState({checked})
    }
  }

  render() {
    const { word, finished, isBadWord } = this.props
    finished && this.setPoint(word, isBadWord)
    return(
      <span onClick={this.handleClick} className={this.setVariant()}>
        <p className="line-5 text-center mb-0"><strong>{this.setAnswer()}</strong></p>
        {word}
      </span>
    )
  }
}