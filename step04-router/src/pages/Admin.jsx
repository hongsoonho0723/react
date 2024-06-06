import React from "react";
import { useSearchParams } from "react-router-dom";

const Admin = () => {
  const [params, setParams] = useSearchParams();
  console.log(params);

  return (
    <div>
      <h3>
        Admin 입니다. : {params.get("name")} : {params.get("age")}
      </h3>
    </div>
  );
};

export default Admin;
