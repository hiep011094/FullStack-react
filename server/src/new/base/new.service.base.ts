import { PrismaService } from "nestjs-prisma";
import { Prisma, New } from "@prisma/client";

export class NewServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.NewFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.NewFindManyArgs>
  ): Promise<number> {
    return this.prisma.new.count(args);
  }

  async findMany<T extends Prisma.NewFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.NewFindManyArgs>
  ): Promise<New[]> {
    return this.prisma.new.findMany(args);
  }
  async findOne<T extends Prisma.NewFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.NewFindUniqueArgs>
  ): Promise<New | null> {
    return this.prisma.new.findUnique(args);
  }
  async create<T extends Prisma.NewCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.NewCreateArgs>
  ): Promise<New> {
    return this.prisma.new.create<T>(args);
  }
  async update<T extends Prisma.NewUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.NewUpdateArgs>
  ): Promise<New> {
    return this.prisma.new.update<T>(args);
  }
  async delete<T extends Prisma.NewDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.NewDeleteArgs>
  ): Promise<New> {
    return this.prisma.new.delete(args);
  }
}
