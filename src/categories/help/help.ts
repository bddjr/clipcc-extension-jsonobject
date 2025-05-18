import defineBlock from "../../utils/define-block"
import { myConfirm } from "../../utils/my-confirm"

const categoryID: string = 'help'
const color: string = '' // Use global color


function createLinkBlock(id: string, url: string) {
    return defineBlock({
        id,
        type: undefined,
        async function(args, util) {
            if (await myConfirm('Open Link', url))
                open(url)
        }
    })
}


const blocks: MyBlock<BlockParams>[] = [
    createLinkBlock('github', "https://github.com/bddjr/clipcc-extension-jsonobject"),
    createLinkBlock('mdn_json', "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON"),
    createLinkBlock('mdn_javascript', "https://developer.mozilla.org/docs/Web/JavaScript"),
    createLinkBlock('mdn_object', "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object"),
    createLinkBlock('mdn_array', "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array"),
]



export const category_help: MyCategory = {
    id: categoryID,
    color,
    blocks,
}
