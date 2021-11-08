import { Module } from "@nestjs/common";
import { SocialModuleBase } from "./base/social.module.base";
import { SocialService } from "./social.service";
import { SocialController } from "./social.controller";
import { SocialResolver } from "./social.resolver";

@Module({
  imports: [SocialModuleBase],
  controllers: [SocialController],
  providers: [SocialService, SocialResolver],
  exports: [SocialService],
})
export class SocialModule {}
