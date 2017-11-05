import { Component } from 'react'

export default class Counter extends Component {
  state = {
    counter: 0
  }
  interval

  componentDidMount() {
    this.startCounter()
  }

  componentWillUnmount() {
    this.stopCounter()
  }

  incrementCounter = () => {
    this.setState(state => ({
      counter: state.counter + 1
    }))
  }

  startCounter = () => {
    this.interval = setInterval(this.incrementCounter, 1000)
  }

  stopCounter = () => {
    clearInterval(this.interval)
  }

  render() {
    return this.state.counter
  }
}
