/// <reference path="ts/jquery.d.ts" />
/// <reference path="ts/globalize.d.ts" />
/// <reference path="ts/knockout.d.ts" />
/// <reference path="ts/dx.all.d.ts" />

declare module OneRed_TableStat {
    export interface Config {
        layoutSet?: string;
        navigation: Array<DevExpress.framework.dxCommandOptions>;
        commandMapping: {
            [containderId: string]: {
                defaults?: DevExpress.framework.dxCommandOptions;
                commands?: DevExpress.framework.dxCommandOptions;
            }
        };
    }

    export var app: DevExpress.framework.html.HtmlApplication;
    export var config: Config;
}