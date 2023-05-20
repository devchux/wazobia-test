import Editor from "./components/editor";
import EditorProvider from "./context/editor";
import Layout from "./layout";

function App() {
  return (
    <EditorProvider>
      <Layout>
        <Editor />
      </Layout>
    </EditorProvider>
  );
}

export default App;
