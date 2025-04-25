import { useState } from "react"
import Message from "./Message"
import Text from "./Text"
import QRCodeImg from "./QRCodeImg"
import contentStyles from "../styles/Content"
import '../css/Content.css'

const Content = () => {
  const [textForQR, setTextForQR] = useState(null)
  const [msg, setMsg] = useState(null)

  return (
    <div style={contentStyles.container} className="content">
      {!textForQR && <Message msg={msg} />}
      <Text setTextForQR={setTextForQR} setMsg={setMsg} />
      {textForQR && <QRCodeImg textForQR={textForQR} />}
    </div>
  )
}

export default Content
