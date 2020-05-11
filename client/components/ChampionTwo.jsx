import React from 'react'

class ChampionTwo extends React.Component {
  render () {
    return (
      <div className="gamePanel2">
        <div className="panelHorizontal"></div>
        <h1 className="championUnit">How to play:</h1>
        <h2 className="championAction"> Use the WASD keys to move your player and attack your opponent. The first player to kill all of the oposition wins.</h2>
        <div className="panelHorizontal"></div>
        <ul className="instructionsList">
          <li>W - move up</li>
          <li>A - move left</li>
          <li>S - move down</li>
          <li>D - move right</li>
          <li>E - select</li>
          <li>T - change team</li>
          <li>Q - attack mode</li>
          <li>R - attack this tile in attack mode</li>
          <li>Z - view unit info</li>
        </ul>
        <div className="panelHorizontal"></div>
      </div>
    )
  }
}

export default ChampionTwo