import {
  Client,
  GetPageInfoRequest,
  GetPageMediaRequest,
} from "instagram-graph-api";

const client: Client = new Client(
  process.env.INSTAGRAM_ACCESS_TOKEN!,
  process.env.INSTAGRAM_PAGE_ID!
);

const pageInfoRequest: GetPageInfoRequest = client.newGetPageInfoRequest();
const pageMediaRequest: GetPageMediaRequest = client.newGetPageMediaRequest();

export { pageInfoRequest, pageMediaRequest };
