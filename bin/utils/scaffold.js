import fs from 'fs';
import { totTitleCase } from './index.js';
/**
 *
 * @param source the path of the source file to copy from
 * @param destination the path of the file to be created
 * @param routeName the dynamic name of the engine
 */
export function scaffold(source, destination, routeName) {
    // creates the destination file with empty content
    fs.writeFile(destination, '', (err) => {
        if (err)
            throw err;
    });
    // reads the content of the template file
    fs.readFile(source, 'utf8', (err, data) => {
        if (err)
            throw err;
        // replace the dynamic lowercase engine name
        let replacedData = data.replace(/product/g, routeName.toLowerCase());
        // write the new content to the destination
        fs.writeFile(destination, replacedData, (err) => {
            if (err)
                throw err;
        });
        // replace the dynamic titlecase engine name
        replacedData = replacedData.replace(/Product/g, totTitleCase(routeName.toLowerCase()));
        // write the new content to the destination
        fs.writeFile(destination, replacedData, (err) => {
            if (err)
                throw err;
        });
    });
}
