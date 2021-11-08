import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { MainVisualModule } from "./mainVisual/mainVisual.module";
import { BlogModule } from "./blog/blog.module";
import { InforModule } from "./infor/infor.module";
import { MenuModule } from "./menu/menu.module";
import { MenuFooterModule } from "./menuFooter/menuFooter.module";
import { HotLineModule } from "./hotLine/hotLine.module";
import { IntroduceModule } from "./introduce/introduce.module";
import { ProductModule } from "./product/product.module";
import { SocialModule } from "./social/social.module";
import { NewModule } from "./new/new.module";
import { HealthModule } from "./health/health.module";
import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { MorganModule } from "nest-morgan";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  controllers: [],
  imports: [
    UserModule,
    MainVisualModule,
    BlogModule,
    InforModule,
    MenuModule,
    MenuFooterModule,
    HotLineModule,
    IntroduceModule,
    ProductModule,
    SocialModule,
    NewModule,
    HealthModule,
    ACLModule,
    AuthModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
