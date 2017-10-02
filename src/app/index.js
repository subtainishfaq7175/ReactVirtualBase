import React from "react";
import {render} from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component{
    render() {
        var user = {
          location: "Multan",
          country: "Pakistan"
        };
        return (
            <div className="container">
                <div className="row">
                <Header/>
                </div>

                <div className="row">
                <Home name={"max"} age={27} user={user}/>
                </div>
            </div>
        );
    }
}

render(<App/>,window.document.getElementById("vbApp"));