/**
 * Created by rustam on 4/4/18.
 */
const BaseModel = require('./base');

class Comments extends BaseModel {
    attributes() {
        return [
            'id',
            'ann_id',
            'text',
            'owner_name',
            'like_count',
            'dislike_count',
            'status',
            'timestamp'
        ];
    }
}

module.exports = Comments;