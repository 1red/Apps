/// <reference path="ts/globalize.d.ts" />
/// <reference path="ts/jquery.d.ts" />
/// <reference path="ts/knockout.d.ts" />
/// <reference path="ts/dx.all.d.ts" />
/// <reference path="index.d.ts" />

interface External { Notify(arg: string): any; }

module OneRed_TableStat {
    $(function() {
        // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
        // DevExpress.devices.current({ platform: "generic" });

        $(document).on("deviceready", function () {
            navigator["splashscreen"].hide();
            if (window["devextremeaddon"]) {
                window["devextremeaddon"].setup();
            }
            $(document).on("backbutton", function () {
                DevExpress.processHardwareBackButton();
            });
        });

        function onNavigatingBack(e) {
            if (e.isHardwareButton && !OneRed_TableStat.app.canBack()) {
                e.cancel = true;
                exitApp();
            }
        }

        function exitApp() {
            switch (DevExpress.devices.real().platform) {
                case "android":
                    navigator["app"].exitApp();
                    break;
                case "win8":
                    window.external.Notify("DevExpress.ExitApp");
                    break;
            }
        }

        app = new DevExpress.framework.html.HtmlApplication({
            namespace: OneRed_TableStat,
            navigation: config.navigation,
            layoutSet: DevExpress.framework.html.layoutSets[config.layoutSet],
            commandMapping: config.commandMapping
        });
        app.router.register(":view/:id", { view: "home", id: undefined });
        OneRed_TableStat.app.on("navigatingBack", onNavigatingBack);
        app.navigate();
    });
}