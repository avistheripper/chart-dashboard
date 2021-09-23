import { Subject } from 'rxjs';

import { Component, OnDestroy } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ChartBuildDialog } from '@shared/components/modal/chart-build-modal.component';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  $destroy: Subject<any> = new Subject();
  highcharts = Highcharts;
  chartsList: any[] = [];
  chartData: any = {};
  activeSensor = 'temperature'
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  buildConfig: any = {
    type: '',
    color: ''
  }
  sensorsMock: Array<Record<'type', string>> = [
    { type: 'temperature' },
    { type: 'humidity' },
    { type: 'light' },
  ];

  constructor(public dialog: MatDialog) { }

    openDialog(): void {
    const dialogRef = this.dialog.open(ChartBuildDialog, {
      width: '550px',
      data: {
        type: this.buildConfig.type,
        color: this.buildConfig.color,
        sensor: this.sensorsMock
      }
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if(result && this.chartsList.length < 4) {
          this.chartData = {
            color: result.chartColor,
            type: result.chartType,
            data: this.buildConfig.data,
            activeSensor: this.activeSensor
          }
          this.chartsList.push({chartId: this.chartsList.length + 1, chartData: this.chartData});
        } else {
          alert('Maximum number of charts reached')
        }

    });
  }

  cleanCharts() {
    this.chartsList = [];
    this.chartData = {};
    this.buildConfig = {};
  }

  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    const startDate = new Date(dateRangeStart.value);
    const endDate = new Date(dateRangeEnd.value);
    const getDaysArray = (s: Date, e: Date) => {
      for(var arr = [], dt = new Date(s); dt <= e; dt.setDate(dt.getDate() + 1)) {
          arr.push(new Date(dt));
      }
      return arr;
  };

  const daylist = getDaysArray(startDate, endDate)
    .map(v => ({
      date: v.toLocaleDateString('en-US'),
      sensor: { type: this.chartData.type, value: Math.floor(Math.random() * 50) },
    })).slice(0,10);

    this.buildConfig.data = daylist;
  }

  ngOnDestroy() {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
