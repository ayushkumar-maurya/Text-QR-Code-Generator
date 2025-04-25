import { useState } from "react"
import Text from "./Text"
import contentStyles from "../styles/Content"

const Content = () => {
  const [textForQR, setTextForQR] = useState(null)

  return (
    <>
      <div style={contentStyles.containerOne}>
        <Text setTextForQR={setTextForQR} />
      </div>
      <div style={contentStyles.containerTwo}>
        <p>QR Code will be displayed here!</p>
      </div>
    </>
  )
}

export default Content
