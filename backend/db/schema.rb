# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_21_231445) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "character_leaders", force: :cascade do |t|
    t.bigint "character_id", null: false
    t.bigint "leader_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_id"], name: "index_character_leaders_on_character_id"
    t.index ["leader_id"], name: "index_character_leaders_on_leader_id"
  end

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.integer "weight"
    t.float "height"
    t.string "sex"
    t.string "race"
    t.string "klass"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "review"
  end

  create_table "leaders", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.string "sex"
    t.string "race"
    t.string "rank"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "character_leaders", "characters"
  add_foreign_key "character_leaders", "leaders"
end
