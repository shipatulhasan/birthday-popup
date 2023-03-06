import { useEffect, useState } from 'react'
import Modal from './components/Modal'

// birthday
// age
function App() {
  const[show,setShow]=useState(false)
  // const [showPopup, setShowPopup] = useState('ageverification')

  const handleAge = (e)=>{
    e.preventDefault()
    const form = e.target
    const birthdate = form.birthdate.value
    form.reset()
    console.log(birthdate)

  }

  useEffect(()=>{
    const unsubscribe = setTimeout(()=>{
      setShow(true)
    },3000)
 return ()=>clearTimeout(unsubscribe)
  },[])

  return (
    <div className='absolute top-0 right-0 bottom-0 left-0'>
      <Modal show={show} setShow={setShow} value={'birth'} handleSubmit = {handleAge} />
    </div>
  )
}

export default App
