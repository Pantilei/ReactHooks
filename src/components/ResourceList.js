import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async resource => {
    const responce = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    setResources(responce.data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return (
    <ul>
      {resources.map(record => {
        return <li key={record.id}>{record.title}</li>;
      })}
    </ul>
  );
};

export default ResourceList;
