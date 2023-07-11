import COFFEE_DATA from "./coffee_data.json";
import { Alert, Modal } from "react-bootstrap";
import { useState } from "react";
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
  const [showEssay, setShowEssay] = useState(false);

  return (
    <div className="app">
      <div className="content">
        <div style={{ display: "flex", alignItems: "center", marginBottom: 25 }}>
          <span style={{ fontSize: 65, margin: "0px 15px 0px 0px", padding: 0 }}>☕️</span>
          <h1 style={{ margin: 0, padding: 0 }}>Bryan's Coffee Tour</h1>
        </div>
        <Alert variant="success">
          Check out this essay:{" "}
          <span className="link" onClick={() => setShowEssay(true)}>
            "A Tale of Sensible Choices and Tempting Desires"
          </span>
        </Alert>
        {COFFEE_DATA.map((coffee) => (
          <Review {...coffee} />
        ))}
        <p style={{ textAlign: "center", marginTop: 50 }}>© Bryan Kwong 2022-{new Date().getFullYear()}</p>
      </div>
      <Modal size="lg" show={showEssay} onHide={() => setShowEssay(false)}>
        <Modal.Header closeButton>
          <Modal.Title>A Tale of Sensible Choices and Tempting Desires</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ marginBottom: 50 }}>
            <i>By Bryan Kwong and ChatGPT</i>
          </p>
          <p>
            <span className="emphasis">The Lexus</span>, reliable, efficient, and priced just so. Its faultless nature
            is beyond reproach. It possesses a pleasantness that never falters, forever charming ... but is there more
            to it? Is "nice" its only claim? Does it bear no other essence, but mere nicety?
            <br />
            <br />
            The Lexus is akin to a young lad who boasts the ideal profession, striking looks, and gentlemanly demeanor.
            He comprehends your being and shares your aspirations. Ah, such niceness! Every single requirement on your
            list he fulfills, but he does so with a calculated, passionless, and lifeless air.
            <br />
            <br />
            He shall never forsake nor abandon you, forever standing by your side. A comforting yet disquieting thought
            it is, indeed. Knowing he will be your steadfast companion, navigating the storms and the sunshine. Yet,
            unease creeps within, for his unwavering, enveloping, relentless love possesses great potential for
            suffocation.
            <br />
            <br />
            <span className="emphasis">The BMW</span>, what a dreadful choice it proves to be. It shall falter once its
            warranty breathes its last breath. But my, oh my, the emotions it evokes are simply unparalleled.
            <br />
            <br />
            The BMW, akin to a wretched fellow, a true embodiment of desolation. Deep down, you are aware he cannot be
            repaired. You know his true nature, but for some inexplicable, unconscious reason, he pervades your thoughts
            throughout the day. In his presence, life's hues intensify, reaching a crescendo.
            <br />
            <br />
            But alas, no matter the mirth, you comprehend its transient nature. It shall conclude at some point,
            somewhere, somehow, and within that inescapable finale lies the certainty of pain. Yet perchance, the
            ephemeral nature of your connection with him renders him exceptional. Perhaps, understanding that he belongs
            to no one, not even yourself, shall somehow soften the blow of heartbreak. You surmise that it might ease
            the ache, that he, akin to the BMW, will one day transform into a distant recollection—a recollection you
            shall clutch onto, replaying it ceaselessly in bed, during your commute, beneath the shower's gentle
            cascade. A memory that shall gradually fade as the relentless march of time prevails. Until that day arrives
            when the vibrant memory of his smile, once bestowed upon you after praising your laughter, becomes naught
            but a vague inkling that someone once held you dear ...
            <br />
            <br />
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
