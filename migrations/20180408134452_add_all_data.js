const anns = require('../announcements');
const comments = require('../comments');

exports.up = function (knex, Promise) {
    return Promise.all([
        knex('announcement').insert(anns),
        knex('comments').insert(comments)
    ])
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex('announcements').truncate(),
        knex('comments').truncate()
    ])
};
