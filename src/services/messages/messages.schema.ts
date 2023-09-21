// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import type { FromSchema } from '@feathersjs/schema'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const messageSchema = {
  $id: 'Message',
  type: 'object',
  additionalProperties: false,
  required: ['id', 'text'],
  properties: {
    id: { type: 'number' },

    text: { type: 'string' }
  }
} as const
export type Message = FromSchema<typeof messageSchema>
export const messageValidator = getValidator(messageSchema, dataValidator)
export const messageResolver = resolve<Message, HookContext>({})

export const messageExternalResolver = resolve<Message, HookContext>({})

// Schema for creating new data
export const messageDataSchema = {
  $id: 'MessageData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    ...messageSchema.properties
  }
} as const
export type MessageData = FromSchema<typeof messageDataSchema>
export const messageDataValidator = getValidator(messageDataSchema, dataValidator)
export const messageDataResolver = resolve<MessageData, HookContext>({})

// Schema for updating existing data
export const messagePatchSchema = {
  $id: 'MessagePatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...messageSchema.properties
  }
} as const
export type MessagePatch = FromSchema<typeof messagePatchSchema>
export const messagePatchValidator = getValidator(messagePatchSchema, dataValidator)
export const messagePatchResolver = resolve<MessagePatch, HookContext>({})

// Schema for allowed query properties
export const messageQuerySchema = {
  $id: 'MessageQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(messageSchema.properties)
  }
} as const
export type MessageQuery = FromSchema<typeof messageQuerySchema>
export const messageQueryValidator = getValidator(messageQuerySchema, queryValidator)
export const messageQueryResolver = resolve<MessageQuery, HookContext>({})
