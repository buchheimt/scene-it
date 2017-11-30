require 'open-uri'

temp = open('https://uinames.com/api/?amount=49&maxlen=20&ext&region=united+states').read
hash = JSON.parse temp


# 50 users
User.create({username: 'TylerB', email: 't@g.c', password: '123456'})

hash.each do |user|
  User.create(
    username: "#{user["name"]}#{user["surname"][0].upcase}#{user["credit_card"]["pin"].to_s[0..1]}",
    email: user["email"],
    password: user["password"]
  )
end

# 10 movies
Movie.create([
  {title: 'Thor: Ragnarok', description: "Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.", release_year: 2017},
  {title: 'Star Wars: The Force Awakens', description: "Thirty years after the defeat of the Galactic Empire, the galaxy faces a new threat from the evil Kylo Ren (Adam Driver) and the First Order. When a defector named Finn (John Boyega) crash-lands on a desert planet, he meets Rey (Daisy Ridley), a tough scavenger whose droid contains a top-secret map. Together, the young duo joins forces with Han Solo (Harrison Ford) to make sure the Resistance receives the intelligence concerning the whereabouts of Luke Skywalker (Mark Hamill), the last of the Jedi Knights.", release_year: 2015},
  {title: 'It', description: "Seven young outcasts in Derry, Maine, are about to face their worst nightmare -- an ancient, shape-shifting evil that emerges from the sewer every 27 years to prey on the town's children. Banding together over the course of one horrifying summer, the friends must overcome their own personal fears to battle the murderous, bloodthirsty clown known as Pennywise.", release_year: 2017},
  {title: 'The Dark Knight', description: "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.", release_year: 2008},
  {title: 'No Country for Old Men', description: "While out hunting, Llewelyn Moss (Josh Brolin) finds the grisly aftermath of a drug deal. Though he knows better, he cannot resist the cash left behind and takes it with him. The hunter becomes the hunted when a merciless killer named Chigurh (Javier Bardem) picks up his trail. Also looking for Moss is Sheriff Bell (Tommy Lee Jones), an aging lawman who reflects on a changing world and a dark secret of his own, as he tries to find and protect Moss.", release_year: 2007},
  {title: 'Fight Club', description: "A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention.", release_year: 1999},
  {title: 'Aliens', description: "After floating in space for 57 years, Lt. Ripley's (Sigourney Weaver) shuttle is found by a deep space salvage team. Upon arriving at LV-426, the marines find only one survivor, a nine year old girl named Newt (Carrie Henn). But even these battle-hardened marines with all the latest weaponry are no match for the hundreds of aliens that have invaded the colony.", release_year: 1986},
  {title: 'Inception', description: "Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone's mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb's every move.", release_year: 2010},
  {title: 'Guardians of the Galaxy', description: "Brash space adventurer Peter Quill (Chris Pratt) finds himself the quarry of relentless bounty hunters after he steals an orb coveted by Ronan, a powerful villain. To evade Ronan, Quill is forced into an uneasy truce with four disparate misfits: gun-toting Rocket Raccoon, treelike-humanoid Groot, enigmatic Gamora, and vengeance-driven Drax the Destroyer. But when he discovers the orb's true power and the cosmic threat it poses, Quill must rally his ragtag group to save the universe.", release_year: 2014},
  {title: 'John Wick', description: "Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his thugs steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef's father (Michael Nyqvist) -- John's former colleague -- puts a huge bounty on John's head.", release_year: 2014}
])

FILLER_POSTS = [
  {title: "Thoughts about the ending (SPOILERS)", content: "I can't decide if I loved it or hated it. It was just so out of left field!"},
  {title: "Do we want a sequel? Yay or nay?", content: "I'd definitely be on board, and they definitely left it open ended. Just no prequels... please no."},
  {title: "How is this movie not more popular?!", content: "I get that it did pretty well in theatres, but I'm just surprised more people haven't seen it. Any clue why?"},
  {title: "I can't believe (SPOILER) died!?", content: "What a bummer. I mean I saw it coming, but that doesn't make it any less disappointing"},
  {title: "Did anyone else hate that...(SPOILERS)", content: "How many plot threads they left hanging? I don't know if they're banking on a sequel or what, but watching this as a standalone film felt unfinished."},
  {title: "Favorite Character?", content: "I'm curious to see what everyone else thinks. So many options!"},
  {title: "Did anyone else catch those easter eggs?", content: "I'm always a sucker for them, but this movie in particular did a great job of weaving them in there without making it too distracting."},
  {title: "Surprised by the direction", content: "Did anyone else get a totally different vibe from the trailers? Not bad, this just wasn't what I was expecting at all."},
  {title: "Let's talk about THAT scene (SPOILERS, obviously)", content: "So, what did you guys think? I thought it felt a bit anticlimactic, but I can see why the went that route."},
  {title: "Can someone explain the ending?", content: "I just don't get what happened?! Everything seemed so predictable until that final scene, was it just me or did it totally come out of left field?"}
]

# 50 posts
FILLER_POSTS.each do |post|
  (1..10).to_a.sample(5).each do |i|
     Post.create(movie_id: i, user_id: rand(50) + 1, title: post[:title], content: post[:content])
  end
end

FILLER_COMMENTS = [
  "Eh I didn't hate it but I didn't like it as much as I thought I would",
  "Uhhh no... just no",
  "Couldn't agree more!",
  "Agree 100%",
  "I have to say I was pleasantly surprised!",
  "Eh I just didn't like any of the main characters.",
  "Everything just felt a bit bland to me, I just didn't find myself caring out all",
  "...What did I just watch?",
  "Yes!!",
  "It doesn't look like anything to me...",
  "I did NOT feel a sense of pride and accomplishment after watching",
  "No clue, just wanted to say I loved it haha",
  "I dunno but I think this might be my movie of the year",
  "Can't believe I spent money to watch this... yikes",
  "Good stuff!",
  "yawn",
  "I guess entertainingly bad beats boring... right?",
  "no way, nooooo way",
  "Definitely!",
  "A true classic (really)"
]

FILLER_COMMENTS.each do |comment|
  (1..50).to_a.sample(15).each do |i|
    Comment.create(post_id: i, user_id: rand(50) + 1, content: comment)
  end
end

FILLER_COMMENTS.each do |comment|
  (1..300).to_a.sample(10).each do |i|
    parent_comment = Comment.find(i)
    Comment.create(post_id: parent_comment.post.id, user_id: rand(50) + 1, content: comment, parent_id: parent_comment.id)
  end
end

# 600 comments total
FILLER_COMMENTS.each do |comment|
  (301..500).to_a.sample(5).each do |i|
    parent_comment = Comment.find(i)
    Comment.create(post_id: parent_comment.post.id, user_id: rand(50) + 1, content: comment, parent_id: parent_comment.id)
  end
end

User.all.each do |user|
  (1..10).to_a.sample(6).each do |i|
    MoviePoint.create(user_id: user.id, movie_id: i, value: [-1, 1].sample)
  end
  (1..50).to_a.sample(20).each do |i|
    PostPoint.create(user_id: user.id, post_id: i, value: [-1, 1].sample)
  end
  (1..600).to_a.sample(50).each do |i|
    CommentPoint.create(user_id: user.id, comment_id: i, value: [-1, 1].sample)
  end
end
