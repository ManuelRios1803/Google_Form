import React, { useState, useEffect } from 'react'
import StorageIcon from '@material-ui/icons/Storage';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import { IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import doc_image from "../imagenes/test.png"
import axios from "axios";
import { useHistory } from "react-router-dom";
import Theme from "./Themes/Themes";
import "./Mainbody.css"

function Mainbody() {
    const colors = Theme(localStorage.getItem("palette"));
    const history = useHistory();
    function navigate_to(docname) {
        var fname = docname.split(".");
        history.push("/form/" + fname[0])
    }

    const [files, setFiles] = useState([]);

    useEffect(() => {
        async function filenames() {

            var request = await axios.get("http://localhost:9000/get_all_files")
            let files = request.data;
            setFiles(files)

        }
        filenames()

    }, [])
    return (
        <div style={{ backgroundColor: colors.background_color }} className="main_body">
            <div style={{ color: colors.font_color }} className="mainbody_top">
                <div className="mainbody_top_left" style={{ fontSize: "16px", fontWeight: "500" }}>
                    Evaluaciones recientes
                </div>
            </div>
            <div className="mainbody_docs">
                {
                    files.map((ele) => (
                        <div className="doc_card" onClick={() => {
                            navigate_to(ele)
                        }}>

                            <img src={doc_image} className="doc_image" />
                            <div className="doc_card_content">
                                <h5 style={{ overFlow: "ellipsis" }}>{ele ? ele : "Documento"} </h5>
                                <div className="doc_content" style={{ fontSize: "12px", color: "grey" }}>
                                    <div className="content_left">
                                        <StorageIcon style={{ color: "white", fontSize: "12px", backgroundColor: "#6E2594", padding: "3px", marginRight: "3px", borderRadius: "2px" }} />
                                    </div>
                                    <MoreVertIcon style={{ fontSize: "16px", color: "grey" }} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Mainbody;