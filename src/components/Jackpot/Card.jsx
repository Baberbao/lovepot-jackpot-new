import React from "react";
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import loveicon from "../../images/loveicon.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Card = () => {
  return (
    <Box>
      {/* Card ????????????????????????????????????????????????????? */}
      <Container maxWidth="md">
        <Grid container spacing={3} mt={5} pb="20px">
          <Grid item xs={12} md={6}>
            <Box
              //   height="100%"
              sx={{
                backgroundColor: "#140E2E",
                borderRadius: "30px",
                p: 4,
                border: "1px solid transparent",
                transition: "0.5s",
                "&:hover": {
                  border: "1px solid #72BFF4",
                },
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <img src={loveicon} alt="" width="50px" height="50px" />
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "32px",
                      fontFamily: "Kanit",
                    }}
                  >
                    MEGAPOT
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      textAlign=""
                      sx={{
                        //   backgroundColor: "#956DFD",
                        fontWeight: "bold",
                        py: 0.5,
                        px: 1,
                        borderRadius: "30px",
                        color: "#956DFD",
                        border: "1px solid #956DFD",
                        mr: "5px",
                        display: "flex",
                        alignItems: "center",
                        fontFamily: "Kanit",
                      }}
                    >
                      <CheckCircleIcon sx={{ mr: 0.5 }} />
                      No Fee
                    </Typography>
                    <Typography
                      textAlign=""
                      sx={{
                        backgroundColor: "#956DFD",
                        fontWeight: "bold",
                        py: 0.5,
                        px: 1,
                        borderRadius: "30px",
                        fontFamily: "Kanit",
                      }}
                    >
                      1x Winner
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                my={2}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontweight: "bold",
                    fontSize: "18px",
                    fontFamily: "Kanit",
                  }}
                >
                  APR:
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontweight: "bold",
                    fontSize: "18px",
                    fontFamily: "Kanit",
                  }}
                >
                  125.25
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  sx={{
                    color: "white",
                    fontweight: "bold",
                    fontSize: "18px",
                    fontFamily: "Kanit",
                  }}
                >
                  Earn:
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontweight: "bold",
                    fontSize: "18px",
                    fontFamily: "Kanit",
                  }}
                >
                  Love
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                my={2}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontweight: "bold",
                    fontSize: "18px",
                    fontFamily: "Kanit",
                  }}
                >
                  Deposit Fee:
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontweight: "bold",
                    fontSize: "18px",
                    fontFamily: "Kanit",
                  }}
                >
                  0%
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#A097BC",
                    fontweight: "bold",
                    fontSize: "18px",
                    fontFamily: "Kanit",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Kanit",
                      fontweight: "bold",
                      color: "#956DFD",
                    }}
                  >
                    TOTAL TIME
                  </span>{" "}
                  ONE WEEK
                </Typography>

                <Typography
                  sx={{
                    color: "#F51B3A",
                    fontweight: "bold",
                    fontFamily: "Kanit",
                    fontSize: "34px",
                  }}
                >
                  $100,000
                </Typography>

                <Typography
                  sx={{
                    color: "#A097BC",
                    fontweight: "bold",
                    fontFamily: "Kanit",
                    fontSize: "18px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Kanit",
                      fontweight: "bold",
                      color: "#956DFD",
                    }}
                  >
                    LOVE
                  </span>{" "}
                  STAKED
                </Typography>
              </Box>
              <Box my={3} borderRadius="20px">
                <Button
                  sx={{
                    backgroundColor: "#F51B3A",
                    width: "100%",
                    padding: "15px",
                    color: "white",
                    fontWeight: "bold",
                    fontFamily: "Kanit",
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor: "#F51B3Aa1",
                    },
                  }}
                >
                  Win Now
                </Button>
              </Box>
              <Divider sx={{ background: "gray" }} />
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt={3}
              >
                <Accordion
                  sx={{
                    width: "300px",
                    boxShadow: "none",
                    background: "transparent",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#F51B3A" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{}}
                  >
                    <Typography
                      textAlign="center"
                      fontFamily="Kanit"
                      color="#F51B3A"
                    >
                      Details
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography
                          sx={{
                            color: "white",
                            fontweight: "bold",
                          }}
                        >
                          Deposit:
                        </Typography>
                        <Typography
                          sx={{
                            color: "white",
                            fontweight: "bold",
                          }}
                        >
                          MILK-BUSD LP
                        </Typography>
                      </Box>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography
                          sx={{
                            color: "white",
                            fontweight: "bold",
                          }}
                        >
                          Total Liquidity:
                        </Typography>
                        <Typography
                          sx={{
                            color: "white",
                            fontweight: "bold",
                          }}
                        >
                          $6,200
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          color: "white",
                          fontweight: "bold",
                        }}
                      >
                        View on BscScan
                      </Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Box>
          </Grid>

          {/* Card  2  ????????????????????????????????????????????????????? */}

          <Grid item xs={12} md={6}>
            <Box
              //   height="100%"
              sx={{
                backgroundColor: "#140E2E",
                borderRadius: "30px",
                p: 4,
                border: "1px solid transparent",
                transition: "0.5s",
                "&:hover": {
                  border: "1px solid #72BFF4",
                },
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <img src={loveicon} alt="" width="50px" height="50px" />
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "32px",
                      fontFamily: "Kanit",
                    }}
                  >
                    MEGAPOT
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      textAlign=""
                      sx={{
                        backgroundColor: "#956DFD",
                        fontWeight: "bold",
                        py: 0.5,
                        px: 1,
                        borderRadius: "30px",
                        fontFamily: "Kanit",
                      }}
                    >
                      1x Winner
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                my={2}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontweight: "bold",
                    fontSize: "18px",
                    fontFamily: "Kanit",
                  }}
                >
                  APR:
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontweight: "bold",
                    fontSize: "18px",
                    fontFamily: "Kanit",
                  }}
                >
                  132.48%
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  sx={{
                    color: "white",
                    fontweight: "bold",
                    fontSize: "18px",
                    fontFamily: "Kanit",
                  }}
                >
                  Earn:
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontweight: "bold",
                    fontSize: "18px",
                    fontFamily: "Kanit",
                  }}
                >
                  Cake
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                my={2}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontweight: "bold",
                    fontSize: "18px",
                    fontFamily: "Kanit",
                  }}
                >
                  Deposit Fee:
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontweight: "bold",
                    fontSize: "18px",
                    fontFamily: "Kanit",
                  }}
                >
                  0%
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#A097BC",
                    fontweight: "bold",
                    fontSize: "18px",
                    fontFamily: "Kanit",
                  }}
                >
                  <span style={{ fontweight: "bold", color: "#956DFD" }}>
                    TOTAL TIME
                  </span>{" "}
                  ONE WEEK
                </Typography>

                <Typography
                  sx={{
                    color: "#F51B3A",
                    fontweight: "bold",
                    fontSize: "34px",
                    fontFamily: "Kanit",
                  }}
                >
                  $25,000
                </Typography>

                <Typography
                  sx={{
                    color: "#A097BC",
                    fontweight: "bold",
                    fontSize: "18px",
                    fontFamily: "Kanit",
                  }}
                >
                  <span style={{ fontweight: "bold", color: "#956DFD" }}>
                    LOVE
                  </span>{" "}
                  STAKED
                </Typography>
              </Box>
              <Box my={3} borderRadius="20px">
                <Button
                  sx={{
                    backgroundColor: "#F51B3A",
                    width: "100%",
                    padding: "15px",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor: "#F51B3Aa1",
                    },
                    fontFamily: "Kanit",
                  }}
                >
                  Win Now
                </Button>
              </Box>
              <Divider sx={{ background: "gray" }} />
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt={3}
              >
                <Accordion
                  sx={{
                    width: "300px",
                    boxShadow: "none",
                    background: "transparent",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#F51B3A" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{}}
                  >
                    <Typography
                      textAlign="center"
                      fontFamily="Kanit"
                      color="#F51B3A"
                    >
                      Details
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography
                          sx={{
                            color: "white",
                            fontweight: "bold",
                          }}
                        >
                          Deposit:
                        </Typography>
                        <Typography
                          sx={{
                            color: "white",
                            fontweight: "bold",
                          }}
                        >
                          MILK-BUSD LP
                        </Typography>
                      </Box>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography
                          sx={{
                            color: "white",
                            fontweight: "bold",
                          }}
                        >
                          Total Liquidity:
                        </Typography>
                        <Typography
                          sx={{
                            color: "white",
                            fontweight: "bold",
                          }}
                        >
                          $6,200
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          color: "white",
                          fontweight: "bold",
                        }}
                      >
                        View on BscScan
                      </Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Card;
