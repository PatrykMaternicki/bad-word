import { connect } from 'react-redux'
import { Component } from 'react'
import Game from '../components/Game'

class GameContainer extends Component {
  render() {
    return (
      <Game gameSet={this.props.gameSet}/>
    )
  }
}

const mapStateToProps = state => ({
  gameSet: state.game.pickedGameSet
})

export default connect(mapStateToProps, null)(GameContainer)