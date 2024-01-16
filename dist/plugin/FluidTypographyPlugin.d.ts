import { PluginConfig } from "../types/PluginConfig";
export declare const FluidTypographyPlugin: {
    (options: PluginConfig): {
        handler: import("tailwindcss/types/config").PluginCreator;
        config?: Partial<import("tailwindcss/types/config").Config> | undefined;
    };
    __isOptionsFunction: true;
};
