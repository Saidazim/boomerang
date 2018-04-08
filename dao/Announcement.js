class Announcement {
    constructor({id, title, text, owner, owner_tel, view_count, region, country, img_url, status, due_date, date_time}){
        this.id = id;
        this.text = text;
        this.owner = owner;
        this.owner_tel = owner_tel;
        this.view = view;
        this.view_count = view_count;
        this.region = region;
        this.country = country;
        this.img_url = img_url;
        this.status = status;
        this.due_date = due_date;
        this.date_time = date_time;
    }

}

module.exports = Announcement;