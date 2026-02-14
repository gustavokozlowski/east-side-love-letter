import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";
export function Home() {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setActive(!active);
  };
  const handleShow = () => setShow(true);
  const handleClick = () => {
    setActive(!active);
    handleShow();
  };

  return (
    <>
      <div className="home-layout font-sans gap-6 flex-col text-yellow-50 flex items-center justify-center h-screen w-screen px-4">
        <div className="bg-white shadow-2xl text-black rounded-3xl w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 min-h-fit py-8 flex flex-col text-center justify-center items-center gap-2">
          <h1 className="text-sm md:text-base px-4">
            oi, você recebeu um email{" "}
            <Badge className="bg-gradient-to-l from-pink-700 to-pink-400 ">
              1
            </Badge>
          </h1>

          {active === false ? (
            <img
              className="w-24 h-24 md:w-24 md:h-24"
              srcSet="https://t4.ftcdn.net/jpg/05/25/22/63/360_F_525226337_x7lLRcnU08vDLkijRwgcbaIs8zCfDktC.jpg"
            />
          ) : (
            <img
              className="w-24 h-24 md:w-24 md:h-24"
              srcSet="https://thenounproject.com/api/private/icons/1074979/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
            />
          )}
          <button
            onClick={handleClick}
            className="bg-gradient-to-l from-pink-700 to-pink-400 rounded-2xl hover:brightness-110 mt-4 text-slate-100  font-bold h-10 self-center w-36"
          >
            Open
          </button>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header>
          <Modal.Title className="flex w-full justify-center items-center">
            <div className="font-serif w-72 text-center mt-3">
              <h2 className="text-center text-blue-500 text-2xl md:text-4xl font-light shadow-text transition-all">
                CONVITE
              </h2>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="font-serif text-blue-500 text-shadow-lg flex flex-col text-justify gap-2">
          <h2 className="text-gray-700 text-xl indent-4">Prezada, Thamara Abreu</h2>
          <p className="text-gray-700 indent-3 text-justify">
            Venho aqui, através desse mero convite te convidar para uma noite de
            <span className="text-blue-500 font-bold"> shorlowmance. </span>
            <br />       
          Será uma noite inesquecível, e iremos celebrar com um jantar regado naquele clima <span className="text-blue-500 font-bold">
          gutham vibez.</span>{" "}
          
          </p>
          <div className="flex flex-col gap">
          <p className="flex gap-2">Data: <p className="text-gray-600">14/02 📆</p> </p>
          <p className="flex gap-2">Local: <p className="text-gray-600">Gutham House 🏡</p></p>
          <p className="flex gap-2">Horário: <p className="text-gray-600">22:00hrs ⏰</p></p>
          </div>
          <p className="flex gap-2">
            Obs: <p className="text-slate-500 break-words">Todas as suas dúvidas serão respondidas pelo WhatsApp.</p>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={handleClose}
            className="bg-gradient-to-l from-pink-700 to-pink-400 rounded-2xl hover:brightness-110  text-slate-100  font-bold h-10 self-center w-20"
          >
            Okay
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
