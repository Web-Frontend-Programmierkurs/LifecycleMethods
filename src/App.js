import React, { Component } from 'react'
import Counter from './Counter'

class App extends Component {
  state = {
    counterVisible: true
  }

  toggleCounterVisibility = () => {
    this.setState(state => ({
      counterVisible: !state.counterVisible
    }))
  }

  render() {
    const { counterVisible } = this.state
    return (
      <div>
        <label>
          <input
            type="checkbox"
            defaultChecked={counterVisible}
            onChange={() => this.toggleCounterVisibility()}
          />
          show counter
        </label>
        <div>{counterVisible && <Counter />}</div>
      </div>
    )
  }
}

export default App
