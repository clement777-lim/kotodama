import{u as o}from"./index.32687cf0.js";const i={enableValid:!1,validUsernames:["YunYouJun","admin","me@yunyoujun.cn"],enableRecaptcha:!1,recaptchaV3Key:"6Lc95-gUAAAAAGwBWvJSuw-Sm_hH__ktVsbXLkBU"};function f(a){return i.enableValid?i.validUsernames.includes(a.trim()):!0}function w(a,n){const{t:r}=o();return{validatePass:(t,s,e)=>{s===""?e(new Error(r("message.input_new_password"))):s.length<6?e(new Error(r("error.password"))):(n.checkPass!==""&&a.value.validateField("checkPass"),e())},validatePass2:(t,s,e)=>{s===""?e(new Error(r("message.input_password_again"))):s.length<6?e(new Error(r("error.password"))):s!==n.password?e(new Error(r("message.password_not_same"))):e()}}}export{i as c,w as u,f as v};
