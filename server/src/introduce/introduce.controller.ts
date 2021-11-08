import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IntroduceService } from "./introduce.service";
import { IntroduceControllerBase } from "./base/introduce.controller.base";

@swagger.ApiTags("introduces")
@common.Controller("introduces")
export class IntroduceController extends IntroduceControllerBase {
  constructor(
    protected readonly service: IntroduceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
