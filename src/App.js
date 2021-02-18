import React,{ useEffect, useRef,useState } from "react";
import { css } from "@emotion/core";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import HashLoader from "react-spinners/HashLoader";
import Header from "./Header";
import alanBtn from "@alan-ai/alan-sdk-web";

const App = () => {
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 350px;
 `;
let [color, setColor] = useState("#F71071");
const alanBtnInstance = useRef(null);
const [loading, setloading] = useState(false);
useEffect(() => {
 setloading(true);
 setTimeout(() => {
   setloading(false);
 }, 4000);
    if (!alanBtnInstance.current) {
        alanBtnInstance.current = alanBtn({
            key: '44be0dc8115a7919fbe54e03dde6988a2e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: (commandData) => {
                if (commandData.command === 'go:back') {
                        // Call the client code that will react to the received command
                    }
                }
        });
    }
}, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            {loading ? (
              <HashLoader
                css={override}
                color={color}
                loading={loading}
                size={120}
              />
            ) : (
              <Home />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
