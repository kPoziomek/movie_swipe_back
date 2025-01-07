import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.upsert({
    where: { id: 'mock-user-123' },
    update: {},
    create: {
      id: 'mock-user-123',
      name: 'Demo User',
      email: 'demo@example.com',
    },
  })


  const movies = await prisma.movie.createMany({
    data: [
      {
        id: "1and3011",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
        title: "Avengers: Endgame",
        summary:
          "The Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
        rating: 8.4,
      },
      {
        id: "2301abc",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg",
        title: "Star Wars: Episode VII - The Force Awakens",
        summary:
          "A new generation of heroes rises to face the dark forces of the First Order.",
        rating: 7.9,
      },
      {
        id: "3def456",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
        title: "The Dark Knight",
        summary:
          "Batman faces his greatest challenge yet in the form of the Joker, who seeks to plunge Gotham into chaos.",
        rating: 9.0,
      },
      {
        id: "4ghi789",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
        title: "Inception",
        summary:
          "A thief who steals corporate secrets through dream-sharing technology is tasked with planting an idea into a target's subconscious.",
        rating: 8.8,
      },
      {
        id: "5jkl012",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
        title: "The Avengers",
        summary:
          "Earth's mightiest heroes come together to stop Loki and his alien army from enslaving humanity.",
        rating: 8.0,
      },
      {
        id: "6mno345",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png",
        title: "Titanic",
        summary:
          "A love story set against the ill-fated maiden voyage of the RMS Titanic.",
        rating: 7.8,
      },
      {
        id: "7pqr678",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg",
        title: "Jurassic Park",
        summary:
          "A theme park with genetically engineered dinosaurs becomes a nightmare when the creatures escape.",
        rating: 8.1,
      },
      {
        id: "8stu901",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
        title: "The Matrix",
        summary:
          "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
        rating: 8.7,
      },
      {
        id: "9vwx234",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
        title: "Forrest Gump",
        summary:
          "A man with a low IQ recounts his extraordinary life story and inadvertently influences several historical events.",
        rating: 8.8,
      },
      {
        id: "10yz567",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
        title: "Pulp Fiction",
        summary:
          "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        rating: 8.9,
      },
      {
        id: "11abc890",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
        title: "Fight Club",
        summary:
          "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much more.",
        rating: 8.8,
      },
      {
        id: "12def123",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png",
        title: "Gladiator",
        summary:
          "A former Roman General seeks justice after being betrayed by the corrupt emperor who murdered his family.",
        rating: 8.5,
      },
      {
        id: "13ghi456",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/0/03/Godfather_part_ii.jpg",
        title: "The Godfather: Part II",
        summary:
          "The early life and career of Vito Corleone is explored, alongside the continuation of Michael Corleone's story.",
        rating: 9.0,
      },
      {
        id: "14jkl789",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/1/1d/The_Shining_%281980%29_U.K._release_poster_-_The_tide_of_terror_that_swept_America_IS_HERE.jpg",
        title: "The Shining",
        summary:
          "A family heads to an isolated hotel for the winter, where a sinister presence influences the father into violence.",
        rating: 8.4,
      },
      {
        id: "15mno012",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
        title: "Interstellar",
        summary:
          "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        rating: 8.6,
      },
      {
        id: "16pqr345",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/9/9d/Disney_The_Lion_King_2019.jpg",
        title: "The Lion King",
        summary:
          "A young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
        rating: 8.5,
      },
      {
        id: "17stu678",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png",
        title: "Spirited Away",
        summary:
          "A young girl wanders into a world of gods, witches, and spirits, where she must work to free herself and her parents.",
        rating: 8.6,
      },
      {
        id: "18vwx901",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/d/d2/Back_to_the_Future.jpg",
        title: "Back to the Future",
        summary:
          "A teenager is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his eccentric scientist friend.",
        rating: 8.5,
      },
      {
        id: "19yz234",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/7/70/Terminator1984movieposter.jpg",
        title: "The Terminator",
        summary:
          "A human soldier is sent from the future to stop an indestructible cyborg killing machine from assassinating a young woman.",
        rating: 8.0,
      },
      {
        id: "20abc567",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png",
        title: "Blade Runner 2049",
        summary:
          "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard.",
        rating: 8.0,
      },
    ],
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
