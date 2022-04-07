import api from '.';

const dev = false;

export const getArticles = async (locale = 'pt-BR') => {
  try {
    if (dev) return [];

    const { data } = await api.get('/articles', {
      params: {
        _locale: locale,
      },
    });
    return data;
  } catch (err) {
    throw new Error(`Failed to get articles: ${err}`);
  }
};

export const getCategories = async (locale = 'pt-BR') => {
  try {
    if (dev) return [];
    const { data } = await api.get('/categories', {
      params: {
        _locale: locale,
      },
    });
    return data;
  } catch (err) {
    throw new Error('Failed to get categories');
  }
};

interface ICategories {
  category: string;
  locale?: string;
}

export const getCategoryArticles = async ({
  category,
  locale = 'pt-BR',
}: ICategories) => {
  try {
    if (dev) return {};
    const { data } = await api.get(`/categories`, {
      params: {
        _locale: locale,
      },
    });
    let currentCategory;

    data.map((item: any) => {
      if (item.slug === category) {
        currentCategory = item;
      }
      return true;
    });

    return currentCategory;
  } catch (err) {
    throw new Error('Failed to get category articles');
  }
};

interface IArticle {
  article: string;
  locale?: string;
}

export const getArticle = async ({ article, locale = 'pt-BR' }: IArticle) => {
  try {
    if (dev) return {};
    const { data } = await api.get(`/articles`, {
      params: {
        _locale: locale,
      },
    });

    const findArticle = data.find(item => item.slug === article);

    return findArticle;
  } catch (err) {
    throw new Error('Failed to get article');
  }
};
