const jayson = require("jayson/promise");

// const server = jayson.Server({
//     static async addContact({ name, last_name, tel, email }) {
//         return dao.knex
//             .insert({ name, last_name, tel, email })
//             .from('contacts')
//     }
//
//     static async getList() {
//         return dao.knex
//             .select()
//             .from('Announscment');
//     }
// }
//
// });
server.http().listen(3000);
console.log("server is running");