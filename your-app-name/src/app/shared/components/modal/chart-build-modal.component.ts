import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

type Sensor = Record<'type' | 'value', string>;
export interface ModalData {
  color: string;
  type: string;
  sensors: Array<Sensor> | [];
}

@Component({
  selector: 'chart-build-modal',
  templateUrl: 'chart-build-modal.component.html',
})
export class ChartBuildDialog {
  chartConfig: any = {
    chartColor: 'pink',
    chartType: 'line',
    sensors: [],
  };

  constructor(public dialogRef: MatDialogRef<ChartBuildDialog>, @Inject(MAT_DIALOG_DATA) public data: ModalData) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onCheckoboxChange(s: Sensor) {
    if (this.chartConfig.sensors.includes(s)) {
      this.chartConfig.sensors.splice(this.chartConfig.sensors.indexOf(s), 1);
    } else {
      this.chartConfig.sensors.push(s);
    }
  }
}
