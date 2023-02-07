import Form from "./components/FormsAndEvents/Form";
import Header from "./components/props/Header";
import User from "./components/useState/User";

function App() {
  return (
    <div style={{ padding: "1rem 5rem" }}>

      {/* Resource: https://www.youtube.com/watch?v=V9A-zHJvXtk&list=PLG-Mk4wQm9_LyKE5EwoZz2_GGXR-zJ5Ml&index=2 */}

      {/* 1. Props */}
      <Header
        text="This is a header"
        // extraText='optional props'
      />
      <hr />
      
      {/* 2. useState */}
      <User />
      <hr />

      {/* 3. Forms and Events */}
      <Form />

    </div>
  );
}

export default App;
