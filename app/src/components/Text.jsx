import textStyles from "../styles/Text"
import '../css/Text.css'

const Text = () => {
  return (
    <>
      <label htmlFor="text" style={textStyles.label}>Enter Text</label>
      <br />
      <textarea id="text" name="text" maxLength={1000} style={textStyles.text} />
    </>
  )
}

export default Text
