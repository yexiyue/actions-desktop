import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import { LanguageContext, useLanguageProvider } from "./hooks/useI18nProvider";
import { router } from "./router";

const client = new ApolloClient({
  uri: "http://localhost:8000/api/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const data = useLanguageProvider();
  console.log(data);
  return (
    <ApolloProvider client={client}>
      <I18nProvider i18n={i18n}>
        <LanguageContext.Provider value={data}>
          <ConfigProvider locale={data.antdLocal}>
            <RouterProvider router={router}></RouterProvider>
          </ConfigProvider>
        </LanguageContext.Provider>
      </I18nProvider>
    </ApolloProvider>
  );
}

export default App;
