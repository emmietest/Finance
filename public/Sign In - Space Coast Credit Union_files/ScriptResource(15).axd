﻿var MessageQueue;(function(n){function i(n,t){MessageBus.publish("MessageQueue.enqueue",{content:n,category:t})}function r(n,t){MessageBus.publish("MessageQueue.enqueue",{contentHtml:n,category:t})}function u(){MessageBus.publish("MessageQueue.clear")}var t;(function(n){n.Announcement="announcement";n.Error="error";n.Information="information";n.Success="success";n.Urgent="urgent"})(t=n.Category||(n.Category={}));n.enqueue=i;n.enqueueHtml=r;n.clear=u})(MessageQueue||(MessageQueue={}));