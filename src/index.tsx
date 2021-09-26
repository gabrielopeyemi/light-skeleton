import React from 'react';
import { AvatarSkeletonStyle, TextSkeletonStyle, ThumbnailSkeletonStyle, TitleSkeletonStyle } from './SkeletonElement.styles';


export interface SkeletonElementProps  {
  width?: string | undefined;
  height?: string | undefined;
  marginBottom?: string | undefined;
  children?: any;
  style?: any;
}

export const TextSkeleton = ({width, height, style}: SkeletonElementProps) => {
  return (
    <TextSkeletonStyle
      width={width}
      height={height}
      style={style}
    />
  )
}

export const TitleSkeleton = ({width, height, marginBottom, children, style}: SkeletonElementProps) => {
  return (
    <TitleSkeletonStyle
      width={width}
      height={height}
      marginBottom={marginBottom}
      style={style}
    />
  )
}

export const AvatarSkeleton = ({width, height, style}: SkeletonElementProps) => {
  return (
    <AvatarSkeletonStyle
      width={width}
      height={height}
      style={style}
    />
  )
}

export const ThumbnailSkeleton = ({width, height, style}: SkeletonElementProps) => {
  return (
    <ThumbnailSkeletonStyle
      width={width}
      height={height}
      style={style}
    />
  )
}