# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Character.create([
#     {name: "Roak", age: 35, weight: 220, height: 6.0, sex: "Male", race: "Orc", klass: "Warrior"},
#     {name: "Lara", age: 24, weight: 130, height: 5.5, sex: "Female", race: "Human", klass: "Assassin"},
#     {name: "Neerah", age: 120, weight: 125, height: 5.0, sex: "Female", race: "Elf", klass: "Paladin"},
#     {name: "Linshkoma", age: 88, weight: 480, height: 7.5, sex: "Male", race: "Troll", klass: "Healer"},
#     {name: "Hanover", age: 42, weight: 170, height: 3.5, sex: "Male", race: "Dwarf", klass: "Druid"},
# ])

Leader.create([
    {name: "Torn", age: 77, sex: "Male", race: "Troll", rank: "Head of Militia"},
    {name: "Neyla", age: 147, sex: "Female", race: "Elf", rank: "Head of Archery"},
    {name: "Hantariff", age: 88, sex: "Male", race: "Dwarf", rank: "Regiment Commander"},
    {name: "Serena", age: 48, sex: "Female", race: "Human", rank: "Section Commander"},
    {name: "Alistair", age: 238, sex: "Male", race: "Dark Elf", rank: "Grand Sorcerer"},
])

