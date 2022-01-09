import { Box, Grid, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  ThirdCard,
  FirstCard,
  SecondCard,
  SideWidget,
  MultipleChartViews,
} from "../components/dashboard";

const APP_BAR_MOBILE = 40;
const APP_BAR_DESKTOP = 40;

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  backgroundColor: theme.palette.grey[300],
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export default function DashboardApp() {
  return (
    <RootStyle>
      <MainStyle>
        <Container maxWidth="xl">
          <Typography>Small title</Typography>
          <Box sx={{ pb: 5 }}>
            <Typography variant="h4">Main title</Typography>
          </Box>
          <Typography variant="h6" marginBottom={1}>
            Information heading
          </Typography>
          <Grid container>
            <Grid container spacing={{ xs: 0, lg: 3 }} xs={12} sm={12} md={8}>
              <Grid item xs={12} sm={6} md={4} marginBottom={{ xs: 3, lg: 0 }}>
                <FirstCard />
              </Grid>
              <Grid item xs={12} sm={6} md={4} marginBottom={{ xs: 3, lg: 0 }}>
                <SecondCard />
              </Grid>
              <Grid item xs={12} sm={6} md={4} marginBottom={{ xs: 3, lg: 0 }}>
                <ThirdCard />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <MultipleChartViews />
              </Grid>
            </Grid>
            <Grid
              xs={12}
              sm={12}
              md={4}
              marginLeft={{ lg: 3, xs: 0 }}
              marginTop={{ xs: 3, lg: 0 }}
            >
              <Grid item xs={12} md={6} lg={12}>
                <SideWidget />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </MainStyle>
    </RootStyle>
  );
}
