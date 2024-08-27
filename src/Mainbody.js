import "./Mainbody.css";
import { useState, useEffect } from "react";
import Viedio from "./Viedio";
function Mainbody() {
  const [news, setNews] = useState([]);
  async function fun(e) {
    let val;
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
    let textmy = document.getElementById("myText").value;
    console.log(textmy);
    let rawdata = await fetch(`/api?query=${textmy}`);
    let data = await rawdata.json();
    data = data.articles;
    setNews(data);
  }
  useEffect(() => {
    async function fun() {
      let rawdata = await fetch(`/api?query=in`);
      let data = await rawdata.json();
      data = data.articles;
      setNews(data);
      console.log(data[0].url);
    }
    fun();
  }, []);

  return (
    <>
      <form className="inputform">
        <label>
          SEARCH FOR NEWS:
          <input type="text" id="myText" />
          <button type="sumbit" className="btn1" onClick={fun}>
            SUMBIT
          </button>
        </label>
      </form>
      {news &&
        news.map((x) => (
          <Viedio
            newstitle={x.title}
            image={x.image}
            author={x.source.name}
            description={x.description}
            story={x.content}
            url={x.url}
          ></Viedio>
        ))}
    </>
  );
}

export default Mainbody;

// https://newsapi.org/v2/everything?q=${textmy}&apiKey=72e061ad05054e69b185ad7b3b72802c
// https://newsapi.org/v2/everything?q=in&apiKey=72e061ad05054e69b185ad7b3b72802c
