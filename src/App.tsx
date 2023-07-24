import React from "react";
import "./App.css";

function App() {
  const [file, setFile] = React.useState();

  React.useEffect(() => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    (async () => {
      try {
        const response = await fetch("http://127.0.0.1:8686", {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: formData,
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [file]);

  return (
    <>
      <div>
        <input type="file" onChange={(e: any) => setFile(e.target.files[0])} />
      </div>
    </>
  );
}

export default App;
