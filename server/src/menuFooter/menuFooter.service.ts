import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MenuFooterServiceBase } from "./base/menuFooter.service.base";

@Injectable()
export class MenuFooterService extends MenuFooterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
