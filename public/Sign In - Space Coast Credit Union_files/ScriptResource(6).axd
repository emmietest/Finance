﻿(function(n,t){t.orccLogManager=t.orccLogManager||{sendToServer:!1,url:"",logException:function(n,t){var i=n+", "+t;typeof console=="object"&&console.log(i);try{this.sendAjaxRequest(i)}catch(r){typeof console=="object"&&console.log(r)}},sendAjaxRequest:function(t){this.url!=""&&n.ajax({url:this.url,type:"POST",dataType:"json",data:{Message:JSON.stringify(t)}})}}})(jQuery,window);