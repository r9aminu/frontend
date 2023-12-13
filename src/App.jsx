import AppRoutes from "./routes";
import QueryClient from "./libs/react-query";
import GlobalStyle from "./libs/styled-components/global";

export default function App() {
  return (
    <QueryClient>
      <AppRoutes />
      <GlobalStyle />
    </QueryClient>
  );
}
