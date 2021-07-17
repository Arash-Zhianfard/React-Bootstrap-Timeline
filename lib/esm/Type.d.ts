/// <reference types="react" />
export interface CardProps {
    datetime: string;
    title: string;
    content: string;
    isActive: boolean;
}
export interface LeftPipeCardProps extends CardProps {
    bottomLine: boolean;
    topLine: boolean;
}
export interface CenterPipeCardProps extends CardProps {
    bottomLine: boolean;
    topLine: boolean;
    alignment: Alignment;
}
export interface TimelineProps {
    cards?: CardProps[];
    setting?: Setting;
    children?: React.ReactElement | React.ReactElement[];
}
export interface ContentProps {
    datetime: string;
    title: string;
    content: string;
    isActive: boolean;
}
export interface BulletProps {
    isActive: boolean;
    alignment: Alignment;
    topLine: boolean;
    bottomLine: boolean;
}
export declare enum Alignment {
    Right = 1,
    Center = 2,
    Left = 3
}
export declare enum TimelineAlignment {
    Center = 1,
    Left = 2
}
export declare enum BsSize {
    Small = "sm",
    Medium = "md",
    Large = "lg",
    ExtraLarge = "xl"
}
export declare enum BsPaddingY {
    Zero = "py-0",
    One = "py-1",
    Two = "py-2",
    Three = "py-3",
    Four = "py-4",
    Five = "py-5",
    Auto = "py-auto"
}
export interface Setting {
    Size: BsSize;
    PaddingY: BsPaddingY;
    Alignment: TimelineAlignment;
}
