import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
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
      <div className="home-layout font-sans gap-6 flex-col text-yellow-50 flex items-center justify-center  h-screen w-screen">
        <div className="bg-white shadow-2xl text-black rounded-3xl w-1/4 h-2/5 flex flex-col text-center justify-center items-center">
          <h1 className="text-base ">
            oi, você recebeu um email{" "}
            <Badge className="bg-gradient-to-l from-pink-700 to-pink-400 ">
              1
            </Badge>
          </h1>

          {active === false ? (
            <img
              width="150px"
              height="150px"
              srcSet="https://t4.ftcdn.net/jpg/05/25/22/63/360_F_525226337_x7lLRcnU08vDLkijRwgcbaIs8zCfDktC.jpg"
            />
          ) : (
            <img
              width="150px"
              height="150px"
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
      >
        <Modal.Header>
          <Modal.Title className="flex  w-full justify-center items-center">
            <div className="font-serif  w-72 text-center">
            <h2 className="text-center text-gray-500  tracking-wide ">CONVITE</h2>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="font-serif">
        
          <h2 className="text-gray-500 text-lg">Prezada, Thamara Abreu</h2>
          <p className="text-gray-500 ">
            venho aqui, através desse mero convite te convidar para uma noite de
            romance e prazer.
          </p>
          <p className="text-slate-400">Data: 15/09 </p>
          <p className="text-slate-400">Local: indefinido rsrs </p>
          <p className="text-slate-400">Horário: 19:00hrs</p>

          <p className="text-slate-400 text-sm">
            Obs: todas as suas dúvidas serão respondidas pelo WhatsApp.
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
