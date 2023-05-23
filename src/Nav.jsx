import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
    return (
        <header>
            <nav>
                <FontAwesomeIcon icon={faEarthAmericas} size="xl" className="nav--icon"/>
                <h3 className="nav--title">my travel journal.</h3>
            </nav>
        </header>
    )
}