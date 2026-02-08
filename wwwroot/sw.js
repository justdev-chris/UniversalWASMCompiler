self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);

  if (url.pathname.endsWith(".wasm")) {
    event.respondWith(
      fetch(event.request).then(res => {
        return new Response(res.body, {
          status: res.status,
          statusText: res.statusText,
          headers: {
            ...Object.fromEntries(res.headers.entries()),
            "Content-Type": "application/wasm"
          }
        });
      })
    );
  }
});
