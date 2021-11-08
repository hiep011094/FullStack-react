import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SocialService } from "./social.service";
import { SocialControllerBase } from "./base/social.controller.base";

@swagger.ApiTags("socials")
@common.Controller("socials")
export class SocialController extends SocialControllerBase {
  constructor(
    protected readonly service: SocialService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
