/* Hello world

Use promises API, and sometimes Callback API over Synchronous API (this can freeze app)

Node:
- Node JS is a runtime environment (to run outside browser)
- Big community
- Full-stack

YouTube - Coding Addict

Browser:
- DOM
- Window
- Interactive apps
- No File systems
- Fragmentation
- ES6 Modules

NodeJS:
- No DOM
- No Windows
- Server side apps
- File systems
- Versions
- CommonJS (syntax diff to ES6)

Globals = no Windows
__dirname = path to current directory
__filename = file name
require = function to use modules (commonJS)
module = info about current module (file)
process = info about env where the program is being executed (very important)

Modules:
- OS
- PATH
- FS
- HTTP

npm init -y ---- this initializes a new node.js project and creates a new 'package.json' file (everything default)

.gitignore:
node_modules

Upcoming topics - 2:27:00
- Event Loop, Async patterns, Events emitted
- Mains concept
- Pre-built code

Event Loop:
Evenloop is what allow Node.js to perform non-blocking I/O operations,
despite JS being single threaded, by offloading operations to the system kernel

Async await syntax is cleaner

Event-driven programming
Used heavily in Node.js

Streams:
- writeable
- readable
- duplex
- transform
*/