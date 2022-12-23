import { IconButton } from '@wordpress/components';
import { Inserter } from '@wordpress/block-editor';

const Button = (props) => {
    const { rootClientId } = props;
    return (
        <Inserter
            rootClientId={rootClientId}
            renderToggle={({ onToggle, disabled }) => (
                <IconButton
                    className="waccordion__inserter"
                    onClick={onToggle}
                    disabled={disabled}
                    label="Agregar un elemento al acordeon."
                    icon="plus"
                />
            )}
            isAppender
        />
    );
}

export default Button;