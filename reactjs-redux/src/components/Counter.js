import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  render() {
    const { counter, removeCounter, increment, decrement } = this.props
    return (
      <p>
        <span>Clicked: {counter.count} times</span>
        <button onClick={() => increment(counter.id)}>
          +
        </button>
        <button onClick={() => decrement(counter.id)}>
          -
        </button>
        <button onClick={() => removeCounter(counter.id)}>
          Remove
        </button>
      </p>
    )
  }
}

Counter.propTypes = {
  counter: PropTypes.object.isRequired,
  removeCounter: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}

export default Counter
