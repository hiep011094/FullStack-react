import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MainVisualServiceBase } from "./base/mainVisual.service.base";

@Injectable()
export class MainVisualService extends MainVisualServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
