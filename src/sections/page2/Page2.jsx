import React from "react";
import "./Page2.scss";
import icon1 from "../../assets/page2_icon1.svg";
import icon2 from "../../assets/page2_icon2.svg";
import icon3 from "../../assets/page2_icon3.svg";
import icon4 from "../../assets/page2_icon4.svg";
import icon5 from "../../assets/page2_icon5.svg";
import icon6 from "../../assets/page2_icon6.svg";

const ITEMS = [
  {
    id: "1",
    img: icon1,
    heading: "Instant Features",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
  {
    id: "2",
    img: icon2,
    heading: "Instant Features",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
  {
    id: "3",
    img: icon3,
    heading: "Instant Features",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
  {
    id: "4",
    img: icon4,
    heading: "Instant Features",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
  {
    id: "5",
    img: icon5,
    heading: "Instant Features",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
  {
    id: "6",
    img: icon6,
    heading: "Instant Features",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
  },
];

export const Page2 = () => {
  return (
    <div className="page2">
      <div className="page2__inner">
        <div className="page2__title">
          <h2 className="page2__heading">
            The majority our customers do not understand their workflows.
          </h2>
          <p className="page2__text">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="page2__items">
          {ITEMS.map((item) => {
            return (
              <div className="page2__item">
                <img src={item.img} alt={item.id} className="page2__item-img" />
                <h4 className="page2__item-heading">{item.heading}</h4>
                <p className="page2__item-text">{item.text}</p>
              </div>
            );
          })}
        </div>
        <div className="page2__footer" />
      </div>
    </div>
  );
};
