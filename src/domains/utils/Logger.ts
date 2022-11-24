export enum LoggerLevel {
  Verbose,
  Debug,
  Warning,
  Error,
}

export class Logger {
  static v = console.info;
  static d = console.log;
  static w = console.warn;
  static e = console.error;
  static assert = console.assert;
  static trace = console.trace;

  static setLogLevel(level: LoggerLevel) {
    Logger.v = () => {
    };
    Logger.d = () => {
    };
    Logger.w = () => {
    };
    Logger.assert = () => {
    };

    if (LoggerLevel.Verbose >= level) Logger.v = console.info;
    if (LoggerLevel.Debug >= level) Logger.d = console.log;
    if (LoggerLevel.Debug >= level) Logger.assert = console.assert;
    if (LoggerLevel.Warning >= level) Logger.w = console.warn;
  }
}
