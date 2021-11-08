import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { HotLineResolverBase } from "./base/hotLine.resolver.base";
import { HotLine } from "./base/HotLine";
import { HotLineService } from "./hotLine.service";

@graphql.Resolver(() => HotLine)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class HotLineResolver extends HotLineResolverBase {
  constructor(
    protected readonly service: HotLineService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
