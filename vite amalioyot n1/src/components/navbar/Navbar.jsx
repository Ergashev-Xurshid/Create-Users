import "./Navbar.css"
function Navbar({userLength}) {
  return (
    <div className="navbar">
      <div className="navbar-container container">
        <h1 className="navbar-logo">CUser</h1>
        <h3 className="navbar-counter">  
            {userLength > 0 ? "Yuo have : " + userLength : "No users :("}
        </h3>
      </div>
    </div>
  )
}

export default Navbar
