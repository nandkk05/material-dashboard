import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import BasicSwitch from "./BasicSwitch";

export default function BasicCard() {
  return (
    <Card variant="outlined" sx={{ minWidth: 275, marginBottom: 2 }}>
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            position: "static",
            marginTop: -12,
            marginRight: -10,
          }}
        >
          <Chip
            small
            style={{
              backgroundColor: "#b2dfdb",
              color: "#00796b",
              fontWeight: 600,
            }}
            label="ACTIVE"
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 20, fontWeight: 700 }} component="div">
            Title for card
          </Typography>
          <Link
            sx={{ fontSize: 14, position: "static", marginBottom: -5 }}
            fontWeight="bold"
            underline="always"
            color="secondary"
            gutterBottom
          >
            view
          </Link>
        </div>
        <Typography sx={{ mb: 2, fontSize: 14 }} color="text.secondary">
          Small title for card
        </Typography>
        {/* <div style={{ display: 'flex' }}>
          <TodayIcon />
          <Typography marginLeft={1} variant="body2">
            Show date here
          </Typography>
        </div> */}
        <TextField
          id="date"
          label="Birthday"
          type="date"
          size="small"
          defaultValue="2021-01-09"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </CardContent>
      <Divider variant="middle" />
      <CardActions
        style={{ display: "flex", justifyContent: "space-between", margin: 10 }}
      >
        <BasicSwitch />
        <Button
          variant="outlined"
          color="secondary"
          endIcon={<ArrowRightAltIcon />}
        >
          Button Text
        </Button>
      </CardActions>
    </Card>
  );
}
