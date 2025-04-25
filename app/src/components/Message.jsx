import messageStyles from "../styles/Message"

const Message = ({ msg }) => {
  let title
  
  if(msg)
    title = null
  else {
    title = 'Text QR Code Generator'
    msg = 'Share texts or URLs easily from Laptop to Mobile with the help of QR Code.\n\n'
        + 'Generate QR code for text and scan the QR code displayed on screen via mobile devices.\n\n'
        + 'Download generated QR Code.'
  }

  return (
    <div style={messageStyles.container}>
      {title && <h2 style={messageStyles.title}>{title}</h2>}
      <p style={messageStyles.msg}>{msg}</p>
    </div>
  )
}

export default Message
