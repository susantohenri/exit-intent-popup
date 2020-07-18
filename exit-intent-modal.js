function exit_intent_popup_ready(f) { /in/.test(document.readyState) ? setTimeout('exit_intent_popup_ready(' + f + ')', 9) : f() }

function exit_intent_popup_starter(cb) {
    if (window.location.href.indexOf('wp-admin') > -1) return false
    else exit_intent_popup_ready(cb)
}

exit_intent_popup_starter(function() {
    exit_intent_attach_modal()
    document.querySelector('.exit-intent-popup-close').addEventListener('click', exit_intent_hide_modal)
    window.addEventListener('click', exit_intent_hide_modal)
})

function exit_intent_attach_modal() {
    var x = document.createElement('div')
    x.innerHTML = `
    <div class="exit-intent-popup-modal">
        <div class="exit-intent-popup-modal-content">
            <div class="exit-intent-popup-modal-header">
                <span class="exit-intent-popup-close">&times;</span>
            </div>
            <div class="exit-intent-popup-modal-body">
            </div>
            <div class="exit-intent-popup-modal-footer">
            </div>
        </div>
    </div>
    `
    document.body.appendChild(x)
    document.querySelector('.exit-intent-popup-modal-body').innerHTML = exit_intent_modal_content
}

function exit_intent_show_modal() {
    document.querySelector('.exit-intent-popup-modal').style.display = 'block'
}

function exit_intent_hide_modal() {
    var element = document.querySelector('.exit-intent-popup-modal')
    if (typeof(element) != 'undefined' && element != null) {
        element.style.display = 'none'
    }
}