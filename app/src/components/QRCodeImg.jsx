import { useState, useEffect } from 'react'
import QRCode from 'qrcode'
import qrCodeImgStyles from "../styles/QRCodeImg";

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
  }, [])

  return (
    <div style={qrCodeImgStyles.container}>
      {qrCodeUrl ? <img src={qrCodeUrl} style={qrCodeImgStyles.img} alt="QR Code" /> : <></>}
    </div>
  )
}

export default QRCodeImg
