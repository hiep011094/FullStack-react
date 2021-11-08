import { PrismaService } from "nestjs-prisma";
import { Prisma, Social } from "@prisma/client";

export class SocialServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SocialFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SocialFindManyArgs>
  ): Promise<number> {
    return this.prisma.social.count(args);
  }

  async findMany<T extends Prisma.SocialFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SocialFindManyArgs>
  ): Promise<Social[]> {
    return this.prisma.social.findMany(args);
  }
  async findOne<T extends Prisma.SocialFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SocialFindUniqueArgs>
  ): Promise<Social | null> {
    return this.prisma.social.findUnique(args);
  }
  async create<T extends Prisma.SocialCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SocialCreateArgs>
  ): Promise<Social> {
    return this.prisma.social.create<T>(args);
  }
  async update<T extends Prisma.SocialUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SocialUpdateArgs>
  ): Promise<Social> {
    return this.prisma.social.update<T>(args);
  }
  async delete<T extends Prisma.SocialDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SocialDeleteArgs>
  ): Promise<Social> {
    return this.prisma.social.delete(args);
  }
}
