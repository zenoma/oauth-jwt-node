class ClientCustomError extends Error {
    constructor(message, statusText) {
      super(message);
      this.statusText = statusText;
      this.timestamp = new Date().toUTCString();
    }

    toString() {
      return `[${this.name}] - ${this.timestamp} - ${this.message}`;
    }
  }

  
  export default ClientCustomError;
  