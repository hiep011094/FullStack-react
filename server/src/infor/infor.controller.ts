import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InforService } from "./infor.service";
import { InforControllerBase } from "./base/infor.controller.base";

@swagger.ApiTags("infors")
@common.Controller("infors")
export class InforController extends InforControllerBase {
  constructor(
    protected readonly service: InforService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
