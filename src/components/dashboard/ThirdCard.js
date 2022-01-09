import { merge } from "lodash";
import { Icon } from "@iconify/react";
import caretUp from "@iconify/icons-ant-design/caret-up-filled";
import ReactApexChart from "react-apexcharts";
import { styled } from "@mui/material/styles";
import { Card, Typography, Box } from "@mui/material";
import { BaseOptionChart } from "../charts";

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "left",
  padding: theme.spacing(3, 0),
  color: theme.palette.primary,
  backgroundColor: theme.palette.background.white,
}));

const CHART_DATA = [
  {
    name: "sellergeni sales",
    type: "area",
    data: [44, 55, 50, 60, 55, 60, 55, 60, 68],
    color: "#FFE700",
  },
];

const TOTAL = "$29111.111";

export default function ThirdCard() {
  const chartOptions = merge(BaseOptionChart(), {
    grid: {
      show: false,
    },
    stroke: {
      width: 3,
      curve: "straight",
      lineCap: "round",
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  });
  return (
    <RootStyle>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box marginLeft={2}>
          <Typography variant="caption">Card small heading</Typography>
          <Typography variant="h3">{TOTAL}</Typography>
          <Typography
            variant="subtitle2"
            marginBottom={4}
            sx={{ opacity: 0.72 }}
          >
            Card detail text
          </Typography>
        </Box>
        <div style={{ display: "flex" }}>
          <Icon
            style={{ color: "green" }}
            icon={caretUp}
            width={24}
            height={24}
          />
          <Typography
            right
            variant="subtitle2"
            marginRight={2}
            marginBottom={4}
            sx={{ opacity: 0.72, fontWeight: "bold", color: "green" }}
          >
            12%
          </Typography>
        </div>
      </Box>
      <div style={{ margin: "-80px" }}>
        <ReactApexChart
          type="area"
          series={CHART_DATA}
          options={chartOptions}
          height={200}
        />
      </div>
    </RootStyle>
  );
}
