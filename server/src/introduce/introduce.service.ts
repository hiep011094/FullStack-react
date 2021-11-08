import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { IntroduceServiceBase } from "./base/introduce.service.base";

@Injectable()
export class IntroduceService extends IntroduceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
