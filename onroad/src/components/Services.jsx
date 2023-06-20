import Tittle from "./Tittle";
import Service from "./Service";
import { services } from "../data";
function Services() {
  return (
    <section class="section services" id="services">
      <Tittle title="our" subtitle="services"/>
      <div class="section-center services-center">
        {
          services.map((thatService) => {
            return <Service {...thatService}/>
          })
        }
      </div>
    </section>
  );
}

export default Services;
