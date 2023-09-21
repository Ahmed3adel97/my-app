"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageQueryResolver = exports.messageQueryValidator = exports.messageQuerySchema = exports.messagePatchResolver = exports.messagePatchValidator = exports.messagePatchSchema = exports.messageDataResolver = exports.messageDataValidator = exports.messageDataSchema = exports.messageExternalResolver = exports.messageResolver = exports.messageValidator = exports.messageSchema = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const validators_1 = require("../../validators");
// Main data model schema
exports.messageSchema = {
    $id: 'Message',
    type: 'object',
    additionalProperties: false,
    required: ['id', 'text'],
    properties: {
        id: { type: 'number' },
        text: { type: 'string' }
    }
};
exports.messageValidator = (0, schema_1.getValidator)(exports.messageSchema, validators_1.dataValidator);
exports.messageResolver = (0, schema_1.resolve)({});
exports.messageExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new data
exports.messageDataSchema = {
    $id: 'MessageData',
    type: 'object',
    additionalProperties: false,
    required: ['text'],
    properties: {
        ...exports.messageSchema.properties
    }
};
exports.messageDataValidator = (0, schema_1.getValidator)(exports.messageDataSchema, validators_1.dataValidator);
exports.messageDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing data
exports.messagePatchSchema = {
    $id: 'MessagePatch',
    type: 'object',
    additionalProperties: false,
    required: [],
    properties: {
        ...exports.messageSchema.properties
    }
};
exports.messagePatchValidator = (0, schema_1.getValidator)(exports.messagePatchSchema, validators_1.dataValidator);
exports.messagePatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.messageQuerySchema = {
    $id: 'MessageQuery',
    type: 'object',
    additionalProperties: false,
    properties: {
        ...(0, schema_1.querySyntax)(exports.messageSchema.properties)
    }
};
exports.messageQueryValidator = (0, schema_1.getValidator)(exports.messageQuerySchema, validators_1.queryValidator);
exports.messageQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=messages.schema.js.map