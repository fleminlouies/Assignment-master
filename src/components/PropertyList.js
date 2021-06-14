import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import {Grid, Paper}from '@material-ui/core';
import {PropertyContext} from '../context/context';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import NumberFormat from 'react-number-format';
import bed from '../images/Vector.svg';
import bath from '../images/Bath.svg';
import hold from '../images/hold.svg';
import brand from '../images/brand.svg';
import Email from '../images/email.png'

const useStyles = makeStyles((theme) => ({
    Head:{
        color: "#F9F3FA",
        fontWeight:300,
        margin:20
    },
    Paper:{
        background:"#1C191D",
        borderRadius: 15,
        margin: "30px 0px",
        width:"100%",
        [theme.breakpoints.down('sm')]: {
          maxWidth:430
        },
    },
    cardContainer:{
        overflow:"auto",
        height:"calc(100vh - 16rem)",
        padding: "0px 25px 25px"
    },
    CardBody:{
        padding: 16,
        borderRadius:15,
        background:" #18121A"
    },
    Image: {
        height: 200,
        borderRadius: 20
    },
    img: {
        height:'100%',
        borderRadius: 20,
        width:"100%",
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    Address:{
        color:"#F9F3FA",
        fontWeight: 500,
        fontSize:"1rem",
        letterSpacing:"0.04em"
    },
    Price:{
        display:"flex",
        color: "#F9F3FA",
        fontWeight:500,
        letterSpacing:"0.03em",
        fontSize:"1.2rem",
        margin:"16px 0px"
    },
    svgText:{
        color:"#B8AFB6",
        margin:"0px 10px",
        fontSize:14
    },
    svgContainer:{
        display:"flex",
        alignItems:"center",
        margin:"10px 0px"
    },
    brand:{
        position:"relative"
    },
    email:{
        display:"flex"
    },
    centered: {
        position:" absolute",
        fontSize:3,
        top: "30%",
        background:"#0019A8",
        color:"white",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    movein:{
        fontSize:12,
        color:"#B8AFB6",
        margin:"0px"
    }
  }));

export default function PropertyList() {
    const classes = useStyles();
    const context = useContext(PropertyContext)
     
    return (
        <Paper className={classes.Paper} >
            <h3 className={classes.Head}>{context.sortedData.length} Search result</h3>
            <div className={classes.cardContainer}>
                <Grid container spacing={3}>
                    {context.sortedData.map((card)=>(
                        <Grid item key={card.id} xs={12}  >
                            <Link  to={`/DetailPage/${card.id}`} style={{textDecoration:'none'}}>
                                <Paper className={classes.CardBody} elevation={5}>
                                    <Grid container spacing={2} >
                                        <Grid item xs={12} sm={12} md={6} container style={{maxWidth:340}}>
                                            <Link  to={`/DetailPage/${card.id}`} >
                                                <ButtonBase className={classes.Image}>
                                                    <img className={classes.img} alt="complex" src={card.images[0].url} />
                                                </ButtonBase>
                                            </Link>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} container style={{maxWidth:"100%"}}>
                                            <Grid  container>
                                                <Grid item container direction="column" spacing={2}>
                                                    <Grid item >
                                                        <h3 component="subtitle1" className={classes.Address}>
                                                            {card.name}
                                                        </h3>
                                                        <NumberFormat className={classes.Price} value={card.price} displayType={'text'} thousandSeparator={true} prefix={'£'} suffix={` pcm`}/>
                                                        <div style={{display:"flex"}}>
                                                            <div className={classes.svgContainer}>
                                                                <img src={hold}  alt="bed" height={"16px"}/>
                                                                <p className={classes.svgText}>{card.Beds}</p>
                                                            </div>
                                                            <div className={classes.svgContainer}>
                                                                <img src={bed}  alt="bed" height={"16px"}/>
                                                                <p className={classes.svgText}>{card.capacity}</p>
                                                            </div>
                                                            <div className={classes.svgContainer}>
                                                                <img src={bath}  alt="bed" height={"16px"}/>
                                                                <p className={classes.svgText}>{card.Baths}</p>
                                                            </div>
                                                        </div>
                                                        <div style={{display:"flex"}}>
                                                            <div className={classes.svgContainer}>
                                                                <div className={classes.brand}>
                                                                    <img src={brand}  alt="brand" style={{heifght:"22"}}/>
                                                                    <p className={classes.centered}>UNDERGROUND</p>
                                                                </div>
                                                                <p className={classes.svgText} style={{fontSize:12}}>{card.distance}</p>
                                                            </div>
                                                        </div>
                                                        <div className={classes.email}>
                                                            <p className={classes.movein}>Move-in from {card.moveIn}</p>
                                                            <img src={Email}  alt="brand" style={{heifght:"20", marginLeft:"auto"}}/>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Paper>
    )
}
