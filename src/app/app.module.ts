import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TestCaseModule } from './test-case/test-case.module';
import { TestCaseStepModule } from './test-case-step/test-case-step.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TestCaseModule, TestCaseStepModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
