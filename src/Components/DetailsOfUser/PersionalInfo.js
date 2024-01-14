import { React, useState } from "react";
import {
  Paper,
  Grid,
  Typography,
  Avatar,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import updateInfo from "../../Redux/Actions/PersonalInfoAction";

const PersionalInfo = ({ handleNextTab }) => {
  const [image, setImage] = useState(null);

  //This function is called when user select a img
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    setValue("image", file);
  };

  // Initialize the form using useForm hook from react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  //dispatching data to redux store
  const dispatch = useDispatch();

  // Function to handle form submission
  const onSubmit = (personalInfoData) => {
    dispatch(updateInfo(personalInfoData));
    handleNextTab();
    let x = personalInfoData;
    console.log(x);
  };

  return (
    <div>
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
        <Grid Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid xs={12} md={12}>
              <Avatar
                sx={{ height: "150px", width: "150px" }}
                src={image}
                alt="Image"
              />
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                {...register("image")}
                onChange={handleImageChange}
                style={{ display: "none" }}
                defaultValue={image}
              />
              <label htmlFor="avatar-upload" style={{ position: "absolute" }}>
                <Typography color="primary" marginLeft="5px">
                  change Profile Photo
                </Typography>
              </label>
            </Grid>
            <div>
              <TextField
                sx={{ marginTop: "30px", marginRight: "50px" }}
                label="First Name"
                {...register("firstName", {
                  required: "First name is required", // Validation rule for the field
                })}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName?.message}
              />
              <TextField
                sx={{ marginTop: "30px" }}
                label="Last Name"
                {...register("lastName", {
                  required: "Last name is required", // Validation rule for the field
                })}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName?.message}
              />
            </div>
            <div>
              <TextField
                sx={{ marginTop: "30px", marginRight: "50px" }}
                label="Email"
                {...register("email", {
                  required: "Email is required", // Validation rule for the field
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address", // Validation rule for email format
                  },
                })}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
              />
              <TextField
                sx={{ marginTop: "30px" }}
                label="Mobile"
                {...register("mobile", {
                  required: "Mobile is required", // Validation rule for the field
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid Mobile Number", // Validation rule for number format
                  },
                })}
                error={Boolean(errors.mobile)}
                helperText={errors.mobile?.message}
              />
            </div>
            <div>
              <TextField
                sx={{ marginTop: "30px" }}
                label="Address"
                fullWidth
                {...register("address", {
                  required: "Address is required", // Validation rule for the field
                })}
                error={Boolean(errors.address)}
                helperText={errors.address?.message}
              />
            </div>
            <div>
              <TextField
                sx={{ marginTop: "30px", marginRight: "50px" }}
                label="City"
                {...register("city", {
                  required: "City is required", // Validation rule for the field
                })}
                error={Boolean(errors.city)}
                helperText={errors.city?.message}
              />
              <TextField
                sx={{ marginTop: "30px" }}
                label="State"
                {...register("state", {
                  required: "State is required", // Validation rule for the field
                })}
                error={Boolean(errors.state)}
                helperText={errors.state?.message}
              />
            </div>
            <div>
              <TextField
                sx={{ marginTop: "30px" }}
                label="Postal Code"
                {...register("postalCode", {
                  required: "Postal code is required", // Validation rule for the field
                })}
                error={Boolean(errors.postalCode)}
                helperText={errors.postalCode?.message}
              />
            </div>
            <div>
              <TextField
                sx={{ marginTop: "30px" }}
                label="Objective"
                fullWidth
                multiline
                rows={4}
                {...register("objective", {
                  required: "Objective is required", // Validation rule for the field
                })}
                error={Boolean(errors.objective)}
                helperText={errors.objective?.message}
              />
            </div>
            <Divider style={{ width: "100%" }} />
            <div style={{ marginTop: "25px", float: "right" }}>
              <Link to="/ResumeTemplates">
                <Button variant="outlined" sx={{ marginRight: "10px" }}>
                  Back
                </Button>
              </Link>
              <Button variant="contained" color="primary" type="submit">
                Next
              </Button>
            </div>
          </form>
        </Grid>
      </Paper>
    </div>
  );
};

export default PersionalInfo;
