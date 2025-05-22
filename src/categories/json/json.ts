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
]



export const category_json: MyCategory = {
    id: categoryID,
    color,
    blocks,
}
