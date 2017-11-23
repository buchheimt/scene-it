FILLER_TEXTS = [
  'Lorem ipsum dolor sit amet, ei vix molestie consetetur argumentum. At est dolorem pertinacia. Congue labore persequeris his id, ut idque congue vix. Usu te dictas integre, ius saepe epicurei ne. Et pri tibique forensibus consetetur.',
  'Eam ad velit ancillae sententiae. Molestie repudiandae sed ei. Posse facilisis suavitate eu duo. Ne utinam graeco ius, quo eu quem tempor persius, epicurei efficiantur no eos.',
  'Putant voluptua consectetuer et mea, ferri singulis usu ad, ei sit amet aperiam percipitur. An sea atqui populo volutpat. Nibh dolorem volumus pri no, graeci dolorem vulputate ut mel. Et mei sint solet, vis ad alterum placerat delicata. Nec commodo democritum mnesarchum ea, mei ei eros vocent mandamus.',
  'Id duo mutat vocent delicata, pro agam nihil vitae te. Per meis philosophia no, eu eum minim nonumes. Iriure mediocritatem et sed, his dicta similique complectitur no, nominati sadipscing at nec. Vix munere aperiri gubergren ut, aeque sadipscing pri ad. Te mutat feugait mel, no vide summo eum. Graece iuvaret usu ea, sea ei malis harum, feugiat omnesque et nam. Vel vocent labitur urbanitas in.',
  'Ex vis graeco impedit nusquam, quo utroque veritus denique et. Cum bonorum molestie signiferumque ad, vix idque ullum concludaturque cu, eos at veritus ocurreret constituto. Ea dicta dicam vel. Agam habemus vim ne, ei mundi mnesarchum mel, ei sed novum oblique albucius. Alia veri detracto per no.',
]

Movie.create([
    {title: 'Thor: Ragnarok', description: "Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.", release_year: 2017},
    {title: 'Star Wars: The Force Awakens', description: "Thirty years after the defeat of the Galactic Empire, the galaxy faces a new threat from the evil Kylo Ren (Adam Driver) and the First Order. When a defector named Finn (John Boyega) crash-lands on a desert planet, he meets Rey (Daisy Ridley), a tough scavenger whose droid contains a top-secret map. Together, the young duo joins forces with Han Solo (Harrison Ford) to make sure the Resistance receives the intelligence concerning the whereabouts of Luke Skywalker (Mark Hamill), the last of the Jedi Knights.", release_year: 2015},
    {title: 'It', description: "Seven young outcasts in Derry, Maine, are about to face their worst nightmare -- an ancient, shape-shifting evil that emerges from the sewer every 27 years to prey on the town's children. Banding together over the course of one horrifying summer, the friends must overcome their own personal fears to battle the murderous, bloodthirsty clown known as Pennywise.", release_year: 2017},
    {title: 'John Wick: Chapter 2', description: "Retired super-assassin John Wick's plans to resume a quiet civilian life are cut short when Italian gangster Santino D'Antonio shows up on his doorstep with a gold marker, compelling him to repay past favors. Ordered by Winston, kingpin of secret assassin society The Continental, to respect the organization's ancient code, Wick reluctantly accepts the assignment to travel to Rome to take out D'Antonio's sister, the ruthless capo atop the Italian Camorra crime syndicate.", release_year: 2017},
  ])

  Post.create([
    {title: "Thoughts about the ending (SPOILERS)", content: FILLER_TEXTS.sample, movie_id: 1, user_id: 1},
    {title: "Thoughts about the ending (SPOILERS)", content: FILLER_TEXTS.sample, movie_id: 2, user_id: 1},
    {title: "Thoughts about the ending (SPOILERS)", content: FILLER_TEXTS.sample, movie_id: 3, user_id: 1},
    {title: "This was way better than I expected!", content: FILLER_TEXTS.sample, movie_id: 1, user_id: 1},
    {title: "This was way better than I expected!", content: FILLER_TEXTS.sample, movie_id: 2, user_id: 1},
    {title: "Did anyone else hate that...(SPOILERS)", content: FILLER_TEXTS.sample, movie_id: 1, user_id: 1},
    {title: "Did anyone else hate that...(SPOILERS)", content: FILLER_TEXTS.sample, movie_id: 4, user_id: 1},
    {title: "How is this movie not more popular?!", content: FILLER_TEXTS.sample, movie_id: 2, user_id: 1},
    {title: "How is this movie not more popular?!", content: FILLER_TEXTS.sample, movie_id: 3, user_id: 1},
    {title: "Do we want a sequel? Yay or nay?", content: FILLER_TEXTS.sample, movie_id: 2, user_id: 1},
    ])

20.times do
  Comment.create(content: FILLER_TEXTS.sample, user_id: rand(4) + 1, post_id: rand(10) + 1)
end
