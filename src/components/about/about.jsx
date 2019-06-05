import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowIcon from '@material-ui/icons/KeyboardArrowRight';
import Divider from '@material-ui/core/Divider';
import './about.css';

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="about-wrapper">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <p> About Me </p>
                    </Grid>
                    <Grid item xs={6}>
                        <p>Here are a few technologies I work with:</p>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={6}>
                        <p className="about-spacing"> I am a 24-year-old Software Engineer based in San Diego, California. I enjoy back end development
                            in both C++ & Java, but have lately been tinkering with the Javascript ecosystem.
                        </p>
                        <p className="about-spacing">
                            After graduation from Sonoma State University i joined Arrowhead Wholesale as a Software Engineer I where i design
                            projects the ease the process of customers and underwriters on a daily basis.
                        </p>
                        <p className="about-spacing">
                            On my free time I am a self taught Videographer and Cinematographer that specializes in outdoor film.
                        </p>
                        <p className="about-spacing">
                            I consider myself a generalist, where I am pretty much able to be good at everything
                            as long as I can stick with it and be around people who are better than me so i can
                            absorb their knowledge.
                            </p>
                    </Grid>
                    <Grid item xs={3}>
                        <List dense={true}>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowIcon className="arrow-teal" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Java"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowIcon className="arrow-teal" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="C++"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowIcon className="arrow-teal" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Python"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowIcon className="arrow-teal" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="NodeJS"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowIcon className="arrow-teal" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="React"
                                />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={3}>
                        <List dense={true}>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowIcon className="arrow-teal" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="MySQL"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowIcon className="arrow-teal" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="MS SQL Server"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowIcon className="arrow-teal" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="MongoDB"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowIcon className="arrow-teal" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Apache Tomcat, Ant, &amp; Ivy"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowIcon className="arrow-teal" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Maven"
                                />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </div >
        )
    }
}

export default AboutMe;