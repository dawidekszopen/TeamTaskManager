import './App.css'

function App() {
    if(sessionStorage.getItem('logged') != null){
        console.log(sessionStorage.getItem('logged'))
    }
    else {
        sessionStorage.setItem('logged', 'false')
    }

  return (
    <>
        {/*{sessionStorage.getItem('logged') == "true"? "" : <FrontPage/>}*/}
    </>
  )
}

export default App
