import React from "react"
import "./Button.css"

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.btnRef = React.createRef()
    this.state = {
      isActive: false,
      dimpleX: 0,
      dimpleY: 0
    }
  }

  clickHandle(event) {
    const { clientX, clientY } = event
    const { x, y } = this.btnRef.current.getBoundingClientRect()
    this.setState({
      isActive: true,
      dimpleX: clientX - x - 5,
      dimpleY: clientY - y - 5
    })
    this.props.onClick && this.props.onClick.call(undefined, event)
  }

  animationEndHandle() {
    this.setState({
      isActive: false
    })
  }

  render() {
    return (
      <button className="button"
              ref={this.btnRef}
              onClick={this.clickHandle.bind(this)}
              onAnimationEnd={() => {
                this.animationEndHandle()
              }}
      >
        {this.props.children}
        {
          this.state.isActive ?
            <span
              className="circle"
              style={{ left: this.state.dimpleX, top: this.state.dimpleY }}/> : null
        }
      </button>
    )
  }
}

export default Button
