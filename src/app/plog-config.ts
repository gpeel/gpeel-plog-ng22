import {PlogConfig} from '@gpeel/plog';

export const plogConfig: PlogConfig = {
  debug: 'color:limegreen',
  info: 'color:blue',
  error: 'color:red',
  warn: 'color:orange',

  // Performance logs
  perf: 'color:darkturquoise',
  perfComponent: ['color:darkturquoise', 'PERF-¤¤'],
  perfCD: ['color:darkturquoise', 'PERF-¤¤¤¤¤¤¤'],
  perfDom: ['color:darkturquoise', 'PERF-¤-¤-¤-¤'],

  signal: ['color:blueviolet', 'SIGNALS'],
  signalEffect: ['color:blueviolet', 'SIGNALS-EFFECT'],
  signalEffectCleanup: ['color:blueviolet', 'SIGNALS-EFFECT-CLEANUP'],
  signalSet: ['color:blueviolet', 'SIGNALS-SET'],
  signalUpdate: ['color:blueviolet', 'SIGNALS-UPDATE'],
  signalComputed: ['color:blueviolet', 'SIGNALS-COMPUTED'],

  // network actions (interceptors)
  network: ['color:blue', 'HTTP'],
  networkRequest: ['color:blue', 'HTTP-Request'],
  networkResponse: ['color:blue', 'HTTP-Response'],
  networkError: ['color:red', 'HTTP-Error'],
  networkCreate: ['color:green', 'NEW-HTTP'],

  httpCall: ['color:springgreen', 'HTTP-CALL'], // http prefix : for service logic
  httpSuccess: ['color:springgreen', 'HTTP-SUCCESS'],
  httpError: ['color:red', 'HTTP-ERROR'],
  httpDebug: ['color:springgreen', 'HTTP-TAP'],

  // NG hooks
  ngOnChanges: ['color:orange', 'OnChange'],
  ngOnInit: ['color:orange', 'OnInit'],
  ngOnDestroy: ['color:orange', 'OnDestroy'],
  ngDoCheck: ['color:orange', 'DoCheck'],
  ngAfterContentInit: ['color:orange', 'AfterContentInit'],
  ngAfterContentChecked: ['color:orange', 'AfterContentChecked'],
  ngAfterViewInit: ['color:orange', 'AfterViewInit'],
  ngAfterViewChecked: ['color:orange', 'AfterViewChecked'],

  // constructor logs
  create: ['color:green', 'new'],
  createComponent: ['color:green', 'New-@Comp'],
  createDirective: ['color:green', 'New-@Dir'],
  createService: ['color:green', 'New-Svc'],
  createPipe: ['color:green', 'New-@Pipe'],
  createGuard: ['color:green', 'New-@Guard'],
  createResolver: ['color:green', 'New-@Resolver'],

  // NG types
  resolve: ['color:brown', 'RESOLVE'],
  guard: ['color:sandybrown', 'GUARD'],
  validator: 'color:plum',
  pipe: 'color:brown',
  callback: 'color:violet',

  state: 'color:blueviolet', // Redux style or BehaviorSubject, as you want
  // specific logs for NGXS, Akita
  action: ['color:#8f72cf', '@ACTION'], // to log inside Action method
  data: ['color:coral', 'DATA'],
  onAction: ['color:orange', 'ON'], // log for onClick() ... NG event Handlers
  event: ['color:dodgerblue', 'EVENT'],
  select: ['color:#84467c', '@SELECT'], // to log inside select method
  errorState: ['color:#cf3c04', '@ERROR'], // to log error in Store
  effect: ['color:8F72CF', '@EFFECT'], // to log inside effect method (even if using @Effet is not advised)
  cache: ['color:blueviolet', 'CACHE'],

  formValueChanges: ['orange', 'FORM-VALUE'],
  formEvent: ['greenyellow', 'FORM-EVENT'],
  streamEvent: ['darkorange', 'STREAM'],
  subscription: ['coral', 'SUBSCRIBED-DATA'],
  unsubscription: ['coral', 'UN-SUBSCRIPTION'],

  // Specific loggers for @gpeel/my-validators
  validationCompute: ['color:orange', '@VALID'], // tracing validators when they compute
  validationErrorMsgRefresh: ['color:orange', '@VALID_PERF'], // tracing refresh of <my-error-msg>
  validationErrorMsgCreation: ['color:orange', '@ERROR_MSG_NEW'], // tracing creation of component <my-error-msg>
  errorMsg: ['color:orange', '@VALID'], // used by <error-msg> deprecated

  obsSubscribe: ['color:springgreen', 'OBS-sub'],
  obsSuccess: ['color:springgreen', 'OBS-SUCCESS'],
  obsError: ['color:red', 'OBS-ERROR'],
  obsDebug: ['color:springgreen', 'OBS-DEBUG'],
  obsComplete: ['color:springgreen', 'OBS-COMPLETE'],

  // tests
  tu: ['color:slateblue', 'tu'],
  tuBeforeEach: ['color:slateblue', 'tu-BEFORE-EACH'],
  tuBeforeAll: ['color:slateblue', 'tu-BEFORE-ALL'],
  tuAfterEach: ['color:tomato', 'tu-AFTER-EACH'],
  tuAfterAll: ['color:tomato', 'tu-AFTER-ALL'],
  tuArrange: ['color:blue', 'tu'],
  tuAct: ['color:blueviolet', 'tu'],
  tuAssert: ['color:brown', 'tu'],
  ti: ['color:green', 'ti'],
  te2e: ['color:green', 'e2e'],

  colorPink: ['color:#FF40BD;', '############'], // pink flashy
  colorRed: 'color:red', // red without the console.error() stacktrace
  colorOrange: ['color:orange', '############'],
  colorGreen: ['color:springgreen', '############'],
  colorBlue: ['color:cadetblue', '############'],
  colorLightBlue: ['color:darkturquoise', '############'],
  colorViolet: ['color:blueviolet', '############'],

  feature1: ['color:blueviolet', 'FEATURE1'],
  feature2: ['color:dodgerblue', 'FEATURE2'],
  feature3: ['color:blue', 'FEATURE3'],
  feature4: ['color:deepskyblue', 'FEATURE4'],
  feature5: ['color:hotpink', 'FEATURE5'],
  feature6: ['color:deeppink', 'FEATURE6'],
  feature7: ['color:mediumspringgreen', 'FEATURE7'],
  feature8: ['color:greenyellow', 'FEATURE8'],
  feature9: ['color:green', 'FEATURE9'],

};
