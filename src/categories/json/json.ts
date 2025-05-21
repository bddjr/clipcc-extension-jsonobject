import { type } from "clipcc-extension"
import defineBlock from "../../utils/define-block"
import { menuAssignmentOperators } from "../../utils/menu-assignment-operator"
import { logBlockError } from "../../utils/log-block-error"

const categoryID: string = 'json'
const color: string = '' // Use global color



const blocks: MyBlock<BlockParams>[] = [
    defineBlock({
        id: 'parse',
        type: type.BlockType.REPORTER,
        param: {
            a: {
                type: type.ParameterType.STRING,
                defaultValue: '{"hello":"world"}',
            },
        },
        function(args, util): any {
            try {
                return JSON.parse(args.a)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'stringify',
        type: type.BlockType.REPORTER,
        param: {
            a: {
                type: type.ParameterType.STRING,
                defaultValue: '#',
            },
        },
        function(args, util): any {
            try {
                return JSON.stringify(args.a)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'stringify3',
        type: type.BlockType.REPORTER,
        param: {
            a: {
                type: undefined,
                defaultValue: undefined,
            },
            replacer: {
                type: undefined,
                defaultValue: undefined,
            },
            space: {
                type: type.ParameterType.STRING,
                defaultValue: '    ',
            },
        },
        function(args, util): any {
            try {
                return JSON.stringify(args.a, args.replacer, args.space)
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
        type: type.BlockType.COMMAND,
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
        function(args, util): void {
            try {
                if (args.key == '__proto__') {
                    return
                }
                switch (args.assignmentOperator) {
                    case '=':
                        args.json[args.key] = args.value
                        break
                    case '+=':
                        args.json[args.key] += args.value
                        break
                    case '-=':
                        args.json[args.key] -= args.value
                        break
                    case '*=':
                        args.json[args.key] *= args.value
                        break
                    case '/=':
                        args.json[args.key] /= args.value
                        break
                    case '%=':
                        args.json[args.key] %= args.value
                        break
                    case '**=':
                        args.json[args.key] **= args.value
                        break
                    case '<<=':
                        args.json[args.key] <<= args.value
                        break
                    case '>>=':
                        args.json[args.key] >>= args.value
                        break
                    case '>>>=':
                        args.json[args.key] >>>= args.value
                        break
                    case '&=':
                        args.json[args.key] &= args.value
                        break
                    case '^=':
                        args.json[args.key] ^= args.value
                        break
                    case '|=':
                        args.json[args.key] |= args.value
                        break
                    case '&&=':
                        args.json[args.key] &&= args.value
                        break
                    case '||=':
                        args.json[args.key] ||= args.value
                        break
                    case '??=':
                        args.json[args.key] ??= args.value
                        break
                }

            } catch (e) {
                logBlockError(e, util)
            }
        }
    }),
    defineBlock({
        id: 'delete',
        type: type.BlockType.COMMAND,
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
        function(args, util): void {
            try {
                delete args.json[args.key]
            } catch (e) {
                logBlockError(e, util)
            }
        }
    }),
    defineBlock({
        id: 'assign',
        type: type.BlockType.REPORTER,
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
        id: 'freeze_command',
        type: type.BlockType.COMMAND,
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
        id: 'is',
        type: type.BlockType.BOOLEAN,
        param: {
            a: {
                type: type.ParameterType.STRING,
                defaultValue: 'str',
            },
            b: {
                type: type.ParameterType.STRING,
                defaultValue: 'str',
            },
        },
        function(args, util): boolean {
            try {
                return Object.is(args.a, args.b)
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
        id: 'preventExtensions_command',
        type: type.BlockType.COMMAND,
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
        id: 'seal_command',
        type: type.BlockType.COMMAND,
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



export const category_json: MyCategory = {
    id: categoryID,
    color,
    blocks,
}
