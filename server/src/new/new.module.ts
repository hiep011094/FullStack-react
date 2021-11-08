import { Module } from "@nestjs/common";
import { NewModuleBase } from "./base/new.module.base";
import { NewService } from "./new.service";
import { NewController } from "./new.controller";
import { NewResolver } from "./new.resolver";

@Module({
  imports: [NewModuleBase],
  controllers: [NewController],
  providers: [NewService, NewResolver],
  exports: [NewService],
})
export class NewModule {}
