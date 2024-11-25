import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/userList/UserList";
import NewUserFom from "./components/newuser/NewUserFom";
import { useState } from "react";
import './App.css'

function App() {
  const [user , setUser] = useState([]);
  const [showModal , setShowModal] = useState(false)
  const handelDelete =(id) => {
    setUser((prev)=>{
      return prev.filter((user)=>{
        return user.id !== id
      })
    }) 
  };

  const closeModal = (e)=>{
    if (e.target.className === "overlay"){
      setShowModal(false);
    };
    if (e.key === "Escape"){
      setShowModal(false);
    };
  };
  const addUser = (user) => {
    setUser((prev)=>{
      return [...prev ,user]
    });
    setShowModal(false)
  }
  return (
    <div onClick={closeModal} onKeyDown={closeModal} className='App'>
      <Navbar userLength={user.length}/>
      <main>
        <div className="no-users">
          {user.length === 0 && <h2>No Users</h2>}
        </div>
        <UserList users={user} handelDelete={handelDelete}/>
      </main>
      {showModal && <NewUserFom addUser={addUser}/>}
      <button className="create-user" onClick={()=>{setShowModal(true)}}>Create user</button>
      <Footer/>
    </div>
  )
}

export default App

