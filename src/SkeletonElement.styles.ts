import styled from 'styled-components';

export const Container = styled.div`

`;

export const TextSkeletonStyle = styled.div<{
  width?: string,
  height?: string,
}>`
  background-color: #ddd;
  margin: 10px 0;
  border-radius: 4px; 
  width: ${(e: any) => e.width ? e.width : '100%'};
  height: ${(e: any) => e.height ? e.height : '12px'};
`;

export const TitleSkeletonStyle = styled.div<{
  width?: string,
  height?: string,
  marginBottom?: string;
}>`
  background-color: #ddd;
  margin: 10px 0;
  border-radius: 4px; 
  width: ${(e: any) => e.width ? e.width : '50%'};
  height: ${(e: any) => e.height ? e.height : '20px'};
  margin-bottom: ${(e: any) => e.marginBottom ? e.marginBottom : '15px'}
`;

export const AvatarSkeletonStyle = styled.div<{
  width?: string,
  height?: string,
}>`
  background-color: #ddd;
  margin: 10px 0;
  border-radius: 4px; 
  width: ${(e: any) => e.width ? e.width : '100px'};
  height: ${(e: any) => e.height ? e.height : '100px'};
  border-radius: 50%;
`;

export const ThumbnailSkeletonStyle = styled.div<{
  width?: string,
  height?: string,
}>`
  background-color: #ddd;
  margin: 10px 0;
  border-radius: 4px; 
  width: ${(e: any) => e.width ? e.width : '100px'};
  height: ${(e: any) => e.height ? e.height : '100px'};
`;
