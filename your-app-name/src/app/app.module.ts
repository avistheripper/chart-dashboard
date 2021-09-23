import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@core/core.module';
import { HTTPReqResInterceptor } from '@core/services/http-req-res.interceptor';
import { environment } from '@env';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatRadioModule} from '@angular/material/radio'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    LoadingBarRouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    NgxChartsModule,
    HighchartsChartModule,
    MatRadioModule,
    FormsModule
  ],
  providers: [
    { provide: 'BASE_URL', useValue: environment.baseurl },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPReqResInterceptor,
      multi: true,
    },
    MatDatepickerModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
