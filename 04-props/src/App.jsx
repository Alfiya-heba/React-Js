//Props= read-only properties that are shared between components....
//        A parent Component can send data to the child component.
 //         <Component key=value/>

import './App.css'
import Student from './student.jsx'
function App() {
  
  return (
    <>
      <Student name="Alfiya" age={22} isStudent={true}/>
      <Student name="Heba" age={50} isStudent={false}/>
      <Student name="Nonu" age={50} isStudent={false}/>
      <Student name="Chintu" age={22} isStudent={true}/>
      <Student/>
      <Student name={undefined} age={undefined} isStudent={undefined} />
    </>
  )
}

export default App
