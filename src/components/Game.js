import { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class Game extends Component {
  static defaultProps = {
    gameSet: null,
    wordsPerRow: 3,
    options: {
      0: 'justify-content-between',
      1: 'justify-content-evenly',
      2: 'justify-content-around'
    }
  }

  setClassName = () => {
    let classes = 'd-flex mt-2'
    const indexFlexOption = Math.floor(Math.random() * Object.keys(this.props.options).length) + 0
    classes = `${classes} ${this.props.options[indexFlexOption]}`
    return classes
  }


  generateRows = (rows, chunks) => {
    let generatedComponent = []
    for (let i = 0; i < chunks.length; i++) {
      generatedComponent.push(<div className={this.setClassName()}>
        {chunks[i].map(word =><span><Button lg variant="transparent">{word}</Button></span>)}
      </div>)
    }

    return generatedComponent
  }

  render() {
    const { question, all_words } = this.props.gameSet
    const chunks = all_words.makeChunk(this.props.wordsPerRow)
    const calcRow = Math.ceil(12/this.props.wordsPerRow)
    console.log(chunks)
    return(
      <div>
        <h1 className="h5 text-center">{ question }</h1>
        <div className="border border-dark pr-4 pl-4 pt-4 pb-4">
          {this.generateRows(calcRow, chunks)}
        </div>  
      </div>
    )
  }
}

export default Game