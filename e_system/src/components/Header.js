import React from 'react'
import "./Header.css"
import MenuIcon from "@material-ui/icons/Menu"
import { IconButton } from "@material-ui/core"
import AppsIcon from "@material-ui/icons/Apps"
import AddIcon from "@material-ui/icons/Add"
import Avatar from '@material-ui/core/Avatar'
import TemporaryDrawer from './TemporaryDrawer'
import Typography from '@material-ui/core/Typography';
import Theme from "./Themes/Themes";

function Header() {
    const colors = Theme(localStorage.getItem("palette"));
    return (
        <div style={{ backgroundColor: colors.header_color }} className="header">
            <div className="header_info">
                <TemporaryDrawer />
            </div>

            <div className="header_right">
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <Avatar src="" />
                </IconButton>
            </div>
        </div>
    )
}

export default Header;