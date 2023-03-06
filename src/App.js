import logo from './logo.svg'
import './App.css'
import HeavyComponents from './components/HeavyComponents'
import ObjectComponent from './components/ObjectComponent'

function App() {
  return (
    <>
      <nav
        style={{
          backgroundColor: 'yellow',
          marginBottom: '38px',
        }}
      >
        navigation bar
      </nav>
      <HeavyComponents />
      <ObjectComponent />
      <footer
        style={{
          backgroundColor: 'green',
          marginBottom: '38px',
        }}
      >
        footer
      </footer>
    </>
  )
}

export default App
