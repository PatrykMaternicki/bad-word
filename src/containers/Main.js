
import { Component } from 'react'
import { connect } from 'react-redux'
import Form from '../components/Form'
import { GameActions } from '../store/game'

class MainContainer extends Component {
  startGame = (nickName) => {
    this.props.setNickName(nickName)
    this.props.pickGame()
    this.props.setStateGame(true)
    this.props.history.push('/game')
  }

  render() {
    return (
      <Form handleNickName={this.startGame}/>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setNickName: (nickName) =>  dispatch(GameActions.setNickName(nickName)),
  pickGame: () => dispatch(GameActions.pickGame()),
  setStateGame: (state) => dispatch(GameActions.setStateGame(state)) 
})

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)