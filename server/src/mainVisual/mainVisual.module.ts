import { Module } from "@nestjs/common";
import { MainVisualModuleBase } from "./base/mainVisual.module.base";
import { MainVisualService } from "./mainVisual.service";
import { MainVisualController } from "./mainVisual.controller";
import { MainVisualResolver } from "./mainVisual.resolver";

@Module({
  imports: [MainVisualModuleBase],
  controllers: [MainVisualController],
  providers: [MainVisualService, MainVisualResolver],
  exports: [MainVisualService],
})
export class MainVisualModule {}
