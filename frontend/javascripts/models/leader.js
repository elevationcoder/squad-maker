class Leader {

    static all = [];

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.age = data.age;
        this.sex = data.sex;
        this.race = data.race;
        this.rank = data.rank;
        this.characters = data.characters;
        this.save();
    }

    save() {
        Leader.all.push(this);
    }
}