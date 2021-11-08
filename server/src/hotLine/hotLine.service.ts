import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { HotLineServiceBase } from "./base/hotLine.service.base";

@Injectable()
export class HotLineService extends HotLineServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
