const rpc = require('discord-rpc');
const client = new rpc.Client({ transport: 'ipc' });

client.on('ready', () => {
   console.log('RPC client ready!');
   client.setActivity({
      details: 'Editing on Clip Studio Paint',
      state: 'In a new project',
      largeImageKey: 'csp_logo',
      largeImageText: 'Clip Studio Paint',
   });
});

client.login({ clientId: '1094516055319248916' }).catch(console.error);
