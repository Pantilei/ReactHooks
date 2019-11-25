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
  //componentDidUpdate is invoked everytime the state is updated
  // takes previous Props as argument and if they are not same then new fetch is made,
  //othervise we enter to infinite cycle
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
