import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

import * as AuthSession from "expo-auth-session";
import * as AppleAuthentication from 'expo-apple-authentication';

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface IAuthContextData {
  user: User;
  signInWithGoogle(): Promise<void>;
  signInWithApple(): Promise<void>;
}

interface AuthorizationResponse {
  params: {
    access_token: string;
  };
  type: string;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);

  const dataKey = '@vepfinance:transaction'
  async function signInWithGoogle() {
    try {
      const RESPONSE_TYPE = "token";
      const SCOPE = encodeURI("profile email");

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { params, type } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;
      
      if (type === "success") {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        );
        const userInfo = await response.json()

        const userData = {
          id: userInfo.id,
          email: userInfo.email,
          name: userInfo.given_name,
          photo: userInfo.picture,
        }

        setUser(userData);


      }
    } catch (error) {
      console.log("error")
      console.log(error)
      throw new Error(error as string);
    }
  }

  async function signInWithApple(){
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ]
      })

      if(credential){
        const userLogged = {
          id: String(credential.user),
          email: credential.email!,
          name: credential.fullName!.givenName!,
          photo: undefined,
        }
        setUser(userLogged)
        await AsyncStorage.
      }

    } catch (error) {
      throw new Error(error as string)
    }
  }

  useEffect({
   async function  loadUserStoregeDate() {
     const date
   }
  },[])

  return (
    <AuthContext.Provider 
    value={{ 
      user, 
      signInWithGoogle, 
      signInWithApple 
      }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
