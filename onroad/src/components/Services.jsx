import Tittle from "./Tittle";

function Services() {
  return (
    <section class="section services" id="services">
      <Tittle title="our" subtitle="services"/>
      <div class="section-center services-center">
        <article class="service">
          <span class="service-icon">
            <i class="fas fa-wallet fa-fw"></i>
          </span>
          <div class="service-info">
            <h4 class="service-title">saving money</h4>
            <p class="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article class="service">
          <span class="service-icon">
            <i class="fas fa-tree fa-fw"></i>
          </span>
          <div class="service-info">
            <h4 class="service-title">endless hiking</h4>
            <p class="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article class="service">
          <span class="service-icon">
            <i class="fas fa-socks fa-fw"></i>
          </span>
          <div class="service-info">
            <h4 class="service-title">amazing comfort</h4>
            <p class="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Services;
