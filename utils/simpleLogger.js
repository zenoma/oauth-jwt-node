class SimpleLogger {
    log(message) {
      const logEntry = `[INFO] ${new Date().toUTCString()} - ${message}`;
      console.log(logEntry);
    }
  }
  
  export default SimpleLogger;
  