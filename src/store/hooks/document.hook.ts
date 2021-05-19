import { useDispatch, useSelector } from "react-redux";
import { DocumentService } from "../../services";
import { LOCAL_STORAGE_KEY } from "../../consts";
import { useProgress } from "./progress.hook";
import { UserStatus } from '../../enums';
import {
    FETCH_DOCUMENTS_SUCCESS
} from "../types";

const { JWT_TOKEN } = LOCAL_STORAGE_KEY;

export const useDocument = () => {
  const dispatch = useDispatch();
  const { searchedDocuments } = useSelector(({ document }: any) => document);
  const { startProgress, stopProgress } = useProgress();

  const searchDocuments = async (searchText: any) => {
    try {
        startProgress();
        const response = await DocumentService.searchDocuments(searchText);
        const payload = response.data;
        dispatch({ type: FETCH_DOCUMENTS_SUCCESS, payload });
        stopProgress();
        return true;
      } catch(err) {
        stopProgress();
        alert('Failed to fetch documents!');
        return false;
      }
  };
  const addDocument = async (documentText: any) => {
    try {
        startProgress();
        await DocumentService.addDocument(documentText);  
        stopProgress();
        alert('Successfully added document!');
      } catch(err) {
        stopProgress();
        alert('Failed to added document!');
      }
  };

  return {
    searchedDocuments,
    searchDocuments,
    addDocument,
  };
};