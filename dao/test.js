const AnnouncementDao = require('./AnnouncementDao');
AnnouncementDao.getList().then((s)=>{
    console.log(s)
})