import React from 'react';
import Chart from 'react-apexcharts';

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: 'distributed-column-chart',
          type: 'bar',
          height: 350,
        },
        xaxis: {
          categories: ['water level', 'soil quality', 'elevation'],
        },
      },
      series: [
        {
          name: 'Sales',
          data: [6, 3.5, 6],
        },
      ],
    };
  }

  render() {
    return (
      <div className="distributed-column-chart">
        <Chart options={this.state.options} series={this.state.series} type="bar" height={350} />
      </div>
    );
  }
}
export default Test;
