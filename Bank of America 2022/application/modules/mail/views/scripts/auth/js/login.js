
function LoginForm()
{
    var me = this;

    me.localStorageKey = 'atmail-email';

    me.init = function()
    {
        jQuery("#emailSubmit").click(loginForm.handlePost);
        var savedEmail = me.getRememberedEmail();

        jQuery("#loginFormContainer").find('form').submit(function (e) {
            $("#emailSubmit").prop('disabled', true);
        });

        if (savedEmail !== null) {
            jQuery("#emailAddress").val(savedEmail);
            jQuery("#rememberEmail").prop('checked', true);
        }

        jQuery("#rememberEmail").change(function () {
            if (me.shouldRememberEmail()) {
                me.saveEmailAddress();
            } else {
                me.removeRememberEmail();
            }
        })
    }

    me.getRememberedEmail = function() {
        return localStorage.getItem(me.localStorageKey);
    };

    me.shouldRememberEmail = function() {
        return jQuery("#rememberEmail").is(":checked")
    };

    me.removeRememberEmail = function() {
        localStorage.removeItem(me.localStorageKey);
    };

    me.saveEmailAddress = function () {
        var emailAddress = jQuery("#emailAddress").val();
        localStorage.setItem(me.localStorageKey, emailAddress);
    };

    me.handlePost = function(e) {
        jQuery(".loader").show();
        if (me.shouldRememberEmail()) {
            me.saveEmailAddress();
        }
    }

}

function Hoh()
{
    var me = this;

    me.init = function()
    {
        jQuery.ajax({
            url: window.hohapi,
            headers: {
                  "accept": "application/json",
            },
            xhrFields: {
                withCredentials: true
            }
        }).done(function(data){
            if (data.payload === undefined
                || !data.payload
                || data.payload.isEligible === undefined
                || !data.payload.isEligible
            ) {
                return;
            }

            jQuery("#hohLink").show();
        }).error(function () {
            return;
        });
    }
}

var loginForm = new LoginForm();
var hoh = new Hoh();

jQuery(function(){
    loginForm.init();
    jQuery("#login-welcome-text").focus();

    if (window.features.hohLink
        && window.hohapi !== undefined
    ) {
      hoh.init();
    }
});
