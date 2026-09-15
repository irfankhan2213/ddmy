const https = require('https');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const cloudName = 'q6k0oxwk';
const apiKey = '413843979464685';
const apiSecret = 'ZRQafxXQNyuv8ANMg83MfmEHsS4';

function uploadImage(filePath) {
  return new Promise((resolve, reject) => {
    const timestamp = Math.floor(Date.now() / 1000);
    const folder = 'psycho_nutrition';
    const publicId = path.parse(filePath).name;
    const strToSign = `folder=${folder}&public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
    const signature = crypto.createHash('sha1').update(strToSign).digest('hex');

    const boundary = '----WebKitFormBoundary7MA4YWxkTrZu0gW';
    let postData = '';
    
    postData += `--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="${path.basename(filePath)}"\r\nContent-Type: image/jpeg\r\n\r\n`;
    
    const fileData = fs.readFileSync(filePath);
    
    const postData2 = `\r\n--${boundary}\r\nContent-Disposition: form-data; name="api_key"\r\n\r\n${apiKey}\r\n--${boundary}\r\nContent-Disposition: form-data; name="timestamp"\r\n\r\n${timestamp}\r\n--${boundary}\r\nContent-Disposition: form-data; name="signature"\r\n\r\n${signature}\r\n--${boundary}\r\nContent-Disposition: form-data; name="folder"\r\n\r\n${folder}\r\n--${boundary}\r\nContent-Disposition: form-data; name="public_id"\r\n\r\n${publicId}\r\n--${boundary}--`;

    const options = {
      hostname: 'api.cloudinary.com',
      port: 443,
      path: `/v1_1/${cloudName}/image/upload`,
      method: 'POST',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
        'Content-Length': Buffer.byteLength(postData) + fileData.length + Buffer.byteLength(postData2)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        const parsed = JSON.parse(data);
        if (parsed.error) {
           reject(parsed.error);
        } else {
           resolve(parsed);
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    req.write(postData);
    req.write(fileData);
    req.write(postData2);
    req.end();
  });
}

async function run() {
  const dir = path.join(__dirname, 'public/images/products');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
  
  for (const img of files) {
    const fullPath = path.join(dir, img);
    console.log(`Uploading ${img}...`);
    try {
        const res = await uploadImage(fullPath);
        console.log(`${img}: ${res.secure_url}`);
    } catch (e) {
        console.error(`Failed to upload ${img}:`, e);
    }
  }
}
run();
