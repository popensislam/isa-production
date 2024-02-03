export function getQueryParams(params: OptionalRecord<string, string>) {
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([ name, value ]) => {
    if (value === undefined || value === null) return;
    searchParams.set(name, value);
  });

  return '?' + searchParams.toString();
}

/**
 * Функция добавления параметров в строку запроса в url
 * @param params
 */
export function addQueryParams(params: OptionalRecord<string, string>) {
  window.history.pushState(null, '', getQueryParams(params));
}
