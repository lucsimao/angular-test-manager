import { Component, Input } from '@angular/core';

import { Step } from '../models/step';

@Component({
  selector: 'app-test-case-step',
  templateUrl: './test-case-step.component.html',
  styleUrls: ['./test-case-step.component.scss'],
})
export class TestCaseStepComponent {
  @Input() public step!: Step;
}
