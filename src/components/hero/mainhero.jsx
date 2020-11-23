import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Mytabs } from "./mytabs";
import { SideAccordion } from "./SideAccordion";
import { SideContent } from "./SideContent";
import { Divider } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    paddingTop: "4rem",
    backgroundColor: "#ffff",
    // //backgroundImage: "url(https://source.unsplash.com/random)",
    // //backgroundRepeat: "no-repeat",
    // backgroundColor:
    //   theme.palette.type === "light"
    //     ? theme.palette.grey[50]
    //     : theme.palette.grey[900],
    // backgroundSize: "cover",
    // backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Mainhero = () => {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={8} className={classes.image}>
        <div>
          <Mytabs />
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={4}
        component={Paper}
        elevation={6}
        square
        className="mysideContainer"
      >
        <div className={classes.paper}>
          <SideContent />
          <Divider />
          <SideAccordion />
        </div>
      </Grid>
    </Grid>
  );
};
