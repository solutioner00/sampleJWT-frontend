import HttpClient from "./http-client";

export const DocumentService = (function () {
  const addDocument = async (documentText: any) => {
    return await HttpClient.post("/document/add", {
        documentText
    });
  };

  const searchDocuments = async (searchText: any) => {
    return await HttpClient.get("/document/search", {
        headers: {
            searchText
        }
    });
  };

  return {
    addDocument,
    searchDocuments,
  };
})();
