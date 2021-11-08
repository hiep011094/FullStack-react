import { PrismaService } from "nestjs-prisma";
import { Prisma, Introduce } from "@prisma/client";

export class IntroduceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.IntroduceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.IntroduceFindManyArgs>
  ): Promise<number> {
    return this.prisma.introduce.count(args);
  }

  async findMany<T extends Prisma.IntroduceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.IntroduceFindManyArgs>
  ): Promise<Introduce[]> {
    return this.prisma.introduce.findMany(args);
  }
  async findOne<T extends Prisma.IntroduceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.IntroduceFindUniqueArgs>
  ): Promise<Introduce | null> {
    return this.prisma.introduce.findUnique(args);
  }
  async create<T extends Prisma.IntroduceCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.IntroduceCreateArgs>
  ): Promise<Introduce> {
    return this.prisma.introduce.create<T>(args);
  }
  async update<T extends Prisma.IntroduceUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.IntroduceUpdateArgs>
  ): Promise<Introduce> {
    return this.prisma.introduce.update<T>(args);
  }
  async delete<T extends Prisma.IntroduceDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.IntroduceDeleteArgs>
  ): Promise<Introduce> {
    return this.prisma.introduce.delete(args);
  }
}
