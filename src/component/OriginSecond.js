import React from "react";
import "./OriginSecond.css";

const OriginSecond = () => {
  return (
    <>
      <section className="second-hightlight-wrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper">iPhone 11 Pro</div>

              <div className="description-wrapper">
                Pro cameras. Pro display. Pro performance.
              </div>

              <div className="price-wrapper">
                From $24.95/mo. or $599 with trade‑in.
              </div>

              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="#">Learn more</a>
                  </li>
                  <li>
                    <a href="#">Buy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="third-highlight-wrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper">iPhone 11</div>
              <div className="description-wrapper">
                Just the right amount of everything.
              </div>
              <div className="price-wrapper">
                From $16.62/mo. or $399 with trade‑in.
              </div>
              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="">Learn more</a>
                  </li>
                  <li>
                    <a href="">Buy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OriginSecond;
