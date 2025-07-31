// import MainNavigation from "./MainNavigation";

// const Layout: React.FC<{
//   children: React.ReactNode;
//   toggleTheme: () => void;
//   theme: string;
// }> = (props) => {
//   return (
//     <div>
//       <MainNavigation onToggleTheme={props.toggleTheme} theme={props.theme} />
//       <main style={{ width: "100%", maxWidth: "75rem", margin: "0 auto" }}>
//         {props.children}
//       </main>
//     </div>
//   );
// };

// export default Layout;

import type { LayoutProp } from "../../interfaces";
import MainNavigation from "./MainNavigation";

const Layout = (props:LayoutProp) => {
  return (
    <div>
      <MainNavigation onToggleTheme={props.toggleTheme} theme={props.theme} />
      <main style={{ width: "100%", maxWidth: "75rem", margin: "0 auto" }}>
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
