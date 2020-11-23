import { Divider } from "@material-ui/core";
import React from "react";
import logoimg from "../images/logo.png";
import "../styles/heroContent.scss";

export const SideContent = () => {
  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <img style={{ width: "100%" }} src={logoimg}></img>
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <span className="mycontentwrapper">You have great coverage</span>
        <span className="mycontentwrapper">$100,000 in protection </span>
        <span className="mycontentwrapper">80% reimbursement</span>
      </div>
    </div>
  );
};
