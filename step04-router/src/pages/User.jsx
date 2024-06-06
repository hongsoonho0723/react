import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h3>
        User 입니다. : {params.id} | {params.pwd}{" "}
      </h3>
    </div>
  );
};

export default User;
