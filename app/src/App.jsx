import Content from "./components/Content"
import Footer from "./components/Footer"
import appStyles from "./styles/App"

const App = () => {
  return (
    <div style={appStyles.container}>
      <Content />
      <Footer />
    </div>
  )
}

export default App
