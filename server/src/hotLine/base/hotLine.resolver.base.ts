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
import { CreateHotLineArgs } from "./CreateHotLineArgs";
import { UpdateHotLineArgs } from "./UpdateHotLineArgs";
import { DeleteHotLineArgs } from "./DeleteHotLineArgs";
import { HotLineFindManyArgs } from "./HotLineFindManyArgs";
import { HotLineFindUniqueArgs } from "./HotLineFindUniqueArgs";
import { HotLine } from "./HotLine";
import { HotLineService } from "../hotLine.service";

@graphql.Resolver(() => HotLine)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class HotLineResolverBase {
  constructor(
    protected readonly service: HotLineService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "HotLine",
    action: "read",
    possession: "any",
  })
  async _hotLinesMeta(
    @graphql.Args() args: HotLineFindManyArgs
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

  @graphql.Query(() => [HotLine])
  @nestAccessControl.UseRoles({
    resource: "HotLine",
    action: "read",
    possession: "any",
  })
  async hotLines(
    @graphql.Args() args: HotLineFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<HotLine[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "HotLine",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => HotLine, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "HotLine",
    action: "read",
    possession: "own",
  })
  async hotLine(
    @graphql.Args() args: HotLineFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<HotLine | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "HotLine",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => HotLine)
  @nestAccessControl.UseRoles({
    resource: "HotLine",
    action: "create",
    possession: "any",
  })
  async createHotLine(
    @graphql.Args() args: CreateHotLineArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<HotLine> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "HotLine",
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
        `providing the properties: ${properties} on ${"HotLine"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => HotLine)
  @nestAccessControl.UseRoles({
    resource: "HotLine",
    action: "update",
    possession: "any",
  })
  async updateHotLine(
    @graphql.Args() args: UpdateHotLineArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<HotLine | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "HotLine",
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
        `providing the properties: ${properties} on ${"HotLine"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => HotLine)
  @nestAccessControl.UseRoles({
    resource: "HotLine",
    action: "delete",
    possession: "any",
  })
  async deleteHotLine(
    @graphql.Args() args: DeleteHotLineArgs
  ): Promise<HotLine | null> {
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
