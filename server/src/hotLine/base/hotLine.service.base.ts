import { PrismaService } from "nestjs-prisma";
import { Prisma, HotLine } from "@prisma/client";

export class HotLineServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.HotLineFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HotLineFindManyArgs>
  ): Promise<number> {
    return this.prisma.hotLine.count(args);
  }

  async findMany<T extends Prisma.HotLineFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HotLineFindManyArgs>
  ): Promise<HotLine[]> {
    return this.prisma.hotLine.findMany(args);
  }
  async findOne<T extends Prisma.HotLineFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.HotLineFindUniqueArgs>
  ): Promise<HotLine | null> {
    return this.prisma.hotLine.findUnique(args);
  }
  async create<T extends Prisma.HotLineCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HotLineCreateArgs>
  ): Promise<HotLine> {
    return this.prisma.hotLine.create<T>(args);
  }
  async update<T extends Prisma.HotLineUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HotLineUpdateArgs>
  ): Promise<HotLine> {
    return this.prisma.hotLine.update<T>(args);
  }
  async delete<T extends Prisma.HotLineDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.HotLineDeleteArgs>
  ): Promise<HotLine> {
    return this.prisma.hotLine.delete(args);
  }
}
