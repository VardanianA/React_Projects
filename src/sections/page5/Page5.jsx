import React from "react";
import "./Page5.scss";
import page5SVG from "../../assets/page5SVG.svg";

export const Page5 = () => {
  return (
    <div className="page5">
      <div className="page5__inner">
        <div className="page5__joinBlock">
          <div className="page5__text">
            <h3 className="page5__headName">Stay in the loop</h3>
            <p className="page5__textName">
              Join our newsletter to get top news before anyone else.
            </p>
          </div>
          <form className="page5__forms">
            <input
              type="text"
              className="page5__formText"
              placeholder="Your best email..."
            />
            <input
              type="button"
              className="page5__formButton"
              value="Subscribe"
            />
          </form>
        </div>
        <div className="page5__svg">
          <img src={page5SVG} alt="page5SVG" />
        </div>
      </div>
    </div>
  );
};
