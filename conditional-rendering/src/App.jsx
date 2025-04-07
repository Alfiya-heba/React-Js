// Conditional Rendering--: it allows us to control what gets rendered in our application based on certain conditions (show,hide,change component)
// import './App.css'
// App.jsx
import UserGreeting from "./usergreeting";
import "./App.css"

function App() {
  return (
    <>
      <UserGreeting isLoggedin={false} username="AlfiyaHeba" />
      <UserGreeting isLoggedin={true} username="Nonu"/>
      <UserGreeting isLoggedin={true}/>
      <UserGreeting/>
    </>
  );
}

export default App;
