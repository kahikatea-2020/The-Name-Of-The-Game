import React from 'react'
import Description from './Description'
import TitleForm from './TitleForm'
import GameHeader from './GameHeader'

class Title extends React.Component {
  render() {
    return(
      <div>
        <div className="TitleDiv">
          <div>
            <Description />
          </div>
          <div class="TitleFormDiv">
           <TitleForm />
          </div>
        </div>
      </div>
    )
  }
}

export default Title