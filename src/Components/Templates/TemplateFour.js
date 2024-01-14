import React from "react";
import { Paper, Container, Grid, Typography, Avatar } from "@mui/material";
import { useSelector } from "react-redux";

const TemplateFour = () => {
  //using useSelector hook to access data from redux store
  let updateInfo = useSelector((state) => state.Update_info); //for Personal Info
  let UpdateWork = useSelector((state) => state.Update_work.works || []); //For work Experience
  let updateEducation = useSelector((state) => state.Update_education || []); //for education Details
  let updateSkill = useSelector((state) => state.Update_skill.skills || []); //For skills

  return (
    <div>
      <Container maxWidth="md" sx={{ display: "flex" }}>
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            height: "100%",
            padding: "20mm",

            alignItems: "center",
            justifyContent: "center",
            marginTop: "25px",
            marginBottom: "25px",
          }}
        >
          <Grid container spacing={1}>
            <Grid xs={12}>
              <Typography variant="h3">{`${updateInfo.firstName} ${updateInfo.lastName}`}</Typography>
            </Grid>
            <Grid
              xs={7}
              sx={{
                backgroundColor: "#699FF7 ",
                padding: "5px",
                marginTop: "15px",
              }}
            >
              <Typography variant="p">Objective</Typography>
            </Grid>
            <Grid xs={1}></Grid>
            <Grid
              xs={4}
              sx={{
                backgroundColor: "#699FF7 ",
                padding: "5px",
                marginTop: "15px",
              }}
            >
              <Typography variant="p">Address</Typography>
            </Grid>
            <Grid xs={7} sx={{ marginTop: "15px" }}>
              <Typography variant="p">{`${updateInfo.objective}`}</Typography>
            </Grid>
            <Grid xs={1}></Grid>
            <Grid xs={4} sx={{ marginTop: "15px" }}>
              <Typography variant="p">{`${updateInfo.address}`}</Typography>
              <br />
              <Typography variant="p">{`City:${updateInfo.city}`}</Typography>
              <br />
              <Typography variant="p">{`State:${updateInfo.state}`}</Typography>
              <br />
              <Typography variant="p">{`Pin:${updateInfo.postalCode}`}</Typography>
              <br />
              <Typography variant="p">{`Email:${updateInfo.email}`}</Typography>
              <br />
              <Typography variant="p">{`Mob:${updateInfo.mobile}`}</Typography>
            </Grid>
            <Grid
              xs={12}
              sx={{
                backgroundColor: "#699FF7",
                padding: "5px",
                marginTop: "15px",
              }}
            >
              <Typography variant="p">Work Experience</Typography>
            </Grid>

            <Grid xs={12} sx={{ marginTop: "15px" }}>
              {UpdateWork.map((work, index) => (
                <div key={index}>
                  <Typography variant="p">Company: {work.company}</Typography>
                  <br />
                  <Typography variant="p">Position: {work.position}</Typography>
                  <br />
                  <Typography variant="p">
                    Start Year: {work.startYear}
                  </Typography>
                  <br />
                  <Typography variant="p">End Year: {work.endYear}</Typography>
                  <br />
                </div>
              ))}
            </Grid>
            <Grid
              xs={12}
              sx={{
                backgroundColor: "#699FF7",
                padding: "5px",
                marginTop: "15px",
              }}
            >
              <Typography variant="p">Skills</Typography>
            </Grid>

            <Grid xs={12} sx={{ marginTop: "15px" }}>
              {updateSkill.map((skill, index) => (
                <Typography variant="body1" key={index}>
                  {skill.name}
                </Typography>
              ))}
            </Grid>
            <Grid
              xs={12}
              sx={{
                backgroundColor: "#699FF7",
                padding: "5px",
                marginTop: "15px",
              }}
            >
              <Typography variant="p">Education</Typography>
            </Grid>

            <Grid xs={12} sx={{ marginTop: "15px" }}>
              <Typography variant="p">{`University:${updateEducation.university}`}</Typography>
              <br />
              <Typography variant="p">{`Degree:${updateEducation.degree}`}</Typography>
              <br />
              <Typography variant="p">{`Course:${updateEducation.type}`}</Typography>
              <br />
              <Typography variant="p">{`Start Year:${updateEducation.startYear}`}</Typography>
              <br />
              <Typography variant="p">{`End Year:${updateEducation.endYear}`}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default TemplateFour;
