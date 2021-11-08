import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MainVisualResolverBase } from "./base/mainVisual.resolver.base";
import { MainVisual } from "./base/MainVisual";
import { MainVisualService } from "./mainVisual.service";

@graphql.Resolver(() => MainVisual)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MainVisualResolver extends MainVisualResolverBase {
  constructor(
    protected readonly service: MainVisualService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
