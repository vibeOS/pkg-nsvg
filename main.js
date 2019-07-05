require.config({
    paths: {
        jquery: 'components/method-draw/lib/jquery',
        jquery_ui: 'components/method-draw/lib/jquery-ui/jquery-ui-1.8.17.custom.min',
        jquery_jgraduate: 'components/method-draw/lib/jgraduate/jquery.jgraduate',
        jquery_draginput: 'components/method-draw/lib/jquery-draginput',
        jquery_contextMenu:'components/method-draw/lib/contextmenu/jquery.contextMenu',
        jquery_hotkeys: 'components/method-draw/lib/js-hotkeys/jquery.hotkeys.min',
        jquery_mousewheel: 'components/method-draw/lib/mousewheel',
        vs: './components/vs',
        method_draw: 'components/method-draw/src/method-draw',
        touch: 'components/method-draw/lib/touch',
        svgutils: 'components/method-draw/src/svgutils',
        browser: 'components/method-draw/src/browser',
        svgicons: 'components/method-draw/icons/jquery.svgicons',
        svgcanvas: 'components/method-draw/src/svgcanvas',
        svgdraw: 'components/method-draw/src/draw',
        svgtransform: 'components/method-draw/src/svgtransformlist',
        svgmath: 'components/method-draw/src/math',
        svgunits: 'components/method-draw/src/units',
        svgsanitize: 'components/method-draw/src/sanitize',
        svghistory: 'components/method-draw/src/history',
        svgselect: 'components/method-draw/src/select',
        svgpath: 'components/method-draw/src/path',
        svgfilesaver:'components/method-draw/lib/filesaver',
        pathseg: 'components/method-draw/lib/pathseg',
        ext_grid:'components/method-draw/extensions/ext-grid',
        // dialog: 'components/method-draw/src/dialog',
        // contextmenu: 'components/method-draw/lib/contextmenu',
        // jpicker: 'components/method-draw/lib/jgraduate/jpicker.min',
        // ext_eyedropper: 'components/method-draw/extensions/ext-eyedropper',
        // ext_shapes: 'components/method-draw/extensions/ext-shapes',
        
        // requestanimationframe:'components/method-draw/lib/requestanimationframe',
        // taphold:'components/method-draw/lib/taphold',
    },
    shim: {
        jquery_ui: {
            deps: ['jquery']
        },
        jquery_draginput: {
            deps: ['jquery']
        },
        jquery_jgraduate: {
            deps: ['jquery']
        },
        jquery_hotkeys: {
            deps: ['jquery']
        },
        jquery_mousewheel:{
            deps: ['jquery']
        },
        method_draw: {
            exports: 'methodDraw',
            deps: ['jquery_ui', 'jquery_jgraduate', 'jquery_draginput', 'jquery_contextMenu', 'jquery_hotkeys', 'jquery_mousewheel', 'touch', 'svgutils', 'svgicons', 'svgcanvas']
        },
        ext_grid: {
            deps: ['method_draw']
        },
        svgicons: {
            deps: ['jquery']
        },
        svgcanvas: {
            deps: ['pathseg', 'svgdraw', 'svgtransform', 'svgmath', 'svgsanitize', 'svghistory', 'svgselect', 'svgpath', 'svgfilesaver']
        },
        svgunits: {
            deps: ['jquery', 'ext_grid']
        },
        svgsanitize: {
            deps: ['jquery']
        },
        svgutils: {
            deps: ['browser']
        }
    }
});

require([
    'jquery',
    'vs/editor/editor.main',
    'svgunits'
], function($, monaco) {
    $(function() {
        var editor = monaco.editor.create(document.getElementById('container'), {
            value: [
                'function x() {',
                '\tconsole.log("Hello world!");',
                '}'
            ].join('\n'),
            theme: 'vs-dark',
            scrollbar: {
                useShadows: false,
                verticalHasArrows: true,
                horizontalHasArrows: true,
                verticalScrollbarSize: 17,
                horizontalScrollbarSize: 17,
                arrowSize: 30
            },
            language: 'javascript',
            scrollBeyondLastColumn: 0,
            scrollBeyondLastLine: false,
            showFoldingControls: 'always',
            renderWhitespace: 'all',
            renderControlCharacters: true
        });

        $(window).on('resize', function() {
            //editor.layout();
            editor.layout({width:$(window).width(),height:$(window).height()});            
        })
    });
  
});