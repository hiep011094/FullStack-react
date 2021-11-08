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
import { CreateSocialArgs } from "./CreateSocialArgs";
import { UpdateSocialArgs } from "./UpdateSocialArgs";
import { DeleteSocialArgs } from "./DeleteSocialArgs";
import { SocialFindManyArgs } from "./SocialFindManyArgs";
import { SocialFindUniqueArgs } from "./SocialFindUniqueArgs";
import { Social } from "./Social";
import { SocialService } from "../social.service";

@graphql.Resolver(() => Social)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SocialResolverBase {
  constructor(
    protected readonly service: SocialService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Social",
    action: "read",
    possession: "any",
  })
  async _slideHeroesMeta(
    @graphql.Args() args: SocialFindManyArgs
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

  @graphql.Query(() => [Social])
  @nestAccessControl.UseRoles({
    resource: "Social",
    action: "read",
    possession: "any",
  })
  async slideHeroes(
    @graphql.Args() args: SocialFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Social[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Social",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Social, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Social",
    action: "read",
    possession: "own",
  })
  async social(
    @graphql.Args() args: SocialFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Social | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Social",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Social)
  @nestAccessControl.UseRoles({
    resource: "Social",
    action: "create",
    possession: "any",
  })
  async createSocial(
    @graphql.Args() args: CreateSocialArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Social> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Social",
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
        `providing the properties: ${properties} on ${"Social"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Social)
  @nestAccessControl.UseRoles({
    resource: "Social",
    action: "update",
    possession: "any",
  })
  async updateSocial(
    @graphql.Args() args: UpdateSocialArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Social | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Social",
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
        `providing the properties: ${properties} on ${"Social"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => Social)
  @nestAccessControl.UseRoles({
    resource: "Social",
    action: "delete",
    possession: "any",
  })
  async deleteSocial(
    @graphql.Args() args: DeleteSocialArgs
  ): Promise<Social | null> {
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
