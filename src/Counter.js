import { Component } from 'react'

export default class Counter extends Component {
  state = {
    counter: 0
  }

  render() {
    return this.state.counter
  }
}
