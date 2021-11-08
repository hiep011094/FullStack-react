import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MenuFooterService } from "./menuFooter.service";
import { MenuFooterControllerBase } from "./base/menuFooter.controller.base";

@swagger.ApiTags("menu-footers")
@common.Controller("menu-footers")
export class MenuFooterController extends MenuFooterControllerBase {
  constructor(
    protected readonly service: MenuFooterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
