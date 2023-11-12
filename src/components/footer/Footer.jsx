import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo.svg";
import twitter from "../../assets/twitter.svg";
import github from "../../assets/github.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";

const ITEMS = [
  {
    id: "1",
    headName: "Products",
    itemName: [
      { id: "1", name: "Web Studio" },
      { id: "2", name: "DynamicBox Flex" },
      { id: "3", name: "Programming Forms" },
    ],
  },
  {
    id: "2",
    headName: "Resources",
    itemName: [
      { id: "1", name: "Nostrud exercitation" },
      { id: "2", name: "Visual mockups" },
      { id: "3", name: "Nostrud exercitation" },
      { id: "4", name: "Visual mockups" },
      { id: "5", name: "Nostrud exercitation" },
    ],
  },
  {
    id: "3",
    headName: "Company",
    itemName: [
      { id: "1", name: "Consectetur adipiscing" },
      { id: "2", name: "Labore et dolore" },
      { id: "3", name: "Consectetur adipiscing" },
      { id: "4", name: "Labore et dolore" },
      { id: "5", name: "Consectetur adipiscing" },
    ],
  },
];

const SOCIAL_MEDIA = [
  { id: "1", name: twitter },
  { id: "2", name: github },
  { id: "3", name: facebook },
  { id: "4", name: instagram },
  { id: "5", name: linkedin },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="footer__blocks">
          <div className="footer__leftItems">
            <img src={logo} alt="logo" className="footer__logo"/>
            <div className="footer__text">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </div>
          </div>
          <div className="footer_rightItems">
            {ITEMS.map((items) => {
              return (
                <div className="footer__item">
                  <h6>{items.headName}</h6>
                  {items.itemName.map((item) => {
                    return (
                      <ul>
                        <li>
                          <a href="/#">{item.name}</a>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="footer__socialMedia">
          <div>© Cruip.com. All rights reserved.</div>
          <div className="footer__social">
            {SOCIAL_MEDIA.map((item) => {
              return (
                <ul>
                  <li>
                    <a href="/#">
                      <img src={item.name} alt="socialMedia"/>
                    </a>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
