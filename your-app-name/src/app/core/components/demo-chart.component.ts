import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-demo-chart',
  templateUrl: './demo-chart.component.html',
})
export class DemoChartComponent implements OnInit {
  @Input() chartConfig: {
    color: string;
    type: string;
    data: any[];
    activeSensor: string;
  } = {
    color: 'string',
    type: 'string',
    data: [],
    activeSensor: '',
  };
  highcharts = Highcharts;
  chartOptions: Highcharts.Options;

  ngOnInit() {
    this.chartOptions =
      this.chartConfig.type === 'line'
        ? {
            title: {
              text: `${this.chartConfig.activeSensor} sensor data starting ${this.chartConfig.data[0].date}`,
            },
            xAxis: {
              title: {
                text: 'Days count',
              },
              categories: this.chartConfig.data.map((i) => i.date),
            },
            yAxis: {
              title: {
                text: this.chartConfig.activeSensor,
              },
            },
            series: [
              {
                data: this.chartConfig?.data.map((i) => i.sensor.value),
                type: 'spline',
                color: this.chartConfig.color,
              },
            ],
          }
        : {
            chart: {
              type: 'bar',
            },
            title: {
              text: `${this.chartConfig.activeSensor} sensor data starting ${this.chartConfig.data[0].date}`,
            },
            xAxis: {
              categories: this.chartConfig.data.map((i) => i.date),
              title: {
                text: null,
              },
            },
            yAxis: {
              min: 0,
              title: {
                text: 'Values',
                align: 'high',
              },
              labels: {
                overflow: 'justify',
              },
            },
            plotOptions: {
              bar: {
                dataLabels: {
                  enabled: true,
                },
              },
            },
            credits: {
              enabled: false,
            },
            series: [
              {
                data: this.chartConfig?.data.map((i) => i.sensor.value),
                type: 'bar',
                color: this.chartConfig.color,
                name: this.chartConfig.activeSensor,
              },
            ],
          };
  }
}
