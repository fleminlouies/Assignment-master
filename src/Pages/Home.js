import React from 'react';
import {Grid, Container }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Filter from '../components/Filter';
import NavBar from '../components/NavBar';
import PropertyList from '../components/PropertyList';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    LeftBar:{
        background:"#201B20",
        borderRadius:0
    },
    RightBar:{
        background:"#2D232B",
        borderRadius:0,
        height:"100vh"
    },
    container:{
        display:"flex",
        justifyContent:"center",
        maxWidth:940,
        [theme.breakpoints.down('xs')]: {
            padding:0,
            background:'#2D232B'
          },
     }
  }));

export default function Home() {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={4} md={3} className={classes.LeftBar}>
                    {matches && <NavBar/>}
                    <Filter/>
                </Grid>
                <Grid item xs={12} sm={8} md={9} className={classes.RightBar}>
                    {!matches && <NavBar/>}
                    <Container className={classes.container}>
                        <PropertyList/>
                    </Container>
                </Grid>
            </Grid>
        </div>
    )
}
