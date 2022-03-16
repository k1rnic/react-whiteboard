import { ImageConfig as KonvaImageConfig } from 'konva/lib/shapes/Image';

export type ImageConfig = { src: string } & Omit<KonvaImageConfig, 'image'>;
