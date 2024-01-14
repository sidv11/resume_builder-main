import React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import {
  Paper,
  Typography,
  Divider,
  Grid,
  TextField,
  Button,
} from "@mui/material";

import { useDispatch } from "react-redux";
import updateWork from "../../Redux/Actions/UpdateWork";

const WorkExperienceDetails = ({ handleNextTab, handlePreviousTab }) => {
  // Initialize the form using useForm hook from react-hook-form
  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      works: [{ company: "", position: "", startYear: "", endYear: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "works",
  });
  //dispatching data to store
  const dispatch = useDispatch();
  const onSubmit = (workdExpData) => {
    dispatch(updateWork(workdExpData));
    handleNextTab();
    console.log(workdExpData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper
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
            <Grid item xs={12}>
              <Typography variant="h5" marginBottom="25px">
                Work Experience
              </Typography>
              <Divider />
            </Grid>
            {fields.map((work, index) => (
              <Grid container spacing={2} key={work.id}>
                <Grid item xs={12}>
                  <Typography variant="h6">
                    Work Experience {index + 1}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Company"
                    variant="outlined"
                    {...register(`works.${index}.company`)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Position"
                    variant="outlined"
                    {...register(`works.${index}.position`)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <label>StartYear</label>
                  <TextField
                    // label="Start Year"
                    variant="outlined"
                    type="date"
                    {...register(`works.${index}.startYear`)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <label>EndYear</label>
                  <TextField
                    variant="outlined"
                    type="date"
                    {...register(`works.${index}.endYear`)}
                    fullWidth
                  />
                </Grid>
              </Grid>
            ))}
            <Button
              onClick={() =>
                append({
                  company: "",
                  position: "",
                  startYear: "",
                  endYear: "",
                })
              }
              variant="text"
              color="primary"
              sx={{
                textTransform: "capitalize",
                marginLeft: "Auto",
                marginRight: "auto",
                marginTop: "15px",
              }}
            >
              Add New
            </Button>
            <Divider style={{ width: "100%" }} />
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

export default WorkExperienceDetails;
