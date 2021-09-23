import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dash-chart',
  templateUrl: './chart.component.html'
})
export class DashChartComponent {
    @Input() chartConfig: {
        color: string,
        type: string,
        data: any[]
    } | undefined;

}