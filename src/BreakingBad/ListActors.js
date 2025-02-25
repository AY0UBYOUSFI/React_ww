import React, { Component } from "react";
import Display2 from "./Display2";
import "./ActorsStyle.css";
import memberInfo from "./memeberInfo"; 


class ListActors extends Component {
  constructor() {
    super();
    this.state = {
      actors: memberInfo,
      number: 0,
      subactors:[]
    };
    this.EventHandler = this.EventHandler.bind(this);
    this.add_actors = this.add_actors.bind(this);
  }

  add_actors(subactors, prev_number) {
    if (this.state.number >= this.state.actors.length) return subactors;
    subactors.push(prev_number.actors[this.state.number]);
    return subactors;
  }

  EventHandler() {
    this.setState(function (prev_number) {
      return {
        number: prev_number.number + 1,
        subactors: this.add_actors(this.state.subactors, prev_number)
      };
    });
  }

  mapping(x) {
    const ptr = x.map(member => (
      <Display2
        key={member.id}
        id={member.id}
        name={member.name}
        email={member.email}
        phone={member.phone}
        address={member.address}
        img={member.img}
        job={member.job}
      />
    ));
    return ptr;
  }

  render() {
    return (
      <div>
        <h1>Breaking Bad</h1>

        <div className="_btn">
          <button onClick={this.EventHandler}>add actor</button>
        </div>

        {this.mapping(this.state.subactors)}
      </div>
    );
  }
}

export default ListActors;
