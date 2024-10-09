import React, { useState } from "react";
import {
    Grid,
    FormControl,
    FormHelperText,
    Slider,
    InputLabel,
} from "@mui/material";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GrayBackgroundText from "../Forms/index";
import { Controller, useFormContext } from "react-hook-form";
import htmlText from "./htmlText";
import axios from 'axios';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        width: "100%", /* Adjust width to fill the container */
        padding: "10px", /* Space inside the input box */
        margin: "8px 0", /* Add space between input boxes */
        border: "1px solid #ccc", /* Light gray border */
        borderRadius: "5px", /* Rounded corners */
        boxSizing: "border-box", /* Ensure padding doesn't add to width */
        fontSize: "16px", /* Font size inside the input box */
        outline: "none", /* Remove default outline */
        cursor: "none",
        display: "none"
    },
    label:{
        justifyContent: "space-between"
    }
}));
const UploadImage = () => {
    const classes = useStyles();
    const [uploadProgress, setUploadProgress] = useState(0);
    const defaultCGPAValue = 3;
    const [cgpa, setCgpa] = useState("");
    const [nImage, setNImage] = useState("")
    const [companyName, setCompanyName] = useState("");
    console.log("nImage ", nImage, companyName);

    const handleCgpa = (value) => {
        setCgpa(value);
    };

    const {
        control,
        formState: { errors },
        trigger,
    } = useFormContext();

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        console.log("event ", event, file)
        const formData = new FormData();
        formData.append('file', file);
        console.log("formData", formData);
            setNImage(file.name);
        // axios.post('/upload', formData, {
        //     onUploadProgress: (progressEvent) => {
        //         const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        //         setUploadProgress(percentCompleted);
        //     }
        // })
    };
    const handleFile1Upload = (event) => {
        const file = event.target.files[0];
        console.log("event ", event, file)
        const formData = new FormData();
        formData.append('file', file);
        setCompanyName(file.name);
        // axios.post('/upload', formData, {
        //     onUploadProgress: (progressEvent) => {
        //         const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        //         setUploadProgress(percentCompleted);
        //     }
        // })
    };
    return (
        <div className={classes.root}>
            <GrayBackgroundText text="Upload Documents" />
            <h4>Upload Environmental/Natural Resources Conservation Project Images </h4>
            <TextField
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                onChange={(e) => handleFileUpload(e)}
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                    Upload
                </Button>
                <a>{nImage}</a>
            </label>
            <LinearProgress variant="determinate" value={uploadProgress} />
            <h4>Upload Company Documents </h4>
            <TextField
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                onChange={(e) => handleFile1Upload(e)}
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                    Upload
                </Button>
                <a>{companyName}</a>
            </label>
            <LinearProgress variant="determinate" value={uploadProgress} />
        </div>
    )
}

export default UploadImage