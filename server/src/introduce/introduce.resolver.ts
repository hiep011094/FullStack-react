import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { IntroduceResolverBase } from "./base/introduce.resolver.base";
import { Introduce } from "./base/Introduce";
import { IntroduceService } from "./introduce.service";

@graphql.Resolver(() => Introduce)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class IntroduceResolver extends IntroduceResolverBase {
  constructor(
    protected readonly service: IntroduceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
