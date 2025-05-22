import { type } from "clipcc-extension"
import defineBlock from "../../utils/define-block"
import { logBlockError } from "../../utils/log-block-error"
import { menuUpOrDown } from "../../utils/menu-up-or-down"
import { getSortFunc, getSortFuncWithProperty } from "../../utils/get-sort-func"

const categoryID: string = 'array'
const color: string = '' // Use global color



const blocks: MyBlock<BlockParams>[] = [
    defineBlock({
        id: 'new_array',
        type: type.BlockType.REPORTER,
        param: {
            length: {
                type: type.ParameterType.NUMBER,
                defaultValue: '3'
            },
        },
        function(args, util): any[] {
            try {
                return new Array(+args.length)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'from',
        type: type.BlockType.REPORTER,
        param: {
            a: {
                type: type.ParameterType.STRING,
                defaultValue: '123456789'
            },
        },
        function(args, util): any[] {
            try {
                return Array.from(args.a)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'length',
        type: type.BlockType.REPORTER,
        param: {
            a: {
                type: undefined,
                defaultValue: undefined
            },
            index: {
                type: type.ParameterType.NUMBER,
                defaultValue: '0'
            },
        },
        function(args, util): number {
            return +args.a?.length
        }
    }),
    defineBlock({
        id: 'at',
        type: type.BlockType.REPORTER,
        param: {
            a: {
                type: undefined,
                defaultValue: undefined
            },
            index: {
                type: type.ParameterType.NUMBER,
                defaultValue: '-1'
            },
        },
        function(args, util): any {
            try {
                return Array.prototype.at.call(args.a, args.index)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'concat2',
        type: type.BlockType.REPORTER,
        param: {
            a: {
                type: type.ParameterType.STRING,
                defaultValue: '1'
            },
            b: {
                type: type.ParameterType.STRING,
                defaultValue: '2'
            },
        },
        function(args, util): any[] {
            return Array.prototype.concat(args.a, args.b)
        }
    }),
    defineBlock({
        id: 'concat3',
        type: type.BlockType.REPORTER,
        param: {
            a: {
                type: type.ParameterType.STRING,
                defaultValue: '1'
            },
            b: {
                type: type.ParameterType.STRING,
                defaultValue: '2'
            },
            c: {
                type: type.ParameterType.STRING,
                defaultValue: '3'
            },
        },
        function(args, util): any[] {
            return Array.prototype.concat(args.a, args.b, args.c)
        }
    }),
    defineBlock({
        id: 'copyWithin1',
        type: type.BlockType.REPORTER,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
            a: {
                type: type.ParameterType.NUMBER,
                defaultValue: '1'
            },
        },
        function(args, util): any[] {
            try {
                return Array.prototype.copyWithin.call(args.array, args.a)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'copyWithin2',
        type: type.BlockType.REPORTER,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
            a: {
                type: type.ParameterType.NUMBER,
                defaultValue: '1'
            },
            b: {
                type: type.ParameterType.NUMBER,
                defaultValue: '3'
            }
        },
        function(args, util): any[] {
            try {
                return Array.prototype.copyWithin.call(args.array, args.a, args.b)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'copyWithin3',
        type: type.BlockType.REPORTER,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
            a: {
                type: type.ParameterType.NUMBER,
                defaultValue: '0'
            },
            b: {
                type: type.ParameterType.NUMBER,
                defaultValue: '3'
            },
            c: {
                type: type.ParameterType.NUMBER,
                defaultValue: '4'
            },
        },
        function(args, util): any[] {
            try {
                return Array.prototype.copyWithin.call(args.array, args.a, args.b, args.c)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'fill1',
        type: type.BlockType.REPORTER,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
            a: {
                type: type.ParameterType.STRING,
                defaultValue: '6'
            },
        },
        function(args, util): any[] {
            try {
                return Array.prototype.fill.call(args.array, args.a)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'fill2',
        type: type.BlockType.REPORTER,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
            a: {
                type: type.ParameterType.STRING,
                defaultValue: '5'
            },
            b: {
                type: type.ParameterType.NUMBER,
                defaultValue: '1'
            }
        },
        function(args, util): any[] {
            try {
                return Array.prototype.fill.call(args.array, args.a, args.b)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'fill3',
        type: type.BlockType.REPORTER,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
            a: {
                type: type.ParameterType.STRING,
                defaultValue: '0'
            },
            b: {
                type: type.ParameterType.NUMBER,
                defaultValue: '2'
            },
            c: {
                type: type.ParameterType.NUMBER,
                defaultValue: '4'
            },
        },
        function(args, util): any[] {
            try {
                return Array.prototype.fill.call(args.array, args.a, args.b, args.c)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'flat0',
        type: type.BlockType.REPORTER,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
        },
        function(args, util): any[] {
            try {
                return Array.prototype.flat.call(args.array)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'flat1',
        type: type.BlockType.REPORTER,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
            a: {
                type: type.ParameterType.NUMBER,
                defaultValue: '2'
            },
        },
        function(args, util): any[] {
            try {
                return Array.prototype.flat.call(args.array, args.a)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'includes',
        type: type.BlockType.BOOLEAN,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
            a: {
                type: type.ParameterType.STRING,
                defaultValue: 'cat'
            },
        },
        function(args, util): boolean {
            try {
                return Array.prototype.includes.call(args.array, args.a)
            } catch (e) {
                logBlockError(e, util)
            }
            return false
        }
    }),
    defineBlock({
        id: 'indexOf',
        type: type.BlockType.REPORTER,
        param: {
            a: {
                type: undefined,
                defaultValue: undefined
            },
            searchElement: {
                type: type.ParameterType.STRING,
                defaultValue: '#'
            },
            fromIndex: {
                type: type.ParameterType.NUMBER,
                defaultValue: '0'
            },
        },
        function(args, util): number {
            try {
                return Array.prototype.indexOf.call(args.a, args.searchElement, args.fromIndex)
            } catch (e) {
                logBlockError(e, util)
            }
            return -1
        }
    }),
    defineBlock({
        id: 'join',
        type: type.BlockType.REPORTER,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
            a: {
                type: type.ParameterType.STRING,
                defaultValue: ','
            },
        },
        function(args, util): string {
            try {
                return Array.prototype.join.call(args.array, args.a)
            } catch (e) {
                logBlockError(e, util)
            }
            return ''
        }
    }),
    defineBlock({
        id: 'lastIndexOf',
        type: type.BlockType.REPORTER,
        param: {
            a: {
                type: undefined,
                defaultValue: undefined
            },
            searchElement: {
                type: type.ParameterType.STRING,
                defaultValue: '#'
            },
            fromIndex: {
                type: type.ParameterType.NUMBER,
                defaultValue: '-1'
            },
        },
        function(args, util): number {
            try {
                return Array.prototype.lastIndexOf.call(args.a, args.searchElement, args.fromIndex)
            } catch (e) {
                logBlockError(e, util)
            }
            return -1
        }
    }),
    defineBlock({
        id: 'pop',
        type: type.BlockType.REPORTER,
        addCommandAfterThis: true,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
        },
        function(args, util): any {
            try {
                return Array.prototype.pop.call(args.array)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'push',
        type: type.BlockType.REPORTER,
        addCommandAfterThis: true,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
            a: {
                type: type.ParameterType.STRING,
                defaultValue: 'cows'
            },
        },
        function(args, util): number {
            try {
                return Array.prototype.push.call(args.array, args.a)
            } catch (e) {
                logBlockError(e, util)
            }
            return NaN
        }
    }),
    defineBlock({
        id: 'reverse',
        type: type.BlockType.COMMAND,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
        },
        function(args, util): any[] {
            try {
                return Array.prototype.reverse.call(args.array)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'toReversed',
        type: type.BlockType.REPORTER,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
        },
        function(args, util): any[] {
            try {
                return Array.prototype.toReversed.call(args.array)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'shift',
        type: type.BlockType.REPORTER,
        addCommandAfterThis: true,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
        },
        function(args, util): any {
            try {
                return Array.prototype.shift.call(args.array)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'slice1',
        type: type.BlockType.REPORTER,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
            a: {
                type: type.ParameterType.NUMBER,
                defaultValue: '2'
            },
        },
        function(args, util): any[] {
            try {
                return Array.prototype.slice.call(args.array, args.a)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'slice2',
        type: type.BlockType.REPORTER,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
            a: {
                type: type.ParameterType.NUMBER,
                defaultValue: '2'
            },
            b: {
                type: type.ParameterType.NUMBER,
                defaultValue: '-1'
            },
        },
        function(args, util): any[] {
            try {
                return Array.prototype.slice.call(args.array, args.a, args.b)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'sort',
        type: type.BlockType.COMMAND,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
            upOrDown: {
                type: type.ParameterType.NUMBER,
                defaultValue: 'up',
                menu: menuUpOrDown,
            },
        },
        function(args, util): any[] {
            try {
                return Array.prototype.sort.call(args.array, getSortFunc(args.upOrDown))
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'sort_by',
        type: type.BlockType.COMMAND,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
            upOrDown: {
                type: type.ParameterType.NUMBER,
                defaultValue: 'up',
                menu: menuUpOrDown,
            },
            key: {
                type: type.ParameterType.STRING,
                defaultValue: 'score'
            },
        },
        function(args, util): any[] {
            try {
                return Array.prototype.sort.call(args.array, getSortFuncWithProperty(args.upOrDown, args.key))
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'toSorted',
        type: type.BlockType.REPORTER,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
            upOrDown: {
                type: type.ParameterType.NUMBER,
                defaultValue: 'up',
                menu: menuUpOrDown,
            },
        },
        function(args, util): any[] {
            try {
                return Array.prototype.toSorted.call(args.array, getSortFunc(args.upOrDown))
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'toSorted_by',
        type: type.BlockType.REPORTER,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
            upOrDown: {
                type: type.ParameterType.NUMBER,
                defaultValue: 'up',
                menu: menuUpOrDown,
            },
            key: {
                type: type.ParameterType.STRING,
                defaultValue: 'score'
            },
        },
        function(args, util): any[] {
            try {
                return Array.prototype.toSorted.call(args.array, getSortFuncWithProperty(args.upOrDown, args.key))
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'splice0',
        type: type.BlockType.REPORTER,
        addCommandAfterThis: true,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
            start: {
                type: type.ParameterType.NUMBER,
                defaultValue: '4'
            },
            deleteCount: {
                type: type.ParameterType.NUMBER,
                defaultValue: '1'
            },
        },
        function(args, util): any[] {
            try {
                return Array.prototype.splice.call(args.array, args.start, args.deleteCount)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'splice1',
        type: type.BlockType.REPORTER,
        addCommandAfterThis: true,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
            start: {
                type: type.ParameterType.NUMBER,
                defaultValue: '4'
            },
            deleteCount: {
                type: type.ParameterType.NUMBER,
                defaultValue: '1'
            },
            item: {
                type: type.ParameterType.STRING,
                defaultValue: 'item'
            }
        },
        function(args, util): any[] {
            try {
                return Array.prototype.splice.call(args.array, args.start, args.deleteCount, args.item)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'toSpliced0',
        type: type.BlockType.REPORTER,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
            start: {
                type: type.ParameterType.NUMBER,
                defaultValue: '4'
            },
            deleteCount: {
                type: type.ParameterType.NUMBER,
                defaultValue: '1'
            },
        },
        function(args, util): any[] {
            try {
                return Array.prototype.toSpliced.call(args.array, args.start, args.deleteCount)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'toSpliced1',
        type: type.BlockType.REPORTER,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
            start: {
                type: type.ParameterType.NUMBER,
                defaultValue: '4'
            },
            deleteCount: {
                type: type.ParameterType.NUMBER,
                defaultValue: '1'
            },
            item: {
                type: type.ParameterType.STRING,
                defaultValue: 'item'
            }
        },
        function(args, util): any[] {
            try {
                return Array.prototype.toSpliced.call(args.array, args.start, args.deleteCount, args.item)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'unshift',
        type: type.BlockType.REPORTER,
        addCommandAfterThis: true,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
            a: {
                type: type.ParameterType.STRING,
                defaultValue: 'cows'
            },
        },
        function(args, util): number {
            try {
                return Array.prototype.unshift.call(args.array, args.a)
            } catch (e) {
                logBlockError(e, util)
            }
            return NaN
        }
    }),
    defineBlock({
        id: 'with',
        type: type.BlockType.REPORTER,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
            index: {
                type: type.ParameterType.NUMBER,
                defaultValue: '2'
            },
            value: {
                type: type.ParameterType.STRING,
                defaultValue: 'item'
            },
        },
        function(args, util): any[] {
            try {
                return Array.prototype.with.call(args.array, args.index, args.value)
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
    defineBlock({
        id: 'to_set_then_to_array',
        type: type.BlockType.REPORTER,
        param: {
            array: {
                type: undefined,
                defaultValue: undefined,
            },
        },
        function(args, util): any[] {
            try {
                return Array.from(new Set(args.array))
            } catch (e) {
                logBlockError(e, util)
            }
            return undefined
        }
    }),
]



export const category_array: MyCategory = {
    id: categoryID,
    color,
    blocks,
}
