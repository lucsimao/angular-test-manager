import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TestCaseModule } from './test-case/test-case.module';

@NgModule({
  declarations: [AppComponent, TestCaseModule],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
