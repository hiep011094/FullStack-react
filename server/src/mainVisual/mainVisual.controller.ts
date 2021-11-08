import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MainVisualService } from "./mainVisual.service";
import { MainVisualControllerBase } from "./base/mainVisual.controller.base";

@swagger.ApiTags("main-visuals")
@common.Controller("main-visuals")
export class MainVisualController extends MainVisualControllerBase {
  constructor(
    protected readonly service: MainVisualService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
