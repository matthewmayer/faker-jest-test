const { faker } = require('@faker-js/faker');

console.log('Testing Faker with TypeScript...\n');

// Test basic faker methods
console.log('1. Person name:', faker.person.fullName());
console.log('2. Email:', faker.internet.email());
console.log('3. Company name:', faker.company.name());
console.log('4. Address:', faker.location.streetAddress());
console.log('5. Phone number:', faker.phone.number());

// Test array generation
console.log('\n6. Array of 3 names:');
const names: string[] = Array.from({ length: 3 }, () => faker.person.firstName());
console.log(names);

// Test object generation
console.log('\n7. User object:');
interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
    createdAt: Date;
}

const user: User = {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    createdAt: faker.date.past()
};
console.log(user);

console.log('\nFaker v10 TypeScript test completed successfully!');
