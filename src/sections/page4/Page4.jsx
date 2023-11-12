import React from "react";
import "./Page4.scss";
import img1 from "../../assets/testimonial-01.webp";
import img2 from "../../assets/testimonial-02.webp";
import img3 from "../../assets/testimonial-03.webp";
import page4SVGs from "../../assets/page4SVGs.svg";

const ITEMS = [
  {
    id: "1",
    itemImage: img1,
    itemSVG: page4SVGs,
    itemTitle:
      "— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
    itemText: "Anastasia Dan - ",
    itemLink: "UX Board",
  },
  {
    id: "2",
    itemImage: img2,
    itemSVG: page4SVGs,
    itemTitle:
      "— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
    itemText: "Anastasia Dan - ",
    itemLink: "UX Board",
  },
  {
    id: "3",
    itemImage: img3,
    itemSVG: page4SVGs,
    itemTitle:
      "— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.",
    itemText: "Anastasia Dan - ",
    itemLink: "UX Board",
  },
];

export const Page4 = () => {
  return (
    <div className="page4">
      <div className="page4__inner">
        <div className="page4__title">
          <h2 className="page4__titleName">Don't take our word for it</h2>
          <p className="page4__textName">
            Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
            semper quis lectus nulla at volutpat diam ut venenatis tellus—in
            ornare.
          </p>
        </div>
        <div className="page4__items">
          {ITEMS.map((item) => {
            return (
              <div className="page4__item">
                <div className="page4__itemImage">
                  <img
                    src={item.itemImage}
                    alt={item.id}
                    className="page4__image"
                  />
                  <img
                    src={item.itemSVG}
                    alt={item.id}
                    className="page4__svg"
                  />
                </div>
                <div className="page4__itemTitle">{item.itemTitle}</div>
                <div className="page4__itemLine" />
                <div className="page4__itemFooter">
                  <cite className="page4__itemText">{item.itemText}</cite>
                  <a href="/#" className="page4__itemLink">
                    {item.itemLink}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
