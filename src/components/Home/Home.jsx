import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import homepic from "./assests/homepic.png";
import icon from "./assests/icon.png";
import right from "./assests/right.png";
import left from "./assests/left.png";

import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  slider: {
    // margin: "50px",
    zIndex: "100 !important",
    [theme.breakpoints.down("sm")]: {
      // marginRight: "20px",
    },
    "& .slick-list": {
      "& .slick-track": {
        display: "flex",
        "& .slick-slide": {
          // margin: "0px 18px",
          // marginRight: "18px",
          [theme.breakpoints.down("sm")]: {
            marginRight: "0px",
          },
        },
      },
    },
  },
}));

const Home = () => {
  const [slide, setslide] = useState();
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:700px)");

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <img
        src={right}
        style={{
          width: "30px",
          height: "30px",
          zIndex: "10000",
          marginRight: "100px",
          marginTop: matches ? "250px" : "200px",
        }}
        className={className}
        onClick={onClick}
        alt=""
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <img
        src={left}
        style={{
          width: "30px",
          height: "30px",
          zIndex: "10000",
          marginLeft: matches ? "250px" : "420px",
          marginTop: matches ? "250px" : "200px",
          // transform: "rotate(180deg)",
          // marginRight: "200px",
        }}
        className={className}
        onClick={onClick}
        alt=""
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    // speed: 5000,
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    fade: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        background: "black",
      }}
    >
      <Container>
        <Grid container spacing={5} alignItems="center">
          <Grid item md={6} xs={12}>
            <Box>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "60px",
                  lineHeight: "70px",
                  color: "#FFFFFF",
                }}
              >
                Discover, collect, & sell NFTs
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "32px",
                  color: "#FFFFFF",
                  opacity: 0.7,
                  my: 4,
                }}
              >
                Discover the Most Premium, Unique and Exclusive NFT Collections
              </Typography>
              <Box>
                <Button
                  sx={{
                    background: "#7B61FF",
                    borderRadius: "10px",
                    color: "white",
                    fontSize: "16px",
                    mr: 3,
                  }}
                >
                  Explore
                </Button>
                <Button
                  sx={{
                    border: "2px solid #232632",
                    borderRadius: "10px",
                    color: "#232632",
                    fontSize: "16px",
                  }}
                >
                  Create
                </Button>
              </Box>
              <Divider color="#232632" sx={{ my: 4 }} />

              <Box
                sx={{
                  display: "flex",
                  // justifyContent:"center",
                  alignItems: "center",
                }}
              >
                <PlayCircleFilledIcon />

                <Box sx={{ ml: 2 }}>Learn more about BNB</Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box>
              <Slider {...settings} className={classes.slider}>
                <Box
                  sx={{
                    backgroundImage: `url(${homepic})`,
                    backgroundPosition: { sm: "center", xs: "center" },
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    minHeight: matches ? "100%" : "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      p: matches ? "300px 0" : "200px 0",
                      ml: -20,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        transform: "rotate(-90deg)",
                      }}
                    >
                      <img
                        style={{ transform: "rotate(90deg)" }}
                        src={icon}
                        alt=""
                      />
                      <Box sx={{ ml: 2 }}>
                        <Typography
                          sx={{ fontSize: "32px", fontWeight: "bold" }}
                        >
                          @marterium{" "}
                          <span
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                          >
                            created Machina
                          </span>
                        </Typography>
                        <Typography>an hour ago (2,000 views)</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    backgroundImage: `url(${homepic})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    minHeight: matches ? "100%" : "100%",
                    // py: 7,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      p: matches ? "300px 0" : "200px 0",
                      ml: -20,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        transform: "rotate(-90deg)",
                      }}
                    >
                      <img
                        style={{ transform: "rotate(90deg)" }}
                        src={icon}
                        alt=""
                      />
                      <Box sx={{ ml: 2 }}>
                        <Typography
                          sx={{ fontSize: "32px", fontWeight: "bold" }}
                        >
                          @marterium{" "}
                          <span
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                          >
                            created Machina
                          </span>
                        </Typography>
                        <Typography>an hour ago (2,000 views)</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Slider>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
