import { useState, useEffect } from 'react'
import QRCode from 'qrcode'
import qrCodeImgStyles from "../styles/QRCodeImg";
import '../css/QRCodeImg.css'

const QRCodeImg = ({ textForQR }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState(null)

  useEffect(() => {
    const getQRCodeURL = async () => {
      try {
        setQrCodeUrl(await QRCode.toDataURL(textForQR))
      } catch (err) {
        console.error(err)
      }
    }
    getQRCodeURL()
  }, [textForQR])

  const handleClick = () => {
    const anchor = document.createElement('a')
    anchor.href = qrCodeUrl
    anchor.download = 'Generated QR Code.png'
    anchor.style.display = 'none'
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
  }

  return (
    <div style={qrCodeImgStyles.container}>
      {qrCodeUrl && (
        <>
          <img src={qrCodeUrl} style={qrCodeImgStyles.img} alt="QR Code" />
          <button type="button" style={qrCodeImgStyles.button} className="download-btn" onClick={handleClick}>Download</button>
        </>
      )}
    </div>
  )
}

export default QRCodeImg
