import React from "react";
import PostsComponent from "./components/PostsComponent.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // React Query v4

// Create React Query client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: "20px" }}>
        <h1>React Query Demo</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
