import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="text-gray-700 font-medium text-4xl p-4">User: {userid}</div>
  );
}

export default User;
