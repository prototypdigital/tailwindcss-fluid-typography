export type PluginConfig = {
    minScreenWidth?: number;
    maxScreenWidth?: number;
    unit?: string;
    suffix?: string;
    prefix?: string;
    values: {
        key: string;
        fontSize: [number, number] | number;
        lineHeight?: [number, number] | number;
        letterSpacing?: [number, number] | number;
    }[];
};
