"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logRuntime = void 0;
const logRuntime = async (context, next) => {
    const startTime = Date.now();
    // Run everything else (other hooks and service call)
    await next();
    const duration = Date.now() - startTime;
    console.log(`Running hook log-runtime on ${context.path}.${context.method} duration ${duration}`);
};
exports.logRuntime = logRuntime;
//# sourceMappingURL=log-runtime.js.map