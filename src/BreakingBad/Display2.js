import React, { Component } from "react";
import './ActorsStyle.css';

const defaultImage = './images/gus_fring.jpg'; 

class Display2 extends Component {
  render() {
    const { img, id, name, email, phone, address, job } = this.props;

    const imageSrc = img ? require(`${img}`) : defaultImage;

    return (
      <div className="card">
        <img src={imageSrc} alt="Actor" />
        <h3>{name}</h3>
        <h3>{id}</h3>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{address}</p>
        <p>{job}</p>
      </div>
    );
  }
}

export default Display2;
