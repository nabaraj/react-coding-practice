import { useEffect, useState } from "react";
import { ChartData } from "./types";
import CHART_DATA from "./chart-data";
type updateChartDataType = ChartData & {
  style: { maxHeight: string; backgroundColor: string; width: string };
};
type ChartGenerator = {
  updatedData: updateChartDataType[];
  xaxisLabel: string;
  yAxisLabel: string;
};
export const useChartGenerator = (): ChartGenerator => {
  const chartData = CHART_DATA;
  const [updatedData, setUpdatedData] = useState([] as updateChartDataType[]);
  const updateChartData = () => {
    let max = chartData.reduce((maxValue, item) => {
      return Math.max(maxValue, item.ticketCount);
    }, 0);
    const updatedData = chartData.map((item: ChartData) => {
      max = Math.max(max, item.ticketCount);
      const height = (item.ticketCount / max) * 100 + "%";
      return {
        ...item,
        style: {
          maxHeight: height,
          height,
          backgroundColor: item.colour,
          width: 100 / chartData.length + "%",
        },
      };
    });
    console.log(updatedData);
    return updatedData;
    // setUpdatedData(updatedData);
  };
  useEffect(() => {
    setUpdatedData(updateChartData());
  }, []);
  updateChartData();
  return {
    updatedData,
    xaxisLabel: "Dpartment",
    yAxisLabel: "Ticket Count",
  };
};
