import React from 'react';
import MenuIcon from "@material-ui/icons/Menu"
import {Icon, IconButton} from "@material-ui/core"
import { makeStyles } from '@material-ui/core';
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/Divider"
import Typography from '@material-ui/core/Typography';
import {FiSettings} from "react-icons/fi"
import {BsQuestionCircle} from "react-icons/bs"
import forms from "../imagenes/forms.png"
import sheet from "../imagenes/sheets.png"
import doc from "../imagenes/docs.png"
import slide from "../imagenes/slides.png"
import drive from "../imagenes/drive.png"
import "./Drawer.css"

const useStyles = makeStyles({
    ListItem:{
        marginLeft:"08px",marginright:"8px",marginTop:"15px"
    },
    slideImages:{
        height:"20px",width:"20px"
    }
})

function TemporaryDrawer() {
    const classes = useStyles();
    var [state,setState] = React.useState({
        left: false
    })

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open});
    };

    const list = (anchor) =>(
        <div style={{width:"250px"}} role="presentation">

        </div>
    );

    return (
    <div>
        <React.Fragment>
            <IconButton onClick={toggleDrawer("left",true)}>
                <MenuIcon />
            </IconButton>
            <Drawer open={state['left']} onClose={toggleDrawer("left",false)} anchor={'left'}>
                {list('left')}
            </Drawer>
        </React.Fragment>
    </div>
  )
}

export default TemporaryDrawer
