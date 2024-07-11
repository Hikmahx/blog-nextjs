export const getQueryString = (sortBy = "date", curPage = 1) => {
  const validatePage = isNaN(curPage) || curPage < 1 ? 1 : curPage;
  const validateSortBy = sortBy === "title" ? "title" : "date";

  let queryString = `?sortBy=${validateSortBy}`;
  if (validatePage > 1) {
    queryString += `&page=${validatePage}`;
  }

  return queryString;
};

export const getData = async (sortBy: string, currentPage: number) => {
  const queryString = getQueryString(sortBy, currentPage);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts${queryString}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const getPost = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};
