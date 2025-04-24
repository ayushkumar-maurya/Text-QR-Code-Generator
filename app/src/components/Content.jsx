import Text from "./Text"
import contentStyles from "../styles/Content"

const Content = () => {
  return (
    <>
      <div style={contentStyles.containerOne}>
        <Text />
      </div>
      <div style={contentStyles.containerTwo}>
        <p>QR Code will be displayed here!</p>
      </div>
    </>
  )
}

export default Content
