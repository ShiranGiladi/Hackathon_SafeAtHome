// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import React from 'react';
// import EntryPage from './pages/EntryPage/EntryPage.jsx';

// const App = () => {
//   return <EntryPage />;
// };

// export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import EntryPage from './pages/EntryPage/EntryPage.jsx';
import Login from './pages/Login/Login.jsx';
import Home from './pages/Home/Home.jsx';
import Navbar from './components/Navbar/Navber.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={ 
                <div>
                  <Login />
                </div>
              }
            />
            <Route
              path="/home"
              element={ 
                <div>
                  <Navbar />
                  <Home />
                </div>
              }
            />
            <Route
              path="/entryPage"
              element={ 
                <div>
                  <Navbar />
                  <EntryPage />
                </div>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;