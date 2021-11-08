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
import { CreateInforArgs } from "./CreateInforArgs";
import { UpdateInforArgs } from "./UpdateInforArgs";
import { DeleteInforArgs } from "./DeleteInforArgs";
import { InforFindManyArgs } from "./InforFindManyArgs";
import { InforFindUniqueArgs } from "./InforFindUniqueArgs";
import { Infor } from "./Infor";
import { InforService } from "../infor.service";

@graphql.Resolver(() => Infor)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class InforResolverBase {
  constructor(
    protected readonly service: InforService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Infor",
    action: "read",
    possession: "any",
  })
  async _inforsMeta(
    @graphql.Args() args: InforFindManyArgs
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

  @graphql.Query(() => [Infor])
  @nestAccessControl.UseRoles({
    resource: "Infor",
    action: "read",
    possession: "any",
  })
  async infors(
    @graphql.Args() args: InforFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Infor[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Infor",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Infor, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Infor",
    action: "read",
    possession: "own",
  })
  async infor(
    @graphql.Args() args: InforFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Infor | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Infor",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Infor)
  @nestAccessControl.UseRoles({
    resource: "Infor",
    action: "create",
    possession: "any",
  })
  async createInfor(
    @graphql.Args() args: CreateInforArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Infor> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Infor",
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
        `providing the properties: ${properties} on ${"Infor"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Infor)
  @nestAccessControl.UseRoles({
    resource: "Infor",
    action: "update",
    possession: "any",
  })
  async updateInfor(
    @graphql.Args() args: UpdateInforArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Infor | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Infor",
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
        `providing the properties: ${properties} on ${"Infor"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => Infor)
  @nestAccessControl.UseRoles({
    resource: "Infor",
    action: "delete",
    possession: "any",
  })
  async deleteInfor(
    @graphql.Args() args: DeleteInforArgs
  ): Promise<Infor | null> {
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
