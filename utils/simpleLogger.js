class SimpleLogger {
    log(message) {
      const logEntry = `${new Date().toUTCString()} - ${message}`;
      console.log(logEntry);
    }
  }
  
  export default SimpleLogger;
  