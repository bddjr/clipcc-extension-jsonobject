import { type } from "clipcc-extension"
import defineBlock from "../../utils/define-block"
import { menuAssignmentOperators } from "../../utils/menu-assignment-operator"
import { logBlockError } from "../../utils/log-block-error"

const categoryID: string = 'tempvar'
const color: string = '' // Use global color

const tempVar: { [key: string]: any } = {}

const blocks: MyBlock<BlockParams>[] = [
    defineBlock({
        id: 'get',
        type: type.BlockType.REPORTER,
        param: {
            name: {
                type: type.ParameterType.STRING,
                defaultValue: 'temp1'
            }
        },
        function(args, util): any {
            if (Object.hasOwn(tempVar, args.name)) {
                return tempVar[args.name]
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'set',
        type: type.BlockType.COMMAND,
        param: {
            name: {
                type: type.ParameterType.STRING,
                defaultValue: 'temp1'
            },
            assignmentOperator: {
                type: type.ParameterType.STRING,
                defaultValue: '=',
                menu: menuAssignmentOperators,
            },
            value: {
                type: type.ParameterType.STRING,
                defaultValue: '#'
            },
        },
        function(args, util): any {
            try {
                if (args.name == '__proto__') {
                    return
                }
                switch (args.assignmentOperator) {
                    case '=':
                        tempVar[args.name] = args.value
                        break
                    case '+=':
                        tempVar[args.name] += args.value
                        break
                    case '-=':
                        tempVar[args.name] -= args.value
                        break
                    case '*=':
                        tempVar[args.name] *= args.value
                        break
                    case '/=':
                        tempVar[args.name] /= args.value
                        break
                    case '%=':
                        tempVar[args.name] %= args.value
                        break
                    case '**=':
                        tempVar[args.name] **= args.value
                        break
                    case '<<=':
                        tempVar[args.name] <<= args.value
                        break
                    case '>>=':
                        tempVar[args.name] >>= args.value
                        break
                    case '>>>=':
                        tempVar[args.name] >>>= args.value
                        break
                    case '&=':
                        tempVar[args.name] &= args.value
                        break
                    case '^=':
                        tempVar[args.name] ^= args.value
                        break
                    case '|=':
                        tempVar[args.name] |= args.value
                        break
                    case '&&=':
                        tempVar[args.name] &&= args.value
                        break
                    case '||=':
                        tempVar[args.name] ||= args.value
                        break
                    case '??=':
                        tempVar[args.name] ??= args.value
                        break
                }
            } catch (e) {
                logBlockError(e, util)
            }
        }
    }),
]



export const category_tempvar: MyCategory = {
    id: categoryID,
    color,
    blocks,
}
