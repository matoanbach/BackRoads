import Tittle from "./Tittle";
import Tour from "./Tour";
import { tours } from "../data";


function Tours() {
  return (
    <section class="section" id="tours">
      <Tittle title="featured" subtitle="tours"/>

      <div class="section-center featured-center">
        {
          tours.map((tour) => {
            return <Tour {...tour}/>
          })
        }
      </div>
    </section>
  );
}

export default Tours;
