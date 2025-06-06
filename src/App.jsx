import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter basename="/projeto-filmes-api-tmdb">
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
