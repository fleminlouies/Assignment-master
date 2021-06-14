import React,{useContext, useState} from 'react';
import {
    Grid, 
    Card, 
    InputBase,
    Select,
    FormControl,
    MenuItem,
    Button,
    InputLabel }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {PropertyContext} from '../context/context';

const useStyles = makeStyles((theme) => ({
    LeftBar:{
        padding:16,
        borderRadius:0
    },
    Heading:{
        fontFamily:"roboto",
        fontSize: 18,
        fontWeight: 400,
        letterSpacing:" 0em",
        color:"#F9F3FA"
    },
    selectBody:{
        background:"#0C0B0B",
        padding:16,
        borderRadius:15,
        margin:"10px 0px"
    },
    labelText:{
        fontSize: 12,
        fontWeight: 'bold',
        color:"#ca18aa",
    },
    inputInput: {
        fontFamily:"roboto",
        fontSize: 14,
        fontWeight: 500,
        letterSpacing:" 0em",
        color:"#B8AFB6",
      },
    select: {
        maxWidth: 100,
        fontSize:"0.9rem",
        borderStyle:'none',
        color:"#F9F3FA",
        padding:0,
        paddingTop:5,
      },
      icon:{
        right: 12,
        position: 'absolute',
        userSelect: 'none',
        color:"#F9F3FA",
        pointerEvents: 'none'
      },
      paper: {
        borderRadius: 15,
        marginTop: 20,
        maxHeight:300,
        background:'#0C0B0B'
      },
      list: {
        paddingTop:0,
        paddingBottom:0,
        fontFamily:"1rem",
        background:'#0C0B0B',
        "& li":{
          fontWeight:200,
          color:'#F9F3FA',
          paddingTop:12,
          paddingBottom:12,
          background: "#0C0B0B"
        },
        "& li:hover":{
          background: "#0C0B0B",
        },
        "& li.Mui-selected":{
          fontWeight:200,
          fontFamily:"1rem",
          color:'#F9F3FA',
          background: "#0C0B0B"
        },
        "& li.Mui-selected:hover":{
          background: "#0C0B0B",
          color:'#F9F3FA',
        },
    },
    Button:{
        background:"#D41553",
        borderRadius:10,
        color:"#F9F3FA",
        padding:"20px 0px",
        width:"100%",
        margin: "10px 0px",
        "&:hover":{
            background:"#D41553",
            borderRadius:10,
            color:"#F9F3FA",
          },
    }
  }));

const getUnique = (items, value)=>{
    return[...new Set(items.map(item => item[value]))]
}

export default function Filter() {
    const classes = useStyles();
    const context = useContext(PropertyContext)
    const[minPrice, setMinPrice]= useState('')
    const[maxPrice, setMaxPrice]= useState('')
    const[minBeds, setMinBeds]= useState('')
    const[maxBeds, setMaxBeds]= useState('')
    const[data]= useState('')
    
    let Price= getUnique(context.initialData,'price');
    let Beds= getUnique(context.initialData,'Beds');
    
    const iconComponent = (props) => {
        return (
            <ExpandMoreIcon className={props.className + " " + classes.icon}/>
            )};

    const menuProps = {
        classes: {
            paper: classes.paper,
            list: classes.list
        },
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        transformOrigin: {
            vertical: "top",
            horizontal: "left"
        },
        getContentAnchorEl: null
    };


   const handleMinBeds = (event) =>{
       setMinBeds(event.target.value)
   }
   const handleMaxBeds = (event) =>{
       setMaxBeds(event.target.value)
   }
   const handleMinPrice = (event) =>{
       setMinPrice(event.target.value)
   }
   const handleMaxPrice = (event) =>{
       setMaxPrice(event.target.value)
   }
   const handleSubmit = () =>{
       context.handleChange({
        minBeds: minBeds,
        maxBeds: maxBeds,
        minPrice: minPrice,
        maxPrice: maxPrice
       })
   }


    return (
        <div>
            <div className={classes.LeftBar}>
                <div className={classes.text}>
                    <h2 className={classes.Heading}>Find a rental property</h2>
                    <Card className={classes.selectBody} elevation={0}>
                        <InputLabel id="demo-mutiple-chip-label" className={classes.labelText}>Search area</InputLabel>
                        <InputBase
                            placeholder="eg. Oxford or NW3"
                            classes={{
                            input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Card>
                    <Grid container spacing={2}>
                        <Grid item xs >
                            <Card className={classes.selectBody}>
                                <InputLabel id="demo-mutiple-chip-label" className={classes.labelText}>Minimum beds</InputLabel>
                                <FormControl style={{width:"100%"}}  >
                                    <Select
                                        SelectDisplayProps={{ style: { minWidth: 100 } }}
                                        id="demo-mutiple-chip"
                                        value={minBeds}
                                        onChange={handleMinBeds}
                                        classes={{ root: classes.select }}
                                        MenuProps={menuProps}
                                        disableUnderline
                                        displayEmpty
                                        IconComponent={iconComponent}
                                        >
                                        <MenuItem  value=""  >
                                         No min
                                        </MenuItem>
                                        {Beds.map((item, i) => (
                                            <MenuItem key={i} value={item}  >
                                            {item}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Card>
                        </Grid>
                        <Grid item xs>
                            <Card className={classes.selectBody}>
                                <InputLabel id="demo-mutiple-chip-label" className={classes.labelText}>Maximum beds</InputLabel>
                                <FormControl style={{width:"100%"}} >
                                    <Select
                                        SelectDisplayProps={{ style: { minWidth: 100 } }}
                                        id="demo-mutiple-chip"
                                        value={maxBeds}
                                        onChange={handleMaxBeds}
                                        classes={{ root: classes.select }}
                                        MenuProps={menuProps}
                                        disableUnderline
                                        displayEmpty
                                        IconComponent={iconComponent}
                                        >
                                        <MenuItem  value=""  >
                                         No max
                                        </MenuItem>
                                        {Beds.map((item, i) => (
                                            <MenuItem key={i} value={item}  >
                                            {item}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Card>
                        </Grid>
                    </Grid>
                    
                    <Card className={classes.selectBody}>
                        <InputLabel id="demo-mutiple-chip-label" className={classes.labelText}>Price per</InputLabel>
                        <FormControl style={{width:"100%"}} >
                            <Select
                                SelectDisplayProps={{ style: { minWidth: "100%" } }}
                                id="demo-mutiple-chip"
                                value={data}
                                classes={{ root: classes.select }}
                                MenuProps={menuProps}
                                disableUnderline
                                displayEmpty
                                IconComponent={iconComponent}
                                >
                                <MenuItem  value=""  >
                                    Monthly
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Card>
                    <Grid container spacing={2}>
                        <Grid item xs>
                            <Card className={classes.selectBody}>
                                <InputLabel id="demo-mutiple-chip-label" className={classes.labelText}>Minimum price</InputLabel>
                                <FormControl style={{width:"100%"}} >
                                <Select
                                    name="minPrice"
                                    SelectDisplayProps={{ style: { minWidth: 100 } }}
                                    id="demo-mutiple-chip"
                                    value={minPrice}
                                    onChange={handleMinPrice}
                                    classes={{ root: classes.select }}
                                    MenuProps={menuProps}
                                    disableUnderline
                                    displayEmpty
                                    IconComponent={iconComponent}
                                    >
                                    <MenuItem  value=""  >
                                        No min
                                    </MenuItem>
                                    {Price.map((item, i) => (
                                        <MenuItem key={i} value={item}  >
                                        {item}
                                        </MenuItem>
                                    ))}
                                </Select>
                                </FormControl>
                            </Card>
                        </Grid>
                        <Grid item xs>
                            <Card className={classes.selectBody}>
                                <InputLabel id="demo-mutiple-chip-label" className={classes.labelText}>Maximum price</InputLabel>
                                <FormControl style={{width:"100%"}} >
                                <Select
                                    SelectDisplayProps={{ style: { minWidth: 100 } }}
                                    id="demo-mutiple-chip"
                                    value={maxPrice}
                                    onChange={handleMaxPrice}
                                    classes={{ root: classes.select }}
                                    MenuProps={menuProps}
                                    disableUnderline
                                    displayEmpty
                                    IconComponent={iconComponent}
                                    >
                                    <MenuItem  value=""  >
                                        No max
                                    </MenuItem>
                                    {Price.map((item, i) => (
                                        <MenuItem key={i} value={item}  >
                                        {item}
                                        </MenuItem>
                                    ))}
                                </Select>
                                </FormControl>
                            </Card>
                        </Grid>
                    </Grid>
                    <Button className={classes.Button} onClick={handleSubmit}>Find Properties</Button>
                </div>
            </div>
        </div>
    )
}
