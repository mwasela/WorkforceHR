import { ConfigProvider, notification } from "antd";
import { LoginForm, ProFormCheckbox, ProFormText } from "@ant-design/pro-form";
import gbhlIcon from "../../public/bslogo.png";
import { useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined, AppleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "../../helpers/axios";


export default function Login() {

  const navigation = useNavigate();

  const token = localStorage.getItem("token");
  if (token) {
    localStorage.removeItem("token");
  }

  return (
    <ConfigProvider
      locale={{
        locale: "en",
      }}
    >
      <div
        style={{
          height: "100vh",
          width: "100vw",
          // position: "absolute",
          paddingTop: "100px",

        }}
        //
      >
        <LoginForm
          //logo={gbhlIcon}
          //resize logo
          logo={<img src={gbhlIcon} />}
          //title="WorkforceHR"
          subTitle={<h2 style={{
            marginBlockStart: "0.2em !important",
            marginBlockEnd: "0.2em !important",
          }}>WorkforceHR Portal</h2>}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={(values) => {

            axios.post('auth/login', values).then((response) => {
              // console.log("response", response.data);
              localStorage.setItem("token", response.data.access_token);
              navigation("/", { replace: true });
            });
          }}

        >
          <ProFormText
            name="email"
            fieldProps={{
              size: "large",
              prefix: <UserOutlined className={"prefixIcon"} />,
            }}

            placeholder={"Email Address"}
            rules={[
              {
                required: true,
                message: "Please enter your username!",
              },
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: "large",
              prefix: <LockOutlined className={"prefixIcon"} />,
            }}
            placeholder={"Password"}
            rules={[
              {
                required: true,
                message: "Please enter your password！",
              },
            ]}
          />
          <div
            style={{
              marginBlockEnd: 24,
            }}
          >
            <ProFormCheckbox noStyle name="rememberme">
              Remember me
            </ProFormCheckbox>
            <Link
              style={{
                float: "right",
              }}
              to="/auth/forgot-password"
            >
              Forgot password
            </Link>
          </div>
        </LoginForm>
      </div>
    </ConfigProvider>
  );
}
