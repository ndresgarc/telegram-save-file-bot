import fs from 'fs';

export const contact = (msg, bot, config) => {
    console.log('contact handler');

    let fileName = `${msg.contact.first_name} ${msg.contact.last_name}`;

    fs.writeFile(`${config.saveFolder}${fileName}.vcard`, msg.contact.vcard, (err) => { 
        if (err) 
          console.log(err); 
        else { 
          console.log("File written successfully\n"); 
        } 
      }); 

};