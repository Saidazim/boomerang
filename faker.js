/**
 * Created by rustam on 4/1/18.
 */
const faker = require('faker');
const { writeFile } = require('fs');

let announcements = [];
let comments = [];

for (let i = 1; i <= 10; i++) {
    let time = new Date();
    announcements.push({
        title: faker.lorem.words(4),
        text: faker.lorem.paragraph(8),
        owner: faker.name.firstName() + " " + faker.name.lastName(),
        owner_phone: faker.phone.phoneNumber('+998(9#) ###-##-##'),
        status: faker.random.arrayElement(['active', 'disabled', 'deleted']),
        img_url: faker.image.imageUrl(),
        country: faker.address.country(),
        region: faker.address.state(),
        count_views: faker.random.number({ min: 0, max: 100 }),
        due_date: parseInt(time.getTime() / 1000) + faker.random.number({ min: 81600, max: 571200 }),
        created_at: parseInt(time.getTime() / 1000) - faker.random.number({ min: 0, max: 3600 })
    });
}
for (let i = 1; i <= 20; i++) {
    let time = new Date();
    comments.push({
        ann_id: faker.random.number({ min: 1, max: 10 }),
        text: faker.lorem.paragraph(2),
        owner_name: faker.name.firstName() + " " + faker.name.lastName(),
        like_count: faker.random.number({ min: 0, max: 20 }),
        dislike_count: faker.random.number({ min: 0, max: 100 }),
        timestamp: parseInt(time.getTime() / 1000) - faker.random.number({ min: 0, max: 3600 }),
        status: faker.random.arrayElement(['approved', 'rejected'])
    });
}
writeFile('./announcements.json', JSON.stringify(announcements), err => console.log(err));
writeFile('./comments.json', JSON.stringify(comments), err => console.log(err));
