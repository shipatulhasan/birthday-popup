import { useEffect, useState } from "react";
import Modal from "./components/Modal";

// birthday
// age
function App() {
  const [show, setShow] = useState(false);

  // const [showPopup, setShowPopup] = useState('ageverification')

  const handleBirthDate = (yyyy,mm,dd) => {
   
    const date = `${dd}-${mm}-${yyyy}`
    console.log(date);
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
    <div className="absolute top-0 right-0 bottom-0 left-0">
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
