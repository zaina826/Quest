import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  InputBase,
  Hidden,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  typographyStyle: {
    flex: 1,
  },
  iconStyle: {
    flex: 1,
  },
  logo: {
    height: 40,
    width: "auto",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: "solid",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    height: "60%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Grid item sm={1} xs={1} />
        <Typography className={classes.typographyStyle}>Logo </Typography>
        <Grid
          item
          container
          sm={11}
          xs={12}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Typography className={classes.typographyStyle}>Rating </Typography>
          <Typography className={classes.typographyStyle}>Profile</Typography>
          <Typography className={classes.typographyStyle}>Contact</Typography>
          <Link to="/newquest">
            {" "}
            <Typography className={classes.typographyStyle}>
              New Quest
            </Typography>
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
