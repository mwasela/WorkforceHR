import ProLayout from '@ant-design/pro-layout';
import bsicon from '../public/icon.png';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { InfoCircleOutlined } from '@ant-design/icons';
import { FiBriefcase, FiUserX, FiUsers } from "react-icons/fi";
import { useEffect } from 'react';



export default function MainLayout() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
      if (!token) {
          navigate("/login");
      }
  }, [token, navigate]);
  return (
      <ProLayout
          logo={bsicon}
          title="WorkforceHR"
          layout="mix"
          menuDataRender={() => [
              {
                  path: "/",
                  name: "Home",
                  icon: <FiBriefcase />,
              },
              {
                  path: "/Overtime",
                  name: "Overtime",
                  icon: <FiUsers />,
              },
              {
                  path: "/login",
                  name: "Logout",
                  icon: <FiUserX/>,
              },
          ]}
          menuItemRender={(item, dom) => <Link to={item.path} onClick={()=>{
              navigate(item.path);
            }}>{dom}</Link>}
          >
          <Outlet />

      </ProLayout>

  )
}


// export default function MainLayout() {
//   const navigate = useNavigate();

//   return (
//     <ProLayout
//       title="WorkforceHR"
//       logo={bsicon}
//       menuHeaderRender={(logoDom, titleDom) => (
//         <Link to="/">
//           {logoDom}
//           {titleDom}
//         </Link>
//       )}



//       menuDataRender={() => [

//         //add login page here
        
//         {
//           path: '/',
//           name: 'Home',
//           icon: <InfoCircleOutlined />,
//         },
//         {
//           path: '/about',
//           name: 'About',
//           icon: <InfoCircleOutlined />,
//         },
//         {
//           path: '/login',
//           name: 'Logout',
//           icon: <InfoCircleOutlined />,
       

//         }

//       ]}
//     >
//       <Outlet />
//     </ProLayout>
//   );
// }