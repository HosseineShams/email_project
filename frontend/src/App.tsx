import MyProvider from './components/Context'
import Routes from './routes'

const App = () => {
  return (
    <MyProvider>
      <Routes />
    </MyProvider>
  )
}

export default App
