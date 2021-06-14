import React,{useContext, useState, useEffect} from 'react';
import {PropertyContext} from '../context/context';
import {Grid, Container }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Filter from '../components/Filter';
import NavBar from '../components/NavBar';
import SinglePage from '../components/SinglePage';
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

export default function DetailPage(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));
    const context = useContext(PropertyContext)
    const[homeData, setHomeData]= useState('')
    const[slug]=useState(props.match.params.slug)

    useEffect(() => {
        const { getProperty } = context;
        const property = getProperty(slug)
        setHomeData(property)
    }, [])

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
                        <SinglePage props={homeData}/>
                    </Container>
                </Grid>
            </Grid>
        </div>
    )
}
