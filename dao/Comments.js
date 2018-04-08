const dao = require('./base');

class Commentsdao {

    static async CreateComment({announcement_id, owner}){
        return dao.knex.insert({announcement_id, owner}).from('Comments');
    }

    static async GetComment(){
        return dao.knex.select().from('Comments');
    }

    static async UpdateComment(id,{announcement_id, owner}){
        return dao.knex.update({announcement_id, owner}).from('Comments').where({id:id});
    }

    static async DeleteComment(id){
        return dao.knex.delete().from('Comments').where({id:id});
    }

    static async unlike(id, {unlike_count}){
        return dao.knex.update({unlike_count:unlike_count+1}).where({id:id});
    }

    static async like(id, {like_count}){
        return dao.knex.update({unlike_count: unlike_count-1}).where({id:id});
    }

}

module.exports = Commentsdao;