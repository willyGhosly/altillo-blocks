import { registerBlockType } from '@wordpress/blocks'
import { useBlockProps } from '@wordpress/block-editor'

import meta from '../block.json'

registerBlockType(meta, {
    edit: () => {
        const blockProps = useBlockProps({
            className: 'wposts'
        })
        return (
            <p {...blockProps}>lista de narrativas; solo visible en el frontend</p>
        )
    },
    save: () => null,
})