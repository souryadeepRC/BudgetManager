import { faCircleNotch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './Spinner.css'

const Spinner = () => {
    return (
        <p className="spinner__text"><FontAwesomeIcon icon={faCircleNotch}  className="spinner" /></p>
    )
}
export default Spinner