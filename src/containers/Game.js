import { connect } from 'react-redux'
import { Component } from 'react'
import Game from '../components/Game'

class GameContainer extends Component {
  render() {
    const { gameSet, chunks, classes } = this.props
    console.log(classes)
    return (
      <Game 
        gameSet={gameSet}
        chunks={chunks}
        classes={classes}
      />
    )
  }
}

const mapStateToProps = state => ({
  gameSet: state.game.pickedGameSet,
  chunks: state.game.chunks,
  classes: state.game.classes,
})

export default connect(mapStateToProps, null)(GameContainer)