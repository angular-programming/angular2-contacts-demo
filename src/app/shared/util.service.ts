import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {
	constructor() {

	}

	//检查手机号码的合法性
	checkPhoneNum(str: string) {
	  return /^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(str);
	}


	//检查邮箱的合法性
	checkEmail(str: string) {
	  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(str)
	}

}
