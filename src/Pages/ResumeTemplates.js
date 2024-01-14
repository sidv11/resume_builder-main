import { React, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Button,
} from "@mui/material";
import TemplateOne_img from "../Images/TemplateOne_img.png";
import TemplateTwo_img from "../Images/TemplateTwo_img.png";
import TemplateThree_img from "../Images/TemplateThree_img.png";
import TemplateFour_img from "../Images/TemplateFour_img.png";
import { Link } from "react-router-dom";
import { T1, T2, T3, T4 } from "../Redux/Actions/SelectTemplate";
import { useDispatch } from "react-redux";

const ResumeTemplates = () => {
  //state for Hovering over the img
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  //Mouse events
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };
  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };
  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };

  const dispatch = useDispatch();

  return (
    <div>
      <Container>
        <Typography variant="h3" marginTop="50px">
          Templates
        </Typography>
        <Typography variant="h6" marginBottom={5}>
          Select a Template to get Started
        </Typography>
        <Grid container spacing={5}>
          <Grid item md={3}>
            <Card
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              sx={{
                maxWidth: 345,
                position: "relative",
              }}
            >
              <CardMedia component="img" image={TemplateOne_img}></CardMedia>
              {isHovered && (
                <Link to="/DetailsFillng">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      dispatch(T1());
                    }}
                    style={{
                      whiteSpace: "nowrap",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    Use Template
                  </Button>
                </Link>
              )}
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
              sx={{
                maxWidth: 345,
                height: "100%",
                position: "relative",
              }}
            >
              <CardMedia component="img" image={TemplateTwo_img}></CardMedia>
              {isHovered1 && (
                <Link to="/DetailsFillng">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      dispatch(T2());
                    }}
                    style={{
                      whiteSpace: "nowrap",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    Use Template
                  </Button>
                </Link>
              )}
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              sx={{
                maxWidth: 345,
                height: "100%",
                position: "relative",
              }}
            >
              <CardMedia component="img" image={TemplateThree_img}></CardMedia>
              {isHovered2 && (
                <Link to="/DetailsFillng">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      dispatch(T3());
                    }}
                    style={{
                      whiteSpace: "nowrap",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    Use Template
                  </Button>
                </Link>
              )}
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
              sx={{
                maxWidth: 345,
                height: "100%",
                position: "relative",
              }}
            >
              <CardMedia component="img" image={TemplateFour_img}></CardMedia>
              {isHovered3 && (
                <Link to="/DetailsFillng">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      dispatch(T4());
                    }}
                    style={{
                      whiteSpace: "nowrap",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    Use Template
                  </Button>
                </Link>
              )}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ResumeTemplates;
