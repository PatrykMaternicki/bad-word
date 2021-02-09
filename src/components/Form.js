import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Component } from 'react'

export default class GameForm extends Component {

  static defaultProps = {
    handleNickName: null
  }

  state = {
    nickName: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()
    event.currentTarget.checkValidity() && this.props.handleNickName(this.state.nickName)
  }

  handleChange = (event) => {
    let { nickName } = this.state
    nickName = event.target.value
    this.setState({nickName})
  }

  setDisabled = () => this.state.nickName.length > 0 ? false : true

  render() {
    return(
      <div>
      <h1 className="h5 text-center">WorkCloud Game</h1>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            required 
            type="text" 
            value={this.state.nickName}
            onChange={this.handleChange}
            placeholder="Enter your nickname here"
          />
        </Form.Group>
        <Button
          disabled={this.setDisabled()} 
          className="d-block ml-auto mr-auto pr-4 pl-4" 
          variant="outline-primary" 
          type="submit"
        >
          play
        </Button>
      </Form>
    </div>
    )
  }
}