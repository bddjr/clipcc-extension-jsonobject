import { type } from "clipcc-extension"
import defineBlock from "../../utils/define-block"
import { menuAssignmentOperators } from "../../utils/menu-assignment-operator"
import { logBlockError } from "../../utils/log-block-error"

const categoryID: string = 'object'
const color: string = '' // Use global color



const blocks: MyBlock<BlockParams>[] = [
    defineBlock({
        id: 'structuredClone1',
        type: type.BlockType.REPORTER,
        param: {
            obj: {
                type: undefined,
                defaultValue: undefined,
            },
        },
        function(args, util): any {
            try {
                return structuredClone(args.obj)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'structuredClone2',
        type: type.BlockType.REPORTER,
        param: {
            obj: {
                type: undefined,
                defaultValue: undefined,
            },
            options: {
                type: undefined,
                defaultValue: undefined,
            },
        },
        function(args, util): any {
            try {
                return structuredClone(args.obj, args.options)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'getFromKey',
        type: type.BlockType.REPORTER,
        param: {
            json: {
                type: undefined,
                defaultValue: undefined,
            },
            key: {
                type: type.ParameterType.STRING,
                defaultValue: 'hello',
            },
        },
        function(args, util): any {
            try {
                if (Object.hasOwn(args.json, args.key)) {
                    return args.json[args.key]
                }
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'setFromKey',
        type: type.BlockType.REPORTER,
        addCommandAfterThis: true,
        param: {
            json: {
                type: undefined,
                defaultValue: undefined,
            },
            key: {
                type: type.ParameterType.STRING,
                defaultValue: 'hello',
            },
            assignmentOperator: {
                type: type.ParameterType.STRING,
                defaultValue: '=',
                menu: menuAssignmentOperators,
            },
            value: {
                type: type.ParameterType.STRING,
                defaultValue: 'json'
            },
        },
        function(args, util): any {
            try {
                if (args.key == '__proto__' && !Object.hasOwn(args.json, '__proto__')) {
                    Object.defineProperty(args.json, "__proto__", {
                        value: undefined,
                        configurable: true,
                        enumerable: true,
                        writable: true,
                    })
                }
                switch (args.assignmentOperator) {
                    case '=':
                        return args.json[args.key] = args.value
                    case '+=':
                        return args.json[args.key] += args.value
                    case '-=':
                        return args.json[args.key] -= args.value
                    case '*=':
                        return args.json[args.key] *= args.value
                    case '/=':
                        return args.json[args.key] /= args.value
                    case '%=':
                        return args.json[args.key] %= args.value
                    case '**=':
                        return args.json[args.key] **= args.value
                    case '<<=':
                        return args.json[args.key] <<= args.value
                    case '>>=':
                        return args.json[args.key] >>= args.value
                    case '>>>=':
                        return args.json[args.key] >>>= args.value
                    case '&=':
                        return args.json[args.key] &= args.value
                    case '^=':
                        return args.json[args.key] ^= args.value
                    case '|=':
                        return args.json[args.key] |= args.value
                    case '&&=':
                        return args.json[args.key] &&= args.value
                    case '||=':
                        return args.json[args.key] ||= args.value
                    case '??=':
                        return args.json[args.key] ??= args.value
                }

            } catch (e) {
                logBlockError(e, util)
            }
        }
    }),
    defineBlock({
        id: 'delete',
        type: type.BlockType.BOOLEAN,
        addCommandAfterThis: true,
        param: {
            json: {
                type: undefined,
                defaultValue: undefined,
            },
            key: {
                type: type.ParameterType.STRING,
                defaultValue: 'hello',
            },
        },
        function(args, util): boolean {
            try {
                return delete args.json[args.key]
            } catch (e) {
                logBlockError(e, util)
            }
        }
    }),
    defineBlock({
        id: 'assign',
        type: type.BlockType.REPORTER,
        addCommandAfterThis: true,
        param: {
            json: {
                type: undefined,
                defaultValue: undefined,
            },
            source: {
                type: undefined,
                defaultValue: undefined,
            },
        },
        function(args, util): any {
            try {
                return Object.assign(args.json, args.source)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'entries',
        type: type.BlockType.REPORTER,
        param: {
            json: {
                type: undefined,
                defaultValue: undefined,
            },
        },
        function(args, util): [string, string][] {
            try {
                return Object.entries(args.json)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'freeze',
        type: type.BlockType.REPORTER,
        addCommandAfterThis: true,
        param: {
            json: {
                type: undefined,
                defaultValue: undefined,
            },
        },
        function(args, util): any {
            try {
                return Object.freeze(args.json)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'fromEntries',
        type: type.BlockType.REPORTER,
        param: {
            entries: {
                type: undefined,
                defaultValue: undefined,
            },
        },
        function(args, util): any {
            try {
                return Object.fromEntries(args.entries)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'getOwnPropertyNames',
        type: type.BlockType.REPORTER,
        param: {
            json: {
                type: undefined,
                defaultValue: undefined,
            },
        },
        function(args, util): string[] {
            try {
                return Object.getOwnPropertyNames(args.json)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'hasOwn',
        type: type.BlockType.BOOLEAN,
        param: {
            json: {
                type: undefined,
                defaultValue: undefined,
            },
            key: {
                type: type.ParameterType.STRING,
                defaultValue: 'hello',
            },
        },
        function(args, util): boolean {
            try {
                return Object.hasOwn(args.json, args.key)
            } catch (e) {
                logBlockError(e, util)
            }
            return false
        }
    }),
    defineBlock({
        id: 'isExtensible',
        type: type.BlockType.BOOLEAN,
        param: {
            json: {
                type: undefined,
                defaultValue: undefined,
            },
        },
        function(args, util): boolean {
            try {
                return Object.isExtensible(args.json)
            } catch (e) {
                logBlockError(e, util)
            }
            return false
        }
    }),
    defineBlock({
        id: 'isFrozen',
        type: type.BlockType.BOOLEAN,
        param: {
            json: {
                type: undefined,
                defaultValue: undefined,
            },
        },
        function(args, util): boolean {
            try {
                return Object.isFrozen(args.json)
            } catch (e) {
                logBlockError(e, util)
            }
            return false
        }
    }),
    defineBlock({
        id: 'isSealed',
        type: type.BlockType.BOOLEAN,
        param: {
            json: {
                type: undefined,
                defaultValue: undefined,
            },
        },
        function(args, util): boolean {
            try {
                return Object.isSealed(args.json)
            } catch (e) {
                logBlockError(e, util)
            }
            return false
        }
    }),
    defineBlock({
        id: 'keys',
        type: type.BlockType.REPORTER,
        param: {
            json: {
                type: undefined,
                defaultValue: undefined,
            },
        },
        function(args, util): string[] {
            try {
                return Object.keys(args.json)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'preventExtensions',
        type: type.BlockType.REPORTER,
        addCommandAfterThis: true,
        param: {
            json: {
                type: undefined,
                defaultValue: undefined,
            },
        },
        function(args, util): any {
            try {
                return Object.preventExtensions(args.json)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'seal',
        type: type.BlockType.REPORTER,
        addCommandAfterThis: true,
        param: {
            json: {
                type: undefined,
                defaultValue: undefined,
            },
        },
        function(args, util): any {
            try {
                return Object.seal(args.json)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'values',
        type: type.BlockType.REPORTER,
        param: {
            json: {
                type: undefined,
                defaultValue: undefined,
            },
        },
        function(args, util): string[] {
            try {
                return Object.values(args.json)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
]



export const category_object: MyCategory = {
    id: categoryID,
    color,
    blocks,
}
