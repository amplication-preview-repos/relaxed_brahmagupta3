import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ResumeList } from "./resume/ResumeList";
import { ResumeCreate } from "./resume/ResumeCreate";
import { ResumeEdit } from "./resume/ResumeEdit";
import { ResumeShow } from "./resume/ResumeShow";
import { ExperienceList } from "./experience/ExperienceList";
import { ExperienceCreate } from "./experience/ExperienceCreate";
import { ExperienceEdit } from "./experience/ExperienceEdit";
import { ExperienceShow } from "./experience/ExperienceShow";
import { EducationList } from "./education/EducationList";
import { EducationCreate } from "./education/EducationCreate";
import { EducationEdit } from "./education/EducationEdit";
import { EducationShow } from "./education/EducationShow";
import { LanguageList } from "./language/LanguageList";
import { LanguageCreate } from "./language/LanguageCreate";
import { LanguageEdit } from "./language/LanguageEdit";
import { LanguageShow } from "./language/LanguageShow";
import { ErrorModelList } from "./errorModel/ErrorModelList";
import { ErrorModelCreate } from "./errorModel/ErrorModelCreate";
import { ErrorModelEdit } from "./errorModel/ErrorModelEdit";
import { ErrorModelShow } from "./errorModel/ErrorModelShow";
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
        title={"resume-parser"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Resume"
          list={ResumeList}
          edit={ResumeEdit}
          create={ResumeCreate}
          show={ResumeShow}
        />
        <Resource
          name="Experience"
          list={ExperienceList}
          edit={ExperienceEdit}
          create={ExperienceCreate}
          show={ExperienceShow}
        />
        <Resource
          name="Education"
          list={EducationList}
          edit={EducationEdit}
          create={EducationCreate}
          show={EducationShow}
        />
        <Resource
          name="Language"
          list={LanguageList}
          edit={LanguageEdit}
          create={LanguageCreate}
          show={LanguageShow}
        />
        <Resource
          name="ErrorModel"
          list={ErrorModelList}
          edit={ErrorModelEdit}
          create={ErrorModelCreate}
          show={ErrorModelShow}
        />
      </Admin>
    </div>
  );
};

export default App;
