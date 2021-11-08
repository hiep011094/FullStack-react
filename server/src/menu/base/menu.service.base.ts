import { PrismaService } from "nestjs-prisma";
import { Prisma, Menu } from "@prisma/client";

export class MenuServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MenuFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuFindManyArgs>
  ): Promise<number> {
    return this.prisma.menu.count(args);
  }

  async findMany<T extends Prisma.MenuFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuFindManyArgs>
  ): Promise<Menu[]> {
    return this.prisma.menu.findMany(args);
  }
  async findOne<T extends Prisma.MenuFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuFindUniqueArgs>
  ): Promise<Menu | null> {
    return this.prisma.menu.findUnique(args);
  }
  async create<T extends Prisma.MenuCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuCreateArgs>
  ): Promise<Menu> {
    return this.prisma.menu.create<T>(args);
  }
  async update<T extends Prisma.MenuUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuUpdateArgs>
  ): Promise<Menu> {
    return this.prisma.menu.update<T>(args);
  }
  async delete<T extends Prisma.MenuDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuDeleteArgs>
  ): Promise<Menu> {
    return this.prisma.menu.delete(args);
  }
}
