import { PrismaClient } from "@prisma/client";

export class MovieService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getMovies(page: number, limit: number) {
    const skip = (page - 1) * limit;
    return this.prisma.movie.findMany({
      skip,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async getMovieById(id: string) {
    return this.prisma.movie.findUnique({
      where: {
        id,
      },
    });
  }

  async interactWithMovie(
    userId: string,
    movieId: string,
    type: "LIKE" | "REJECT"
  ) {

    try{
      const existingInteraction = await this.prisma.userMovieInteraction.findUnique({
        where:{
          userId_movieId:{
            userId,
            movieId
          }
        }
      })

      if(existingInteraction && existingInteraction.type === type){
        throw new Error('DUPLICATE_INTERACTION');
      }

      return this.prisma.userMovieInteraction.upsert({
        where: {
          userId_movieId: {
            userId,
            movieId,
          },
        },
        update: {
          type,
        },
        create: {
          userId,
          movieId,
          type,
        },
      });
    }
    catch(error: any){
      if (error.message === 'DUPLICATE_INTERACTION') {
        throw error;
      }
      throw new Error('Failed to save interaction');
    }


  }

  async getFavorites(userId: string, page: number, limit: number) {
    try {
      const favorites = await this.prisma.movie.findMany({
        where: {
          userInteractions: {
            some: {
              userId,
              type: "LIKE",
            },
          },
        },
        include: {
          userInteractions: {
            where: {
              userId,
              type: "LIKE",
            },
          },
        },
      });
      return favorites;
    } catch (error) {
      console.error("Error in getFavorites service:", error);
      throw error;
    }
  }

  async removeFavorite(userId: string, movieId: string) {
    return this.prisma.userMovieInteraction.delete({
      where: {
        userId_movieId: {
          userId,
          movieId,
        },
      },
    });
  }
}
