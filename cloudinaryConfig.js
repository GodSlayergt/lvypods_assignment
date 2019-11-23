const cloudinary = require('cloudinary');
cloudinary.config({
cloud_name: 'dnvrrd2wt',
api_key: '891614375313517',
api_secret: 'pRRWiVHZju6si4e2nG8p47XPGds'
});

exports.uploads = (file) =>{
return new Promise(resolve => {
cloudinary.uploader.upload(file, (result) =>{
resolve({url: result.url, id: result.public_id})
}, {resource_type: "auto"})
})
}