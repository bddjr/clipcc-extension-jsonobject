import { type } from "clipcc-extension"
import defineBlock from "../../utils/define-block"
import { toScratchBoolean } from "../../utils/to-scratch-boolean"

const categoryID: string = 'type'
const color: string = '' // Use global color



const blocks: MyBlock<BlockParams>[] = [
    defineBlock({
        id: 'typeof',
        type: type.BlockType.REPORTER,
        param: {
            a: {
                type: type.ParameterType.STRING,
                defaultValue: '0'
            }
        },
        function(args, util): string {
            return typeof args.a
        }
    }),
    defineBlock({
        id: 'string',
        type: type.BlockType.REPORTER,
        param: {
            a: {
                type: type.ParameterType.STRING,
                defaultValue: '0'
            }
        },
        function(args, util): string {
            return String(args.a)
        }
    }),
    defineBlock({
        id: 'number',
        type: type.BlockType.REPORTER,
        param: {
            a: {
                type: type.ParameterType.STRING,
                defaultValue: '0'
            }
        },
        function(args, util): number {
            return Number(args.a)
        }
    }),
    defineBlock({
        id: 'undefined',
        type: type.BlockType.REPORTER,
        function(args, util): undefined {
            return undefined
        }
    }),
    defineBlock({
        id: 'null',
        type: type.BlockType.REPORTER,
        function(args, util): null {
            return null
        }
    }),
    defineBlock({
        id: 'true',
        type: type.BlockType.BOOLEAN,
        function(args, util): boolean {
            return true
        }
    }),
    defineBlock({
        id: 'false',
        type: type.BlockType.BOOLEAN,
        function(args, util): boolean {
            return false
        }
    }),
    defineBlock({
        id: 'js_boolean',
        type: type.BlockType.BOOLEAN,
        param: {
            a: {
                type: type.ParameterType.STRING,
                defaultValue: '0'
            }
        },
        function(args, util): boolean {
            return !!args.a
        }
    }),
    defineBlock({
        id: 'scratch_boolean',
        type: type.BlockType.BOOLEAN,
        param: {
            a: {
                type: type.ParameterType.STRING,
                defaultValue: '0'
            }
        },
        function(args, util): boolean {
            return toScratchBoolean(args.a)
        }
    }),
    defineBlock({
        id: 'equality',
        type: type.BlockType.BOOLEAN,
        param: {
            a: {
                type: type.ParameterType.STRING,
                defaultValue: 'a'
            },
            b: {
                type: type.ParameterType.STRING,
                defaultValue: 'A'
            }
        },
        function(args, util): boolean {
            return args.a == args.b
        }
    }),
    defineBlock({
        id: 'inequality',
        type: type.BlockType.BOOLEAN,
        param: {
            a: {
                type: type.ParameterType.STRING,
                defaultValue: 'a'
            },
            b: {
                type: type.ParameterType.STRING,
                defaultValue: 'A'
            }
        },
        function(args, util): boolean {
            return args.a != args.b
        }
    }),
    defineBlock({
        id: 'strict_equality',
        type: type.BlockType.BOOLEAN,
        param: {
            a: {
                type: type.ParameterType.STRING,
                defaultValue: 'a'
            },
            b: {
                type: type.ParameterType.STRING,
                defaultValue: 'A'
            }
        },
        function(args, util): boolean {
            return args.a === args.b
        }
    }),
    defineBlock({
        id: 'strict_inequality',
        type: type.BlockType.BOOLEAN,
        param: {
            a: {
                type: type.ParameterType.STRING,
                defaultValue: 'a'
            },
            b: {
                type: type.ParameterType.STRING,
                defaultValue: 'A'
            }
        },
        function(args, util): boolean {
            return args.a !== args.b
        }
    }),
    defineBlock({
        id: 'number_isNaN',
        type: type.BlockType.BOOLEAN,
        param: {
            a: {
                type: undefined,
                defaultValue: undefined
            }
        },
        function(args, util): boolean {
            return Number.isNaN(args.a)
        }
    }),
    defineBlock({
        id: 'isArray',
        type: type.BlockType.BOOLEAN,
        param: {
            a: {
                type: undefined,
                defaultValue: undefined
            }
        },
        function(args, util): boolean {
            return Array.isArray(args.a)
        }
    }),
    defineBlock({
        id: 'conditional_operator',
        type: type.BlockType.REPORTER,
        param: {
            b: {
                type: type.ParameterType.BOOLEAN,
                defaultValue: false,
            },
            t: {
                type: type.ParameterType.STRING,
                defaultValue: '1'
            },
            f: {
                type: type.ParameterType.STRING,
                defaultValue: '0'
            }
        },
        function(args, util): any {
            return toScratchBoolean(args.b) ? args.t : args.f
        }
    }),
]



export const category_type: MyCategory = {
    id: categoryID,
    color,
    blocks,
}
