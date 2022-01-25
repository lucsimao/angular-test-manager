import { Component, Input } from '@angular/core';

import { TestCase } from './models/test-case';

@Component({
  selector: 'app-test-case',
  templateUrl: './test-case.component.html',
  styleUrls: ['./test-case.component.scss'],
})
export class TestCaseComponent {
  @Input() public testCase!: TestCase;
}
