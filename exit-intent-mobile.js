exit_intent_popup_starter(function() {
    var exit_intent_popup_hash = 'b'
    window.location.hash = exit_intent_popup_hash
    window.history.back()
    setTimeout(function() {
        window.history.forward()
        window.addEventListener('hashchange', function() {
            if (window.location.hash !== `#${exit_intent_popup_hash}`) {
                exit_intent_show_modal()
                window.history.forward()
            }
        }, false)
    }, 500)
})