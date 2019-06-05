import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import "./work.css";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";


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
}));

class WorkComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded1: false,
      expanded2: false,
      expanded3: false,
    };
  }

  handleExpand1 = () => {
    this.setState({ expanded1: !this.state.expanded1 });
  };

  handleExpand2 = () => {
    this.setState({ expanded2: !this.state.expanded2 });
  };

  handleExpand3 = () => {
    this.setState({ expanded3: !this.state.expanded3 });
  };

  handleExpand4 = () => {
    this.setState({ expanded4: !this.state.expanded4 });
  };


  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <div className="timeline">
        <p className="headline">Work History</p>
        <div className="timeline-entry">
          <Card className={classes.bg}>
            <CardHeader
              title="Arrowhead Wholesale"
              subheader="Software Engineer I &amp; II &#x2015; November 2017 - Current "
              avatar={<Avatar src={require("./awis.jpeg")} />}
              action={<IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: this.state.expanded1,
                })}
                onClick={this.handleExpand1}
                aria-expanded={this.state.expanded1}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>}
            />

            <Collapse in={this.state.expanded1} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  <ul>
                    <li>Created a full insurance policy dashboard for commercial trucking policies that increased user processing accuracy and processing over 100%.</li>
                    <li>Developed a small scale Customer Relation Management system for ITD Insurance Agency. The platform increased underwriting bindings by 35%. It allowed users to create suspense reports and follow ups. It allowed document store and generation of legal documents and contracts. It also
                      tracked the entire process from a lead to insured.</li>
                    <li>Created reports for both accounting and external carriers. These reports included a list of thousands of transactions for a given month, that were organized by dates, premiums, and insurance coverages.</li>
                    <li>Managed Bug &amp; Feature requests using Trello Boards for the User & Engineer Team.</li>
                  </ul>
                  <div className="timeline-entries">
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
              action={<IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: this.state.expanded2,
                })}
                onClick={this.handleExpand2}
                aria-expanded={this.state.expanded2}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>}
            />
            <Collapse in={this.state.expanded2} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  <ul>
                    <li>Implemented an orchestra of API integrations and connections know as, Built.IO Flow.</li>
                    <li>Learned Node.JS and got hands on experience with MongoDB &amp; Redis</li>
                    <li>Learned proper documentation skills, code review, &amp; ticket management.</li>
                    <li>Contributed to building an onboarding process for alpha &amp; beta phases of the platform. The onboarding process was also used at tech conferences in San Francisco.</li>
                  </ul><div className="timeline-entries">
                    <div className="timeline-entry-chip">
                      <Chip label="Javascript"></Chip>
                    </div>
                    <div className="timeline-entry-chip">
                      <Chip label="NodeJS"></Chip>
                    </div>
                    <div className="timeline-entry-chip">
                      <Chip label="Redis"></Chip>
                    </div>
                    <div className="timeline-entry-chip">
                      <Chip label="MongoDB"></Chip>
                    </div>
                    <div className="timeline-entry-chip">
                      <Chip label="Express"></Chip>
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
              title="EyeLick"
              subheader="Videographer, Digital Marketer &amp; Editor"
              avatar={<Avatar>NM</Avatar>}
              action={<IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: this.state.expanded3,
                })}
                onClick={this.handleExpand3}
                aria-expanded={this.state.expanded3}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>}
            />
            <Collapse in={this.state.expanded3} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  <ul>
                    <li>Created promotional videos for Insomniac Events & Business Coorporations.</li>
                    <li>Created a digital marketing campaign and social media strategy for clients. Increased social media followers by up to 150% and revenue by up to 20%.</li>
                    <li>Filmed and edited videos of international DJ's such as Ben Nicky, Eptic, and Darren Styles.</li>
                  </ul>
                  <div className="timeline-entries">
                    <div className="timeline-entry-chip">
                      <Chip label="Adobe Creative Suite"></Chip>
                    </div>
                    <div className="timeline-entry-chip">
                      <Chip label="After Effects"></Chip>
                    </div>
                    <div className="timeline-entry-chip">
                      <Chip label="Premiere Pro"></Chip>
                    </div>
                    <div className="timeline-entry-chip">
                      <Chip label="Lightroom"></Chip>
                    </div>
                    <div className="timeline-entry-chip">
                      <Chip label="Cinema 4D"></Chip>
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
              title="Sonoma State University"
              subheader="Bachelor of Computer Science &#x2015; August 2012 - May 2016"
              avatar={<Avatar src={require("./ssu.jpeg")} />}
              action={<IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: this.state.expanded4,
                })}
                onClick={this.handleExpand4}
                aria-expanded={this.state.expanded4}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>}
            />
            <Collapse in={this.state.expanded4} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  <ul>
                    <li> 3.6 GPA </li>
                    <li> Member of SSU Computer Science Club</li>
                    <li> Member &amp; Executive Leader of Phi Delta Theta Cal Sigma </li>
                    <li> Captain of SSU Mens Divison II Volleyball Team (Ranked 2nd nationally)</li>
                  </ul>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(WorkComponent);
