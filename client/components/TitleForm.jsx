import React from 'react'
import { Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { addPlayers } from '../api'

class TitleForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      playerOne: '',
      playerTwo: ''
    }

    this.submitHandler = this.submitHandler.bind(this)
  }

  championOneHandler = event => {
    this.setState({
      playerOne: event.target.value
    })
  }

  championTwoHandler = event => {
    this.setState({
      playerTwo: event.target.value
    })
  }

  submitHandler = event => {
    let team1 = this.state.playerOne
    let team2 = this.state.playerTwo
    event.preventDefault()
    let setTeams = this.props.setTeams
    setTeams(team1, team2)
  }

  render () {
    return (
      <div className="formContainerDiv">
        <div className="formBodyBorder">
          <div className="formBody">
            <Form>
              <h3 className="formTitleText">What should the heralds call you?</h3>
              <div className="formFlex">
                <h2 className="formlabel">Champion One</h2>
                <Form.Group className="formGroup">
                  <Form.Input
                    placeholder='championOne'
                    name='championOne'
                    onChange={this.championOneHandler}
                  />
                </Form.Group>
              </div>
              <div className="formFlex">
                <h2 className="formlabel">Champion Two</h2>
                <Form.Group>
                  <Form.Input
                    placeholder='championTwo'
                    name='championTwo'
                    onChange={this.championTwoHandler}
                  />
                </Form.Group>
              </div>
              <Form.Button onClick={this.submitHandler}>
                <Link to='/game'>Fight!</Link>
              </Form.Button>
              <div>
                <Link to='/game'>Temporary Link to Report</Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default TitleForm
