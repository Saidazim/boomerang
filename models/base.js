/**
 * Created by rustam on 4/4/18.
 */
const config = require('../knexfile');
const knex = require('knex')(config);
const _ = require('lodash');

class BaseModel {

    /**
     * create base model
     */
    constructor(data) {
        this.db = knex;
        this.init();
        this.load(data)
    }

    init() {
    }

    setAttribute(prop, value) {
        return this[prop] = value;
    }

    getAttribute(prop) {
        return this[prop];
    }

    /**
     * table name
     * @returns {string}
     */
    static tableName() {
        return _.snakeCase(this.className());
    }

    static className() {
        return this.name;
    }

    attributes() {
    }

    /**
     *
     * @returns {knex}
     */
    static find() {
        return knex(this.tableName());
    }

    static async findByCondition(condition) {
        const result = await knex(this.tableName()).select().where(condition);
        let models = [];
        for (let data of result) {
            const model = new this;
            model.load(data);
            models.push(model);
        }
        return models;
    }
    static async findAll() {
        const result = await knex(this.tableName()).select();
        let models = [];
        for (let data of result) {
            const model = new this;
            model.load(data);
            models.push(model);
        }
        return models;
    }

    static async findById(id) {
        //console.log(data);
        const model = new this;
        const data = await knex(this.tableName()).where('id', id);
        await model.load(data[0]);
        return model;
    }

    async load(data) {
        for (let att of this.attributes()) {
            if (_.has(data, att)/* && att !== 'id'*/) {
                console.log(_.get(data, att));
                this.setAttribute(att, _.get(data, att))
            }
        }
        return this;
    }

    getAttributes() {
        let attributes = {};
        for (let attribute of this.attributes()) {
            attributes[attribute] = this[attribute];
        }
        return attributes;
    }

    async save() {
        try {
            const self = this;
            if (_.has(this, 'id') && _.isInteger(this.getAttribute('id'))) {
                return await knex(this.constructor.tableName()).where('id', this.getAttribute('id')).update(this.getAttributes(), 'id')
            } else {
                return await knex(this.constructor.tableName()).insert(this.getAttributes(), 'id')
            }
        } catch (err) {
            throw new Error(err)
        }
    }

    async remove() {
        return await knex(this.constructor.tableName()).where('id', this.getAttribute('id')).del();
    }
}

module.exports = BaseModel;