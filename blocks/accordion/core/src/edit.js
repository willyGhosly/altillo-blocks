import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import Button from './components/button';

const Edit = (props) => {
    const { clientId } = props;
    const blockProps = useBlockProps(
        { className: 'waccordion' }
    );
    return (
        <div {...blockProps}>
            <InnerBlocks
                allowedBlocks={['altillo-blocks/accordion-nested']}
                orientation="horizontal"
                renderAppender={() => (
                    <Button rootClientId={clientId} />
                )} />
        </div>
    );
}

export default Edit;