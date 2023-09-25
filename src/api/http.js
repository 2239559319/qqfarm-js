export async function get({ url, headers = {}, params = {} }) {
  const mergedHeaders = {
    Cookie: process.env.COOKIE,
    Origin: 'https://appimg.qq.com',
    Referer: 'https://appimg.qq.com/',
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
    ...headers,
  };

  const paramsStr = new URLSearchParams(params).toString();
  const mergedUrl = paramsStr ? `${url}?${paramsStr}` : url;

  const req = await fetch(mergedUrl, {
    headers: mergedHeaders,
  });
  return req.json();
}

export async function post({ url, body = {}, headers = {}, params = {} }) {
  const mergedHeaders = {
    Cookie: process.env.COOKIE,
    'Content-Type': 'application/x-www-form-urlencoded',
    Origin: 'https://appimg.qq.com',
    Referer: 'https://appimg.qq.com/',
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
    ...headers,
  };

  const paramsStr = new URLSearchParams(params).toString();
  const mergedUrl = paramsStr ? `${url}?${paramsStr}` : url;
  const bodyStr = new URLSearchParams(body).toString();

  const req = await fetch(mergedUrl, {
    method: 'post',
    body: bodyStr,
    headers: mergedHeaders,
  });
  return req.json();
}
