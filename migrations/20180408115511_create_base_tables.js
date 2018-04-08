exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('announcement', function (table) {
            table.increments();
            table.string('title');
            table.text('text');
            table.string('owner');
            table.string('status');
            table.string('owner_phone');
            table.string('img_url');
            table.string('region');
            table.string('country');
            table.integer('count_views');
            table.integer('due_date');
            table.integer('created_at');
        }),
        knex.schema.createTable('comments', function (table) {
            table.increments();
            table.integer('ann_id').unsigned().index().references('id').inTable('announcement');
            table.text('text');
            table.string('owner_name');
            table.integer('like_count');
            table.integer('dislike_count');
            table.string('status');
            table.integer('timestamp');
        })
    ])
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('announcement'),
        knex.schema.dropTable('comments'),
    ])
};
