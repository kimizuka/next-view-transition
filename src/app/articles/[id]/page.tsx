import { notFound } from 'next/navigation';
import { ArticlePageTemplate } from '@/components/templates/ArticlePageTemplate';

export default async function ArticlePage({ params }: {
  params: {
    id: string
  }
}) {
  if (params.id !== 'counterattack-of-the-timer') {
    notFound();
  }

  return (
    <ArticlePageTemplate />
  );
}

export async function generateMetadata({
  params
}: {
  params: { id: string };
}) {
  return {
    title: params.id
  };
}

export async function generateStaticParams() {
  return [{
    id: 'counterattack-of-the-timer'
  }];
}