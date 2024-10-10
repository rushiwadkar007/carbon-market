import React, { useState } from 'react'
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CheckIcon from "@mui/icons-material/Check";
import { FormProvider, useForm } from "react-hook-form";
import PersonalInformation from './Forms/PersonalInformation';
import ProjectDetails from './Forms/ProjectDetails';
import UploadImage from './Forms/UploadImage';
import ReviewForm from './Forms/ReviewForm';
import "./carbonListing.css";
import ThankYou from './Forms/ThankYou';
const formArray = [
    {
        id: 0,
        name: "Applicant Details",
        heading: "Please Fillup Applicant Details",
        component: <PersonalInformation />,
    },
    {
        id: 1,
        name: "Project Details",
        heading: "Please Enter Project Details",
        component: <ProjectDetails />,
    },
    {
        id: 2,
        name: "Upload Documents",
        heading: "Upload Your Project Images",
        component: <UploadImage />
    },

    {
        id: 3,
        name: "Review & Submit",
        heading: "Confirm Your Details",
        component: <ReviewForm/>,
    },
    {
        id: 4,
        name: "Thank You Note!",
        heading: "Thank YOU FOR SUBMITTING YOUR PROPOSAL!"
    }
];
const CarbonListing = () => {
    const methods = useForm();
    const [currentForm, setCurrentForm] = useState(0);
    console.log("currentForm ", currentForm)
    const handleBack = (e) => {
        e.preventDefault();
        if (currentForm > 0) {
            setCurrentForm(currentForm - 1);
        }
    };

    const academicDetailsValues = [
        "applicationType",
        "admissionSemester",
        "courseApplied",
    ];

    const educationalBackground = [
        "lastHighSchool",
        "yearGraduated",
        // "cgpa",
        "highSchoolAddress",
        "highSchoolCountry",
        "highSchoolState",
        "highSchoolCity",
        "highSchoolPostalCode",
    ];

    const personalDetailsValues = [
        "CompanyName",
        "email",
        "contact",
        "address1",
        "address2",
        "city",
        "state",
        "country",
        "postalCode",
    ];
    const validateForm = (obj) => {
        console.log("obj", obj, currentForm);
        if (currentForm === 0) {
            let flag = true;
            for (let i = 0; i < personalDetailsValues.length; i++) {
                let val = obj[personalDetailsValues[i]];
                console.log("val ===>>>",val)
                if (!val || val.length < 1) {
                    flag = false;
                }
            }

            if (!flag) return false;
        } else if (currentForm === 1) {
            let flag = true;
            for (let i = 0; i < educationalBackground.length; i++) {
                let val = obj[educationalBackground[i]];
                console.log("val ", i, val, !val || val.length < 1);
                if (!val || val.length < 1) {
                    flag = false;
                }
            }

            if (!flag) return false;
        } else if (currentForm === 2) {
            let flag = true;
            for (let i = 0; i < educationalBackground.length; i++) {
                let val = obj[educationalBackground[i]];
                if (!val || val.length < 1) {
                    flag = false;
                }
            }

            if (!flag) return false;
        }
        return true;
    };

    //     display: flex;
    // position: relative;
    // margin-top: 186px;
    // display: flex;
    // width: 161%;
    // margin-left: -224px;
    // height: 110%;

    const handleContinue = (e) => {
        e.preventDefault();
        methods.trigger();
        const validated = validateForm(methods.getValues());
        console.log("validated ", validated);

        if (validated) {
            if (currentForm < formArray.length - 1) {
                setCurrentForm(currentForm + 1);
            }
        }
    };

    const handleConfirm = (e) => {
        e.preventDefault();
        console.log(methods.getValues());
    };

    return (
        <div className='carbonListing'>
            <div className="sidebar">
                {formArray.map((form, id) => {
                    console.log("id ==>>", id)
                    return (
                        <div
                            key={id}
                            className={`form-step  ${form.id && "form-step-active"} ${form.id === currentForm
                                ? "form-step-active"
                                : form.id < currentForm
                                    ? "form-step-completed"
                                    : "form-step-pending"
                                }`}
                        >
                            <div className="step-icon">
                                {form.id === currentForm ? (
                                    <RadioButtonCheckedIcon fontSize="small" />
                                ) : form.id < currentForm ? (
                                    <CheckIcon fontSize="small" />
                                ) : (
                                    <RadioButtonUncheckedIcon fontSize="small" />
                                )}
                            </div>
                            <div className="step-name">{form.name}</div>
                        </div>
                    );
                })}
            </div>
            <div className="main-content">
                <div className="form-heading">{formArray[currentForm].heading}</div>
                <div className="form-component">
                    <FormProvider {...methods}>
                        <form method="POST" className='form'>
                            {formArray[currentForm].component}
                            <div className="nav-buttons">
                                {currentForm > 0 && (
                                    <button className="nav-back" onClick={handleBack}>
                                        {/* <KeyboardBackspaceIcon /> */}
                                         Back
                                    </button>
                                )}

                                {currentForm === formArray.length - 1 ? (
                                    <button
                                        className="nav-next"
                                        onClick={handleConfirm}
                                        type="submit"
                                    >
                                        SUBMIT
                                    </button>
                                ) : (
                                    <button className="nav-next" onClick={handleContinue}>
                                        Continue
                                    </button>
                                )}
                            </div>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </div>
    )
}

export default CarbonListing