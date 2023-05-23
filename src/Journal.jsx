/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Journal(props) {
  return (
    <div className="journal-container">
      <section className="journal">
        <figure className="journal--img-container">
            <img className="journal--img" src={props.entry.imageUrl} />
        </figure>
        <figcaption className="journal--details">
          <div className="journal--spans">
            <FontAwesomeIcon className="journal--icon" icon={faLocationDot} />
            <span className="journal--location">{props.entry.location}</span>
            <span className="journal--link">
              <a
                href={props.entry.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </span>
          </div>
          <h1 className="journal--title">{props.entry.title}</h1>
          <h4 className="journal--dates">
            {props.entry.startDate} - {props.entry.endDate}
          </h4>
          <p className="journal--desc">{props.entry.description}</p>
        </figcaption>
      </section>
      <hr />
    </div>
  );
}
