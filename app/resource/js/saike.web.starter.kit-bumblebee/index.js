!function(a,b,c,d,e){"use strict";var f,g;f=function(a,b){var c,d,e;c=b.split("."),d=a,e=c.length;for(var f=0;e>f;f++)"undefined"==typeof d[c[f]]&&(d[c[f]]={}),d=d[c[f]];return d},g=f(d,"_fns.excute"),g.sample=a.noop,g.sample_console=function(){e.log("Hello World! You Motherfucker!")},d.init=function(){for(var a in g)"function"==typeof g[a]&&g[a]()},a(d.init())}(jQuery,window,document,{},"undefined"!=typeof console?console:void 0);