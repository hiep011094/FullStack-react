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
import { CreateMenuFooterArgs } from "./CreateMenuFooterArgs";
import { UpdateMenuFooterArgs } from "./UpdateMenuFooterArgs";
import { DeleteMenuFooterArgs } from "./DeleteMenuFooterArgs";
import { MenuFooterFindManyArgs } from "./MenuFooterFindManyArgs";
import { MenuFooterFindUniqueArgs } from "./MenuFooterFindUniqueArgs";
import { MenuFooter } from "./MenuFooter";
import { MenuFooterService } from "../menuFooter.service";

@graphql.Resolver(() => MenuFooter)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MenuFooterResolverBase {
  constructor(
    protected readonly service: MenuFooterService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "MenuFooter",
    action: "read",
    possession: "any",
  })
  async _menuFootersMeta(
    @graphql.Args() args: MenuFooterFindManyArgs
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

  @graphql.Query(() => [MenuFooter])
  @nestAccessControl.UseRoles({
    resource: "MenuFooter",
    action: "read",
    possession: "any",
  })
  async menuFooters(
    @graphql.Args() args: MenuFooterFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<MenuFooter[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "MenuFooter",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => MenuFooter, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MenuFooter",
    action: "read",
    possession: "own",
  })
  async menuFooter(
    @graphql.Args() args: MenuFooterFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<MenuFooter | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "MenuFooter",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => MenuFooter)
  @nestAccessControl.UseRoles({
    resource: "MenuFooter",
    action: "create",
    possession: "any",
  })
  async createMenuFooter(
    @graphql.Args() args: CreateMenuFooterArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<MenuFooter> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "MenuFooter",
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
        `providing the properties: ${properties} on ${"MenuFooter"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => MenuFooter)
  @nestAccessControl.UseRoles({
    resource: "MenuFooter",
    action: "update",
    possession: "any",
  })
  async updateMenuFooter(
    @graphql.Args() args: UpdateMenuFooterArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<MenuFooter | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "MenuFooter",
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
        `providing the properties: ${properties} on ${"MenuFooter"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => MenuFooter)
  @nestAccessControl.UseRoles({
    resource: "MenuFooter",
    action: "delete",
    possession: "any",
  })
  async deleteMenuFooter(
    @graphql.Args() args: DeleteMenuFooterArgs
  ): Promise<MenuFooter | null> {
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
