import { v4 as uuid, validate as uuidValidate } from 'uuid';
import InvalidUuidError from './errors/invalid-uuid.error';

export default class UniqueEntityId {
    constructor(public readonly id?: string) {
        this.id = id || uuid();
        this.validate();
    }

    private validate() {
        const valid = uuidValidate(this.id);
        if (!valid) {
            throw new InvalidUuidError("");
        }
    }

}