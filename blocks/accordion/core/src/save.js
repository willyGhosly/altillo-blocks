import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Save = () => {
    const blockProps = useBlockProps.save(
        { className: 'waccordion' }
    );
    return (
        <div {...blockProps}>
            <InnerBlocks.Content />
        </div>
    );
}

export default Save;