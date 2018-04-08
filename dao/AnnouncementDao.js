const dao = require('./base');
const Announcement = require('./Announcement');

class AnnouncementDao {
    /**
     * Create person
     * @param title
     * @param text
     * @param owner
     * @param owner_tel
     * @param count_views
     * @param region
     * @param country
     * @param img_url
     * @param status
     * @param due_date
     * @param date_time
     * @return {Promise<*>}
     */
    static async create({  title, text, owner, status, owner_phone, img_url, region, country, count_views, due_date }) {
        return await dao.knex
            .insert( {title, text, owner, status, owner_phone, img_url, region, country, count_views, due_date} )
            .from('announcement')
    }

    /**
     * Get list
     * @return {Promise<*>}
     */
    static async getList() {
        const announcement_arr = await dao.knex
            .select()
            .from('announcement');
        return announcement_arr.map(announcement => new Announcement(announcement));
    }

    /**
     * Get announcement by id
     * @param id
     * @return {Promise<*>}
     */
    static async getById(id) {
        const data = await dao.knex
            .select()
            .from('announcement')
            .where({ id })
            .first();
        return new Announcement(data);
    }

    // /**
    //  * Get announcement by title
    //  * @param title
    //  * @returns {Promise<*>}
    //  */
    static async getByTitle(title) {
        const announcement_arr = await dao.knex
            .select()
            .from('announcement')
            .where({ title })
        return announcement_arr.map(announcement => new Announcement(announcement));
    }


    /**
     * Update announcement by id
     * @param id
     * @param title
     * @param text
     * @param owner
     * @param owner_tel
     * @param count_views
     * @param region
     * @param country
     * @param img_url
     * @param status
     * @param due_date
     * @return {Promise<*>}
     */
    static async update(id, { title, text, owner, owner_tel, count_views, region, country, img_url, status, due_date, date_time}) {
        return dao.knex
            .update({ title, text, owner, owner_tel, count_views, region, country, img_url, status, due_date, date_time})
            .from('announcement')
            .where({ id })
    }

    /**
     * Delete announcement  by id
     * @param id
     * @return {Promise<*>}
     */
    static async delete(id) {
        // return dao.knex
        //   .from('announcement')
        //   .where({ id })
        //   .del();

        return dao.knex
            .update({  status:'deleted' })
            .from('announcement')
            .where({ id })

    }

    /**
     * Batch insert
     * @param person_arr
     * @return {Promise<boolean>}
     */
    static async batch(person_arr) {
        // person_arr.forEach(async ({name, date_of_birth, address, country, email}) => {
        //   await dao.knex
        //     .insert({ name, date_of_birth, address, country, email })
        //     .from('person')
        // });
        await dao.knex.batchInsert('person', person_arr, person_arr.length);
        return true;
    }

    /**
     * Get announcements by country
     * @param country
     * @return {Promise<*>}
     */
    static async getByCountry(country) {
        const announcement_arr = await dao.knex
            .select()
            .from('announcement')
            .where({ country })
        return announcement_arr.map(announcement => new Announcement(announcement));
    }

    // /**
    //  * get by min age
    //  * @param age {Number}
    //  * @return {Promise<*>}
    //  */
    // static async getByMinAge(age) {
    //   return dao.knex
    //     .select('id', 'name', dao.knex.raw(`date_part('year', age(date_of_birth)) as age`))
    //     .from('person')
    //     .whereRaw(`date_part('year', age(date_of_birth)) >= ${age}`)
    // }

}

module.exports = AnnouncementDao;
  
  