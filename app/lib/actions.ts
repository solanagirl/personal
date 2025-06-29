// src/lib/actions.ts

// 1. JSON Schema types (simplified)
export interface JSONSchema {
    type: "object"
    properties: Record<string, { type: string; description?: string; enum?: any[] }>
    required?: string[]
}

// 2. Core FunctionDefinition interface
export interface FunctionDefinition<P extends Record<string, any>> {
    name: string
    description: string
    // we’ll use JSONSchema for OpenAI’s `parameters`
    parameters: JSONSchema
    // the actual implementation of the function:
    handler: (args: P) => Promise<any>
}

// 3. Helper to build FunctionDefinitions
export function defineFunction<P extends Record<string, any>>(opts: {
    name: string
    description: string
    parameters: JSONSchema
    handler: (args: P) => Promise<any>
}): FunctionDefinition<P> {
    return {
        name: opts.name,
        description: opts.description,
        parameters: opts.parameters,
        handler: opts.handler,
    }
}