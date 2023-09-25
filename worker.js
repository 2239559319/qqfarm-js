async function post({ url, body = {}, headers = {}, params = {} }) {
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

async function getAll() {
  const url = 'https://nc.qzone.qq.com/cgi-bin/cgi_farm_index';
  const params = {
    mod: 'user',
    act: 'run',
    wd: 3,
  };

  const res = await post({ url, params });

  console.log(res);
}

var index = {
  async fetch(request) {
    const data = await getAll();

    const json = JSON.stringify(data, null, 2);

    return new Response(json, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    });
  },
};

export { index as default };
