import { Component } from 'react'
import Item from './Item'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { GameActions } from '../store/game/'
import Button from 'react-bootstrap/Button'
import {withRouter} from 'react-router-dom';

class Game extends Component {
  static defaultProps = {
    gameSet: null,
    nextPage: null,
    chunks: [],
    classes: [],
  }

  state = {
    finished: false
  }

  toggleGameState = () => {
    const { finished } = this.state
    if(!finished) {
      this.setState({finished: !finished })
    } else {
      this.props.history.push('/score')
    }
  }

  toggleText = () => {
    return this.state.finished ? 'finish game' : 'check answers'
  }

  generateRows = () => {
    let generatedComponent = []
    const { chunks, classes, gameSet } = this.props
    const { finished } = this.state
    for (let i = 0; i < chunks.length; i++) {
      generatedComponent.push(
        <div key={i} className={classes[i]}>
          {chunks[i].map(word =>
            <Item
              key={word} 
              word={word} 
              finished={finished}
              isBadWord={gameSet.good_words.indexOf(word) > -1}
              setPoint={this.props.setPoint}
            />
          )}
        </div>
      )
    }

    return generatedComponent
  }

  render() {
    const { question } = this.props.gameSet
    return(
      <div>
        <h1 className="h5 text-center">{ question }</h1>
        <div className="border border-dark pr-4 pl-4 pt-4 pb-4">
          {this.generateRows()}
        </div>  
        <Button
          className="d-block ml-auto mr-auto mt-4 pr-4 pl-4" 
          variant="outline-primary"
          onClick={this.toggleGameState} 
        >
          {this.toggleText()}
        </Button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setPoint: (result) => dispatch(GameActions.setPoint(result))
})


export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(Game)