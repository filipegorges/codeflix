import { validateSync } from "class-validator";
import ValidatorFieldsInterface, {
  FieldsErrors,
} from "./validator-fields-interface";

export class ClassValidatorFields<PropsValidated>
  implements ValidatorFieldsInterface<PropsValidated>
{
  errors: FieldsErrors = null;
  validatedData: PropsValidated = null;

  validate(data: any): boolean {
    const errors = validateSync(data);
    if (errors.length) {
      this.errors = {};
      errors.forEach((error) => {
        const field = error.property;
        this.errors[field] = Object.keys(error.constraints);
      });
    } else {
      this.validatedData = data;
    }
    return !errors.length;
  }
}
