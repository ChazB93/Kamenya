import React from "react";
import "../components/Activities.css"

function Activities(){
    return(
        <>
          <section className="information">
            <h3>Our Initiatives</h3>
            <div className="articles">
              <div className="info-snippet">
              <a href="/">
              <div class="article-img">
                            <img src={process.env.PUBLIC_URL + "/images/farmer1.jpg"} alt="image of seal on beach"/>
                        </div>
              </a>
              <h4>Transform agriculture model</h4>
              </div>
              <div className="info-snippet">
              <a href="/">
              <div class="article-img">
                            <img src={process.env.PUBLIC_URL + "/images/support.jpg"} alt="image of seal on beach"/>
                        </div>
              </a>
              <h4>Support farmers to increase their living standards</h4>
              </div>
              <div className="info-snippet">
              <a href="/">
              <div class="article-img">
                            <img src={process.env.PUBLIC_URL + "/images/ecosystem.jpg"} alt="image of seal on beach"/>
                        </div>
              </a>
              <h4>Protect and regenerate the local ecosystem</h4>
              </div>
              

            </div>
      </section>
        </>
    );
}
export default Activities;