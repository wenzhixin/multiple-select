import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {minify} from 'uglify-es';

function getRollupObject ({minifying, format = 'umd'} = {}) {
    const nonMinified = {
        input: 'src/multiple-select.js',
        output: {
            format,
            file: `dist/multiple-select-${format}${minifying ? '.min' : ''}.js`,
            name: 'addMultipleSelect'
        },
        plugins: [
            nodeResolve(), commonjs(), babel()
        ]
    };
    if (format === 'umd') {
        nonMinified.output.footer = `
if (typeof jQuery !== 'undefined') {
    addMultipleSelect(jQuery);
}
`;
    }
    if (minifying) {
        nonMinified.plugins.push(uglify(null, minify));
    }
    return nonMinified;
};

export default [
    getRollupObject(),
    getRollupObject({minifying: true}),
    getRollupObject({minifying: true, format: 'es'}),
    getRollupObject({minifying: false, format: 'es'})
];
