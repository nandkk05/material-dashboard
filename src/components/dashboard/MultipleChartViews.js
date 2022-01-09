import { merge } from "lodash";
import * as React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, Box } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { BaseOptionChart } from "../charts";

const BAR_CHART_DATA = [
  {
    name: "Bar chart",
    type: "column",
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
  },
];

const LINE_CHART_DATA = [
  {
    name: "Line chart",
    type: "area",
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    color: "#FF6C40",
  },
];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MultipleChartViews() {
  const chartOptions = merge(BaseOptionChart(), {
    plotOptions: { bar: { columnWidth: "11%", borderRadius: 4 } },
    labels: [
      "01/01/2003",
      "02/01/2003",
      "03/01/2003",
      "04/01/2003",
      "05/01/2003",
      "06/01/2003",
      "07/01/2003",
      "08/01/2003",
      "09/01/2003",
      "10/01/2003",
      "11/01/2003",
    ],
    xaxis: { type: "datetime" },
    tooltip: {
      y: {
        formatter: (y) => {
          if (typeof y !== "undefined") {
            return `${y.toFixed(0)} visits`;
          }
          return y;
        },
      },
    },
  });

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: 20,
          marginBottom: 10,
          marginTop: 20,
        }}
      >
        <Typography variant="h5">Title of Widget</Typography>
        <Typography marginLeft={1} variant="caption">
          (Subs title of widget)
        </Typography>
      </div>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Information 1" {...a11yProps(0)} />
          <Tab label="Information 2" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ReactApexChart
          type="area"
          series={LINE_CHART_DATA}
          options={chartOptions}
          height={364}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ReactApexChart
          type="bar"
          series={BAR_CHART_DATA}
          options={chartOptions}
          height={364}
        />
      </TabPanel>
    </Card>
  );
}
