import Giscus from '@giscus/react';

export default function GiscusComments({ isDark = true }: { isDark?: boolean }) {
  return (
    <Giscus
      repo="samuellawrentz/blog-comments"
      repoId="R_kgDOH0vDow"
      category="General"
      categoryId="DIC_kwDOH0vDo84CQ111"
      mapping="pathname"
      reactionsEnabled="0"
      emitMetadata="0"
      theme={isDark ? 'dark' : 'light'}
    />
  );
}
