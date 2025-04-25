import { useState } from "react"
import textStyles from "../styles/Text"
import '../css/Text.css'

const Text = ({ setTextForQR }) => {
  const [text, setText] = useState('')

  return (
    <div style={textStyles.container}>
      <textarea
        maxLength={1000}
        style={textStyles.text}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter Text"
      />
      <br />
      <button type="button" style={textStyles.button} onClick={() => setTextForQR(text)}>Generate</button>
    </div>
  )
}

export default Text
