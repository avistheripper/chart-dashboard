import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { DemoChartComponent } from './components/demo-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [DemoChartComponent],
  imports: [CommonModule, HighchartsChartModule],
  exports: [DemoChartComponent],
})
export class CoreModule {
  /* make sure CoreModule is imported only by the AppModule and noone else */
  constructor(@Optional() @SkipSelf() presentInParent: CoreModule) {
    if (presentInParent) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
