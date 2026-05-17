// import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import TheDefaultLayout from "./components/layouts/TheDefaultLayout"
import TopPage from "./pages/Top"

function App() {
  return (
    <>
      <TheDefaultLayout>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route>
          </Route>
        </Routes>
      </TheDefaultLayout>
    </>
  )
}

export default App
