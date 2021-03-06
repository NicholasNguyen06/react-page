import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './about.css';
import { Typography } from '@material-ui/core';


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
                    <Grid item xs={3}>
                        <Typography align='center' className="teal"> About Me </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography className="about-spacing"> I am a 24-year-old Software Engineer based in San Diego, California. I enjoy back end development
                            in both C++ & Java, but have lately been tinkering with the Javascript ecosystem.
                        </Typography>
                        <Typography className="about-spacing">
                            After graduation from Sonoma State University i joined Arrowhead Wholesale as a Software Engineer I, where i design
                            projects to ease the process of customers and underwriters on a daily basis.
                        </Typography>
                        <Typography className="about-spacing">
                            On my free time I am a self taught Videographer and Cinematographer that specializes in outdoor film.
                        </Typography>
                        <Typography className="about-spacing">
                            I consider myself a generalist, where I am pretty much able to be good at everything
                            as long as I can stick with it and be around people who are better than me so i can
                            absorb their knowledge.
                        </Typography>
                    </Grid>
                </Grid>
            </div >
        )
    }
}

export default AboutMe;