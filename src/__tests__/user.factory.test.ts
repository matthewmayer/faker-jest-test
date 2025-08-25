import { UserFactory, User } from '@/factories/user.factory';

describe('UserFactory', () => {
    describe('create', () => {
        it('should create a user with default values', () => {
            const user = UserFactory.create();
            
            expect(user).toBeDefined();
            expect(user.id).toBeDefined();
            expect(user.email).toBeDefined();
            expect(user.firstName).toBeDefined();
            expect(user.lastName).toBeDefined();
            expect(user.createdAt).toBeInstanceOf(Date);
            expect(user.updatedAt).toBeInstanceOf(Date);
        });

        it('should create a user with overrides', () => {
            const overrides = {
                email: 'test@example.com',
                firstName: 'John',
                lastName: 'Doe'
            };
            
            const user = UserFactory.create(overrides);
            
            expect(user.email).toBe(overrides.email);
            expect(user.firstName).toBe(overrides.firstName);
            expect(user.lastName).toBe(overrides.lastName);
        });
    });

    describe('createMany', () => {
        it('should create multiple users', () => {
            const count = 5;
            const users = UserFactory.createMany(count);
            
            expect(users).toHaveLength(count);
            users.forEach(user => {
                expect(user).toBeDefined();
                expect(user.id).toBeDefined();
            });
        });

        it('should create multiple users with overrides', () => {
            const count = 3;
            const overrides = { firstName: 'Jane' };
            const users = UserFactory.createMany(count, overrides);
            
            expect(users).toHaveLength(count);
            users.forEach(user => {
                expect(user.firstName).toBe(overrides.firstName);
            });
        });
    });

    describe('createWithSpecificEmail', () => {
        it('should create a user with a specific email', () => {
            const email = 'specific@example.com';
            const user = UserFactory.createWithSpecificEmail(email);
            
            expect(user.email).toBe(email);
        });
    });
});
