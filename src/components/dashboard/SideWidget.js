import { styled } from "@mui/material/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Card, Paper, List, Button, Link, Typography } from "@mui/material";
import BasicCard from "../common/BasicCard";

export default function SideWidget() {
  const WidgetBottom = styled(Card)(({ theme }) => ({
    boxShadow: "none",
    textAlign: "center",
    padding: theme.spacing(2, 3),
    color: theme.palette.grey[900],
    backgroundColor: theme.palette.background.white,
  }));

  return (
    <Card>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: 24,
          paddingRight: 40,
          paddingTop: 24,
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Title Of Widget</Typography>
        <Link
          sx={{ fontSize: 14 }}
          fontWeight="bold"
          underline="always"
          color="secondary"
          gutterBottom
        >
          view all
        </Link>
      </div>
      <Paper style={{ maxHeight: 655, overflow: "auto" }}>
        <List style={{ padding: 20 }}>
          <BasicCard />
          <BasicCard />
          <BasicCard />
          <BasicCard />
        </List>
      </Paper>
      <WidgetBottom>
        <Button
          variant="contained"
          startIcon={<AddCircleIcon />}
          size="large"
          fullWidth
          color="secondary"
        >
          BUTTON TEXT
        </Button>
      </WidgetBottom>
    </Card>
  );
}
