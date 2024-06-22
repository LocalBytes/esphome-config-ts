export class InvalidConfigError extends Error {
    private config: null | object;

    constructor(message: string, config: null | object = null) {
        super(message);
        this.name = "InvalidConfig";
        this.config = config;
    }
}
