const jayson = require("jayson/promise");
const announcements= require("methods/Announcements");
const annDao= require("dao/AnnouncementDao");

const server = jayson.Server({

    addAnn: async () => await annDao.create({title, text, owner, owner_phone, counts_view, region, country, img_url, status, due_date, created_at}),
    getListAnn: async () => await annDao.getList(),
    updateAnn: async () => await annDao.update(id, title, text, owner, owner_phone, counts_view, region, country, img_url, status, due_date, created_at),
    deleteAnn: async () => await annDao.delete(id),
        // getByTitle: async (id) => {
        // let toUpdate = await annDao.getByTitle(title).count_views + 1;
        // await annDao.update(title, toUpdate);
        // return annDao.getByTitle()}
    // update: async
});

server.http().listen(3000);
console.log("server is running");