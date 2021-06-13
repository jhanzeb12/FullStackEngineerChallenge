
export const CommontUtils = {
  convertObjectToQueryParams: (obj: any, encodeUriComponents = true): string => {
    const queryParams: string[] = [];
    const keysArray = Object.keys(obj);

    keysArray.forEach(key => {
      let value = obj[key];
      if (encodeUriComponents) {
        value = encodeURIComponent(value);
      }

      queryParams.push(`${key}=${value}`);
    });

    return queryParams.join('&');
  },
  convertQueryParamsToObject: (queryParams: string, decodeUriComponents = true): object => {
    const obj: any = {};
    const qpArray = queryParams.split('&');
    if (qpArray.length > 0) {
      qpArray.forEach(qp => {
        const keyValue = qp.split('=');
        obj[keyValue[0].trim()] = keyValue[1].trim();

        if (decodeUriComponents) {
          obj[keyValue[0].trim()] = decodeURIComponent(keyValue[1].trim());
        }
      });
    }

    return obj;
  }
};