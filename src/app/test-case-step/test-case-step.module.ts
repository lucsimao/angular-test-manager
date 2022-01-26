import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestCaseStepComponent } from './test-case-step.component';

@NgModule({
  declarations: [TestCaseStepComponent],
  imports: [CommonModule],
  exports: [TestCaseStepComponent],
})
export class TestCaseStepModule {}
