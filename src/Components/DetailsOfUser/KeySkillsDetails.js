import React from "react";
import {
  Paper,
  Grid,
  Typography,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import updateSkill from "../../Redux/Actions/UpdateSkill";

const KeySkillsDetails = ({ handlePreviousTab }) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      skills: [
        { id: 1, name: "" },
        { id: 2, name: "" },
        { id: 3, name: "" },
        { id: 4, name: "" },
      ],
    },
  });
  const { fields, append } = useFieldArray({
    control,
    name: "skills",
  });
  const navigate = useNavigate(); //for navigation to previewPage
  //dispatching data to redux store
  const dispatch = useDispatch();
  const onSubmit = (skillData) => {
    dispatch(updateSkill(skillData));
    navigate("/Preview");
    console.log(skillData);
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
          <Grid container spacing={2}>
            <Grid xs={12} md={12}>
              <Typography variant="h5" marginBottom="25px">
                Key Skills
              </Typography>
              <Divider />
            </Grid>
            {fields.map((field, index) => (
              <React.Fragment key={field.id}>
                <Grid item xs={6}>
                  {/* Skill Input */}
                  <TextField
                    {...register(`skills.${index}.name`, {
                      required: "Skill name is required", // validations for skill
                    })}
                    label={`Skill ${index + 1}`}
                    fullWidth
                    variant="outlined"
                    error={!!errors.skills?.[index]?.name}
                    helperText={
                      errors.skills?.[index]?.name
                        ? errors.skills[index].name.message
                        : ""
                    }
                  />
                </Grid>
              </React.Fragment>
            ))}

            <Grid item xs={12}>
              <Button
                variant="Primary"
                color="info"
                onClick={() => append({ name: "" })}
                sx={{
                  textTransform: "capitalize",
                  color: "blue",
                  marginBottom: "20px",
                }}
              >
                Add New
              </Button>
              <Divider />
            </Grid>
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
                  Preview
                </Button>
              </Grid>
            </div>
          </Grid>
        </Paper>
      </form>
    </div>
  );
};

export default KeySkillsDetails;
