import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HotLineService } from "./hotLine.service";
import { HotLineControllerBase } from "./base/hotLine.controller.base";

@swagger.ApiTags("hot-lines")
@common.Controller("hot-lines")
export class HotLineController extends HotLineControllerBase {
  constructor(
    protected readonly service: HotLineService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
