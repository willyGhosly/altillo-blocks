import { useBlockProps } from '@wordpress/block-editor';

const Save = (props) => {
    const { attributes } = props;
    const { name, code } = attributes;
    const blockProps = useBlockProps.save();

    const regex = /<iframe.*<\/iframe>/;
    const isIframe = regex.test(code);

    return (
        <div {...blockProps}>
            {
                isIframe &&
                <p className="wopeniframe" data-iframe={code}>{name}</p>
            }
        </div >
    );
}

export default Save;
