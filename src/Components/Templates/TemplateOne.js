import React from "react";
import { Paper, Container, Grid, Typography, Avatar } from "@mui/material";
import { useSelector } from "react-redux";

const TemplateOne = () => {
  //using useSelector hook to access data from redux store
  let updateInfo = useSelector((state) => state.Update_info); //for Personal Info
  let UpdateWork = useSelector((state) => state.Update_work.works || []); //For work Experience
  let updateEducation = useSelector((state) => state.Update_education || []); //for education Details
  let updateSkill = useSelector((state) => state.Update_skill.skills || []); //For skills

  return (
    <div>
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            height: "100%",
            padding: "20mm",

            alignItems: "center",
            justifyContent: "center",
            marginTop: "25px",
          }}
        >
          <Grid container>
            <Grid xs={8}>
              <Typography variant="h5">{`${updateInfo.firstName} ${updateInfo.lastName}`}</Typography>
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
              <br />
            </Grid>
            <Grid xs={4}>
              <Avatar
                sx={{
                  height: "150px",
                  width: "150px",
                  margin: "auto",
                  backgroundColor: "black",
                }}
              >
                <Typography
                  sx={{ fontSize: "75px" }}
                >{`${updateInfo.firstName[0]} ${updateInfo.lastName[0]}`}</Typography>
              </Avatar>
            </Grid>

            <Grid
              xs={12}
              sx={{
                backgroundColor: "grey",
                padding: "5px",
                marginTop: "15px",
              }}
            >
              <Typography variant="p">Objective</Typography>
            </Grid>
            <div style={{ marginTop: "15px" }}>
              <Grid xs={12}>{`${updateInfo.objective}`}</Grid>
            </div>
          </Grid>
          <Grid
            xs={12}
            sx={{
              backgroundColor: "grey",
              padding: "5px",
              marginTop: "15px",
            }}
          >
            <Typography variant="p">Work Experience</Typography>
          </Grid>
          <div style={{ marginTop: "15px" }}>
            <Grid xs={12}>
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
          </div>
          <Grid
            xs={12}
            sx={{
              backgroundColor: "grey",
              padding: "5px",
              marginTop: "15px",
            }}
          >
            <Typography variant="p">Skills</Typography>
          </Grid>
          <div style={{ marginTop: "15px" }}>
            <Grid xs={12}>
              <ul>
                {updateSkill.map((skill, index) => (
                  <li key={index}>{skill.name}</li>
                ))}
              </ul>
            </Grid>
          </div>
          <Grid
            xs={12}
            sx={{
              backgroundColor: "grey",
              padding: "5px",
              marginTop: "15px",
            }}
          >
            <Typography variant="p">Education</Typography>
          </Grid>
          <div style={{ marginTop: "15px" }}>
            <Grid xs={12}>
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
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default TemplateOne;
