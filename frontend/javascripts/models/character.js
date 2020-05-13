class Character {

    static all =[]

    constructor({name, age, weight, height, sex, race, klass, leaders}) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.sex = sex;
        this.race = race;
        this.class = klass
        this.leaders = leaders
        this.save();

    }

    save(){
        Character.all.push(this)
    }

    // charInfo() {
    //     return 
    // }
}




















// t.string "name"
//     t.integer "age"
//     t.integer "weight"
//     t.float "height"
//     t.string "sex"
//     t.string "race"
//     t.string "klass"