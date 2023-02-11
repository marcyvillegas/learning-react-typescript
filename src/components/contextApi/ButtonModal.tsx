import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContextProvider';

function ButtonModal() {

    const { state, dispatch } = useContext(ModalContext);

    function toggleModal() {
        if (state.isModalOpen === false) return dispatch({ type: 'EMIT_OPEN_MODAL' });
        return dispatch({ type: 'EMIT_CLOSE_MODAL' });
    }

    function changeUser() {
        return dispatch({ type: 'EMIT_CHANGE_USER' });
    }

    return (
        <div>
            <button onClick={changeUser}>Change User</button>
            <button onClick={toggleModal}>Toggle Modal</button>
        </div>
    );
}

export default ButtonModal;
