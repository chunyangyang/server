const path = require( 'path' );
const postCDN = require( 'zzc-post-cdn' );

postCDN( {
    cwd: path.join( process.cwd(), 'dist' ),
    remotePath: 'tidl/m/',
    remoteAuth: 'TWgNZ=wbiQK,&X9XMLZif@8,tZd728',
    uploadError: ( err, body ) => {
        console.dir( err );
        console.dir( body );
    },
    uploadSuccess: ( err, response, body ) => {
        console.dir( err );
        console.dir( body );
    }
} );