// components/WhyUs/WhyUs.js
import React from 'react';
import './Whyus.css';

function Whyus() {
  return (
    <section id="why-us" className="why-us section-bg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
            <div className="content">
              <h3>Guidelines implementation <strong>must for proper management of medical waste</strong></h3>
              <p>
                A hospital is the last resort of hope for sick people who expect to get
                better and heal. However, shortcoming on the part of the hospital staff
                and management could instead have an adverse effect on public health.
              </p>
            </div>

            <div className="accordion-list">
              <ul>
                <li>
                  <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1">
                    <span>01</span> "Wastes from health care institutions can be categorized as infectious or noninfectious."
                  </a>
                  <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                    <p>
                      Infectious wastes include human, animal, or biological wastes and
                      any items that may be contaminated with pathogens. Noninfectious
                      wastes include toxic chemicals, cytotoxic drugs, and radioactive,
                      flammable, and explosive wastes, reads the guideline.
                    </p>
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed">
                    <span>02</span> Implementation problem
                  </a>
                  <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                      However, not all hospitals are following the guidelines mainly
                      because of the lack of budget, lack of orientation regarding medical
                      waste management to waste handlers, and flimsy monitoring from the
                      government.
                    </p>
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed">
                    <span>03</span> Dr Kedar Century, Executive Director at Bir Hospital said,
                  </a>
                  <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                      "We used to have an ideal waste management system to sterilize and
                      dispose hospital waste before the 2015 earthquake. But the
                      earthquake damaged the building where we had installed the autoclave
                      device and now we don't have any space. The new building is
                      currently being used to accommodate admitted patients."
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{backgroundImage: 'url("assets/img/Medical-Waste.jpg")'}}>&nbsp;</div>
        </div>
      </div>
    </section>
  );
}

export default Whyus;