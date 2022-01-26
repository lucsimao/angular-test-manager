import { TestBed } from '@angular/core/testing';
import { TestCase } from './models/test-case';
import { TestCaseComponent } from './test-case.component';

const makeSut = async () => {
  await TestBed.configureTestingModule({}).compileComponents();

  const fixture = TestBed.createComponent(TestCaseComponent);
  const sut = fixture.componentInstance;

  return { sut, fixture };
};

const makeFakeTestCase = (): TestCase => ({
  name: 'any_name',
  description: 'any_description',
  preCondition: 'any_preCondition',
});

describe(TestCaseComponent.name, () => {
  it('Should create Fixture', async () => {
    const { sut } = await makeSut();

    expect(sut).toBeTruthy();
  });

  describe('Dom', () => {
    it('Should display TestCase labels when page is loaded', async () => {
      const validLabels: {
        [key: string]: string;
      } = {
        ['.test-case-name-label']: 'Nome',
        ['.test-case-description-label']: 'Descrição',
        ['.test-case-precondition-label']: 'Pré-Condição',
      };

      const { fixture } = await makeSut();
      for (const label of Object.keys(validLabels)) {
        const element: HTMLElement = fixture.nativeElement.querySelector(label);
        const result = element?.textContent?.trim();

        expect(element).withContext(`${label}`).toBeTruthy();
        expect(result)
          .withContext(`${label}`)
          .toEqual(String(validLabels[label]));
      }
    });

    it('Should display TestCase when page is loaded', async () => {
      const { sut, fixture } = await makeSut();
      sut.testCase = makeFakeTestCase();
      fixture.detectChanges();
      const validFields: {
        [key: string]: string;
      } = {
        ['.test-case-name']: makeFakeTestCase().name,
        ['.test-case-description']: makeFakeTestCase().description,
        ['.test-case-precondition']: makeFakeTestCase().preCondition,
      };

      for (const field of Object.keys(validFields)) {
        const element: HTMLElement = fixture.nativeElement.querySelector(field);
        const result = element?.textContent?.trim();

        expect(element).withContext(`${field}`).toBeTruthy();
        expect(result)
          .withContext(`${field}`)
          .toEqual(String(validFields[field]));
      }
    });
  });
});
