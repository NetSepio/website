export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.fe97dd8d.js","imports":["_app/immutable/entry/start.fe97dd8d.js","_app/immutable/chunks/index.fc291d87.js","_app/immutable/chunks/singletons.58cca3b6.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.f83a8464.js","imports":["_app/immutable/entry/app.f83a8464.js","_app/immutable/chunks/index.fc291d87.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
