function Service(props) {
  return (
    <article class="service" key={props.id}>
      <span class="service-icon">
        <i class={props.icon}></i>
      </span>
      <div class="service-info">
        <h4 class="service-title">{props.title}</h4>
        <p class="service-text">{props.text}
        </p>
      </div>
    </article>
  );
}

export default Service;
