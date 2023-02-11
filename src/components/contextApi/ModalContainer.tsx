import { useContext } from "react";
import { ModalContext } from "../../context/ModalContextProvider";

function ModalContainer() {
  const { state } = useContext(ModalContext);

  return (
    <div>
      <p>Modal is {state.isModalOpen ? "Open" : "Close"}</p>
      {state.isModalOpen && (
        <>
          <p>User is {state.user}</p>
        </>
      )}
    </div>
  );
}

export default ModalContainer;
