class Character {

    static all =[]

    constructor(data) {
        this.name = data.name;
        this.age = data.age;
        this.weight = data.weight;
        this.height = data.height;
        this.sex = data.sex;
        this.race = data.race;
        this.class = data.klass
        this.save();
    }

    save(){
        Character.all.push(this)
    }
}




















// t.string "name"
//     t.integer "age"
//     t.integer "weight"
//     t.float "height"
//     t.string "sex"
//     t.string "race"
//     t.string "klass"