import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { MainVisualList } from "./mainVisual/MainVisualList";
import { MainVisualCreate } from "./mainVisual/MainVisualCreate";
import { MainVisualEdit } from "./mainVisual/MainVisualEdit";
import { MainVisualShow } from "./mainVisual/MainVisualShow";
import { BlogList } from "./blog/BlogList";
import { BlogCreate } from "./blog/BlogCreate";
import { BlogEdit } from "./blog/BlogEdit";
import { BlogShow } from "./blog/BlogShow";
import { InforList } from "./infor/InforList";
import { InforCreate } from "./infor/InforCreate";
import { InforEdit } from "./infor/InforEdit";
import { InforShow } from "./infor/InforShow";
import { MenuList } from "./menu/MenuList";
import { MenuCreate } from "./menu/MenuCreate";
import { MenuEdit } from "./menu/MenuEdit";
import { MenuShow } from "./menu/MenuShow";
import { MenuFooterList } from "./menuFooter/MenuFooterList";
import { MenuFooterCreate } from "./menuFooter/MenuFooterCreate";
import { MenuFooterEdit } from "./menuFooter/MenuFooterEdit";
import { MenuFooterShow } from "./menuFooter/MenuFooterShow";
import { HotLineList } from "./hotLine/HotLineList";
import { HotLineCreate } from "./hotLine/HotLineCreate";
import { HotLineEdit } from "./hotLine/HotLineEdit";
import { HotLineShow } from "./hotLine/HotLineShow";
import { IntroduceList } from "./introduce/IntroduceList";
import { IntroduceCreate } from "./introduce/IntroduceCreate";
import { IntroduceEdit } from "./introduce/IntroduceEdit";
import { IntroduceShow } from "./introduce/IntroduceShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { SocialList } from "./social/SocialList";
import { SocialCreate } from "./social/SocialCreate";
import { SocialEdit } from "./social/SocialEdit";
import { SocialShow } from "./social/SocialShow";
import { NewList } from "./new/NewList";
import { NewCreate } from "./new/NewCreate";
import { NewEdit } from "./new/NewEdit";
import { NewShow } from "./new/NewShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My app-1"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="MainVisual"
          list={MainVisualList}
          edit={MainVisualEdit}
          create={MainVisualCreate}
          show={MainVisualShow}
        />
        <Resource
          name="Blog"
          list={BlogList}
          edit={BlogEdit}
          create={BlogCreate}
          show={BlogShow}
        />
        <Resource
          name="Infor"
          list={InforList}
          edit={InforEdit}
          create={InforCreate}
          show={InforShow}
        />
        <Resource
          name="Menu"
          list={MenuList}
          edit={MenuEdit}
          create={MenuCreate}
          show={MenuShow}
        />
        <Resource
          name="MenuFooter"
          list={MenuFooterList}
          edit={MenuFooterEdit}
          create={MenuFooterCreate}
          show={MenuFooterShow}
        />
        <Resource
          name="HotLine"
          list={HotLineList}
          edit={HotLineEdit}
          create={HotLineCreate}
          show={HotLineShow}
        />
        <Resource
          name="Introduce"
          list={IntroduceList}
          edit={IntroduceEdit}
          create={IntroduceCreate}
          show={IntroduceShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Social"
          list={SocialList}
          edit={SocialEdit}
          create={SocialCreate}
          show={SocialShow}
        />
        <Resource
          name="New"
          list={NewList}
          edit={NewEdit}
          create={NewCreate}
          show={NewShow}
        />
      </Admin>
    </div>
  );
};

export default App;
