import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MenuFooterResolverBase } from "./base/menuFooter.resolver.base";
import { MenuFooter } from "./base/MenuFooter";
import { MenuFooterService } from "./menuFooter.service";

@graphql.Resolver(() => MenuFooter)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MenuFooterResolver extends MenuFooterResolverBase {
  constructor(
    protected readonly service: MenuFooterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
