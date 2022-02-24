import { useAuth } from "context/authContext";
import { FormEvent } from "react";

export const LoginScreen = () => {
  const { login, user } = useAuth();

  // HTMLFormElement extends Element
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // 阻止表单提交的默认行为
    event.preventDefault();
    // username
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    // password
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      {user ? <div>登录成功, 用户名: {user?.name}</div> : null}
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={"username"} />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id={"password"} />
      </div>
      <button type="submit">登录</button>
    </form>
  );
};
