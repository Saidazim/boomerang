exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('announcement', function (table) {
            table.increments();
            table.string('name');
            table.string('last_name');
            table.string('email');
            table.timestamp('birthday');
            table.string('phone');
        }),
        knex.schema.createTable('comments', function (table) {
            table.increments();
            table.string('name');
            table.string('last_name');
            table.string('email');
            table.timestamp('birthday');
            table.string('phone');
        })
    ])
};

exports.down = function (knex, Promise) {

};
