import React, { Component } from "react";

var about = {
  width: "10%",
  height: "5%",
  marginLeft: "128px",
};
var divstyle = {
  marginLeft: "250px",
};
class About extends Component {
  render() {
    return (
      <div style={divstyle}>
        <h2>About Us</h2>
        <p>
          <b>Helping empower patients</b> and patient organisations benefits not
          only
          <br />
          their own wellbeing but has been shown to improve the wellbeing of the
          <br />
          community as a whole.
        </p>
        <p>
          <b>We act as an intermediary</b> between the patient community and EU{" "}
          <br />
          policymakers, by providing a crucial cross-disease perspective based{" "}
          <br />
          on issues that have a direct impact on patients' lives in a national{" "}
          <br />
          and regional context.
        </p>
        <p>
          <b> We represent our members </b>as well as patients with chronic
          conditions, <br />
          occasional patients and their carers, by working with EU stakeholder{" "}
          <br />
          and expert groups, whom we see as reliable and trusted partners.{" "}
          <br />
        </p>{" "}
        <p>
          <b> We bring together people,</b> knowledge and expertise. Together we
          work to <br />
          enhance the capacity and capability of patients to play an active role{" "}
          <br />
          in all aspects of their treatment and care.
        </p>{" "}
        <p>
          <b> We support a wider</b> movement to ensure Europe's citizens are
          able to <br />
          access affordable health and social care.
        </p>
        <p>
          <b> We strive to make</b> health literacy and patient empowerment high
          on the <br />
          agenda, while driving towards a profound change over the healthcare
          landscape.
        </p>
      </div>
    );
  }
}

export default About;
