import React from 'react'
import form_image from "../imagenes/forms.png";
import {FiStar, FiSettings} from "react-icons/fi"
import {AiOutlineEye} from 'react-icons/ai'
import {IconButton} from '@material-ui/core'
import { useHistory } from 'react-router';
import {IoMdFolderOpen} from 'react-icons/io'
import ColorLensIcon from '@material-ui/icons/ColorLens'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar'
import { useStateValue } from './StateProvider';

import "./Formheader.css"

function Formheader(){

    const history = useHistory();
    const [{doc_name}, dispatch] = useStateValue();

    function navigates(){
        history.push("/response")
    }

    return(
        <div className="form_header">
            <div className="form_header_left">
                <input type="text" placeholder="Sin título" className="form_name" value={doc_name}></input>
                
            </div>
            <div className="form_header_right">
                <IconButton onClick={navigates} target="blank">
                    <AiOutlineEye className="form_header_icon" />
                </IconButton>
                {/*<Button variant="contained" color="primary" href="#contained-buttons">Enviar</Button>
                */}
                <IconButton>
                    <MoreVertIcon className="form_header_icon" />
                </IconButton>
                <IconButton>
                    <Avatar style={{height:"30px",width:"30px"}} />
                </IconButton>
            </div>
        </div>
    )
}

export default Formheader