(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{8105:function(e,a,_){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return _(186)}])},186:function(e,a,_){"use strict";_.r(a),_.d(a,{Contact:function(){return Contact},default:function(){return d}});var t=_(5893),s=_(7294);_(5675);var n=_(1664),i=_.n(n),c=_(7771);let r={_origin:"https://api.emailjs.com"},validateParams=(e,a,_)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!a)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!_)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};let EmailJSResponseStatus=class EmailJSResponseStatus{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}};let sendPost=(e,a,_={})=>new Promise((t,s)=>{let n=new XMLHttpRequest;n.addEventListener("load",({target:e})=>{let a=new EmailJSResponseStatus(e);200===a.status||"OK"===a.text?t(a):s(a)}),n.addEventListener("error",({target:e})=>{s(new EmailJSResponseStatus(e))}),n.open("POST",r._origin+e,!0),Object.keys(_).forEach(e=>{n.setRequestHeader(e,_[e])}),n.send(a)}),findHTMLForm=e=>{let a;if(!(a="string"==typeof e?document.querySelector(e):e)||"FORM"!==a.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return a};var o={init:(e,a="https://api.emailjs.com")=>{r._userID=e,r._origin=a},send:(e,a,_,t)=>{let s=t||r._userID;return validateParams(s,e,a),sendPost("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:s,service_id:e,template_id:a,template_params:_}),{"Content-type":"application/json"})},sendForm:(e,a,_,t)=>{let s=t||r._userID,n=findHTMLForm(_);validateParams(s,e,a);let i=new FormData(n);return i.append("lib_version","3.11.0"),i.append("service_id",e),i.append("template_id",a),i.append("user_id",s),sendPost("/api/v1.0/email/send-form",i)}},l=_(9624);let Contact=()=>{let e=(0,s.useRef)(),[a,_]=(0,s.useState)(""),[n,r]=(0,s.useState)(""),[d,g]=(0,s.useState)(""),[m,u]=(0,s.useState)(""),[h,p]=(0,s.useState)("");return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("section",{className:"".concat(l.home_bg," ").concat(l.section),children:[(0,t.jsx)(c.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.25}}),(0,t.jsxs)("div",{className:l.page_head,children:[(0,t.jsxs)("h1",{className:l.page_head_branding,children:[(0,t.jsx)("span",{className:l.secondary_color,children:"crossroads"})," blues ",(0,t.jsx)("span",{className:l.secondary_color,children:"experience"})]}),(0,t.jsx)("h2",{className:l.page_head_slug,children:"inspire\xa0•\xa0educate\xa0•\xa0engage"}),(0,t.jsx)("hr",{className:l.page_head_rule})]}),(0,t.jsxs)("div",{className:l.contact_feedback,children:[!a&&(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("form",{className:l.contact,ref:e,onSubmit:a=>{a.preventDefault(),o.sendForm("service_tnulx5l","template_giqqwz7",e.current,"CR6MBiPu1IJ5ObH5I").then(e=>{_(e.text),console.log(e.text)},e=>{r(e.text),console.log(e.text)})},children:[(0,t.jsxs)("div",{className:l.contact_head,children:[(0,t.jsx)("h2",{className:l.contact_head_heading,children:"Contact Us"}),(0,t.jsxs)("p",{className:l.contact_head_text,children:["Our program is the perfect complement for your school, church or any other venue that brings adults and kids together. To find out more about ",(0,t.jsx)("span",{className:l.semibold,children:"Crossroads Blues Experience"}),", please feel free to send us a message."]})]}),(0,t.jsxs)("div",{className:l.contact_body,children:[(0,t.jsxs)("div",{className:l.contact_info,children:[(0,t.jsxs)("div",{className:l.contact_input,children:[(0,t.jsx)("label",{className:l.contact_input_label,children:"Your name:"}),(0,t.jsx)("input",{className:l.contact_input_text,type:"text",name:"user_name",onChange:e=>g(e.target.value),value:d})]}),(0,t.jsxs)("div",{className:l.contact_input,children:[(0,t.jsx)("label",{className:l.contact_input_label,children:"Your email:"}),(0,t.jsx)("input",{className:l.contact_input_text,type:"email",name:"user_email",onChange:e=>u(e.target.value),value:m})]})]}),(0,t.jsxs)("div",{className:l.contact_message,children:[(0,t.jsx)("label",{className:l.contact_input_label,children:"Message:"}),(0,t.jsx)("textarea",{className:l.contact_message_text,onChange:e=>p(e.target.value),value:h})]}),(0,t.jsx)("button",{className:l.contact_button,type:"submit",children:"SEND"})]})]})}),a&&(0,t.jsx)(t.Fragment,{children:a&&(0,t.jsxs)("div",{className:l.feedback_success,children:[(0,t.jsx)("h3",{className:l.feedback_success_heading,children:"Your message was sent successfully."}),(0,t.jsxs)("p",{className:l.contact_feedback_text,children:["Thanks for contacting us at ",(0,t.jsx)("span",{className:l.semibold,children:"Crossroads Blues Experience"}),". We’ll respond as soon as we can. You might get a faster response by sending us a PM on ",(0,t.jsx)(i(),{href:"https://www.facebook.com/crossroadsbluesexperience",className:l.link_secondary,children:"our Facebook page"}),"."]})]})}),n&&(0,t.jsx)("p",{className:l.contact_form_feedback_text,children:"Your message wasn’t sent. Maybe try again later?"})]})]})})};var d=Contact},9624:function(e){e.exports={semibold_italic:"Pages_semibold_italic__mi9TY",italic:"Pages_italic__LLo_O",placeholder:"Pages_placeholder__IH7kB",home_bg:"Pages_home_bg__56xa8",section:"Pages_section__6xCa7",flex_center:"Pages_flex_center__QqqTY",figure_full_width:"Pages_figure_full_width__4seXA",figure_full_width_image:"Pages_figure_full_width_image__S5f3L",figure_two_up:"Pages_figure_two_up__Fnnz_",figure_two_up_image:"Pages_figure_two_up_image__nzhT9",figure_home_gif_image:"Pages_figure_home_gif_image__Aza_z",youtube_embed:"Pages_youtube_embed__uqcRQ",vimeo_embed:"Pages_vimeo_embed__X_AbX",content_text:"Pages_content_text__aw6m6",content_list_item_svg:"Pages_content_list_item_svg__mKBW0",content_list_item:"Pages_content_list_item__GkDin",content_list_bullet:"Pages_content_list_bullet__X_Lra",home_separator_bar:"Pages_home_separator_bar__CtxCh",home_content:"Pages_home_content__55Ncj",home_content_heading_h1:"Pages_home_content_heading_h1__AX26w",home_content_heading_h2:"Pages_home_content_heading_h2__4RDgs",grid_bluesmen:"Pages_grid_bluesmen__7Wzle",grid_bluesmen_rule:"Pages_grid_bluesmen_rule___K7La",grid_bluesmen_grid:"Pages_grid_bluesmen_grid__Xs05R",grid_bluesmen_figure:"Pages_grid_bluesmen_figure___vC_P",grid_bluesmen_img:"Pages_grid_bluesmen_img__WCfGu",grid_bluesmen_caption:"Pages_grid_bluesmen_caption__r61Qk",grid_fiveeras:"Pages_grid_fiveeras__gVphX",grid_fiveeras_rule:"Pages_grid_fiveeras_rule__ma_8P",grid_fiveeras_grid:"Pages_grid_fiveeras_grid__h3KWi",grid_fiveeras_figure:"Pages_grid_fiveeras_figure__o6rMM",grid_fiveeras_img:"Pages_grid_fiveeras_img__cSB3t",grid_fiveeras_caption:"Pages_grid_fiveeras_caption__5xMS_",semibold:"Pages_semibold__xeX7k",primary_color:"Pages_primary_color__GI6ox",secondary_color:"Pages_secondary_color__Nhgpr",link_secondary:"Pages_link_secondary__Mx82R",page_head:"Pages_page_head__rn4LA",page_head_branding:"Pages_page_head_branding__SxhzT",page_head_slug:"Pages_page_head_slug__kf8Nl",page_head_rule:"Pages_page_head_rule__kq5pO",page_heading:"Pages_page_heading__qimJI",contact:"Pages_contact__dz_Xe",contact_head:"Pages_contact_head__mSlXt",contact_head_heading:"Pages_contact_head_heading__IYjtG",contact_head_text:"Pages_contact_head_text__shWvY",contact_feedback:"Pages_contact_feedback___XNek",feedback_success_heading:"Pages_feedback_success_heading__zT1gV",contact_feedback_text:"Pages_contact_feedback_text__9zQk2",contact_info:"Pages_contact_info__EFdq_",contact_input:"Pages_contact_input__T2L_9",contact_input_label:"Pages_contact_input_label__DTTlc",contact_message:"Pages_contact_message__cmhtm",contact_input_text:"Pages_contact_input_text__omCEn",contact_message_text:"Pages_contact_message_text__tHCVa",contact_button:"Pages_contact_button__PL_wW"}}},function(e){e.O(0,[884,774,888,179],function(){return e(e.s=8105)}),_N_E=e.O()}]);