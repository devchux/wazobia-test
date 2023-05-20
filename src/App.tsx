import Editor from "./components/editor";
import EmbedDropdown from "./components/embeds/dropdown";
import EditorProvider from "./context/editor";
import Layout from "./layout";

function App() {
  return (
    <EditorProvider>
      <Layout>
        <Editor />
        <EmbedDropdown />
      </Layout>
    </EditorProvider>
  );
}

export default App;
