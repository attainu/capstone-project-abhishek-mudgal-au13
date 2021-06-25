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
    "rgba(247, 53, 12, 0.2)",
    "rgba(90, 247, 12, 0.2)",
    "rgba(12, 76, 247, 0.2)",
    "rgba(158, 12, 247, 0.2)",
    "rgba(247, 12, 136, 0.2)",
  ],
  borderColor: [
    "rgba(247, 53, 12, 1)",
    "rgba(90, 247, 12, 1)",
    "rgba(12, 76, 247, 1)",
    "rgba(158, 12, 247, 1)",
    "rgba(247, 12, 136, 1)",
  ],
  data: [12, 19, 3, 7]
};

Chart.propTypes = {
  labels: PropTypes.array,
  backgroundColor: PropTypes.array,
  borderColor: PropTypes.array,
  data: PropTypes.array,

};

export default Chart;
