import React, { useEffect, useState } from "react";
import imgY from "../assets/ModelY-png.webp";
import img3 from "../assets/Model3-png.png";
import imgS from "../assets/ModelS-png.png";
import imgX from "../assets/ModelX-png.png";
import "./landing.css";
export default function Landing() {
  const model3 = {
    "0-60mph": "3.1s",
    "Range (EPA est.)": "358mi",
    "Dual Motor": "AWD",
    img: img3,
  };
  const modelY = {
    "Cargo Space": "76 cu ft",
    "Range (EPA est.)": "358mi",
    "Dual Motor": "AWD",
    img: imgY,
  };
  const modelX = {
    "0-60mph": "2.5s",
    "Range (EPA est.)": "333mi",
    "1/4 Mile": "9.9s",
    "Peak Power": "1,020hp",
    img: imgX,
  };
  const modelS = {
    "0-60mph": "1.99s",
    "Range (EPA est.)": "396mi",
    "Top Speed": "200mph",
    "Peak Power": "1,020hp",
    img: imgS,
  };
  const [model, setModel] = useState(modelY);
  function handleModels(modell) {
    setModel(modell);
  }
  let keys = Object.keys(model);
  const [scrollPosition, setScrollPosition] = useState(0);
  const height = innerHeight;
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  // Attach event listener on mount and remove it on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate the opacity based on scroll position

  let opacity = (1.1 * height - (scrollPosition % height)) / height;

  return (
    <>
      <div className="container-1">
        <div style={{ opacity }} className="titels-container">
          <h1>Model Y</h1>
          <p>View Inventory</p>
        </div>

        <div style={{ opacity }} className="button-container">
          <button className="left-btn">Order Now</button>
          <button className="right-btn">Demo Drive</button>
        </div>
      </div>
      <div className="container-2">
        <div style={{ opacity }} className="titels-container">
          <h1>Model 3</h1>
          <p className="no-border">Leasing starting at $349/mo</p>
        </div>

        <div style={{ opacity }} className="button-container">
          <button className="left-btn">Order Now</button>
          <button className="right-btn">Demo Drive</button>
        </div>
      </div>
      <div className="container-3">
        <div style={{ opacity }} className="titels-container">
          <h1>Model S</h1>
          <p>View Inventory</p>
        </div>

        <div style={{ opacity }} className="button-container">
          <button className="left-btn">Order Now</button>
          <button className="right-btn">Demo Drive</button>
        </div>
      </div>
      <div className="container-4">
        <div style={{ opacity }} className="titels-container">
          <h1>Model X</h1>
          <p>View Inventory</p>
        </div>

        <div style={{ opacity }} className="button-container">
          <button className="left-btn">Order Now</button>
          <button className="right-btn">Demo Drive</button>
        </div>
      </div>
      <div className="container-5">
        <ul className="models">
          <li
            onClick={() => {
              handleModels(modelY);
            }}
            className="model-item btn">
            Model Y
          </li>
          <li
            onClick={() => {
              handleModels(model3);
            }}
            className="model-item btn">
            Model 3
          </li>
          <li
            onClick={() => {
              handleModels(modelS);
            }}
            className="model-item btn">
            Model S
          </li>
          <li
            onClick={() => {
              handleModels(modelX);
            }}
            className="model-item btn">
            Model X
          </li>
        </ul>
        <div className="display-model">
          <img src={model["img"]} alt="" width={"400px"} />
        </div>
        <ul className="informations">
          {keys
            .filter((key) => {
              return key != "img";
            })
            .map((key) => {
              return (
                <li className="prop-item">
                  <p>{key}</p>
                  <p>{model[key]}</p>
                </li>
              );
            })}
        </ul>
      </div>

      <div className="container-7">
        <div style={{ opacity }} className="titels-container">
          <h1>Accessories</h1>
        </div>

        <div style={{ opacity }} className="button-container">
          <button className="left-btn">Shop Now</button>
        </div>
        <ul className="footer">
          <li>
            <a href="#">Tesla © 2023</a>
          </li>
          <li>
            <a href="#">Privacy & Legal</a>
          </li>
          <li className="not-showing">
            <a href="#">Vehicle Recalls</a>
          </li>
          <li className="not-showing">
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li className="not-showing">
            <a href="#">Engage</a>
          </li>
          <li className="not-showing">
            <a href="#">Locations</a>
          </li>
        </ul>
      </div>
    </>
  );
}
