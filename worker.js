export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname !== "/") {
      return Response.redirect(`https://repo.codemc.io/repository/lemonypancakes${url.pathname}`, 301);
    }

    return new Response(
      `Repository Proxy - repo.lemonypancakes.me\n\n` +
      `Use this URL for accessing hosted artifacts:\n` +
      `https://repo.lemonypancakes.me/\n\n` +
      `Requests are redirected to:\n` +
      `https://repo.codemc.io/repository/lemonypancakes/`,
      { headers: { "Content-Type": "text/plain" } }
    );
  }
};
