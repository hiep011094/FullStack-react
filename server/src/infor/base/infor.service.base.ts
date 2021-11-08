import { PrismaService } from "nestjs-prisma";
import { Prisma, Infor } from "@prisma/client";

export class InforServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.InforFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InforFindManyArgs>
  ): Promise<number> {
    return this.prisma.infor.count(args);
  }

  async findMany<T extends Prisma.InforFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InforFindManyArgs>
  ): Promise<Infor[]> {
    return this.prisma.infor.findMany(args);
  }
  async findOne<T extends Prisma.InforFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.InforFindUniqueArgs>
  ): Promise<Infor | null> {
    return this.prisma.infor.findUnique(args);
  }
  async create<T extends Prisma.InforCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InforCreateArgs>
  ): Promise<Infor> {
    return this.prisma.infor.create<T>(args);
  }
  async update<T extends Prisma.InforUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InforUpdateArgs>
  ): Promise<Infor> {
    return this.prisma.infor.update<T>(args);
  }
  async delete<T extends Prisma.InforDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.InforDeleteArgs>
  ): Promise<Infor> {
    return this.prisma.infor.delete(args);
  }
}
