import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { NewServiceBase } from "./base/new.service.base";

@Injectable()
export class NewService extends NewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
