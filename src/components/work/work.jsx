import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import "./work.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles ({
  smallAvatar: {
    width:50,
    height:50,
    margin: 10
  }
});

class WorkComponent extends Component {
  constructor(props) {
    super(props);
    this.setState = {
      expanded1: false,
      expanded2: false,
      expanded3: false
    };
  }

  handleExpandChange = expanded1 => {
    this.setState({ expanded1: expanded1 });
  };

  handleExpandChange = expanded2 => {
    this.setState({ expanded2: expanded2 });
  };

  handleExpandChange = expanded3 => {
    this.setState({ expanded3: expanded3 });
  };

  handleExpand1 = () => {
    this.setState({ expanded1: !this.state.expanded1 });
  };

  handleExpand2 = () => {
    this.setState({ expanded2: !this.state.expanded2 });
  };

  handleExpand3 = () => {
    this.setState({ expanded3: !this.state.expanded3 });
  };


  render() {
    return (
      <div className="timeline">
        <p className="headline">Work History</p>
        <div className="timeline-entry">
          <Card>
            <CardHeader
              title="Arrowhead Wholesale"
              subheader="Software Engineer I & II"
              avatar={<Avatar src={require("./awis.jpeg")} />}
            />
          </Card>
        </div>
        <div className="timeline-entry">
          <Card>
            <CardHeader
              title="Built.IO"
              subheader="Software Engineer Intern"
              avatar={<Avatar src={require("./builtio.png")} />}
            />
          </Card>
        </div>
        <div className="timeline-entry">
          <Card>
            <CardHeader title="NMedia" subheader="Videographer & Editor" />
          </Card>
        </div>
      </div>
    );
  }
}

export default WorkComponent;
