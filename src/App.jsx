
import './App.css'

export default function App() {
    return (
         <div className="page">
      <main className="card-container">
        
        <header className="header">
          <div className="logo-row">
            <span className="logo-icon">↗</span>
            <span className="logo-text">Cab Bill Splitter</span>
          </div>

          <nav className="nav-bar">
            <button 
              type="button" 
              className={`nav-button`}
            >
              Split
            </button>

            <button 
              type="button" 
              className={`nav-button`}
            >
              Request
            </button>
          </nav>
        </header>

        <div>
          <h2 style={{ color: '#000' }}>Go to the app</h2>
        </div>
        </main>
        </div>
      
    )
}