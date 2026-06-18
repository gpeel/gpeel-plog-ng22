export interface PlogConfig {
   [key: string]: string | string[]
}

function fnNull(message?: any, ...optionalParams: any[]): void {
}

export const Plog = {
  debug: fnNull,
  info: fnNull,
  warn: fnNull,
  error: fnNull,

  perf: fnNull,
  perfComponent: fnNull,
  perfCD: fnNull,
  perfDom: fnNull,

  // Signals
  signal: fnNull,
  signalEffect: fnNull,
  signalEffectCleanup: fnNull,
  signalSet: fnNull,
  signalModif: fnNull,
  signalUpdate: fnNull,
  signalMutate: fnNull,
  signalComputed: fnNull,

  network: fnNull, // network prefix for http interceptor
  networkRequest: fnNull,
  networkResponse: fnNull,
  networkError: fnNull,
  networkCreate: fnNull,

  httpCall: fnNull, // http prefix : for service logic
  httpSuccess: fnNull,
  httpError: fnNull,
  httpDebug: fnNull,

  ngOnChanges: fnNull,
  ngOnInit: fnNull,
  ngOnDestroy: fnNull,
  ngDoCheck: fnNull,
  ngAfterContentInit: fnNull,
  ngAfterContentChecked: fnNull,
  ngAfterViewInit: fnNull,
  ngAfterViewChecked: fnNull,

  create: fnNull,
  createComponent: fnNull,
  createDirective: fnNull,
  createService: fnNull,
  createPipe: fnNull,
  createGuard: fnNull,
  createResolver: fnNull,

  resolve: fnNull,
  guard: fnNull,
  validator: fnNull,
  pipe: fnNull,
  callback: fnNull,

  state: fnNull,
  action: fnNull,
  data: fnNull,
  onAction: fnNull,
  event: fnNull,
  select: fnNull,
  errorState: fnNull,
  effect: fnNull,
  cache: fnNull,

  formValueChanges: fnNull,
  formEvent: fnNull,
  streamEvent: fnNull,
  subscription: fnNull,
  unsubscription: fnNull,

  // Specific loggers for @gpeel/my-validators
  validationCompute: fnNull, // tracing validators when they compute
  validationErrorMsgRefresh: fnNull, // tracing refresh of <my-error-msg>
  validationErrorMsgCreation: fnNull, // tracing creation of component <my-error-msg>
  errorMsg: fnNull, // used by <error-msg> deprecated

  // Observable
  obsSubscribe: fnNull,
  obsSuccess: fnNull,
  obsError: fnNull,
  obsDebug: fnNull,
  obsComplete: fnNull,

  tu: fnNull,
  tuBeforeEach: fnNull,
  tuBeforeAll: fnNull,
  tuAfterEach: fnNull,
  tuAfterAll: fnNull,
  tuArrange: fnNull,
  tuAct: fnNull,
  tuAssert: fnNull,
  ti: fnNull,
  te2e: fnNull,

  colorPink: fnNull,
  colorRed: fnNull,
  colorOrange: fnNull,
  colorGreen: fnNull,
  colorBlue: fnNull,
  colorLightBlue: fnNull,
  colorViolet: fnNull,

  feature1: fnNull,
  feature2: fnNull,
  feature3: fnNull,
  feature4: fnNull,
  feature5: fnNull,
  feature6: fnNull,
  feature7: fnNull,
  feature8: fnNull,
  feature9: fnNull,

};
