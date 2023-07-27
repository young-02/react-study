import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import Main from "./pages/Main";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const qeuryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={qeuryClient}>
      <Header />
      <Main />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
