import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/system";
import Card from "./Card";

const top100Films = [
  { label: "Apr", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

const Jackpot = () => {
  const [color, setcolor] = useState(false);
  const check = useMediaQuery("(max-width:700px)");

  //  ------------switch-styled section----------
  const AntSwitch = styled(Switch)(() => ({
    width: 64,
    height: 32,
    borderRadius: 111,
    background: "#362F49",
    boxShadow:
      "3.88916px 2.22238px 16.6678px rgba(68, 115, 250, 0.4), inset -2.22238px 2.22238px 3.88916px rgba(14, 37, 105, 0.08), inset 2.22238px 2.22238px 2.22238px rgba(14, 37, 105, 0.14), inset 4.44475px 6.66713px 6.66713px rgba(14, 37, 105, 0.05)",
    padding: 0,
    display: "flex",
    "& .MuiSwitch-switchBase": {
      padding: 1,
      "&.Mui-checked": {
        transform: "translateX(28px)",
        color: "#362F49",
        "& + .MuiSwitch-track": {
          backgroundColor: "#362F49",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      color: "#140E2B",
      boxShadow:
        "3.29082px 1.88047px 14.1035px rgba(68, 115, 250, 0.4), inset -1.88047px 1.88047px 3.29082px rgba(14, 37, 105, 0.08), inset 1.88047px 1.88047px 1.88047px rgba(14, 37, 105, 0.14), inset 3.76094px 5.64141px 5.64141px rgba(14, 37, 105, 0.05)",
      width: 30,
      height: 30,
      borderRadius: 50,
    },
    "& .MuiSwitch-track": {
      backgroundColor: "#fff",
    },
  }));
  //////////////////////////////////////

  return (
    <Box
      sx={{
        backgroundColor: "black",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#353658",
          p: 4,
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "42px",
            color: "#946EFE",
          }}
        >
          Jackpot
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "24px",
            fontFamily: "Kanit",
          }}
        >
          Stake to win jackpot
        </Typography>
      </Box>
      <Container maxWidth="lg">
        <Grid
          alignItems="center"
          //   spacing={20}
          container
          sx={{
            py: 3,
          }}
        >
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* <CalendarViewMonthIcon /> */}

              {/* <CalendarViewMonthIcon sx={{ ml: 2 }} /> */}
              <Box
                ml={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AntSwitch />
                <Typography
                  ml={1}
                  color="white"
                  fontFamily="Kanit"
                  fontWeight="bold"
                >
                  Staked only
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#362F49",
                  borderRadius: "50px",
                  ml: 1,
                }}
              >
                <Typography
                  onClick={() => {
                    setcolor(true);
                  }}
                  sx={{
                    backgroundColor: color ? "#140E2B" : "#362F49",
                    p: 1,
                    borderRadius: "50px",
                    mr: "5px",
                    px: 2,
                    cursor: "pointer",
                    fontFamily: "Kanit",
                  }}
                >
                  Live
                </Typography>
                <Box
                  onClick={() => {
                    setcolor(false);
                  }}
                  sx={{
                    backgroundColor: color ? "#362F49" : "#140E2B",
                    p: 1,
                    borderRadius: "50px",
                    fontFamily: "Kanit",

                    cursor: "pointer",
                  }}
                >
                  Finished
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { md: "end", xs: "start" },
                mt: { md: "0px", xs: "30px" },
              }}
            >
              <Box>
                <Typography fontFamily="Kanit">SORT BY</Typography>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{ width: 200, color: "#ABA4C6", background: "black" }}
                  renderInput={(params) => (
                    <TextField
                      sx={{
                        maxWidth: check ? "100%" : "400px",
                        width: "100%",
                        fontFamily: "Roboto",
                        fontWeight: "500",
                        borderRadius: "20px",
                        "& label.Mui-focused": {
                          color: "#ABA4C6",
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "black",
                          },
                          "&:hover fieldset": {
                            borderColor: "black",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "black",
                          },
                        },
                        input: {
                          "&::placeholder": {
                            textOverflow: "ellipsis !important",
                            color: "#ABA4C6",
                          },
                        },
                        input: {
                          color: "white",
                          fontSize: { xs: "12px", md: "14px" },
                        },
                        background: "#362F48",
                      }}
                      {...params}
                    />
                  )}
                />
              </Box>
              <Box ml={2}>
                <Typography fontFamily="Kanit">Search</Typography>
                <TextField
                  autoComplete=" off"
                  sx={{
                    maxWidth: check ? "100%" : "400px",
                    width: "100%",
                    fontFamily: "Roboto",
                    fontWeight: "500",
                    borderRadius: "20px",
                    "& label.Mui-focused": {
                      color: "#ABA4C6",
                    },
                    "& .MuiInput-underline:after": {
                      //   borderBottomColor: "none",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black",
                      },
                      "&:hover fieldset": {
                        borderColor: "black",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black",
                      },
                    },
                    input: {
                      "&::placeholder": {
                        textOverflow: "ellipsis !important",
                        color: "#ABA4C6",
                      },
                    },
                    input: {
                      color: "white",
                      fontSize: { xs: "12px", md: "14px" },
                    },
                    background: "#362F48",
                  }}
                  id="standard-name"
                  name=""
                  placeholder={"Search Farms"}
                  InputProps={{}}
                  required={true}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box>
        <Card />
      </Box>
    </Box>
  );
};

export default Jackpot;
