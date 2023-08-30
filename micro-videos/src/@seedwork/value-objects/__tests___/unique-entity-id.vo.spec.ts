import UniqueEntityId from "../unique-entity-id.vo";

function spyValidateMethod(): jest.SpyInstance<any, unknown[], any> {
    return jest.spyOn(UniqueEntityId.prototype as any, 'validate');
}

afterEach(() => {
    jest.clearAllMocks();
});

describe('UniqueEntityId', () => {
    it('should throw error when uuid is invalid', () => {
        const validateSpy = spyValidateMethod();
        expect(() => {
            new UniqueEntityId('invalid-uuid');
        }).toThrow();
        expect(validateSpy).toHaveBeenCalled();
    });

    it('should accept a uuid passed in constructor', () => {
        const validateSpy = spyValidateMethod();
        const uuid = 'ea5e8bc7-d178-4351-aac2-6d615f89a8cf';
        const uniqueEntityId = new UniqueEntityId(uuid);
        expect(uniqueEntityId.id).toBe(uuid);
        expect(validateSpy).toHaveBeenCalled();
    });

    it('should generate a uuid when no uuid is passed in constructor', () => {
        const validateSpy = spyValidateMethod();
        const uniqueEntityId = new UniqueEntityId().value;
        expect(uniqueEntityId).toBeDefined();
        expect(validateSpy).toHaveBeenCalled();
    });
});