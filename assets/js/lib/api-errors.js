export const handleApiErrors = (response) => {
  if (!response.ok) throw Error(response.statusText);
  return response;
};
