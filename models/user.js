/**
 * Created by rustam on 4/4/18.
 */
const BaseModel = require('./base');

class User extends BaseModel {
    attributes() {
        return [
            'id',
            'name',
            'last_name',
            'email',
            'phone',
            'birthday'
        ];
    }
}

module.exports = User;