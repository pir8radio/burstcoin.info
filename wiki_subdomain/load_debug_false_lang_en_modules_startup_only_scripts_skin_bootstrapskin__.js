var mediaWikiLoadStart=(new Date()).getTime();function isCompatible(ua){if(ua===undefined){ua=navigator.userAgent;}return!((ua.indexOf('MSIE')!==-1&&parseFloat(ua.split('MSIE')[1])<8)||(ua.indexOf('Firefox/')!==-1&&parseFloat(ua.split('Firefox/')[1])<3)||(ua.indexOf('Opera/')!==-1&&(ua.indexOf('Version/')===-1?parseFloat(ua.split('Opera/')[1])<10:parseFloat(ua.split('Version/')[1])<12))||(ua.indexOf('Opera ')!==-1&&parseFloat(ua.split(' Opera ')[1])<10)||ua.match(/BlackBerry[^\/]*\/[1-5]\./)||ua.match(/webOS\/1\.[0-4]/)||ua.match(/PlayStation/i)||ua.match(/SymbianOS|Series60/)||ua.match(/NetFront/)||ua.match(/Opera Mini/)||ua.match(/S40OviBrowser/)||(ua.match(/Glass/)&&ua.match(/Android/)));}var startUp=function(){mw.config=new mw.Map(true);mw.loader.addSource({"local":"/load.php"});mw.loader.register([["site","1427785585",[],"site"],["noscript","1427785585",[],"noscript"],["filepage","1427785585"],["user.groups","1427785585",[],"user"],["user","1427785585",[],"user"],["user.cssprefs",
"1427785585",["mediawiki.user"],"private"],["user.options","1427785585",[],"private"],["user.tokens","1427785585",[],"private"],["mediawiki.language.data","1427785585",["mediawiki.language.init"]],["mediawiki.skinning.elements","1427785585"],["mediawiki.skinning.content","1427785585"],["mediawiki.skinning.interface","1427785585"],["mediawiki.skinning.content.parsoid","1427785585"],["mediawiki.skinning.content.externallinks","1427785585"],["jquery.accessKeyLabel","1437415466",["jquery.client","jquery.mwExtension"]],["jquery.appear","1427785585"],["jquery.arrowSteps","1427785585"],["jquery.async","1427785585"],["jquery.autoEllipsis","1427785585",["jquery.highlightText"]],["jquery.badge","1427785585",["mediawiki.language"]],["jquery.byteLength","1427785585"],["jquery.byteLimit","1427785585",["jquery.byteLength"]],["jquery.checkboxShiftClick","1427785585"],["jquery.chosen","1427785585"],["jquery.client","1427785585"],["jquery.color","1427785585",["jquery.colorUtil"]],["jquery.colorUtil",
"1427785585"],["jquery.confirmable","1427785585",["mediawiki.jqueryMsg"]],["jquery.cookie","1427785585"],["jquery.expandableField","1427785585"],["jquery.farbtastic","1427785585",["jquery.colorUtil"]],["jquery.footHovzer","1427785585"],["jquery.form","1427785585"],["jquery.fullscreen","1427785585"],["jquery.getAttrs","1427785585"],["jquery.hidpi","1427785585"],["jquery.highlightText","1427785585",["jquery.mwExtension"]],["jquery.hoverIntent","1427785585"],["jquery.json","1427785585"],["jquery.localize","1427785585"],["jquery.makeCollapsible","1437415466"],["jquery.mockjax","1427785585"],["jquery.mw-jump","1427785585"],["jquery.mwExtension","1427785585"],["jquery.placeholder","1427785585"],["jquery.qunit","1427785585"],["jquery.qunit.completenessTest","1427785585",["jquery.qunit"]],["jquery.spinner","1427785585"],["jquery.jStorage","1427785585",["json"]],["jquery.suggestions","1427785585",["jquery.highlightText"]],["jquery.tabIndex","1427785585"],["jquery.tablesorter","1427785585",[
"jquery.mwExtension","mediawiki.language.months"]],["jquery.textSelection","1427785585",["jquery.client"]],["jquery.throttle-debounce","1427785585"],["jquery.validate","1427785585"],["jquery.xmldom","1427785585"],["jquery.tipsy","1427785585"],["jquery.ui.core","1427785585",[],"jquery.ui"],["jquery.ui.accordion","1427785585",["jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.ui.autocomplete","1427785585",["jquery.ui.menu"],"jquery.ui"],["jquery.ui.button","1427785585",["jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.ui.datepicker","1427785585",["jquery.ui.core"],"jquery.ui"],["jquery.ui.dialog","1427785585",["jquery.ui.button","jquery.ui.draggable","jquery.ui.position","jquery.ui.resizable"],"jquery.ui"],["jquery.ui.draggable","1427785585",["jquery.ui.core","jquery.ui.mouse"],"jquery.ui"],["jquery.ui.droppable","1427785585",["jquery.ui.draggable"],"jquery.ui"],["jquery.ui.menu","1427785585",["jquery.ui.core","jquery.ui.position","jquery.ui.widget"],"jquery.ui"],[
"jquery.ui.mouse","1427785585",["jquery.ui.widget"],"jquery.ui"],["jquery.ui.position","1427785585",[],"jquery.ui"],["jquery.ui.progressbar","1427785585",["jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.ui.resizable","1427785585",["jquery.ui.core","jquery.ui.mouse"],"jquery.ui"],["jquery.ui.selectable","1427785585",["jquery.ui.core","jquery.ui.mouse"],"jquery.ui"],["jquery.ui.slider","1427785585",["jquery.ui.core","jquery.ui.mouse"],"jquery.ui"],["jquery.ui.sortable","1427785585",["jquery.ui.core","jquery.ui.mouse"],"jquery.ui"],["jquery.ui.spinner","1427785585",["jquery.ui.button"],"jquery.ui"],["jquery.ui.tabs","1427785585",["jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.ui.tooltip","1427785585",["jquery.ui.core","jquery.ui.position","jquery.ui.widget"],"jquery.ui"],["jquery.ui.widget","1427785585",[],"jquery.ui"],["jquery.effects.core","1427785585",[],"jquery.ui"],["jquery.effects.blind","1427785585",["jquery.effects.core"],"jquery.ui"],[
"jquery.effects.bounce","1427785585",["jquery.effects.core"],"jquery.ui"],["jquery.effects.clip","1427785585",["jquery.effects.core"],"jquery.ui"],["jquery.effects.drop","1427785585",["jquery.effects.core"],"jquery.ui"],["jquery.effects.explode","1427785585",["jquery.effects.core"],"jquery.ui"],["jquery.effects.fade","1427785585",["jquery.effects.core"],"jquery.ui"],["jquery.effects.fold","1427785585",["jquery.effects.core"],"jquery.ui"],["jquery.effects.highlight","1427785585",["jquery.effects.core"],"jquery.ui"],["jquery.effects.pulsate","1427785585",["jquery.effects.core"],"jquery.ui"],["jquery.effects.scale","1427785585",["jquery.effects.core"],"jquery.ui"],["jquery.effects.shake","1427785585",["jquery.effects.core"],"jquery.ui"],["jquery.effects.slide","1427785585",["jquery.effects.core"],"jquery.ui"],["jquery.effects.transfer","1427785585",["jquery.effects.core"],"jquery.ui"],["json","1427785585",[],null,"local",
"return!!(window.JSON\u0026\u0026JSON.stringify\u0026\u0026JSON.parse);"],["moment","1427785585"],["mediawiki.api","1427785585",["mediawiki.util"]],["mediawiki.api.category","1427785585",["mediawiki.Title","mediawiki.api"]],["mediawiki.api.edit","1427785585",["mediawiki.Title","mediawiki.api","user.tokens"]],["mediawiki.api.login","1427785585",["mediawiki.api"]],["mediawiki.api.parse","1427785585",["mediawiki.api"]],["mediawiki.api.watch","1427785585",["mediawiki.api","user.tokens"]],["mediawiki.content.json","1427785585"],["mediawiki.debug","1427785585",["jquery.footHovzer","jquery.tipsy"]],["mediawiki.debug.init","1427785585",["mediawiki.debug"]],["mediawiki.feedback","1427785585",["jquery.ui.dialog","mediawiki.api.edit","mediawiki.jqueryMsg"]],["mediawiki.hidpi","1427785585",["jquery.hidpi"],null,"local","return'srcset'in new Image();"],["mediawiki.hlist","1427785585",["jquery.client"]],["mediawiki.htmlform","1427785585",["jquery.mwExtension"]],["mediawiki.icon","1427785585"],[
"mediawiki.inspect","1427785585",["jquery.byteLength","json"]],["mediawiki.notification","1427785585",["mediawiki.page.startup"]],["mediawiki.notify","1427785585"],["mediawiki.pager.tablePager","1427785585"],["mediawiki.searchSuggest","1437415466",["jquery.placeholder","jquery.suggestions","mediawiki.api"]],["mediawiki.Title","1427785585",["jquery.byteLength","mediawiki.util"]],["mediawiki.toc","1427785585",["jquery.cookie"]],["mediawiki.Uri","1427785585",["mediawiki.util"]],["mediawiki.user","1427785585",["jquery.cookie","mediawiki.api","user.options","user.tokens"]],["mediawiki.util","1427785585",["jquery.accessKeyLabel","mediawiki.notify"]],["mediawiki.cookie","1427785585",["jquery.cookie"]],["mediawiki.action.edit","1427785585",["jquery.byteLimit","jquery.textSelection","mediawiki.action.edit.styles","mediawiki.action.edit.toolbar"]],["mediawiki.action.edit.styles","1427785585"],["mediawiki.action.edit.toolbar","1427785585"],["mediawiki.action.edit.collapsibleFooter","1427785585",[
"jquery.cookie","jquery.makeCollapsible","mediawiki.icon"]],["mediawiki.action.edit.preview","1427785585",["jquery.form","jquery.spinner","mediawiki.action.history.diff"]],["mediawiki.action.history","1427785585",[],"mediawiki.action.history"],["mediawiki.action.history.diff","1427785585",[],"mediawiki.action.history"],["mediawiki.action.view.dblClickEdit","1427785585",["mediawiki.page.startup"]],["mediawiki.action.view.metadata","1427785585"],["mediawiki.action.view.postEdit","1437415466",["mediawiki.cookie","mediawiki.jqueryMsg"]],["mediawiki.action.view.redirect","1427785585",["jquery.client"]],["mediawiki.action.view.redirectPage","1427785585"],["mediawiki.action.view.rightClickEdit","1427785585"],["mediawiki.action.edit.editWarning","1427785585",["jquery.textSelection","mediawiki.jqueryMsg"]],["mediawiki.language","1437415466",["mediawiki.cldr","mediawiki.language.data"]],["mediawiki.cldr","1427785585",["mediawiki.libs.pluralruleparser"]],["mediawiki.libs.pluralruleparser",
"1427785585"],["mediawiki.language.init","1427785585"],["mediawiki.jqueryMsg","1427785585",["mediawiki.language","mediawiki.util"]],["mediawiki.language.months","1427785585",["mediawiki.language"]],["mediawiki.language.names","1427785585",["mediawiki.language.init"]],["mediawiki.libs.jpegmeta","1427785585"],["mediawiki.page.gallery","1427785585"],["mediawiki.page.ready","1427785585",["jquery.accessKeyLabel","jquery.checkboxShiftClick","jquery.makeCollapsible","jquery.mw-jump","jquery.placeholder"]],["mediawiki.page.startup","1427785585",["mediawiki.util"]],["mediawiki.page.patrol.ajax","1427785585",["jquery.spinner","mediawiki.Title","mediawiki.api","mediawiki.page.startup","user.tokens"]],["mediawiki.page.watch.ajax","1441400111",["mediawiki.api.watch","mediawiki.page.startup"]],["mediawiki.page.image.pagination","1427785585",["jquery.spinner","mediawiki.Uri"]],["mediawiki.special","1427785585"],["mediawiki.special.block","1427785585",["mediawiki.util"]],[
"mediawiki.special.changeemail","1427785585",["mediawiki.util"]],["mediawiki.special.changeslist","1427785585"],["mediawiki.special.changeslist.legend","1427785585"],["mediawiki.special.changeslist.legend.js","1427785585",["jquery.cookie","jquery.makeCollapsible"]],["mediawiki.special.changeslist.enhanced","1427785585"],["mediawiki.special.import","1427785585"],["mediawiki.special.movePage","1427785585",["jquery.byteLimit"]],["mediawiki.special.pageLanguage","1427785585"],["mediawiki.special.pagesWithProp","1427785585"],["mediawiki.special.preferences","1427785585",["mediawiki.language"]],["mediawiki.special.recentchanges","1427785585",["mediawiki.special"]],["mediawiki.special.search","1437677511"],["mediawiki.special.undelete","1427785585"],["mediawiki.special.upload","1427785585",["jquery.spinner","mediawiki.Title","mediawiki.api","mediawiki.libs.jpegmeta"]],["mediawiki.special.userlogin.common.styles","1427785585"],["mediawiki.special.userlogin.signup.styles","1427785585"],[
"mediawiki.special.userlogin.login.styles","1427785585"],["mediawiki.special.userlogin.common.js","1437904533"],["mediawiki.special.userlogin.signup.js","1437904533",["jquery.throttle-debounce","mediawiki.api","mediawiki.jqueryMsg"]],["mediawiki.special.unwatchedPages","1427785585",["mediawiki.Title","mediawiki.api.watch"]],["mediawiki.special.javaScriptTest","1427785585",["jquery.qunit"]],["mediawiki.special.version","1427785585"],["mediawiki.legacy.config","1427785585"],["mediawiki.legacy.ajax","1427785585",["mediawiki.legacy.wikibits"]],["mediawiki.legacy.commonPrint","1427785585"],["mediawiki.legacy.protect","1427785585",["jquery.byteLimit"]],["mediawiki.legacy.shared","1427785585"],["mediawiki.legacy.oldshared","1427785585"],["mediawiki.legacy.wikibits","1427785585",["mediawiki.util"]],["mediawiki.ui","1427785585"],["mediawiki.ui.checkbox","1427785585"],["mediawiki.ui.anchor","1427785585"],["mediawiki.ui.button","1427785585"],["mediawiki.ui.input","1427785585"],["es5-shim",
"1427785585",[],null,"local","return(function(){'use strict';return!this\u0026\u0026!!Function.prototype.bind;}());"],["oojs","1427785585",["es5-shim","json"]],["oojs-ui","1427785585",["oojs"]],["skins.cologneblue","1427785585"],["skins.modern","1427785585"],["skins.monobook.styles","1427785585"],["skins.vector.styles","1427785585"],["skins.vector.js","1427785585",["jquery.tabIndex","jquery.throttle-debounce"]],["skins.bootstrapskin","1427785585"]]);mw.config.set({"wgLoadScript":"/load.php","debug":false,"skin":"bootstrapskin","stylepath":"/skins","wgUrlProtocols":"bitcoin\\:|ftp\\:\\/\\/|ftps\\:\\/\\/|geo\\:|git\\:\\/\\/|gopher\\:\\/\\/|http\\:\\/\\/|https\\:\\/\\/|irc\\:\\/\\/|ircs\\:\\/\\/|magnet\\:|mailto\\:|mms\\:\\/\\/|news\\:|nntp\\:\\/\\/|redis\\:\\/\\/|sftp\\:\\/\\/|sip\\:|sips\\:|sms\\:|ssh\\:\\/\\/|svn\\:\\/\\/|tel\\:|telnet\\:\\/\\/|urn\\:|worldwind\\:\\/\\/|xmpp\\:|\\/\\/","wgArticlePath":"/index.php/$1","wgScriptPath":"","wgScriptExtension":".php","wgScript":"/index.php",
"wgSearchType":null,"wgVariantArticlePath":false,"wgActionPaths":{},"wgServer":"http://wiki.burstcoin.info","wgServerName":"wiki.burstcoin.info","wgUserLanguage":"en","wgContentLanguage":"en","wgVersion":"1.24.1","wgEnableAPI":true,"wgEnableWriteAPI":true,"wgMainPageTitle":"Main Page","wgFormattedNamespaces":{"-2":"Media","-1":"Special","0":"","1":"Talk","2":"User","3":"User talk","4":"Wiki burstcoin.info","5":"Wiki burstcoin.info talk","6":"File","7":"File talk","8":"MediaWiki","9":"MediaWiki talk","10":"Template","11":"Template talk","12":"Help","13":"Help talk","14":"Category","15":"Category talk"},"wgNamespaceIds":{"media":-2,"special":-1,"":0,"talk":1,"user":2,"user_talk":3,"wiki_burstcoin.info":4,"wiki_burstcoin.info_talk":5,"file":6,"file_talk":7,"mediawiki":8,"mediawiki_talk":9,"template":10,"template_talk":11,"help":12,"help_talk":13,"category":14,"category_talk":15,"image":6,"image_talk":7,"project":4,"project_talk":5},"wgContentNamespaces":[0],"wgSiteName":
"wiki.burstcoin.info","wgFileExtensions":["png","gif","jpg","jpeg"],"wgDBname":"burstpr_wiki","wgFileCanRotate":true,"wgAvailableSkins":{"vector":"Vector","cologneblue":"CologneBlue","modern":"Modern","monobook":"MonoBook","bootstrapskin":"Bootstrap","fallback":"Fallback"},"wgExtensionAssetsPath":"/extensions","wgCookiePrefix":"burstpr_wiki","wgCookieDomain":"","wgCookiePath":"/","wgCookieExpiration":15552000,"wgResourceLoaderMaxQueryLength":-1,"wgCaseSensitiveNamespaces":[],"wgLegalTitleChars":" %!\"$\u0026'()*,\\-./0-9:;=?@A-Z\\\\\\^_`a-z~+\\u0080-\\uFFFF","wgResourceLoaderStorageVersion":1,"wgResourceLoaderStorageEnabled":false});};if(isCompatible()){document.write("\u003Cscript src=\"/load.php?debug=false\u0026amp;lang=en\u0026amp;modules=jquery%2Cmediawiki\u0026amp;only=scripts\u0026amp;skin=bootstrapskin\u0026amp;version=20150331T033728Z\"\u003E\u003C/script\u003E");};
/* cache key: burstpr_wiki:resourceloader:filter:minify-js:7:dbcb7e5aa63d57e1b3b486c1f859ccf3 */