import COFFEE_DATA from "./coffee_data.json";
import "./app.css";

const COUNTRY_COLOR_MAP = {
  Rome: "rgba(219, 237, 219, 1)",
  "SF Bay": "rgba(211, 229, 239, 1)",
  SLO: "rgba(255, 226, 221, 1)",
  LA: "rgba(232, 222, 238, 1)"
};

function getPercentageValue(value) {
  //value from 0 to 1
  var hue = (value * 120).toString(10);
  return ["hsl(", hue, ",85%,30%)"].join("");
}

function Review(props) {
  return (
    <div style={{ border: "1px solid #c3c3c3", borderRadius: 5, padding: 10, marginTop: 20, marginBottom: 20 }}>
      <div style={{ display: "flex" }}>
        <h3 style={{ width: "100%", margin: 0 }}>
          {props.Name}{" "}
          <span
            style={{
              padding: "2.5px 10px 2.5px 10px",
              backgroundColor: COUNTRY_COLOR_MAP[props.Country],
              borderRadius: 5,
              fontWeight: 500
            }}>
            {props.Country}
          </span>
        </h3>
        <h3 style={{ margin: 0, color: getPercentageValue(props.Grade) }}>{props.Grade * 10}/10</h3>
      </div>
      <p style={{ marginTop: 5 }}>Price: ${props.Price.toFixed(2)}</p>
      <p style={{ marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: props.Comment }}></p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <div className="content">
        <div style={{ display: "flex", alignItems: "center", marginBottom: 25 }}>
          <span style={{ fontSize: 65, margin: "0px 15px 0px 0px", padding: 0 }}>☕️</span>
          <h1 style={{ margin: 0, padding: 0 }}>Bryan's Coffee Tour</h1>
        </div>
        {COFFEE_DATA.map((coffee) => (
          <Review {...coffee} />
        ))}
        <p style={{ textAlign: "center", marginTop: 50 }}>© Bryan Kwong 2022-{new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default App;
