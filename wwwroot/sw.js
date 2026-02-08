let wasmBytes = null;

// Receive WASM bytes from the page
self.addEventListener("message", event => {
  if (event.data && event.data.type === "wasm-bytes") {
    wasmBytes = event.data.bytes;
  }
});

// Intercept request for dynamic.wasm
self.addEventListener("fetch", event => {
  if (event.request.url.endsWith("dynamic.wasm")) {
    if (wasmBytes) {
      event.respondWith(
        new Response(wasmBytes, {
          headers: { "Content-Type": "application/wasm" }
        })
      );
    }
  }
});
