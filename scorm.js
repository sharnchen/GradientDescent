
(function(){
 'use strict';
 var api=null, initialized=false;
 function locate(w){
   var count=0;
   while(w && count++<15){
     try {if(w.API && typeof w.API.LMSInitialize==='function')return w.API;}
     catch(e){}
     try{if(w.parent===w)break;w=w.parent;}catch(e){break;}
   }
   return null;
 }
 function init(){
   try{
     api=locate(window) || (window.opener ? locate(window.opener) : null);
     if(!api)return false;
     initialized=api.LMSInitialize('')==='true';
     if(initialized){
       var status=api.LMSGetValue('cmi.core.lesson_status');
       if(status!=='completed' && status!=='passed'){
         api.LMSSetValue('cmi.core.lesson_status','incomplete');
         api.LMSCommit('');
       }
     }
   }catch(e){initialized=false;}
   return initialized;
 }
 function finish(){
   var msg=document.getElementById('scorm-feedback');
   if(initialized){
     try{
       var ok=api.LMSSetValue('cmi.core.lesson_status','completed');
       var committed=api.LMSCommit('');
       msg.textContent=(ok==='true' && committed==='true')?'已向 TronClass 回報完成學習。':'已送出完成狀態，但平台尚未確認；請檢查課程紀錄。';
     }catch(e){msg.textContent='SCORM 回報失敗；請確認平台支援 SCORM 1.2。'}
   }else{
     msg.textContent='已完成閱讀。單獨開啟 HTML 時不會回傳學習狀態；請從 TronClass SCORM 課件入口開啟。';
   }
 }
 window.reportQuizScore=function(score,passed){
   if(!initialized||score===null)return false;
   try{
     api.LMSSetValue('cmi.core.score.min','0');
     api.LMSSetValue('cmi.core.score.max','100');
     api.LMSSetValue('cmi.core.score.raw',String(score));
     api.LMSSetValue('cmi.core.lesson_status',passed?'passed':'failed');
     return api.LMSCommit('')==='true';
   }catch(e){return false;}
 };
 document.addEventListener('DOMContentLoaded', function(){
   init();
   var btn=document.getElementById('scorm-complete');
   if(btn)btn.addEventListener('click',finish);
 });
 window.addEventListener('pagehide',function(){
   if(initialized){try{api.LMSCommit('');api.LMSFinish('');}catch(e){}initialized=false;}
 });
})();
