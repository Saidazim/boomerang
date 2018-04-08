/**
 * Created by rustam on 4/4/18.
 */
const BaseModel = require('./base');

class Announcement extends BaseModel {
    attributes() {
        return [
            'id',
            'title',
            'text',
            'owner',
            'owner_phone',
            'status',
            'region',
            'country',
            'img_url',
            'count_views',
            'due_date',
            'created_at'
        ];
    }
}

module.exports = Announcement;