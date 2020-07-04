import React from "react";
import { connect } from "react-redux";

const Overview = (props) => {
  return (
    <>
      <h1>Overview</h1>
    </>
  );
};

const mapStateToProps = (state) => ({
  orgs: state.orgs,
});

export default connect(mapStateToProps)(Overview);
