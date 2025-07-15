import Editor from "./Editor"
import React, { useState } from "react"
import { BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import { v4 as uuidV4 } from "uuid"

function App() {
   const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
         <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    <Router>
      <Routes>
        <Route path="/" exact element = {<Navigate to={`/documents/${uuidV4()}` } /> } />
        <Route path="/documents/:id" element={<Editor/>}>
        </Route>
      </Routes>
      </Router>
      </div>
  )
}

export default App


