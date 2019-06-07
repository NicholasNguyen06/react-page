import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowIcon from '@material-ui/icons/KeyboardArrowRight';
import { Typography } from '@material-ui/core';
import './skills.css';

function skills() {

    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Typography align='center' className="teal"> Skills </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography className="bold"> Languages </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography className="bold"> Frameworks </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography className="bold"> Tools </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography className="bold"> Design </Typography>
            </Grid>
            <Grid item xs={3} />
            <Grid item xs={2} >
                <List dense={true}>
                    <ListItem disableGutters={true}>

                        <ListItemText
                            primary="Java"
                        />
                    </ListItem>
                    <ListItem disableGutters={true}>
                        <ListItemText
                            primary="C++"
                        />
                    </ListItem>
                    <ListItem disableGutters={true}>
                        <ListItemText className="teal"
                            primary="Python"
                        />
                    </ListItem>
                    <ListItem disableGutters={true}>
                        <ListItemText className="teal"
                            primary="Javascript"
                        />
                    </ListItem>

                </List>
            </Grid>
            <Grid item xs={2}>
                <List dense={true}>
                    <ListItem disableGutters={true}>
                        <ListItemText
                            primary="Struts2"
                        />
                    </ListItem>
                    <ListItem disableGutters={true}>
                        <ListItemText className="teal"
                            primary="NodeJS"
                        />
                    </ListItem>
                    <ListItem disableGutters={true}>
                        <ListItemText className="teal"
                            primary="ReactJS"
                        />
                    </ListItem>
                    <ListItem disableGutters={true}>
                        <ListItemText className="teal"
                            primary="ExpressJS"
                        />
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={2}>
                <List dense={true}>
                    <ListItem disableGutters={true}>
                        <ListItemText
                            primary="Git"
                        />
                    </ListItem>
                    <ListItem disableGutters={true}>
                        <ListItemText
                            primary="Bash"
                        />
                    </ListItem>
                    <ListItem disableGutters={true}>
                        <ListItemText
                            primary="MySQL"
                        />
                    </ListItem>
                    <ListItem disableGutters={true}>
                        <ListItemText
                            primary="SQL Server"
                        />
                    </ListItem>
                    <ListItem disableGutters={true}>
                        <ListItemText className="teal"
                            primary="MongoDB"
                        />
                    </ListItem>
                    <ListItem disableGutters={true}>
                        <ListItemText className="teal"
                            primary="Redis"
                        />
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={2}>
                <List dense={true}>
                    <ListItem disableGutters={true}>
                        <ListItemText
                            primary="After Effects"
                        />
                    </ListItem>
                    <ListItem disableGutters={true}>
                        <ListItemText
                            primary="Premiere Pro"
                        />
                    </ListItem>
                    <ListItem disableGutters={true}>
                        <ListItemText className="teal"
                            primary="Lightroom"
                        />
                    </ListItem>
                    <ListItem disableGutters={true}>
                        <ListItemText className="teal"
                            primary="Photoshop"
                        />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    );

}

export default skills;