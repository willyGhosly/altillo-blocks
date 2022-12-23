import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';

const Save = (props) => {
    const { attributes } = props;
    const { title, id } = attributes;
    const blockProps = useBlockProps.save({
        className: 'waccordion__item'
    });

    return (
        <div {...blockProps}>
            <div className="waccordion__header" id={id}>
                <h2 className="waccordion__title">
                    <RichText.Content
                        tagName="span"
                        className='waccordion__text'
                        value={title}
                    />
                </h2>
                <svg className="waccordion__icon" pointer-events="all" xmlns="http://www.w3.org/2000/svg" width="46.224" height="46.224" viewBox="0 0 46.224 46.224">
                    <g transform="translate(-3819.921 -3367.664)">
                        <line className="waccordion__line" y2="46.224" transform="translate(3843.033 3367.664)" fill="#17774a" stroke="#000" stroke-miterlimit="10" stroke-width="2" />
                        <line className="waccordion__line" x1="46.224" transform="translate(3819.921 3390.776)" fill="#17774a" stroke="#000" stroke-miterlimit="10" stroke-width="2" />
                    </g>
                </svg>
            </div>
            <div className="waccordion__body">
                <InnerBlocks.Content />
            </div>
        </div>
    );
}

export default Save;