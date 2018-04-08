const dao = require('./base');
class Comments {
    constructor({id, announcement_id, owner}) {
        this.id = id;
        this.announcement_id = announcement_id;
        this.owner = owner;

    }
    printComment() {
        console.log('Name : ', this.announcement_id);
        console.log('Country : ', this.owner);
    }
}

class CommentsDao {
    /**
     * Create comments
     * @param announcement_id
     * @param owner
     * @return {Promise<*>}
     */
    static async create({ announcement_id, owner}) {
        return await dao.knex
            .insert({ announcement_id, owner })
            .from('Comments')
    }

    /**
     * Get list
     * @return {Promise<*>}
     */
    static async getList() {
        const comment_arr = await dao.knex
            .select()
            .from('Comments');
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
            .from('Comments')
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
    static async update(id, { announcement_id, owner}) {
        return dao.knex
            .update({ announcement_id, owner })
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
            .from('Comments')
            .where({ id })
            .del();
    }

    static async unlike(id){
        let comment;
        this.getById(id).then((comment)=>{
            ++comment.unlike_count;
            this.comment = comment;


        })
        return dao.knex
            .update(this.comment.id, {this.comment.announcement_id, this.comment.owner, this.comment.unlike_count};
            .from('Comments')
            .where({ id })
    }

    static async like(id){
        let comment;
        this.getById(id).then((comment)=>{
            ++comment.like_count;
            this.comment = comment;


        })
        return dao.knex
            .update(this.comment.id, {this.comment.announcement_id, this.comment.owner, this.comment.like_count});
    .from('Comments')
            .where({ id })
    }


}

module.exports = CommentsDaoDao;