System.register(['@angular/platform-browser-dynamic', './first.component', '@angular/core/Index'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, first_component_1, Index_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (first_component_1_1) {
                first_component_1 = first_component_1_1;
            },
            function (Index_1_1) {
                Index_1 = Index_1_1;
            }],
        execute: function() {
            Index_1.enableProdMode();
            platform_browser_dynamic_1.bootstrap(first_component_1.FirstComponent).then(function (success) { return console.log('Bootstrap success'); })
                .catch(function (error) { return console.log(error); });
        }
    }
});
//# sourceMappingURL=main.js.map