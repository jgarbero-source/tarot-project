# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


puts "Getting tarot data"

# def api_key
#     ENV["API_KEY"]
# end

all_cards = JSON.parse(File.read(Rails.root.join('db/tarot-images.json')))

cards_array = all_cards["cards"]

cards_array.each do |card|
    Card.create(
        name: card['name'],
        number: card['number'],
        arcana: card['arcana'],
        suit: card['suit'],
        img: "#{card["img"]}",
        fortune_telling: card['fortune_telling'],
        keywords: card['keywords'],
        light_meanings: card['meanings']['light'],
        shadow_meanings: card['meanings']['shadow'],
        archetype: card['Archetype'],
        hebrew: card['Hebrew Alphabet'],
        numerology: card['Numerology'],
        elemental: card['Elemental'],
        mythical: card['Mythical/Spiritual'],
        questions: card['Questions to Ask'],
        backImg: 'back.jpg',
        astrology: card['Astrology'],
        affirmation: card['Affirmation']
    )
end

