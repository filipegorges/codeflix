import ValueObject from '../value-object';

class StubValueObject extends ValueObject<string> {
}

describe('ValueObject', () => {
    it('shoudl set value', () => {
        const value = 'any_value';
        const valueObject = new StubValueObject(value);
        expect(valueObject.value).toBe(value);
    });
});