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
import { CreateNewArgs } from "./CreateNewArgs";
import { UpdateNewArgs } from "./UpdateNewArgs";
import { DeleteNewArgs } from "./DeleteNewArgs";
import { NewFindManyArgs } from "./NewFindManyArgs";
import { NewFindUniqueArgs } from "./NewFindUniqueArgs";
import { New } from "./New";
import { NewService } from "../new.service";

@graphql.Resolver(() => New)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class NewResolverBase {
  constructor(
    protected readonly service: NewService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "New",
    action: "read",
    possession: "any",
  })
  async _newsMeta(
    @graphql.Args() args: NewFindManyArgs
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

  @graphql.Query(() => [New])
  @nestAccessControl.UseRoles({
    resource: "New",
    action: "read",
    possession: "any",
  })
  async news(
    @graphql.Args() args: NewFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<New[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "New",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => New, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "New",
    action: "read",
    possession: "own",
  })
  async new(
    @graphql.Args() args: NewFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<New | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "New",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => New)
  @nestAccessControl.UseRoles({
    resource: "New",
    action: "create",
    possession: "any",
  })
  async createNew(
    @graphql.Args() args: CreateNewArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<New> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "New",
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
        `providing the properties: ${properties} on ${"New"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => New)
  @nestAccessControl.UseRoles({
    resource: "New",
    action: "update",
    possession: "any",
  })
  async updateNew(
    @graphql.Args() args: UpdateNewArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<New | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "New",
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
        `providing the properties: ${properties} on ${"New"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => New)
  @nestAccessControl.UseRoles({
    resource: "New",
    action: "delete",
    possession: "any",
  })
  async deleteNew(@graphql.Args() args: DeleteNewArgs): Promise<New | null> {
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
