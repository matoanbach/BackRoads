function Tour(props) {
  return (
    <article class="tour-card">
      <div class="tour-img-container">
        <img src={props.image} class="tour-img" alt="" />
        <p class="tour-date">{props.date}</p>
      </div>
      <div class="tour-info">
        <div class="tour-title">
          <h4>{props.title}</h4>
        </div>
        <p>
            {props.info}
        </p>
        <div class="tour-footer">
          <p>
            <span>
              <i class="fas fa-map"></i>
            </span>{" "}
            {props.location}
          </p>
          <p>{props.duration} days</p>
          <p>from ${props.cost}</p>
        </div>
      </div>
    </article>
  );
}

export default Tour;
