import React from "react";
import "./Page3.scss";
import page3_img1 from "../../assets/features-03-image-01.webp";
import page3_img2 from "../../assets/features-03-image-02.webp";
import page3_img3 from "../../assets/features-03-image-03.webp";

const ITEMS = [
  {
    id: "1",
    className: "item1",
    itemName: "More speed. Less spend",
    headName: "Keep projects on schedule",
    textName:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ulName: [
      { id: "1", liName: "Duis aute irure dolor in reprehenderit" },
      { id: "2", liName: "Excepteur sint occaecat" },
      { id: "3", liName: "Amet consectetur adipiscing elit" },
    ],
    imgName: page3_img1,
  },
  {
    id: "2",
    className: "item2",
    itemName: "More speed. Less spend",
    headName: "Keep projects on schedule",
    textName:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ulName: [
      { id: "1", liName: "Duis aute irure dolor in reprehenderit" },
      { id: "2", liName: "Excepteur sint occaecat" },
      { id: "3", liName: "Amet consectetur adipiscing elit" },
    ],
    imgName: page3_img2,
  },
  {
    id: "3",
    className: "item3",
    itemName: "More speed. Less spend",
    headName: "Keep projects on schedule",
    textName:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ulName: [
      { id: "1", liName: "Duis aute irure dolor in reprehenderit" },
      { id: "2", liName: "Excepteur sint occaecat" },
      { id: "3", liName: "Amet consectetur adipiscing elit" },
    ],
    imgName: page3_img3,
  },
];

export const Page3 = () => {
  return (
    <div className="page3">
      <div className="page3__inner">
        <div className="page3__title">
          <div className="page3__button">Reach goals that matter</div>
          <h1 className="page3__heading">One product, unlimited solutions</h1>
          <p className="page3__text">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit laborum — semper quis lectus nulla.
          </p>
        </div>
        <div className="page3__items">
          {ITEMS.map((item) => {
            return (
              <div className="page3__item">
                <div className={`page3__box page3__box--${item.className}`}>
                  <div className="page3__itemName">{item.itemName}</div>
                  <h3 className="page3__headName">{item.headName}</h3>
                  <p className="page3__textName">{item.textName}</p>
                  {item.ulName.map((linkName) => {
                    return (
                      <ul className="page3__unorderedList">
                        <li className="page3__listItem">{linkName.liName}</li>
                      </ul>
                    );
                  })}
                </div>
                <img
                  src={item.imgName}
                  alt={item.id}
                  className="page3__item-img"
                />
              </div>
            );
          })}
        </div>
        <div className="page3__footer" />
      </div>
    </div>
  );
};
