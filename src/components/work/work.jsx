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
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';


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
  nested: {
    paddingLeft: theme.spacing(25),
  },
}));

class WorkComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded1: false,
      expanded2: false,
      expanded3: false,
      open: false,
      setOpen: false
    };
  }

  handleExpand1 = () => {
    this.setState({ expanded1: !this.state.expanded1 });
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="timeline">
        <p className="headline">Work History</p>
        <div className="timeline-entry">
          <Card>
            <CardHeader
              title="Arrowhead Wholesale"
              subheader="Software Engineer I &amp; II &#x2015; November 2017 - Current "
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
                <Typography paragraph>
                  <ul>
                    <li>Created a full insurance policy dashboard for commercial trucking policies that increased user processing accuracy and processing over 100%.</li>
                    <li>Developed a small scale Customer Relation Management system for ITD Insurance Agency. The platform increased underwriting bindings by 35%. It allowed users to create suspense reports and follow ups. It allowed document store and generation of legal documents and contracts. It also
                      tracked the entire process from a lead to insured.</li>
                    <li>Created reports for both accounting and external carriers. These reports included a list of thousands of transactions for a given month, that were organized by dates, premiums, and insurance coverages.</li>
                    <li>Managed Bug &amp; Feature requests using Trello Boards for the User & Engineer Team.</li>
                  </ul><div className="timeline-entries">
                    <div className="timeline-entry-chip">
                      <Chip label="Java"></Chip>
                    </div>
                    <div className="timeline-entry-chip">
                      <Chip label="Apache Ant &amp; Ivy"></Chip>
                    </div>
                    <div className="timeline-entry-chip">
                      <Chip label="Apache Tomcat"></Chip>
                    </div>
                    <div className="timeline-entry-chip">
                      <Chip label="Javascript"></Chip>
                    </div>
                    <div className="timeline-entry-chip">
                      <Chip label="MySQL"></Chip>
                    </div>
                    <div className="timeline-entry-chip">
                      <Chip label="SQL Server"></Chip>
                    </div>
                    <div className="timeline-entry-chip">
                      <Chip label="Bootstrap"></Chip>
                    </div>
                  </div>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
        <div className="timeline-entry">
          <Card>
            <CardHeader
              title="Built.io"
              subheader="Software Engineer Intern &#x2015; June 2015 - November 2016"
              avatar={<Avatar src={require("./built.png")} />}
            />
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: this.state.expanded2,
              })}
              onClick={this.handleExpand2}
              aria-expanded={this.state.expanded2}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
            <Collapse in={this.state.expanded2} timeout="auto" unmountOnExit>
              <CardContent>
                
              </CardContent>
            </Collapse>
          </Card>
        </div>
        <div className="timeline-entry">
          <Card>
            <CardHeader
              title="NMedia"
              subheader="Videographer &amp; Editor"
              avatar={<Avatar>NM</Avatar>}
            />
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: this.state.expanded2,
              })}
              onClick={this.handleExpand2}
              aria-expanded={this.state.expanded2}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
            <Collapse in={this.state.expanded2} timeout="auto" unmountOnExit>
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
              title="Sonoma State Univesity"
              subheader="Bachelor of Computer Science &#x2015; August 2012 - May 2016"
              avatar={<Avatar src={require("./ssu.jpeg")} />}
            />
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: this.state.expanded2,
              })}
              onClick={this.handleExpand2}
              aria-expanded={this.state.expanded2}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
            <Collapse in={this.state.expanded2} timeout="auto" unmountOnExit>
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
      </div>
    );
  }
}

export default withStyles(useStyles)(WorkComponent);
