import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import "./work.css";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

class WorkComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded1: false,
      expanded2: false,
      expanded3: false
    };
  }

  handleExpandChange = expanded1 => {
    this.setState({ expanded1: expanded1 });
  };

  handleExpand1 = () => {
    this.setState({ expanded1: !this.state.expanded1 });
  };

  render() {
    const { classes } = this.props;
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
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: this.state.expanded1,
              })}
              onClick={this.handleExpand1}
              aria-expanded={this.state.expanded1}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
            <Collapse in={this.state.expanded1} timeout="auto" unmountOnExit>
              <CardContent>
                <List>
                  <ListItem alignItems="flex-start">
                    <ListItemText primary="Lead ITD Developer">

                    </ListItemText>
                  </ListItem>
                </List>
              </CardContent>
            </Collapse>
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
            <CardHeader title="NMedia" subheader="Videographer & Editor">
              <Avatar>NN</Avatar>
            </CardHeader>
          </Card>
        </div>
        <div className="timeline-entry">
          <Card>
            <CardHeader title="NMedia" subheader="Videographer & Editor">
              <Avatar>NN</Avatar>
            </CardHeader>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(WorkComponent);
