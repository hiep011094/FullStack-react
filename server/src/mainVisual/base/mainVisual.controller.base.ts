import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { MainVisualService } from "../mainVisual.service";
import { MainVisualCreateInput } from "./MainVisualCreateInput";
import { MainVisualWhereInput } from "./MainVisualWhereInput";
import { MainVisualWhereUniqueInput } from "./MainVisualWhereUniqueInput";
import { MainVisualFindManyArgs } from "./MainVisualFindManyArgs";
import { MainVisualUpdateInput } from "./MainVisualUpdateInput";
import { MainVisual } from "./MainVisual";
@swagger.ApiBearerAuth()
export class MainVisualControllerBase {
  constructor(
    protected readonly service: MainVisualService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "MainVisual",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: MainVisual })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: MainVisualCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<MainVisual> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "MainVisual",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"MainVisual"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,
        video: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "MainVisual",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [MainVisual] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => MainVisualFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<MainVisual[]> {
    const args = plainToClass(MainVisualFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "MainVisual",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,
        video: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "MainVisual",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: MainVisual })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: MainVisualWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<MainVisual | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "MainVisual",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,
        video: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "MainVisual",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: MainVisual })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: MainVisualWhereUniqueInput,
    @common.Body()
    data: MainVisualUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<MainVisual | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "MainVisual",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"MainVisual"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          title: true,
          updatedAt: true,
          video: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "MainVisual",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: MainVisual })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: MainVisualWhereUniqueInput
  ): Promise<MainVisual | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          title: true,
          updatedAt: true,
          video: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
