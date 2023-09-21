import type { FromSchema } from '@feathersjs/schema';
import type { HookContext } from '../../declarations';
export declare const messageSchema: {
    readonly $id: "Message";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly ["id", "text"];
    readonly properties: {
        readonly id: {
            readonly type: "number";
        };
        readonly text: {
            readonly type: "string";
        };
    };
};
export type Message = FromSchema<typeof messageSchema>;
export declare const messageValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const messageResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    text: string;
}, HookContext>;
export declare const messageExternalResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    text: string;
}, HookContext>;
export declare const messageDataSchema: {
    readonly $id: "MessageData";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly ["text"];
    readonly properties: {
        readonly id: {
            readonly type: "number";
        };
        readonly text: {
            readonly type: "string";
        };
    };
};
export type MessageData = FromSchema<typeof messageDataSchema>;
export declare const messageDataValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const messageDataResolver: import("@feathersjs/schema").Resolver<{
    id?: number | undefined;
    text: string;
}, HookContext>;
export declare const messagePatchSchema: {
    readonly $id: "MessagePatch";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly [];
    readonly properties: {
        readonly id: {
            readonly type: "number";
        };
        readonly text: {
            readonly type: "string";
        };
    };
};
export type MessagePatch = FromSchema<typeof messagePatchSchema>;
export declare const messagePatchValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const messagePatchResolver: import("@feathersjs/schema").Resolver<{
    id?: number | undefined;
    text?: string | undefined;
}, HookContext>;
export declare const messageQuerySchema: {
    readonly $id: "MessageQuery";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly properties: {
        readonly $limit: {
            readonly type: "number";
            readonly minimum: 0;
        };
        readonly $skip: {
            readonly type: "number";
            readonly minimum: 0;
        };
        readonly $sort: {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly enum: [1, -1];
                };
                readonly text: {
                    readonly type: "number";
                    readonly enum: [1, -1];
                };
            };
        };
        readonly $select: {
            readonly type: "array";
            readonly maxItems: number;
            readonly items: {
                readonly enum?: ("id" | "text")[] | undefined;
                readonly type: "string";
            };
        };
        readonly $or: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly additionalProperties: false;
                readonly properties: {
                    readonly id: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "number";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                    readonly text: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "string";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                };
            };
        };
        readonly $and: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly additionalProperties: false;
                readonly properties: {
                    readonly id: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "number";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                    readonly text: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "string";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                } & {
                    readonly $or: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly additionalProperties: false;
                            readonly properties: {
                                readonly id: import("@feathersjs/schema").PropertyQuery<{
                                    readonly type: "number";
                                }, {
                                    [key: string]: import("json-schema-to-ts").JSONSchema7;
                                } | undefined>;
                                readonly text: import("@feathersjs/schema").PropertyQuery<{
                                    readonly type: "string";
                                }, {
                                    [key: string]: import("json-schema-to-ts").JSONSchema7;
                                } | undefined>;
                            };
                        };
                    };
                };
            };
        };
        readonly id: import("@feathersjs/schema").PropertyQuery<{
            readonly type: "number";
        }, {
            [key: string]: import("json-schema-to-ts").JSONSchema7;
        } | undefined>;
        readonly text: import("@feathersjs/schema").PropertyQuery<{
            readonly type: "string";
        }, {
            [key: string]: import("json-schema-to-ts").JSONSchema7;
        } | undefined>;
    };
};
export type MessageQuery = FromSchema<typeof messageQuerySchema>;
export declare const messageQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const messageQueryResolver: import("@feathersjs/schema").Resolver<{
    id?: number | {
        [x: string]: unknown;
        [x: number]: unknown;
    } | undefined;
    text?: string | {
        [x: string]: unknown;
        [x: number]: unknown;
    } | undefined;
    $limit?: number | undefined;
    $skip?: number | undefined;
    $sort?: {
        [x: string]: unknown;
        id?: 1 | -1 | undefined;
        text?: 1 | -1 | undefined;
    } | undefined;
    $select?: string[] | undefined;
    $or?: {
        id?: number | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        text?: string | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
    }[] | undefined;
    $and?: {
        id?: number | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        text?: string | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        $or?: {
            id?: number | {
                [x: string]: unknown;
                [x: number]: unknown;
            } | undefined;
            text?: string | {
                [x: string]: unknown;
                [x: number]: unknown;
            } | undefined;
        }[] | undefined;
    }[] | undefined;
}, HookContext>;
