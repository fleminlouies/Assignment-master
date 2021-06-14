import React from 'react';
import {Grid, Paper, Card}from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import img1 from "../images/room-1.jpeg";
import './Slider.css';
import Divider from '@material-ui/core/Divider';
import NumberFormat from 'react-number-format';
import bed from '../images/Vector.svg';
import bath from '../images/Bath.svg';
import hold from '../images/hold.svg';
import brand from '../images/brand.svg';
import Email from '../images/email.png';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const useStyles = makeStyles((theme) => ({
    Head:{
        color: "#F9F3FA",
        fontWeight:300,
        margin:20
    },
    Paper:{
        background:"#1C191D",
        borderRadius: 15,
        width:"100%",
        margin: "30px 0px",
        [theme.breakpoints.down('sm')]: {
          maxWidth:430
        },
    },
    cardContainer:{
        overflow:"auto",
        height:"calc(100vh - 16rem)",
        [theme.breakpoints.down('xs')]: {
            height:"calc(100vh - 5rem)",
          },
        padding: "0px 25px 25px"
    },
    imageBody:{
        height:450,
        borderRadius:20,
        [theme.breakpoints.down('sm')]: {
            maxHeight:310
          },
    },
    ButtonBack:{
        color: "#CA18AA",
        position: "absolute",
        top: "45%",
        left: "5%",
        background:"none",
        border:0
    },
    ButtonNext:{
        color: "#CA18AA",
        position: "absolute",
        top: "45%",
        right: "5%",
        background:"none",
        border:0
    },
    Arrow:{
        height:"3rem",
        width:"3rem"
    },
    Dot:{
        margin:30
    },
    DotGroup:{
        textAlign:'center'
    },
    Email:{
        marginLeft: 'auto',
        height: 28,
        width:36
    },
    Address:{
        color:"#F9F3FA",
        fontWeight: 500,
        fontSize:"1.1rem",
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
        margin:"10px 0px",
        width:'max-content'
    },
    brand:{
        position:"relative"
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
        margin:"10px 0px",
        width:'max-content'
    },
    furnish:{
        textAlign:'-webkit-center',
        [theme.breakpoints.down("sm")]:{
            textAlign:'left',
           },
    },
    Images:{
        height:450, 
        width:"100%",
        [theme.breakpoints.down('sm')]: {
            maxHeight:310
          },
    },
    details:{
        color:'#F9F3FA',
        letterSpacing:'0.03em'
    }
  }));

export default function SinglePage(props) {
    const classes = useStyles();
    let data = props.props
    return (
        <Paper className={classes.Paper} >
            <h3 className={classes.Head}>15 Search result</h3>
            <div className={classes.cardContainer}>
                <div style={{height:200}}>
                    <CarouselProvider style={{position:"relative"}}
                        naturalSlideWidth={100}
                        naturalSlideHeight={125}
                        totalSlides={data !== '' ? data.images.length : 1}
                        >
                        <Slider className={classes.imageBody} >
                            {data !== '' ?
                            data.images.map((item, i )=> 
                                <Slide index={i} key={i}><img src={item.url} alt='slides' className={classes.Images}/></Slide>
                            )
                            :
                            <Slide index={0}><img src={img1} alt='noSlide' className={classes.Images}/></Slide>
                        }
                        </Slider>
                        <ButtonBack className={classes.ButtonBack}>
                            <ArrowBackIosIcon className={classes.Arrow}/>
                        </ButtonBack>
                        <ButtonNext className={classes.ButtonNext}>
                            <ArrowForwardIosIcon className={classes.Arrow}/>
                        </ButtonNext>
                        <DotGroup className="prc-dotGroup"/>
                    </CarouselProvider>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <h1 className={classes.Address}>{`${data.capacity} ${data.name}`}</h1>
                        <img src={Email} alt='email' className={classes.Email}/>
                    </div>
                    <NumberFormat className={classes.Price} value={data.price} displayType={'text'} thousandSeparator={true} prefix={'£'} suffix={` pcm`}/>
                    <Grid container justify="space-around" alignItems="center">
                        <Grid item xs={12} sm={12} md={3}>
                            <div style={{display:"flex"}}>
                                <div className={classes.svgContainer}>
                                    <img src={hold}  alt="bed" height={"16px"}/>
                                    <p className={classes.svgText}>{data.Beds}</p>
                                </div>
                                <div className={classes.svgContainer}>
                                    <img src={bed}  alt="bed" height={"16px"}/>
                                    <p className={classes.svgText}>{data.capacity}</p>
                                </div>
                                <div className={classes.svgContainer}>
                                    <img src={bath}  alt="bed" height={"16px"}/>
                                    <p className={classes.svgText}>{data.Baths}</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <div className={classes.svgContainer}>
                                <div className={classes.brand}>
                                    <img src={brand}  alt="brand" style={{heifght:"22"}}/>
                                    <p className={classes.centered}>UNDERGROUND</p>
                                </div>
                                <p className={classes.svgText} style={{fontSize:12}}>{data.distance}</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} className={classes.furnish}>
                            <p className={classes.movein}>{ 'Furnished' }</p>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <p className={classes.movein}>{ `Move-in ${data.moveIn} `}</p>
                        </Grid>
                    </Grid>
                    <Divider variant="middle" style={{background:'#4E444C', margin:'20px 16px', height:2, borderRadius:20}} />
                    <Card style={{borderRadius:15, height :240 }}>
                        <iframe width={'100%'} height={'100%'} id="gmap_canvas" src="https://maps.google.com/maps?q=83%20Farleigh%20Road,%20London%20N16%207TD,%20UK&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title='location'></iframe>
                    </Card>
                    <div style={{padding: '20px 0px'}}>
                        <p className={classes.details}>
                        Situated on the 12th floor of the Crawford Building this modern one bedroom flat is available to rent end of June. Early viewings are highly recommended.
                        </p>
                        <p className={classes.details}>
                            This modern apartment features an open plan kitchen/ living area, a large bathroom and a double sized bedroom with fitted wardrobe. Other benefits include, floor to ceiling windows and a 24 hour concierge service.
                        </p>
                        <p className={classes.details}>
                            The Crawford building itself has it's own entrance to Aldgate East Underground station which makes it ideal for transport links.
                        </p>
                    </div>
                </div>
            </div>
        </Paper>
    )
}
