function routeRender(routes) {
  if (!location.hash) {
    history.replaceState(null, '', '/#/');
  }

  const routerView = document.querySelector('router-view');
  const [hash, queryString = ''] = location.hash.split('?');

  // a=123&b=456
  // ['a=123', 'b=456']
  // {'a': '123, 'b': '456}
  const query = queryString
    .split('&')
    .reduce((acc, cur) => {
      const [key, val] = cur.split('=');
      acc[key] = val;
      return acc;
    }, {});
  // history.state에 객체를 보관합니다.
  history.replaceState(query, '');

  const currentRoute = routes.find(route => new RegExp(`${route.path}/?$`).test(hash));

  routerView.innerHTML = '';
  routerView.append(new currentRoute.component().el);

  window.scrollTo(0, 0);
}

export default function createRouter(routes) {
  return function () {
    window.addEventListener('popstate', () => {
      routeRender(routes);
    });
    routeRender(routes);
  }
}