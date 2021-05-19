import { useDispatch, useSelector } from "react-redux";
import { AuthService } from "../../services";
import { LOCAL_STORAGE_KEY } from "../../consts";
import { useProgress } from "./progress.hook";
import { UserStatus } from '../../enums';
import {
  USER_INIT, USER_SUCCESS, USER_FAILED, USER_RESET
} from "../types";

const { JWT_TOKEN } = LOCAL_STORAGE_KEY;

export const useUser = () => {
  const dispatch = useDispatch();
  const { data: user, error } = useSelector(({ user }: any) => user);
  const { startProgress, stopProgress } = useProgress();

  const userLogin = async (email: any, password: any) => {
    try {
      if (user.token !== '') {
        return true;
      }

      dispatch({ type: USER_INIT });
      startProgress();
      const { data } = await AuthService.login(email, password);
      localStorage.setItem(JWT_TOKEN, data.token);
      
      const payload = data.user;
      dispatch({ type: USER_SUCCESS, payload });
      stopProgress();
      return true;
    } catch ({ response, message }) {

      dispatch({
        type: USER_FAILED,
        payload: response?.data?.message || message
      });
      alert(response?.data?.message || message);
      stopProgress();
      return false;
    }
  };

  return {
    user,
    userLogin,
  };
};