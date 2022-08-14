import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/Message.css";

export default function Message(props) {
    return (
        <div className="message_box d-flex justify-content-between align-items-center shadow">
            <span>{props.message}</span>
            <span onClick={props.action} className='message_icon'><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></span>
        </div>
    )
}