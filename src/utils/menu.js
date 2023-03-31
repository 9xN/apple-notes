const colours = require('./colours.js');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let newprompt = true
exports.menu = function() {
    if (newprompt) {
        newprompt = false;
        rl.setPrompt(`${colours.lightBlue}┌────────────${colours.lightGreen}[${colours.lightYellow}$${colours.lightGreen}]\n${colours.lightBlue}├───${colours.brightMagenta}apple${colours.brightCyan}@${colours.brightMagenta}notes${colours.brightViolet} ~ ${colours.lightBlue}`);
      } else {
        rl.setPrompt(`${colours.lightBlue}├────────────${colours.lightGreen}[${colours.lightYellow}$${colours.lightGreen}]\n${colours.lightBlue}├───${colours.brightMagenta}apple${colours.brightCyan}@${colours.brightMagenta}notes${colours.brightViolet} ~ ${colours.lightBlue}`);
      }
      rl.prompt();
      rl.on('line', (command) => {
        command = command.toLowerCase().trim();
        switch (command) {
          case 'help':
            print_menu();
            break;
          case 'exploits':
            console.log(`   ${colours.lightBlue}│${colours.lightPurple} ${colours.lightGreen}99. ${colours.lightBlue}Return to main menu`);
            break;
          case 'clear':
          case 'cls':
            print_banner();
            break;
          case 'exit':
          case 'quit':
            console.log(`   ${colours.lightBlue}├───${colours.brightMagenta} exiting... ${colours.lightBlue}`);
            process.exit(0);
            break;
          default:
            console.log(`   ├${colours.lightGreen}[${colours.lightYellow}+${colours.lightGreen}]{colours.lightPurple} Invalid command! Type help to display the help menu with a list of valid commands...`);
            break;
        }
        rl.prompt();
      });
      
    
      rl.on('close', () => {
        console.log(`${colours.lightBlue}├───${colours.brightMagenta} exiting... ${colours.lightBlue}`);
        process.exit(0);
      });
    
      function print_menu() {
      }
    
      function print_banner() {
      }
    }
