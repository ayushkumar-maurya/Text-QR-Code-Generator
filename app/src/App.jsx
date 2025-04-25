import Content from "./components/Content"
import appStyles from "./styles/App"

const App = () => {
  return (
    <div style={appStyles.container}>
      <Content />
      <p>Footer will be displayed here!</p>
    </div>
  )
}

export default App
