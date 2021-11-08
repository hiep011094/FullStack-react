import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NewService } from "./new.service";
import { NewControllerBase } from "./base/new.controller.base";

@swagger.ApiTags("news")
@common.Controller("news")
export class NewController extends NewControllerBase {
  constructor(
    protected readonly service: NewService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
