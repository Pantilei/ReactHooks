import React, { useState } from "react";
import RecourseList from "./ResourceList";
import ResourceList from "./ResourceList";

const App = () => {
  //destructuring of array
  const [resource, setResource] = useState("posts");
  return (
    <div>
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
