import { Module } from "@nestjs/common";
import { MenuFooterModuleBase } from "./base/menuFooter.module.base";
import { MenuFooterService } from "./menuFooter.service";
import { MenuFooterController } from "./menuFooter.controller";
import { MenuFooterResolver } from "./menuFooter.resolver";

@Module({
  imports: [MenuFooterModuleBase],
  controllers: [MenuFooterController],
  providers: [MenuFooterService, MenuFooterResolver],
  exports: [MenuFooterService],
})
export class MenuFooterModule {}
