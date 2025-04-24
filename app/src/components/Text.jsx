import { useState } from "react"
import textStyles from "../styles/Text"
import '../css/Text.css'

const Text = () => {
  const [text, setText] = useState('')

  return (
    <>
      <textarea
        maxLength={1000}
        style={textStyles.text}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter Text"
      />
      <br />
      <button type="button" style={textStyles.button}>Generate</button>
    </>
  )
}

export default Text
