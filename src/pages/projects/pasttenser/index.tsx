import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { Block } from "../../../components/block";
import Button from "../../../components/button";
import Input from "../../../components/input";
import "./index.scss";
import Banner from "../../../components/banner";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const errorMap = {
  spaces: "Do verbs have spaces? 🤨 You are sus.",
  long: 'Is there a verb that really goes like - "{{verb}}"? 🤯',
  other: "We dont do that here! #wakandaForever 🙅",
};

function PastTenser() {
  const [result, setResult] = useState(null);
  const [verb, setVerb] = useState("");
  let error: any = null;
  if (verb.match(/[^A-Za-z]/g)) error = errorMap.other;
  if (verb.match(/\s/g)) error = errorMap.spaces;
  if (verb.length > 20) error = errorMap.long.replace("{{verb}}", verb);

  const fetchData = () =>
    !error &&
    fetch("https://pastenser.herokuapp.com/" + capitalizeFirstLetter(verb))
      .then((res) => res.json())
      .then((val) => setResult(val["past tense"]));

  return (
    <div>
      <Block display="flex" alignItems="center" className="khabyl-project">
        <Block flex="1 1 70%" style={{ position: "relative" }}>
          <h1>PastTenser</h1>
          <h2>
            A quick API that gives you the past tense of the requested verb.
          </h2>
          <Block display="flex" spacing={[0, 32]} className="input-block">
            <Input
              maxlength="30"
              placeholder="Enter a verb"
              value={verb}
              onKeyPress={(e: any) => e.charCode === 13 && fetchData()}
              onChange={({ target }: any) => {
                setVerb(target.value);
                setResult(null);
              }}
            />
            <Button onClick={fetchData} disabled={!!error}>
              Find
            </Button>
          </Block>
          <div className="error-text">{error}</div>
        </Block>
        <Block flex="1 0 30%" className={`khaby ${result ? "show" : ""}`}>
          <StaticImage
            src="../../../images/projects/khaby-lame 1.png"
            alt="Khaby Lame"
            class="open"
          />
          <StaticImage
            src="../../../images/projects/khaby-lame 2.png"
            alt="Khaby Lame"
            class="close"
          />
          <div className={`result ${result ? `` : "hide"}`}>{result}</div>
        </Block>
      </Block>
      <div className="khaby-section">
        <Banner>
          This is not working now because Heroku has removed free plans. I will
          deploy it somewhere else soon.
        </Banner>
        <h3>How does it work?</h3>
        <p>
          It's very simple. In fact, it is a normal Javascript map lookup. The
          backend for this is written in NodeJS with ExpressJS and hosted on
          Heroku. It's an API that I developed just for fun so you can use it
          for fun.
          <br />
          <span className="text-caption">
            Additional fact #1: This API also returns the past-participle form
            of the verb.
          </span>
          <br />
          <span className="text-caption">
            Additional fact #2: This API is not accurate. Don't rely on the
            results.
          </span>
          <br />
          <span className="text-caption">
            Additional fact #3: Now that Heroku is going to stop free plans, I
            need to think about deploying the API elsewhere.
          </span>
        </p>
        <p>
          As you know, the image I used here is <b>Khaby Lame.</b> He is just
          awesome for his quirky parody videos. I find his facial expressions
          funny and useful in a page like this.
        </p>
      </div>
      <div className="khaby-section">
        <h3>Lets Get Technical</h3>
        <p>
          <b>CSS properties:</b> clip-path, keyframes, transform - skew, rotate
          <br />
          <b>Javascript Stack:</b> NodeJS, React, ExpressJS, Fetch API
          <br />
          <b>Deployed to:</b> Heroku
        </p>
      </div>
    </div>
  );
}

export default PastTenser;

