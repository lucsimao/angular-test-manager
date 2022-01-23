import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestCaseComponent } from './test-case.component';

@NgModule({
  declarations: [TestCaseComponent],
  imports: [CommonModule],
  exports: [TestCaseComponent],
})
export class TestCaseModule {}
