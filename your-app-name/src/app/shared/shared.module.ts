
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio'
import { ChartBuildDialog } from './components/modal/chart-build-modal.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DashChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [ChartBuildDialog],
  imports: [CommonModule, MatRadioModule, MatButtonModule, MatDialogModule, FormsModule, MatCheckboxModule, NgxChartsModule],
  exports: [ChartBuildDialog],
})
export class SharedModule {}
