import { ConvexProvider, ConvexReactClient } from "convex/react";
import Chat from "./src/components/Chat";

// Make sure your Convex URL is defined
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
if (!convexUrl) {
  throw new Error("NEXT_PUBLIC_CONVEX_URL is not defined");
}

const convex = new ConvexReactClient(convexUrl);

function App() {
  return (
    <ConvexProvider client={convex}>
      <Chat />
    </ConvexProvider>
  );
}

export default App;
