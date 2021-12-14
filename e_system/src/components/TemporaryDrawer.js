import React from 'react';
import MenuIcon from "@material-ui/icons/Menu"
import { Icon, IconButton } from "@material-ui/core"
import { makeStyles } from '@material-ui/core';
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/Divider"
import Typography from '@material-ui/core/Typography';
import { FiSettings } from "react-icons/fi"
import { BsQuestionCircle } from "react-icons/bs"
import forms from "../imagenes/forms.png"
import sheet from "../imagenes/sheets.png"
import doc from "../imagenes/docs.png"
import slide from "../imagenes/slides.png"
import drive from "../imagenes/drive.png"
import clsx from "clsx";
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import "./Drawer.css"

const useStyles = makeStyles({
    ListItem: {
        marginLeft: "08px", marginright: "8px", marginTop: "15px"
    },
    slideImages: {
        height: "20px", width: "20px"
    }
})

function TemporaryDrawer() {
    const classes = useStyles();
    var [state, setState] = React.useState({
        left: false
    })

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
    };

    const changeTheme = (e) => {
        localStorage.setItem("palette", e.target.value)
        window.location.reload()
    }

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom",
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <FormControl className={classes.formControl}>
                <NativeSelect
                    defaultValue={localStorage.getItem("palette")}
                    inputProps={{
                        name: 'name',
                        id: 'uncontrolled-native',
                    }}
                    onChange={changeTheme}
                >
                    <option value="Light">Tema Claro</option>
                    <option value="Dark">Tema Oscuro</option>
                    <option value="CBlind">Tema Daltónico</option>
                </NativeSelect>
            </FormControl>
        </div>
    );

    return (
        <div>
            <React.Fragment>
                <IconButton onClick={toggleDrawer("left", true)}>
                    <MenuIcon />
                </IconButton>
                <Drawer open={state['left']} onClose={toggleDrawer("left", false)} anchor={'left'}>
                    {list('left')}
                </Drawer>
            </React.Fragment>
        </div>
    )
}

export default TemporaryDrawer
