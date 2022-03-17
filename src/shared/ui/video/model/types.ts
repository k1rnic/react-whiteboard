import { ImageConfig as KonvaImageConfig } from 'konva/lib/shapes/Image';

export type VideoConfig = { src: string; play?: boolean; muted?: boolean } & KonvaImageConfig;
