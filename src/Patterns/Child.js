// Stateless components updating their parents’ state

import React from "react";

export class Child extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }
  render() {
    return (
      <div>
        <select id="great-names" onChange={this.handleChange}>
          <option value="Itachi">Itachi</option>

          <option value="Kisame">Kisame</option>

          <option value="Tobi">Tobi</option>
        </select>
      </div>
    );
  }
}
