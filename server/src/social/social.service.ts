import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SocialServiceBase } from "./base/social.service.base";

@Injectable()
export class SocialService extends SocialServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
