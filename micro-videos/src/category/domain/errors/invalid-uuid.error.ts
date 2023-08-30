export default class InvalidUuidError extends Error {
    constructor(message: string) {
        super(message || `The uuid is invalid!`);
        this.name = 'InvalidUuidError';
    }
}