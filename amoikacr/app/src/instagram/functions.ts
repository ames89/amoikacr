"use server";
import { pageMediaRequest } from "./client";

export const getInstagramPosts = async () => {
  const result = await pageMediaRequest.execute();
  console.log(result);
};
