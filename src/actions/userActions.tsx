import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
  USER_LOGIN_FAIL,
} from '../constants/userConstants'
import { RootState } from '../store'
import axios from "axios";
import services from '../services'

export const login =
  (
    email: String,
    password: String,
    token: String
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      })

      // const response = await fetch('/api/v1/login', {
      //   // mode: "no-cors",
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json'},
      //   credentials: 'include',
      //   body: JSON.stringify({
      //     email,
      //     password,
      //   }),
      // })
      // const loginService = services.loginModuleService

      const data:any = await services.loginModuleService.loginAPI({ email, password })
      
      // const config = { headers: { "Content-Type": "application/json"} };

      //   //this config file is required for post request

      //   const { data } = await axios.post(
      //       `/api/v1/login`,
      //       { email, password },
      //       config
      //   )

      // const data = await response.json()
      const userData = { email: data.data.user.email}
      const token: any = data.data.token
      
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: [{"email":data.data.user.email} ,{"role":data.data.user.role}, {"token":data.data.token}]
      })
      
      localStorage.setItem('userInfo', JSON.stringify(userData))
      // localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")
      localStorage.setItem('token', token)
    } catch (error: any) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const logout =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
    
    await fetch('/logout', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
  }
