import React from "react";
import { connect } from "react-redux";

const Orgs = (props) => {
  return (
    <>
      <h1>Organizations</h1>
      {JSON.stringify(props.orgs)}
    </>
  );
};

const mapStateToProps = (state) => ({
  orgs: state.orgs,
});

export default connect(mapStateToProps)(Orgs);
