import React from "react";
import PropTypes from "prop-types";
import { Doughnut } from "react-chartjs-2";

function Chart(props) {
  return (
    <div>
      <Doughnut
        data={{
          labels: props.labels,
          datasets: [
            {
              label: "# of Votes",
              data: props.data,
              backgroundColor: props.backgroundColor,
              borderColor: props.borderColor,
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
}

Chart.defaultProps = {
  labels: ["Red", "Blue", "Green", "Indigo"],
  backgroundColor: [
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
  ],
  borderColor: [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
  ],
  data: [12, 19, 3, 7]
};

Chart.propTypes = {
  labels: PropTypes.array,
  backgroundColor: PropTypes.array,
  borderColor: PropTypes.array,
  data: PropTypes.array
};

export default Chart;
