console.clear();
//console.log('TEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE');

var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        //console.log(mutation)
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
            // element added to DOM
            var hasClass = [].some.call(mutation.addedNodes, function (el) {
                //console.log('classes: ' +  el.classList);
                //    return el.classList.contains('modal in')
                return el.classList + ''
            });
            if (hasClass) {
                // element has class `MyClass`
                //console.log('element ".MyClass" added');
                try {
                    var b = document.querySelectorAll('.modal-content');
                    var c = document.querySelectorAll('.modal-95');
                    //var d = document.querySelectorAll('.CodeMirror-merge');
					var d = document.querySelectorAll('.CodeMirror-merge .CodeMirror');
					var e = document.querySelectorAll('.CodeMirror-merge-gap');
					var f = document.querySelectorAll('svg:not(:root)');
                    b[0].style.height = '100%';
                    c[0].style.height = '100%';
                    d[0].style.height = '750px';
					d[1].style.height = '750px';
					e[0].style.height = '750px';
					f[0].style.height = '100% !important';
                } catch (e) {}

            }
        }
    });
});

var config = {
    attributes: true,
    childList: true,
    characterData: true
};

observer.observe(document.body, config);
