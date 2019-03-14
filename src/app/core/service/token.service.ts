import { Injectable } from '@angular/core';
import {Token} from "../model";

@Injectable()
export class TokenService {

  constructor() { }

  getToken() : Token {
    return window.localStorage["accessToken"];
  }

  saveToken(token : Token){
    window.localStorage["accessToken"] = token;
  }

  deleteToken(token: Token) {
    window.localStorage.removeItem("accessToken");
  }

}
