import './App.css'
import Grandpha from './Components/Grandpha/Grandpha'
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import StatefulForm from './Components/StatefulForm/StatefulForm'
// import ReuseableForm from './Components/REuseableRorm/ReuseableForm'

function App() {

  // const handleSingUpSubmit = e => {
  //   e.preventDefault();
  // }

  // const handleUpdateProfile = e => {
  //   e.preventDefault();
  // }

  // const handleSingUpSubmit = data => {
  //   console.log('sing up data', data);
  // }

  // const handleUpdateProfile = data => {
  //   console.log('sing up profilw', data);
  // }


  return (
    <>
    <h1>Form practice</h1>

    <Grandpha></Grandpha>

{/* <RefForm></RefForm> */}
{/* <StatefulForm></StatefulForm>    */}
{/* <HookForm></HookForm> */}
{/* <ReuseableForm formTitle={'Reuseable form'} handleSubmit={handleSingUpSubmit}></ReuseableForm>
<ReuseableForm formTitle={'Singup form'} submitBtnText='Update' handleSubmit={handleUpdateProfile}></ReuseableForm> */}




</>
  )
}

export default App
