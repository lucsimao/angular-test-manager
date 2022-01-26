import { TestCase } from '../models/test-case';

export const makeFakeTestCase = (): TestCase => ({
  name: 'any_name',
  description: 'any_description',
  preCondition: 'any_preCondition',
});
