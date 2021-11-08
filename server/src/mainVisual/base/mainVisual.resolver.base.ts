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
import { CreateMainVisualArgs } from "./CreateMainVisualArgs";
import { UpdateMainVisualArgs } from "./UpdateMainVisualArgs";
import { DeleteMainVisualArgs } from "./DeleteMainVisualArgs";
import { MainVisualFindManyArgs } from "./MainVisualFindManyArgs";
import { MainVisualFindUniqueArgs } from "./MainVisualFindUniqueArgs";
import { MainVisual } from "./MainVisual";
import { MainVisualService } from "../mainVisual.service";

@graphql.Resolver(() => MainVisual)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MainVisualResolverBase {
  constructor(
    protected readonly service: MainVisualService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "MainVisual",
    action: "read",
    possession: "any",
  })
  async _mainVisualsMeta(
    @graphql.Args() args: MainVisualFindManyArgs
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

  @graphql.Query(() => [MainVisual])
  @nestAccessControl.UseRoles({
    resource: "MainVisual",
    action: "read",
    possession: "any",
  })
  async mainVisuals(
    @graphql.Args() args: MainVisualFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<MainVisual[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "MainVisual",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => MainVisual, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MainVisual",
    action: "read",
    possession: "own",
  })
  async mainVisual(
    @graphql.Args() args: MainVisualFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<MainVisual | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "MainVisual",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => MainVisual)
  @nestAccessControl.UseRoles({
    resource: "MainVisual",
    action: "create",
    possession: "any",
  })
  async createMainVisual(
    @graphql.Args() args: CreateMainVisualArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<MainVisual> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "MainVisual",
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
        `providing the properties: ${properties} on ${"MainVisual"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => MainVisual)
  @nestAccessControl.UseRoles({
    resource: "MainVisual",
    action: "update",
    possession: "any",
  })
  async updateMainVisual(
    @graphql.Args() args: UpdateMainVisualArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<MainVisual | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "MainVisual",
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
        `providing the properties: ${properties} on ${"MainVisual"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => MainVisual)
  @nestAccessControl.UseRoles({
    resource: "MainVisual",
    action: "delete",
    possession: "any",
  })
  async deleteMainVisual(
    @graphql.Args() args: DeleteMainVisualArgs
  ): Promise<MainVisual | null> {
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
