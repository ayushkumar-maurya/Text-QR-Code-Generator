import { useState } from "react"
import textStyles from "../styles/Text"
import '../css/Text.css'

const Text = ({ setTextForQR, setMsg }) => {
  const [text, setText] = useState('')

  const handleClick = () => {
    let textForQR = text.trim()
    let msg = null

    if(textForQR.length === 0) {
      textForQR = null
      msg = 'Please enter text!'
    }
    else if(textForQR.length > 1000) {
      textForQR = null
      msg = 'At the most 1000 characters are allowed!'
    }

    setTextForQR(textForQR)
    setMsg(msg)
  }

  return (
    <div style={textStyles.container}>
      <textarea
        style={textStyles.text}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter Text"
      />
      <button type="button" style={textStyles.button} className="generate-btn" onClick={handleClick}>Generate</button>
    </div>
  )
}

export default Text
