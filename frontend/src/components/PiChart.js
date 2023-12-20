import React from 'react';
import Chart from 'react-apexcharts';

class PiChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ['Agriculture', 'Urban Development', 'Forestery', 'Others'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      series: [44, 55, 41, 17]
    };
  }

  render() {
    return (
      <div className="donut-chart">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
      </div>
    );
  }
}

export default PiChart;
