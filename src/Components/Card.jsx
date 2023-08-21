import { React, useState, useEffect } from "react";
function Card() {
  const [data, setData] = useState([]);
  const [animate, setAnimate] = useState(true);

  const fetchData = async () => {
    const result = await fetch("https://api.adviceslip.com/advice");
    const data = await result.json();
    setData(data.slip);
    setAnimate(true)
  };

  async function miPromesa() {
    const animacion = await setTimeout(() =>{
        setAnimate(false)
    },1000)

    return animacion
  }

 async function animation(){
    await fetchData()
    await miPromesa()
 }

  useEffect(() => {
    animation()
  }, []);


  return (
    <div className="card">
      <div className="card-container">
        <span className="card-id">ADVICE #{data.id}</span>
        <p className="card-advice">"{data.advice}</p>
        <picture className="card-line-container">
          <source
            className="card-line"
            media="(min-width: 768px)"
            srcSet="../public/images/pattern-divider-desktop.svg"
          />
          <img
            className="card-line"
            src="../public/images/pattern-divider-mobile.svg"
            alt=""
          />
        </picture>
      </div>
      <div className={`btn ${animate ? 'animate': ''}`} onClick={animation}>
        <img src="../images/iconDice.svg" alt="Dice" />
      </div>
    </div>
  );
}

export default Card;
