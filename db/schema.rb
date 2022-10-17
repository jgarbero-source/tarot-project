# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_17_191303) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cards", force: :cascade do |t|
    t.string "name"
    t.string "number"
    t.string "arcana"
    t.string "suit"
    t.string "img"
    t.text "fortune_telling", default: [], array: true
    t.text "keywords", default: [], array: true
    t.text "light_meanings", default: [], array: true
    t.text "shadow_meanings", default: [], array: true
    t.string "archetype"
    t.string "hebrew"
    t.string "numerology"
    t.string "elemental"
    t.string "mythical"
    t.text "questions", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "backImg"
    t.string "astrology"
    t.string "affirmation"
  end

  create_table "comments", force: :cascade do |t|
    t.text "content"
    t.integer "spread_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "spreads", force: :cascade do |t|
    t.integer "number"
    t.integer "user_id"
    t.integer "card_id", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
