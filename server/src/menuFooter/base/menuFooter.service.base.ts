import { PrismaService } from "nestjs-prisma";
import { Prisma, MenuFooter } from "@prisma/client";

export class MenuFooterServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MenuFooterFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuFooterFindManyArgs>
  ): Promise<number> {
    return this.prisma.menuFooter.count(args);
  }

  async findMany<T extends Prisma.MenuFooterFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuFooterFindManyArgs>
  ): Promise<MenuFooter[]> {
    return this.prisma.menuFooter.findMany(args);
  }
  async findOne<T extends Prisma.MenuFooterFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuFooterFindUniqueArgs>
  ): Promise<MenuFooter | null> {
    return this.prisma.menuFooter.findUnique(args);
  }
  async create<T extends Prisma.MenuFooterCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuFooterCreateArgs>
  ): Promise<MenuFooter> {
    return this.prisma.menuFooter.create<T>(args);
  }
  async update<T extends Prisma.MenuFooterUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuFooterUpdateArgs>
  ): Promise<MenuFooter> {
    return this.prisma.menuFooter.update<T>(args);
  }
  async delete<T extends Prisma.MenuFooterDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuFooterDeleteArgs>
  ): Promise<MenuFooter> {
    return this.prisma.menuFooter.delete(args);
  }
}
