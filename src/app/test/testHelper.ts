import { Step } from '../models/step';
import { TestCase } from '../models/test-case';

export const makeFakeTestCase = (): TestCase => ({
  name: 'any_name',
  description: 'any_description',
  preCondition: 'any_preCondition',
});

export const makeFakeStep = (): Step => ({
  action: 'any_action',
  expected: 'any_expected_result',
});
