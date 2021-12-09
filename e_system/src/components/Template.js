import React,{useState,useEffect} from 'react'
import MoreVerticon from "@material-ui/icons/MoreVert"
import {Icon, IconButton} from "@material-ui/core"
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore"
import axios from "axios";
import blank from "../imagenes/blank.png"
import uuid from "react-uuid"
import {useHistory} from 'react-router-dom';

import "./Template.css"
function Template(){
    const history = useHistory();
    function createForm(){
        var create_form_id = uuid();
        console.log(create_form_id)  
        
        var questions_list=[{questionText: "Pregunta", questionType:"radio", options : [{optionText: "Opción 1"}], open: true, required:false}]
        axios.post(`http://localhost:9000/add_questions/${create_form_id}`,{
            "document_name": "Sin título",
            "doc_desc": "Añadir descripción",
            "questions": questions_list,   
          })
          history.push("/form/" + create_form_id)
    }
    return(
        <div className="template_section">
            <div className="template_top">
                <div className="template_left">
                    <span style={{fontsize:"15px", color:"#202124"}}>Nuevo examen</span>
                </div>
                
            </div>
            <div className="template_body">
                <div className="card" onClick={createForm}>
                    <img src={blank} alt="no image" className="card_image"/>
                    <p className="card_tittle">Plantilla en blanco</p>
                </div>
            </div>
        </div>
    )
}
export default Template