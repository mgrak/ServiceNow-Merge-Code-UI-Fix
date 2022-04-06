console.clear();
console.log('TEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE');

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
                //element has class `MyClass`
                //console.log('element ".MyClass" added');
				var height = window.innerHeight - 210;
				
                try {
					console.log('💩 setting dom');
					var a = document.querySelectorAll('#merge_form_field_modal');
                    var b = document.querySelectorAll('.modal-content');
                    var c = document.querySelectorAll('.modal-95');
                    //var d = document.querySelectorAll('.CodeMirror-merge');
					var d = document.querySelectorAll('.CodeMirror-merge .CodeMirror');
					var e = document.querySelectorAll('.CodeMirror-merge-gap');
					var f = document.querySelectorAll('svg:not(:root)');
					var g = document.querySelectorAll('.modal-footer');
					var h = document.querySelectorAll('#merge_view');
					var i = document.querySelectorAll('#merge_view > div');
					var xa = document.querySelectorAll('#merge_view > div > div.CodeMirror-merge-pane.CodeMirror-merge-left > div > div.CodeMirror-vscrollbar')
					//var xb = document.querySelectorAll('#merge_view > div > div.CodeMirror-merge-pane.CodeMirror-merge-editor.CodeMirror-merge-pane-rightmost > div > div.CodeMirror-vscrollbar')					
                    a[0].style['overflow-y'] = 'hidden';
					b[0].style.height = '100%';
                    c[0].style.height = '100%';
                    d[0].style.height = height + 'px';
					d[1].style.height = height + 'px';
					e[0].style.height = height + 'px';
					h[0].style.height = height + 'px';
					i[0].style.height = height + 'px';
					f[0].style.height = '100% !important';
					//g[0].style.paddingTop =  (window.innerHeight - 560) + 'px';
					xa[0].scrollBy(0,1);					
					setTimeout(function(){xa[0].scrollBy(0,-1);},500);
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
