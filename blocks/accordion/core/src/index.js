import { registerBlockType } from '@wordpress/blocks';

import edit from './edit';
import save from './save';

registerBlockType('altillo-blocks/accordion-core', {
    edit,
    save,
});
