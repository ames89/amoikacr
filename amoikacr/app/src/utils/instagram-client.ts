import { Client, GetPageInfoRequest, GetPageMediaRequest } from 'instagram-graph-api';

  const client: Client = new Client(ACCESS_TOKEN, PAGE_ID);

  const pageInfoRequest: GetPageInfoRequest = client.newGetPageInfoRequest();
  const pageMediaRequest: GetPageMediaRequest = client.newGetPageMediaRequest();

export {pageInfoRequest,pageMediaRequest}