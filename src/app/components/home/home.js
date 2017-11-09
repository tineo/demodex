import React, { Component } from "react";
import Fold from "../../../core/components/fold" ;
import ReactLogo from "../../../resources/images/reactjs.svg";
import SmallImage from "../../../resources/images/mario-large.png?sizes=100w+200w+400w+800w&placeholder";
import PaicheImage from "../../../resources/images/paiche.png?sizes=100w+200w+400w+800w";
import Picture from "../../../core/components/picture/picture";

export default class Home extends Component {
  render() {
    return (
      <div className="mt-4">
        <img style={{ maxWidth: "150px" }} className="img-fluid mx-auto d-block" src={ReactLogo} alt="ReactJS"/>
        <h1 className="h2 text-center mt-3">React PWEA</h1>
        <p>
          Aqui va el texxto superior
        </p>
        <Fold placeholder={() => <div className="text-center mt-3 mb-3">Loading folded content.. Please wait..</div>}>
          <p>
            Este texto tiene un placeholder antes de cargar
          </p>
          <p>Image sample converted to webp, uploaded/coded as jpg</p>
          {/*<Picture
            pictureClassName="d-inline-block my-4"
            image={SmallImage}
            alt="Small Image"
            imgClassName="mw-100"
          />*/}

          <Picture
            pictureClassName="d-inline-block my-4"
            image={PaicheImage}
            alt="meow"
            imgClassName="mw-100"

          />
        </Fold>
      </div>
    );
  }
}
