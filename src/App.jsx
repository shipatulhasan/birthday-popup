import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Swal from 'sweetalert2'

// birthday
// age
function App() {
  const [show, setShow] = useState(false);

  // const [showPopup, setShowPopup] = useState('ageverification')

  const handleBirthDate = (yyyy,mm,dd,event) => {
    event.preventDefault()
    const date = `${dd}-${mm}-${yyyy}`
    console.log(date);
    event.target.reset()
    Swal.fire(
      'Cogratulations!',
      'You have successfully saved your birthdate here',
      'success'
    )
    localStorage.setItem("BBBage-verification", true);
    setShow(false)
  };
  const handleVerify = () => {
    setShow(!show);
    localStorage.setItem("BBBage-verification", true);
  };

  useEffect(() => {
    const isVerified = localStorage.getItem("BBBage-verification");
    if (!isVerified) {
      const unsubscribe = setTimeout(() => {
        setShow(true);
      }, 3000);
      return () => clearTimeout(unsubscribe);
    }
    setShow(false);
    return;
  }, []);

  return (
    <div className="">
      <Modal
        show={show}
        setShow={setShow}
        value={"age"}
        handleVerify={handleVerify}
        handleSubmit={handleBirthDate}
      />
    </div>
  );
}

export default App;
