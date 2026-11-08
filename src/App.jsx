import MainLayout from './components/layout/MainLayout/MainLayout'
import HomePage from './pages/HomePage'

// App is the root component. Later, when you add more pages,
// this is where you would set up routing (e.g. with react-router).
function App() {
  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  )
}

export default App
