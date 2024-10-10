import React, { useState } from "react";
import {
  TextField,
  Grid,
  FormControl,
  FormHelperText,
  Slider,
  InputLabel,
  Button,
  Select
} from "@mui/material";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import GrayBackgroundText from "../Forms/index";
import { Controller, useFormContext } from "react-hook-form";
import htmlText from "./htmlText";
const ProjectDetails = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [projectType, setProjectType] = React.useState("");
  const [thirdPartyCertification, setThirdPartyCertification] = React.useState("");
  const [hasThirdPartyVerified, setHasThirdPartyVerified] = useState("");
  const [projectMonitoring, setProjectMonitoring] = React.useState("")
  console.log("projectType ", projectType);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const defaultCGPAValue = 3;
  const [cgpa, setCgpa] = useState("");

  const handleCgpa = (value) => {
    setCgpa(value);
  };

  const handleChange = (e) => {
    console.log("e value ", e)
    setThirdPartyCertification(e.target.value)
  };
  const handleChange1 = (e) => {
    console.log("e handlechange 1 value ", e);
    setHasThirdPartyVerified(e.target.value)
  };

  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext();

  return (
    <div>
      <GrayBackgroundText text="Project Details" />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Controller
            name="projectname"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  label="Project Name"
                  id="outlined-helperText"
                  required
                  fullWidth
                  margin="normal"
                  size="small"
                  InputProps={{
                    style: {
                      color: "black",
                      fontWeight: "bold"
                    }
                  }}
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.projectname)}
                  onBlur={() => trigger("projectname")}
                />
                {errors?.projectname?.message && (
                  <FormHelperText error={Boolean(errors?.projectname)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl
            fullWidth
            required
            id="outlined-helperText"
            size="small"
            margin="normal"
          >
            <InputLabel>Project Category</InputLabel>
            <Controller
              name="projectType"
              control={control}
              rules={{ required: htmlText.thisFieldIsRequired }}
              render={({ field, fieldState }) => (
                <>
                  <Select
                    defaultValue={""}
                    value={projectType}
                    onChange={(event) => {setProjectType(event.target.value)}}
                    style={{ color: "black", fontWeight: "bold"}}
                    label="Type of Project"
                    {...field}
                    error={Boolean(errors?.projectType)}
                    onBlur={() => trigger("projectType")}
                  >
                    <MenuItem value={"Bicycle and Pedestrian Infrastructure Development"} style={{ color: "black", fontWeight: "bold" }}>Bicycle and Pedestrian Infrastructure Development</MenuItem>
                    <MenuItem value={"Biogas Projects"} style={{ color: "black", fontWeight: "bold" }}>Biogas Projects</MenuItem>
                    <MenuItem value={"Carbon Sequestration"} style={{ color: "black", fontWeight: "bold" }}>Carbon Sequestration</MenuItem>
                    <MenuItem value={"Carpooling and Ride-sharing"} style={{ color: "black", fontWeight: "bold" }}>Carpooling and Ride-sharing</MenuItem>
                    <MenuItem value={"Composting"} style={{ color: "black", fontWeight: "bold" }}>Composting</MenuItem>
                    <MenuItem value={"Corporate Sustainability Initiatives"}style={{ color: "black", fontWeight: "bold" }}>Corporate Sustainability Initiatives</MenuItem>
                    <MenuItem value={"EV Promotion"} style={{ color: "black", fontWeight: "bold" }}>EV Promotion</MenuItem>
                    <MenuItem value={"Geothermal Energy Projects"} style={{ color: "black", fontWeight: "bold" }}>Geothermal Energy Projects</MenuItem>
                    <MenuItem value={"Green Packaging"} style={{ color: "black", fontWeight: "bold" }}>Green Packaging</MenuItem>
                    <MenuItem value={"Hydropower Projects"} style={{ color: "black", fontWeight: "bold" }}>Hydropower Projects</MenuItem>
                    <MenuItem value={"Low-Carbon Logistics"} style={{ color: "black", fontWeight: "bold" }}>Low-Carbon Logistics</MenuItem>
                    <MenuItem value={"Mangrove Restoration"} style={{ color: "black", fontWeight: "bold" }}>Mangrove Restoration</MenuItem>
                    <MenuItem value={"Methane Capture"} style={{ color: "black", fontWeight: "bold" }}>Methane Capture</MenuItem>
                    <MenuItem value={"Organic Farming"} style={{ color: "black", fontWeight: "bold" }}>Organic Farming</MenuItem>
                    <MenuItem value={"Reforestation"} style={{ color: "black", fontWeight: "bold" }}>Reforestation</MenuItem>
                    <MenuItem value={"Regenerative Agriculture"} style={{ color: "black", fontWeight: "bold" }}>Regenerative Agriculture</MenuItem>
                    <MenuItem value={"Renewable Energy"} style={{ color: "black", fontWeight: "bold" }}>Renewable Energy</MenuItem>
                    <MenuItem value={"Seagrass and Salt Marsh Restoration"} style={{ color: "black", fontWeight: "bold" }}>Seagrass and Salt Marsh Restoration</MenuItem>
                    <MenuItem value={"Solar Power Projects"} style={{ color: "black", fontWeight: "bold" }}>Solar Power Projects</MenuItem>
                    <MenuItem value={"Tree Plantation"} style={{ color: "black", fontWeight: "bold" }}>Tree Plantation</MenuItem>
                    <MenuItem value={"Waste Management"} style={{ color: "black", fontWeight: "bold" }}>Waste Management</MenuItem>
                    <MenuItem value={"Water Conservation"} style={{ color: "black", fontWeight: "bold" }}>Water Conservation</MenuItem>
                    <MenuItem value={"Water Purification Systems"} style={{ color: "black", fontWeight: "bold" }}>Water Purification Systems</MenuItem>
                    <MenuItem value={"Bamboo Plantation"} style={{ color: "black", fontWeight: "bold" }}>Bamboo Plantation</MenuItem>
                    <MenuItem value={"Other"} style={{ color: "black", fontWeight: "bold" }}>Other</MenuItem>
                  </Select>
                  {errors?.projectType?.message && (
                    <FormHelperText error={Boolean(errors?.projectType)}>
                      {htmlText.thisFieldIsRequired}
                    </FormHelperText>
                  )}
                </>
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} className="align-items-center">
            <Grid item xs={4}>
              <InputLabel>Date Of Commencement *</InputLabel>
              <Controller
                name="yearGraduated"
                control={control}
                rules={{ required: htmlText.thisFieldIsRequired }}
                render={({ field, fieldState }) => (
                  <>
                    <TextField
                      required
                      id="outlined-helperText"
                      fullWidth
                      margin="normal"
                      type="date"
                      size="small"
                      InputProps={{
                        style: {
                          color: "black",
                          fontWeight: "bold"
                        }
                      }}
                      sx={{ marginBottom: 0 }}
                      {...field}
                      error={Boolean(errors?.yearGraduated)}
                      onBlur={() => trigger("yearGraduated")}
                    />
                    {errors?.yearGraduated?.message && (
                      <FormHelperText error={Boolean(errors?.yearGraduated)}>
                        {htmlText.thisFieldIsRequired}
                      </FormHelperText>
                    )}
                  </>
                )}
              />
            </Grid>
            <Grid item xs={7} style={{ marginLeft: "auto" }}>
              <FormControl fullWidth className="form-group">
                {/* <div className="row align-items-end">
                    <label
                      htmlFor="cgpa"
                      id="cgpa"
                      aria-label="cgpa"
                      className="col"
                    >
                      Latest CGPA *
                    </label>
                    <div className="slider-value col">
                      {cgpa} <span>CGPA</span>
                    </div>
                  </div> */}
                {/* <Controller
                    name="cgpa"
                    control={control}
                    defaultValue={defaultCGPAValue}
                    rules={{ required: htmlText.thisFieldIsRequired }}
                    render={({ field, fieldState }) => (
                      <>
                        <Slider
                          aria-label="cgpa"
                          getAriaValueText={handleCgpa}
                          valueLabelDisplay="auto"
                          step={1}
                          id="cgpa"
                          marks
                          min={3}
                          max={5}
                          color="secondary"
                          {...field}
                        />
  
                        {errors?.cgpa?.message && (
                          <FormHelperText error={Boolean(errors?.cgpa)}>
                            {htmlText.thisFieldIsRequired}
                          </FormHelperText>
                        )}
                      </>
                    )}
                  /> */}
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="projectlocation"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  label="Project Activity Location"
                  required
                  id="outlined-helperText"
                  fullWidth
                  size="small"
                  margin="normal"
                  InputProps={{
                    style: {
                      color: "black",
                      fontWeight: "bold"
                    }
                  }}
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.highSchoolAddress)}
                  onBlur={() => trigger("highSchoolAddress")}
                />
                {errors?.highSchoolAddress?.message && (
                  <FormHelperText error={Boolean(errors?.highSchoolAddress)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="projectdecscription"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  label="Enter Project Description"
                  multiline
                  required
                  rows={5}
                  id="outlined-helperText"
                  fullWidth
                  size="small"
                  margin="normal"
                  InputProps={{
                    style: {
                      color: "black",
                      fontWeight: "bold",
                      lineHeight: '1'
                    }
                  }}
                  sx={{ marginBottom: 0, '& .MuiInputBase-root': { height: "100px" } }}
                  {...field}
                  error={Boolean(errors?.highSchoolAddress)}
                  onBlur={() => trigger("highSchoolAddress")}
                />
                {errors?.highSchoolAddress?.message && (
                  <FormHelperText error={Boolean(errors?.highSchoolAddress)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="carbonestimate"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  label="What is your estimated carbon footprint reduction from this project?(In metric tons of CO₂ or CO₂-equivalent per year):"
                  required
                  id="outlined-helperText"
                  fullWidth
                  size="small"
                  margin="normal"
                  InputProps={{
                    style: {
                      color: "black",
                      fontWeight: "bold"
                    }
                  }}
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.highSchoolAddress)}
                  onBlur={() => trigger("highSchoolAddress")}
                />
                {errors?.highSchoolAddress?.message && (
                  <FormHelperText error={Boolean(errors?.highSchoolAddress)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="baselinebeforeproject"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  label="What is the baseline for carbon emissions before the project was implemented?"
                  required
                  id="outlined-helperText"
                  fullWidth
                  size="small"
                  margin="normal"
                  InputProps={{
                    style: {
                      color: "black",
                      fontWeight: "bold"
                    }
                  }}
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.highSchoolAddress)}
                  onBlur={() => trigger("highSchoolAddress")}
                />
                {errors?.highSchoolAddress?.message && (
                  <FormHelperText error={Boolean(errors?.highSchoolAddress)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="methodology"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  label="What Methodology is used to calculate baseline"
                  required
                  id="outlined-helperText"
                  fullWidth
                  size="small"
                  margin="normal"
                  InputProps={{
                    style: {
                      color: "black",
                      fontWeight: "bold"
                    }
                  }}
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.highSchoolAddress)}
                  onBlur={() => trigger("highSchoolAddress")}
                />
                {errors?.highSchoolAddress?.message && (
                  <FormHelperText error={Boolean(errors?.highSchoolAddress)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="carbonreductionway"
            control={control}
            rules={{ required: htmlText.thisFieldIsRequired }}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  label="How does the project reduce or avoid emissions?"
                  required
                  id="outlined-helperText"
                  fullWidth
                  size="small"
                  margin="normal"
                  InputProps={{
                    style: {
                      color: "black",
                      fontWeight: "bold"
                    }
                  }}
                  sx={{ marginBottom: 0 }}
                  {...field}
                  error={Boolean(errors?.highSchoolAddress)}
                  onBlur={() => trigger("highSchoolAddress")}
                />
                {errors?.highSchoolAddress?.message && (
                  <FormHelperText error={Boolean(errors?.highSchoolAddress)}>
                    {htmlText.thisFieldIsRequired}
                  </FormHelperText>
                )}
              </>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl
            fullWidth
            required
            id="outlined-helperText"
            size="small"
            margin="normal"
          >
            <InputLabel>Has the project been verified by a third-party certification standard?</InputLabel>
            <Controller
              name="thirdpartycertificationdone"
              control={control}
              rules={{ required: htmlText.thisFieldIsRequired }}
              render={({ field, fieldState }) => (
                <>
                  <Select
                    defaultValue={hasThirdPartyVerified}
                    value={hasThirdPartyVerified || null}
                    onChange={handleChange1}
                    style={{ color: "black", fontWeight: "bold" }}
                    label="Type of Project"
                    {...field}
                    error={Boolean(errors?.hasThirdPartyVerified)}
                    onBlur={() => trigger("thirdPartyCertification")}
                  >
                    <MenuItem value="YES" style={{ color: "black", fontWeight: "bold" }}>YES</MenuItem>
                    <MenuItem value="NO" style={{ color: "black", fontWeight: "bold" }}>NO</MenuItem>
                  </Select>
                  {errors?.hasThirdPartyVerified?.message && (
                    <FormHelperText error={Boolean(errors?.hasThirdPartyVerified)}>
                      {htmlText.thisFieldIsRequired}
                    </FormHelperText>
                  )}
                </>
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl
            fullWidth
            required
            id="outlined-helperText"
            size="small"
            margin="normal"
          >
            <InputLabel>Has the project been verified by a third-party certification standard?</InputLabel>
            <Controller
              name="thirdpartycertification"
              control={control}
              rules={{ required: htmlText.thisFieldIsRequired }}
              render={({ field, fieldState }) => (
                <>
                  <Select
                    value={thirdPartyCertification || null}
                    onChange={(event) => { handleChange(event) }}
                    style={{ color: "black", fontWeight: "bold" }}
                    label="Type of Project"
                    {...field}
                    error={Boolean(errors?.thirdPartyCertification)}
                    onBlur={() => trigger("thirdPartyCertification")}
                  >
                    <MenuItem value="Verified Carbon Standard (VCS)" style={{ color: "black", fontWeight: "bold" }}>Verified Carbon Standard (VCS)</MenuItem>
                    <MenuItem value="Gold Standard" style={{ color: "black", fontWeight: "bold" }}>Gold Standard</MenuItem>
                    <MenuItem value="Clean Development Mechanism (CDM)" style={{ color: "black", fontWeight: "bold" }}>Clean Development Mechanism (CDM)</MenuItem>
                    <MenuItem value="Other" style={{ color: "black", fontWeight: "bold" }}>Other</MenuItem>
                  </Select>
                  {errors?.thirdPartyCertification?.message && (
                    <FormHelperText error={Boolean(errors?.thirdPartyCertification)}>
                      {htmlText.thisFieldIsRequired}
                    </FormHelperText>
                  )}
                </>
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl
            fullWidth
            required
            id="outlined-helperText"
            size="small"
            margin="normal"
          >
            <InputLabel>How frequently is the project monitored for emissions reductions?</InputLabel>
            <Controller
              name="projectmonitoring"
              control={control}
              rules={{ required: htmlText.thisFieldIsRequired }}
              render={({ field, fieldState }) => (
                <>
                  <Select
                    value={projectMonitoring || null}
                    onChange={(event) => { setProjectMonitoring(event.target.value) }}
                    style={{ color: "black", fontWeight: "bold" }}
                    label="Type of Project"
                    {...field}
                    error={Boolean(errors?.projectMonitoring)}
                    onBlur={() => trigger("thirdPartyCertification")}
                  >
                    <MenuItem value="Monthly" style={{ color: "black", fontWeight: "bold" }}>Monthly</MenuItem>
                    <MenuItem value="Quarterly" style={{ color: "black", fontWeight: "bold" }}>Quarterly</MenuItem>
                    <MenuItem value="Annually" style={{ color: "black", fontWeight: "bold" }}>Annually</MenuItem>
                    <MenuItem value="Other" style={{ color: "black", fontWeight: "bold" }}>Other</MenuItem>
                  </Select>
                  {errors?.projectMonitoring?.message && (
                    <FormHelperText error={Boolean(errors?.projectMonitoring)}>
                      {htmlText.thisFieldIsRequired}
                    </FormHelperText>
                  )}
                </>
              )}
            />
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectDetails