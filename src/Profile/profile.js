import React from "react";
import PropTypes from "prop-types";

const profile = (props) => {
  const Style = {
    fontSize: 20,
    color: "rgb(16, 76, 145)",
    textAlign: "center",
    padding: 20,
  };

  return (
    <div>
      <img
        src={props.children}
        alt="PicProfile"
        style={{ width: 250, borderRadius: 40, margin: 20 }}
      />
      <div style={Style}>
        <h2> My Name is : {props.profile.FullName}</h2>
        <p>My bio : {props.profile.bio} </p>
        <p> Profession : {props.profile.profession}</p>
        <button onClick={() => props.handleName(props.profile.FullName)}>
          profile
        </button>
      </div>
    </div>
  );
};

export default profile;

profile.defaultProps = {
  FullName: "User Name",
  bio: "my bio",
  profession: " Fullstack developper",
};

profile.propTypes = {
  FullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
