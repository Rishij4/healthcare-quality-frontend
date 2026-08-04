import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { useSelector } from "react-redux";

export default function InspectionTrend() {

  const { trend } = useSelector(
    (state) => state.dashboard
  );

  return (

    <ResponsiveContainer width="100%" height={350}>

      <LineChart data={trend}>

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="_id.month" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="inspections"
          stroke="#2563EB"
          strokeWidth={3}
        />

      </LineChart>

    </ResponsiveContainer>

  );

}