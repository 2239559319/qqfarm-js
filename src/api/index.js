import { post } from './http';

export async function getAll() {
  const url = 'https://nc.qzone.qq.com/cgi-bin/cgi_farm_index';
  const params = {
    mod: 'user',
    act: 'run',
    wd: 3,
  };

  const res = await post({ url, params });

  console.log(res);
}
