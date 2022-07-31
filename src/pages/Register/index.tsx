import React from "react";
import axios from "axios";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export default function Register() {
  const data = {
    username: "thirdusername",
    email: "thirdEmail@gmail.com",
    password: "damson123",
  };
  const data2 = {
    username: "fourthusername",
    email: "fourthEmail@gmail.com",
    password: "damson123",
  };
  const addComment = useMutation((newComment: any) =>
    axios.post("/api/account/register", newComment)
  );
  const registerUser = async (data: any) => {
    const response = await axios.post("/api/account/register", data);
    return response.data;
  };
  const registerUser2 = addComment.mutate(data2);

  return <div>index</div>;
}
