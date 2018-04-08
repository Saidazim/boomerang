/**
 * Created by rustam on 4/1/18.
 */
const faker = require('faker');
const {writeFile} = require('fs');

let users = [];
for (let i = 0; i <= 10; i++) {
    users.push({
        name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        phone: faker.phone.phoneNumber('+998(9#) ###-##-##'),
        email: faker.internet.email(),
        birthday: parseInt(faker.date.past(20).getTime() / 1000),
    });
}
writeFile('./users.json', JSON.stringify(users), err => console.log(err));
