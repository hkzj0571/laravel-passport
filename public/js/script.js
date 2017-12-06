var Applocation = {
    init: function () {

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                'Authorization': $('meta[name="api_token"]').attr('content')
            }
        })
    }
}

$(document).ready(function () {
    Applocation.init()
    $(document).pjax('a:not(a[target="_blank"])', '#main', {timeout: 1600, maxCacheLength: 500})
    $(document).on('pjax:start', function () {
        NProgress.start()
    })
    $(document).on('pjax:end', function () {
        NProgress.done()
        Applocation.init()
    })
})