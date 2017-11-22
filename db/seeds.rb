Movie.create([
    {title: 'Thor: Ragnarok', description: "Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.", release_year: 2017},
    {title: 'Star Wars: The Force Awakens', description: "Thirty years after the defeat of the Galactic Empire, the galaxy faces a new threat from the evil Kylo Ren (Adam Driver) and the First Order. When a defector named Finn (John Boyega) crash-lands on a desert planet, he meets Rey (Daisy Ridley), a tough scavenger whose droid contains a top-secret map. Together, the young duo joins forces with Han Solo (Harrison Ford) to make sure the Resistance receives the intelligence concerning the whereabouts of Luke Skywalker (Mark Hamill), the last of the Jedi Knights.", release_year: 2015},
    {title: 'It', description: "Seven young outcasts in Derry, Maine, are about to face their worst nightmare -- an ancient, shape-shifting evil that emerges from the sewer every 27 years to prey on the town's children. Banding together over the course of one horrifying summer, the friends must overcome their own personal fears to battle the murderous, bloodthirsty clown known as Pennywise.", release_year: 2017},
    {title: 'John Wick: Chapter 2', description: "Retired super-assassin John Wick's plans to resume a quiet civilian life are cut short when Italian gangster Santino D'Antonio shows up on his doorstep with a gold marker, compelling him to repay past favors. Ordered by Winston, kingpin of secret assassin society The Continental, to respect the organization's ancient code, Wick reluctantly accepts the assignment to travel to Rome to take out D'Antonio's sister, the ruthless capo atop the Italian Camorra crime syndicate.", release_year: 2017},
  ])

  Post.create([
    {content: "Thoughts about the ending (SPOILERS)", movie_id: 1, user_id: 1},
    {content: "Thoughts about the ending (SPOILERS)", movie_id: 2, user_id: 1},
    {content: "Thoughts about the ending (SPOILERS)", movie_id: 3, user_id: 1},
    {content: "This was way better than I expected!", movie_id: 1, user_id: 1},
    {content: "This was way better than I expected!", movie_id: 2, user_id: 1},
    {content: "Did anyone else hate that...(SPOILERS)", movie_id: 1, user_id: 1},
    {content: "Did anyone else hate that...(SPOILERS)", movie_id: 4, user_id: 1},
    {content: "How is this movie not more popular?!", movie_id: 2, user_id: 1},
    {content: "How is this movie not more popular?!", movie_id: 3, user_id: 1},
    {content: "Do we want a sequel? Yay or nay?", movie_id: 2, user_id: 1},
    ])
