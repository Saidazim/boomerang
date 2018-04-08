class Announcement {
    constructor({ title, text, owner, status, owner_phone, img_url, region, country, count_views, due_date, created_at }) {
        this.title = title;
        this.text = text;
        this.owner = owner;
        this.status = status;
        this.owner_phone = owner_phone;
        this.img_url = img_url;
        this.region = region;
        this.country = country;
        this.count_views = count_views;
        this.due_date = due_date;
        this.created_at = created_at;
    }
}

module.exports = Announcement;