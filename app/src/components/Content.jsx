import { useState } from "react"
import Message from "./Message"
import Text from "./Text"
import contentStyles from "../styles/Content"
import '../css/Content.css'

const Content = () => {
  const [textForQR, setTextForQR] = useState(null)
  const [msg, setMsg] = useState(null)

  return (
    <div style={contentStyles.container} className="content">
      {textForQR ? <></> : <Message msg={msg} />}
      <Text setTextForQR={setTextForQR} />
      {textForQR ? <p style={{ flex: 1 }}>QR Code will be displayed here!</p> : <></>}
    </div>
  )
}

export default Content
