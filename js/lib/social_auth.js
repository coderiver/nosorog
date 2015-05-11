(function() {
    function g() {
        window.asyncLoad("http://vkontakte.ru/js/api/openapi.js", function(){});
    }
    window.addEventListener ? window.addEventListener("load", g, !1) : window.attachEvent && window.attachEvent("onload", g)
})();

    function fbLogin(fbAppId, redirect) {
    if (!fbAppId) {
        console.log('fb error');
        return;
    }
    window.location.href = 'https://www.facebook.com/dialog/oauth?client_id='+fbAppId+'&redirect_uri='+redirect
}

function vkLogin(iVkAppId, redirect) {
    if (!iVkAppId) {
        console.log('vk error');
        return;
    }

    var localVK = VK;
    var sVkTransportPath = '/modules/openid/xd_receiver.html';
    var sVkLoginPath = redirect;
    localVK.init({apiId: iVkAppId, nameTransportPath: sVkTransportPath});
    localVK.Auth.login(function(response) {
        if (response.session) {
            window.location = sVkLoginPath;
        }
    });
}