import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent component did mount is called.");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <div>This is Namaste React Series</div>
        {/* <User name={"Akshay Saini (function)"} /> */}
        <UserClass
          name={"Akshay Saini (class)"}
          location={"Dehradun (class)"}
        />
      </div>
    );
  }
}

export default About;
