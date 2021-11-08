import { Module } from "@nestjs/common";
import { MenuModuleBase } from "./base/menu.module.base";
import { MenuService } from "./menu.service";
import { MenuController } from "./menu.controller";
import { MenuResolver } from "./menu.resolver";

@Module({
  imports: [MenuModuleBase],
  controllers: [MenuController],
  providers: [MenuService, MenuResolver],
  exports: [MenuService],
})
export class MenuModule {}
