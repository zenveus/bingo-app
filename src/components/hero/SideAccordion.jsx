import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: " #F8FAFB",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export const SideAccordion = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Key Details</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: "flex", flexDirection: "column" }}>
          <Typography className="mydetailedwrapper">
            <span className="mydetails mydetailsheader">
              Visit any licensed U.S.
            </span>
            <span className="mydetails">
              vet Submit a vet bill for reimbursement
            </span>
            <span className="mydetails">
              We strive to approve claims in 72 hours
            </span>
          </Typography>
          <Typography
            className="mydetailedwrapper"
            style={{ marginTop: "1rem" }}
          >
            <span className="mydetails mydetailsheader">
              We cover accidents & illnesses
            </span>
            <span className="mydetails">
              There is a three day waiting period
            </span>
            <span className="mydetails">Our deductibles are annual</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>What’s Covered</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>
            What’s Not Covered
          </Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
};
