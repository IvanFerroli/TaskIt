const { exec } = require('child_process');

const startService = (servicePath) => {
  const command = `cd ${servicePath} && npm start`;
  const process = exec(command);

  process.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  process.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  process.on('close', (code) => {
    console.log(`Process exited with code ${code}`);
  });
};

startService('./auth-service');
startService('./notification-service');
startService('./task-service');
