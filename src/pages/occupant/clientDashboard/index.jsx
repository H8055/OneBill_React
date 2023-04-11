import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Cards from "../../../ui-component/common/cards";
import MainCard from "../../../components/MainCard";
import MeterConsumptionChart from "./MeterConsumptionChart";
import ActualCoastChart from "./ActualCoastChart";
import CollectionSummeryChart from "./CollectionSummeryChart";
import ForecastChart from "./ForecastChart";
import BenchmarkChart from "./BenchmarkChart";
import ConsumptionCostChart from "./ConsumptionCostChart";
import GroupCostChart from "./GroupCostChart";
import ParameterWiseChart from "./ParameterWiseChart";
import AverageConsumption from "./AverageConsumption";
import LiveMeter from "./LiveMeter";
import MeterStatus from "./MeterStatus";

// import Cards from "../../../ui-component/common/cards";
// import CollectionSummeryChart from "./CollectionSummeryChart";
// import MainCard from "../../../ui-component/common/MainCard";
// import MeterConsumptionChart from "./MeterConsumptionChart";
// import ActualCoastChart from "./ActualCoastChart";
// import ForecastChart from "./ForecastChart";
// import ConsumptionCostChart from "./ConsumptionCostChart";
// import GroupCostChart from "./GroupCostChart";
// import ParameterWiseChart from "./ParameterWiseChart";
// import BenchmarkChart from "./BenchmarkChart";
// import MeterStatus from "./MeterStatus";
// import OccupancyStatus from "./OccupancyStatus";
// import TotalMeters from "./TotalMeters";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const tails = {
  tail1: {
    bgColor:
      "linear-gradient(90deg, rgba(28,95,196,0.5522584033613445) 0%, rgba(28,95,196,0.5550595238095238) 0%)",
    title: "Today's Cons.",
    value: "53W",
    icon: "https://ik.imagekit.io/hr8bo79qm/hrms/Group_768.svg?updatedAt=1678963000658",
    chart:
      "https://ik.imagekit.io/hr8bo79qm/hrms/Group_770.svg?updatedAt=1678963956670",
  },
  tail2: {
    bgColor:
      "linear-gradient(90deg, rgba(254,78,97,1) 0%, rgba(254,78,97,0.5606617647058824) 0%)",
    title: "Yesterday's Cons.",
    value: "53W",
    icon: "https://ik.imagekit.io/hr8bo79qm/hrms/Group_771.svg?updatedAt=1678965798081",
    chart:
      "https://ik.imagekit.io/hr8bo79qm/hrms/Group_772.svg?updatedAt=1678965797919",
  },
  tail3: {
    bgColor:
      "linear-gradient(90deg, rgba(106,220,127,1) 0%, rgba(106,220,127,0.6222864145658263) 0%)",
    title: "Forecast Cons.",
    value: "1296W",
    icon: "https://ik.imagekit.io/hr8bo79qm/hrms/Group_773.svg?updatedAt=1678965798086",
    chart:
      "https://ik.imagekit.io/hr8bo79qm/hrms/Group_775.svg?updatedAt=1678965798936",
  },
  tail4: {
    bgColor:
      "linear-gradient(90deg, rgba(255,136,0,0.5970763305322129) 0%, rgba(255,136,0,0.6138830532212884) 0%)",
    title: "Todays energy Cost",
    value: "100 OMR",
    icon: "https://ik.imagekit.io/hr8bo79qm/hrms/Group_776.svg?updatedAt=1679042596730",
    chart:
      "https://ik.imagekit.io/hr8bo79qm/hrms/Group_777.svg?updatedAt=1679042596754",
  },
  tail5: {
    bgColor:
      "linear-gradient(90deg, rgba(114,111,212,1) 0%, rgba(114,111,212,0.7539390756302521) 0%)",
    title: "Yesterdays Energy Cost",
    value: "100 OMR",
    icon: "https://ik.imagekit.io/hr8bo79qm/hrms/Group_778.svg?updatedAt=1679042596726",
    chart:
      "https://ik.imagekit.io/hr8bo79qm/hrms/Group_779.svg?updatedAt=1679042596749",
  },
  tail6: {
    bgColor:
      "linear-gradient(90deg, rgba(248,205,75,0.6671043417366946) 0%, rgba(248,205,75,0.7343312324929971) 0%)",
    title: "Forecast Energy Cost",
    value: "100 OMR",
    icon: "https://ik.imagekit.io/hr8bo79qm/hrms/Group_780.svg?updatedAt=1679042596736",
    chart:
      "https://ik.imagekit.io/hr8bo79qm/hrms/Group_781.svg?updatedAt=1679042596736",
  },
};

const ClientDashboard = () => {
  return (
    ////////Test////////////////
    <Grid container md={12}>
      {/* ------------------------------< Row 1 >----------------------------------------- */}
      <Grid item xs={12} lg={4} pr={2}>
        <Grid item lg={12} md={6} sm={6} xs={12}>
          <Grid container spacing={1}>
            <Grid item sm={6} xs={12} md={6} lg={4}>
              <Cards
                backgroundColor={tails.tail1.bgColor}
                title={tails.tail1.title}
                icon={tails.tail1.icon}
                value={tails.tail1.value}
                chart={tails.tail1.chart}
              />
            </Grid>
            <Grid item sm={6} xs={12} md={6} lg={4}>
              <Cards
                backgroundColor={tails.tail2.bgColor}
                title={tails.tail2.title}
                icon={tails.tail2.icon}
                value={tails.tail2.value}
                chart={tails.tail2.chart}
              />
            </Grid>
            <Grid item sm={6} xs={12} md={6} lg={4}>
              <Cards
                backgroundColor={tails.tail3.bgColor}
                title={tails.tail3.title}
                icon={tails.tail3.icon}
                value={tails.tail3.value}
                chart={tails.tail3.chart}
              />
            </Grid>
            <Grid item sm={6} xs={12} md={6} lg={12}>
              <Grid container spacing={1}>
                <Grid item sm={6} xs={12} md={6} lg={4}>
                  <Cards
                    backgroundColor={tails.tail4.bgColor}
                    title={tails.tail4.title}
                    icon={tails.tail4.icon}
                    value={tails.tail4.value}
                    chart={tails.tail4.chart}
                  />
                </Grid>
                <Grid item sm={6} xs={12} md={6} lg={4}>
                  <Cards
                    backgroundColor={tails.tail5.bgColor}
                    title={tails.tail5.title}
                    icon={tails.tail5.icon}
                    value={tails.tail5.value}
                    chart={tails.tail5.chart}
                  />
                </Grid>
                <Grid item sm={6} xs={12} md={6} lg={4}>
                  <Cards
                    backgroundColor={tails.tail6.bgColor}
                    title={tails.tail6.title}
                    icon={tails.tail6.icon}
                    value={tails.tail6.value}
                    chart={tails.tail6.chart}
                  />
                </Grid>
                <Grid item sm={6} xs={12} md={6} lg={12}>
                  <MeterConsumptionChart />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} lg={12}>
          <Grid container spacing={1}>
            <Grid item sm={6} xs={12} md={6} lg={12} mt={2}>
              {/* <MainCard title="Meter Status" data={<MeterStatus />} /> */}
              <MeterStatus />
            </Grid>
            <Grid item sm={6} xs={12} md={6} lg={12}>
              <Grid container>
                <Grid item sm={6} xs={12} md={6} lg={6} pr={1}>
                  {/* <MainCard
                    title="Occupancy Status"
                    data={<OccupancyStatus />}
                  /> */}
                  <Item>xs=8</Item>
                </Grid>
                <Grid item sm={6} xs={12} md={6} lg={6}>
                  {/* <MainCard title="Total Meters" data={<TotalMeters />} /> */}
                  <Item>xs=8</Item>
                </Grid>
                <Grid item sm={6} xs={12} md={6} lg={12} mt={2}>
                  {/* <MainCard
                    title="Monthly Forecast Consumption"
                    data={<ForecastChart />}
                  /> */}
                  <ForecastChart />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} lg={12} mt={2}>
          {/* <MainCard
            title="Benchmark For Current Month"
            data={<BenchmarkChart />}
          /> */}
          <BenchmarkChart />
        </Grid>
      </Grid>
      {/* ------------------------------<  Row 2  >----------------------------------------- */}

      <Grid item xs={12} lg={5} pr={2}>
        <Grid item lg={12} md={6} sm={6} xs={12}>
          <Grid container spacing={1}>
            <Grid item sm={6} xs={12} md={6} lg={4}>
              <Cards
                backgroundColor={tails.tail1.bgColor}
                title={tails.tail1.title}
                icon={tails.tail1.icon}
                value={tails.tail1.value}
                chart={tails.tail1.chart}
              />
            </Grid>
            <Grid item sm={6} xs={12} md={6} lg={4}>
              <Cards
                backgroundColor={tails.tail1.bgColor}
                title={tails.tail1.title}
                icon={tails.tail1.icon}
                value={tails.tail1.value}
                chart={tails.tail1.chart}
              />
            </Grid>
            <Grid item sm={6} xs={12} md={6} lg={4}>
              <Cards
                backgroundColor={tails.tail1.bgColor}
                title={tails.tail1.title}
                icon={tails.tail1.icon}
                value={tails.tail1.value}
                chart={tails.tail1.chart}
              />
            </Grid>
            <Grid item sm={6} xs={12} md={6} lg={12}>
              <ActualCoastChart />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={5} lg={12} pt={2}>
          {/* <MainCard title="Consumptions" data={<ConsumptionCostChart />} /> */}
          <ConsumptionCostChart />
        </Grid>
        <Grid item xs={12} md={5} lg={12} pt={2}>
          {/* <MainCard title="Group consumption chart" data={<GroupCostChart />} /> */}
          <GroupCostChart />
        </Grid>
      </Grid>
      {/* ------------------------------<  Row 3  >----------------------------------------- */}

      <Grid item xs={12} lg={3}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12} md={6} lg={12}>
              {/* <MainCard
                title="Collection Summary"
                data={<CollectionSummeryChart />}
              /> */}
              <CollectionSummeryChart />
            </Grid>
            <Grid item sm={6} xs={12} md={6} lg={12}>
              <AverageConsumption />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={3} lg={12} mt={2}>
          <LiveMeter />
        </Grid>
        <Grid item xs={12} md={3} lg={12} mt={2}>
          {/* <MainCard
            title="Parameter Wise cons."
            data={<ParameterWiseChart />}
          /> */}
          <ParameterWiseChart />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ClientDashboard;
