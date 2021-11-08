import { Module } from "@nestjs/common";
import { InforModuleBase } from "./base/infor.module.base";
import { InforService } from "./infor.service";
import { InforController } from "./infor.controller";
import { InforResolver } from "./infor.resolver";

@Module({
  imports: [InforModuleBase],
  controllers: [InforController],
  providers: [InforService, InforResolver],
  exports: [InforService],
})
export class InforModule {}
