import { useState } from "react";

const User = (props) => {
  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h2>Name: {props.name}</h2>
      <h3>Location: Dehradun</h3>
      <h4>Contact: @akshyamarch7</h4>
    </div>
  );
};

export default User;
