import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        // name: "Dummy",
        // location: "Default",
      },
    };
    // console.log("Class Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/vaishnavipandit16");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    // console.log("Child component did mount is called.");
  }
  componentDidUpdate() {
    console.log("Component Did Update");
  }
  componentWillUnmount() {
    console.log("Component will unmount");
  }
  render() {
    // console.log("Class Render");
    const { name, location } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @akshyamarch7</h4>
      </div>
    );
  }
}

export default UserClass;
