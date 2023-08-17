import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import MainMenu from "./pages/MainMenu"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainMenu />}>
            <Route index />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
