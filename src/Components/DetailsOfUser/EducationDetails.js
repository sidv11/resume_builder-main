import React from "react";
import {
  Paper,
  Grid,
  Typography,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import updateEducation from "../../Redux/Actions/UpdateEducation";

const EducationDetails = ({ handleNextTab, handlePreviousTab }) => {
  // Initialize the form using useForm hook from react-hook-form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  //dispatching data to redux store
  const dispatch = useDispatch();
  // Function to handle form submission
  const onSubmit = (educationData) => {
    dispatch(updateEducation(educationData));
    handleNextTab();
    console.log(educationData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            height: "100%",
            padding: "20mm",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "25px",
          }}
        >
          <Grid container>
            <Grid xs={12} md={12}>
              <Typography variant="h5" marginBottom="25px">
                Education Details
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant="subtitle1">Education Type</Typography>
              {/* Type Input */}
              <TextField
                {...register("type", { required: "Type is required" })} //validation rule
                placeholder="e.g., High School, Bachelor's, Master's"
                variant="outlined"
                error={!!errors.type}
                helperText={errors.type ? errors.type.message : ""}
                sx={{ marginBottom: "25px", width: "100%" }}
              />
            </Grid>
            <div>
              <Grid item xs={12}>
                <Typography variant="subtitle1">University Name</Typography>
                {/* University Input */}
                <TextField
                  {...register("university", {
                    required: "University is required", //validation rule
                  })}
                  placeholder="e.g., University of XYZ"
                  variant="outlined"
                  error={!!errors.university}
                  helperText={
                    errors.university ? errors.university.message : ""
                  }
                  sx={{ marginRight: "15px" }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Start Year</Typography>
                {/* Start Year Input */}
                <TextField
                  {...register("startYear", {
                    required: "Start year is required", //validation rule
                    pattern: {
                      value: /^[0-9]{4}$/,
                      message:
                        "Invalid year format. Use four digits (e.g., 2023)",
                    },
                  })}
                  placeholder="e.g., 2019"
                  variant="outlined"
                  error={!!errors.startYear}
                  helperText={errors.startYear ? errors.startYear.message : ""}
                />
              </Grid>
            </div>
            <div>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Degree Name</Typography>
                {/* Degree Input */}
                <TextField
                  {...register("degree", { required: "Degree is required" })} //validation rule
                  placeholder="e.g., Highest qualification"
                  variant="outlined"
                  error={!!errors.degree}
                  helperText={errors.degree ? errors.degree.message : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">End Year</Typography>
                {/* End Year Input */}
                <TextField
                  {...register("endYear", {
                    required: "End year is required", //validation rule
                    pattern: {
                      value: /^[0-9]{4}$/,
                      message:
                        "Invalid year format. Use four digits (e.g., 2023)",
                    },
                  })}
                  placeholder="e.g., 2023"
                  variant="outlined"
                  error={!!errors.endYear}
                  helperText={errors.endYear ? errors.endYear.message : ""}
                  sx={{ marginBottom: "15px" }}
                />
              </Grid>
            </div>
            <Divider />
            <div style={{ marginTop: "25px", marginLeft: "auto" }}>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  sx={{ marginRight: "10px" }}
                  onClick={handlePreviousTab}
                >
                  Back
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Next
                </Button>
              </Grid>
            </div>
          </Grid>
        </Paper>
      </form>
    </div>
  );
};

export default EducationDetails;
