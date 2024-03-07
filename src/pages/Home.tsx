import { useChangeLanguage } from "@/hooks/useI18nProvider";
import { gql, useQuery } from "@apollo/client";
import { Trans } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Button, Pagination } from "antd";

export const Component = () => {
  useLingui();
  const { toggleLocal } = useChangeLanguage();
  const { data, error } = useQuery(gql`
    query {
      hello
      user {
        age
        name
      }
    }
  `);
  console.log(error);
  console.log(data);
  return (
    <h1 className="text-3xl font-bold underline">
      <Trans>你好</Trans>
      <Button onClick={toggleLocal}>切换语言</Button>
      <Pagination defaultCurrent={1} total={50} showSizeChanger />
    </h1>
  );
};
