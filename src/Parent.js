import React from "react";
import { Child } from "./Child";
import { Sibling } from "./Sibling";

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "Itachi" };
    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName,
    });
  }

  render() {
    return (
      <div>
        <Sibling name={this.state.name} />
        <Child onChange={this.changeName} />
      </div>
    );
  }
}

export default Parent;
