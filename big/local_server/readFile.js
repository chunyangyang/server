const path = require( 'path' );

const PROJECT_PATH = process.cwd();
// const TEMPLATE_PATH = path.join( PROJECT_PATH, 'dist', 'html' );
const TEMPLATE_PATH =PROJECT_PATH;

function readHtml( name, Server ) {
    const fs = Server.middleware.fileSystem;
    const filePath = path.join( TEMPLATE_PATH, `${name}` );
    let fileContent = '404';
    if ( fs.existsSync( filePath ) ) {
        fileContent = fs.readFileSync( filePath, 'utf8' );
    }
    return fileContent;
}

module.exports = readHtml;