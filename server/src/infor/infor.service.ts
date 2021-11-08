import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { InforServiceBase } from "./base/infor.service.base";

@Injectable()
export class InforService extends InforServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
