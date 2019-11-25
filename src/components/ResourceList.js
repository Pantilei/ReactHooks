import React from "react";
import axios from "axios";

class ResourceList extends React.Component {
  state = { resource: [] };
  // componetDidMout lifecycle method is not called second time if
  //this component is already mounted or rendered on a screen
  async componentDidMount() {
    const responce = await axios.get(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );

    this.setState({ resource: responce.data });
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) {
      const responce = await axios.get(
        `https://jsonplaceholder.typicode.com/${this.props.resource}`
      );

      this.setState({ resource: responce.data });
    }
  }

  render() {
    return <div>{this.state.resource.length}</div>;
  }
}

export default ResourceList;
