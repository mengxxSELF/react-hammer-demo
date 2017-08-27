import React, {Component} from 'react'
import ReactDOM from 'react-dom'
let Hammer = require('react-hammerjs')
let styles = {
  width: 200,
  height: 200,
  textAlign: 'center',
  background: '#ccc'
}

export default class Pan extends Component {
  constructor (props) {
    super(props)
    this.pan = this.pan.bind(this)
    this.PanCancel = this.PanCancel.bind(this)
    this.PanEnd = this.PanEnd.bind(this)
    this.PanStart = this.PanStart.bind(this)
    this.state = {text: null}
  }
  PanStart () {
    this.setState({text: 'PanStart'})
  }
  PanEnd () {
    this.setState({text: 'PanEnd'})
  }
  PanCancel () {
    this.setState({text: 'PanCancel'})
  }
  pan () {
    this.setState({text: 'pan'})
  }
  render () {
    let HammerProps = {
      onPan: this.pan,
      onPanCancel: this.PanCancel,
      onPanEnd: this.PanEnd,
      onPanStart: this.PanStart
    }
    return (
      <Hammer style={styles}>
        <div >pan 单手滑动</div>
      </Hammer>
    )
  }
}
