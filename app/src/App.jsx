import Content from "./components/Content"
import appStyles from "./styles/App"
import './css/App.css'

const App = () => {
  return (
    <div style={appStyles.main}>
      <div style={appStyles.content} className="content">
        <Content />
      </div>
      <div style={appStyles.footer}>
        <p>Developed by: Ayushkumar Maurya</p>
      </div>
    </div>
  )
}

export default App
