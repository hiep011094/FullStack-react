import { Module } from "@nestjs/common";
import { IntroduceModuleBase } from "./base/introduce.module.base";
import { IntroduceService } from "./introduce.service";
import { IntroduceController } from "./introduce.controller";
import { IntroduceResolver } from "./introduce.resolver";

@Module({
  imports: [IntroduceModuleBase],
  controllers: [IntroduceController],
  providers: [IntroduceService, IntroduceResolver],
  exports: [IntroduceService],
})
export class IntroduceModule {}
