const { faker } = require('@faker-js/faker');

export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
    updatedAt: Date;
}

export class UserFactory {
    static create(overrides: Partial<User> = {}): User {
        return {
            id: faker.string.uuid(),
            email: faker.internet.email(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            createdAt: faker.date.past(),
            updatedAt: faker.date.recent(),
            ...overrides
        };
    }

    static createMany(count: number, overrides: Partial<User> = {}): User[] {
        return Array.from({ length: count }, () => this.create(overrides));
    }

    static createWithSpecificEmail(email: string): User {
        return this.create({ email });
    }
}
