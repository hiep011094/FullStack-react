import { Module } from "@nestjs/common";
import { HotLineModuleBase } from "./base/hotLine.module.base";
import { HotLineService } from "./hotLine.service";
import { HotLineController } from "./hotLine.controller";
import { HotLineResolver } from "./hotLine.resolver";

@Module({
  imports: [HotLineModuleBase],
  controllers: [HotLineController],
  providers: [HotLineService, HotLineResolver],
  exports: [HotLineService],
})
export class HotLineModule {}
