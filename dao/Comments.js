const dao = require('./base');
class Comments {
    constructor({ann_id, owner_name, like_count, dislike_count, status, timestamp}) {
        this.ann_id = ann_id;
        this.owner_name = owner_name;
        this.like_count = like_count;
        this.dislike_count = dislike_count;
        this.status = status;
        this.timestamp = timestamp;
    }
}

class CommentsDao {
    /**
     * Create comments
     * @param ann_id
     * @param owner_name
     * @param status
     * @param timestamp
     * @return {Promise<*>}
     */
    static async create({ ann_id, owner_name }) {
        const status = "approved";
        const timestamp = parseInt((new Date()).getTime() / 1000);
        return await dao.knex
            .insert({ ann_id, owner_name, status, timestamp })
            .from('comments')
    }

    /**
     * Get list
     * @return {Promise<*>}
     */
    static async getList() {
        const comment_arr = await dao.knex
            .select()
            .from('comments');
        return comment_arr.map(comment => new Comments(comment));
    }

    /**
     * Get comment by id
     * @param id
     * @return {Promise<*>}
     */
    static async getById(id) {
        const data = await dao.knex
            .select()
            .from('comments')
            .where({ id })
            .first();
        return new Comments(data);
    }

    /**
     * Update comment by id
     * @param id
     * @param owner
     * @param announcement_id
     * @return {Promise<*>}
     */
    static async update(id, { ann_id, owner_name, status, timestamp}) {
        return dao.knex
            .update({ ann_id, owner_name,status, timestamp })
            .from('Comments')
            .where({ id })
    }

    /**
     * Delete comment  by id
     * @param id
     * @return {Promise<*>}
     */
    static async delete(id) {
        return dao.knex
            .from('comments')
            .where({ id })
            .del();
    }


    static async like(id){
        const comment = await dao.knex
            .select()
            .from('comments')
            .where({ id })
            .first();

        ++comment.like_count;

        return dao.knex
            .update({ like_count: comment.like_count})
            .from('comments')
            .where({ id })
    }

    static async dislike(id){
        const comment = await dao.knex
            .select()
            .from('comments')
            .where({ id })
            .first();

        ++comment.dislike_count;

        return dao.knex
            .update({ dislike_count: comment.dislike_count})
            .from('comments')
            .where({ id })
    }


}

module.exports = CommentsDao;