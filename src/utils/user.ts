import { User } from "screens/project-list/searchPanel";
import { useHttp } from "utils/http";
import { useAsync } from "utils/useAsync";
import { useEffect } from "react";
import { cleanObject } from "utils/index";

export const useUsers = (param?: Partial<User>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<User[]>();

  useEffect(() => {
    run(client("users", { data: cleanObject(param || {}) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);

  return result;
};