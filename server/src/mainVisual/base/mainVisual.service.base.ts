import { PrismaService } from "nestjs-prisma";
import { Prisma, MainVisual } from "@prisma/client";

export class MainVisualServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MainVisualFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MainVisualFindManyArgs>
  ): Promise<number> {
    return this.prisma.mainVisual.count(args);
  }

  async findMany<T extends Prisma.MainVisualFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MainVisualFindManyArgs>
  ): Promise<MainVisual[]> {
    return this.prisma.mainVisual.findMany(args);
  }
  async findOne<T extends Prisma.MainVisualFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MainVisualFindUniqueArgs>
  ): Promise<MainVisual | null> {
    return this.prisma.mainVisual.findUnique(args);
  }
  async create<T extends Prisma.MainVisualCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MainVisualCreateArgs>
  ): Promise<MainVisual> {
    return this.prisma.mainVisual.create<T>(args);
  }
  async update<T extends Prisma.MainVisualUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MainVisualUpdateArgs>
  ): Promise<MainVisual> {
    return this.prisma.mainVisual.update<T>(args);
  }
  async delete<T extends Prisma.MainVisualDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MainVisualDeleteArgs>
  ): Promise<MainVisual> {
    return this.prisma.mainVisual.delete(args);
  }
}
