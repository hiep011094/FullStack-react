import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateIntroduceArgs } from "./CreateIntroduceArgs";
import { UpdateIntroduceArgs } from "./UpdateIntroduceArgs";
import { DeleteIntroduceArgs } from "./DeleteIntroduceArgs";
import { IntroduceFindManyArgs } from "./IntroduceFindManyArgs";
import { IntroduceFindUniqueArgs } from "./IntroduceFindUniqueArgs";
import { Introduce } from "./Introduce";
import { IntroduceService } from "../introduce.service";

@graphql.Resolver(() => Introduce)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class IntroduceResolverBase {
  constructor(
    protected readonly service: IntroduceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Introduce",
    action: "read",
    possession: "any",
  })
  async _introducesMeta(
    @graphql.Args() args: IntroduceFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Introduce])
  @nestAccessControl.UseRoles({
    resource: "Introduce",
    action: "read",
    possession: "any",
  })
  async introduces(
    @graphql.Args() args: IntroduceFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Introduce[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Introduce",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Introduce, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Introduce",
    action: "read",
    possession: "own",
  })
  async introduce(
    @graphql.Args() args: IntroduceFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Introduce | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Introduce",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Introduce)
  @nestAccessControl.UseRoles({
    resource: "Introduce",
    action: "create",
    possession: "any",
  })
  async createIntroduce(
    @graphql.Args() args: CreateIntroduceArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Introduce> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Introduce",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Introduce"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Introduce)
  @nestAccessControl.UseRoles({
    resource: "Introduce",
    action: "update",
    possession: "any",
  })
  async updateIntroduce(
    @graphql.Args() args: UpdateIntroduceArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Introduce | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Introduce",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Introduce"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Introduce)
  @nestAccessControl.UseRoles({
    resource: "Introduce",
    action: "delete",
    possession: "any",
  })
  async deleteIntroduce(
    @graphql.Args() args: DeleteIntroduceArgs
  ): Promise<Introduce | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
