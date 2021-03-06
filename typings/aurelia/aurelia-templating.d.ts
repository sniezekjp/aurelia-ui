declare module 'aurelia-templating' {
  import * as core from 'core-js';
  import * as LogManager from 'aurelia-logging';
  import { Metadata, Origin, Decorators }  from 'aurelia-metadata';
  import { relativeToFile }  from 'aurelia-path';
  import { TemplateRegistryEntry, Loader }  from 'aurelia-loader';
  import { ValueConverter, bindingMode, ObserverLocator, BindingExpression, Binding, ValueConverterResource, EventManager }  from 'aurelia-binding';
  import { Container }  from 'aurelia-dependency-injection';
  import { TaskQueue }  from 'aurelia-task-queue';
  
  // this will be replaced soon
  export interface ViewCreateInstruction {
    suppressBind?: boolean;
    systemControlled?: boolean;
    enhance?: boolean;
    partReplacements?: Object;
    initiatedByBehavior?: boolean;
  }
  export let DOMBoundary: any;
  export let hasShadowDOM: any;
  export function nextElementSibling(element: Node): Element;
  export function createTemplateFromMarkup(markup: string): Element;
  export function replaceNode(newNode: Node, node: Node, parentNode: Node): void;
  export function removeNode(node: Node, parentNode: Node): void;
  export const animationEvent: any;
  export class Animator {
    static configureDefault(container: any, animatorInstance: any): any;
    move(): any;
    
    /**
       * Execute an 'enter' animation on an element
       * 
       * @param element {HTMLElement}         Element to animate
       * 
       * @returns {Promise}                   Resolved when the animation is done
       */
    enter(element: any): any;
    
    /**
       * Execute a 'leave' animation on an element
       * 
       * @param element {HTMLElement}         Element to animate
       * 
       * @returns {Promise}                   Resolved when the animation is done
       */
    leave(element: any): any;
    
    /**
       * Add a class to an element to trigger an animation.
       * 
       * @param element {HTMLElement}         Element to animate
       * @param className {String}            Properties to animate or name of the effect to use
       * 
       * @returns {Promise}                   Resolved when the animation is done
       */
    removeClass(element: any, className: any): any;
    
    /**
       * Add a class to an element to trigger an animation.
       * 
       * @param element {HTMLElement}         Element to animate
       * @param className {String}            Properties to animate or name of the effect to use
       * 
       * @returns {Promise}                   Resolved when the animation is done
       */
    addClass(element: any, className: any): any;
    
    /**
       * Execute a single animation.
       * 
       * @param element {HTMLElement}         Element to animate
       * @param className {Object|String}    Properties to animate or name of the effect to use
       *                                      For css animators this represents the className to 
       *                                      be added and removed right after the animation is done
       * @param options {Object}              options for the animation (duration, easing, ...)
       * 
       * @returns {Promise}                   Resolved when the animation is done
       */
    animate(element: any, className: any, options: any): any;
    
    /**
       * Run a sequence of animations one after the other.
       * for example : animator.runSequence("fadeIn","callout")
       * 
       * @param sequence {Array}          An array of effectNames or classNames
       * 
       * @returns {Promise}               Resolved when all animations are done
       */
    runSequence(sequence: any): any;
    
    /**
       * Register an effect (for JS based animators)
       * 
       * @param effectName {String}          name identifier of the effect
       * @param properties {Object}          Object with properties for the effect
       * 
       */
    registerEffect(effectName: any, properties: any): any;
    
    /**
       * Unregister an effect (for JS based animators)
       * 
       * @param effectName {String}          name identifier of the effect
       */
    unregisterEffect(effectName: any): any;
  }
  export function hyphenate(name: any): any;
  export class ResourceLoadContext {
    constructor();
    addDependency(url: string): void;
    doesNotHaveDependency(url: string): boolean;
  }
  export class ViewCompileInstruction {
    static normal: any;
    constructor(targetShadowDOM?: boolean, compileSurrogate?: boolean, beforeCompile?: boolean);
  }
  export class BehaviorInstruction {
    static normal: any;
    static contentSelector: any;
    static element(node: Node, type: HtmlBehaviorResource): BehaviorInstruction;
    static attribute(attrName: string, type?: HtmlBehaviorResource): BehaviorInstruction;
    static dynamic(host: any, executionContext: any, viewFactory: any): any;
    constructor(suppressBind?: boolean);
  }
  export class TargetInstruction {
    static noExpressions: any;
    static contentSelector(node: Node, parentInjectorId: number): TargetInstruction;
    static contentExpression(expression: any): TargetInstruction;
    static lifting(parentInjectorId: number, liftingInstruction: BehaviorInstruction): TargetInstruction;
    static normal(injectorId: any, parentInjectorId: any, providers: any, behaviorInstructions: any, expressions: any, elementInstruction: any): TargetInstruction;
    static surrogate(providers: any, behaviorInstructions: any, expressions: any, values: any): TargetInstruction;
    constructor();
  }
  export class ViewStrategy {
    static metadataKey: string;
    makeRelativeTo(baseUrl: string): void;
    static normalize(value: string | ViewStrategy): ViewStrategy;
    static getDefault(target: any): ViewStrategy;
  }
  export class UseViewStrategy extends ViewStrategy {
    constructor(path: string);
    loadViewFactory(viewEngine: ViewEngine, compileInstruction: ViewCompileInstruction, loadContext?: ResourceLoadContext): Promise<ViewFactory>;
    makeRelativeTo(file: string): void;
  }
  export class ConventionalViewStrategy extends ViewStrategy {
    constructor(moduleId: string);
    loadViewFactory(viewEngine: ViewEngine, compileInstruction: ViewCompileInstruction, loadContext?: ResourceLoadContext): Promise<ViewFactory>;
    static convertModuleIdToViewUrl(moduleId: string): string;
  }
  export class NoViewStrategy extends ViewStrategy {
    loadViewFactory(viewEngine: ViewEngine, compileInstruction: ViewCompileInstruction, loadContext?: ResourceLoadContext): Promise<ViewFactory>;
  }
  export class TemplateRegistryViewStrategy extends ViewStrategy {
    constructor(moduleId: string, entry: TemplateRegistryEntry);
    loadViewFactory(viewEngine: ViewEngine, compileInstruction: ViewCompileInstruction, loadContext?: ResourceLoadContext): Promise<ViewFactory>;
  }
  export class InlineViewStrategy extends ViewStrategy {
    constructor(markup: string, dependencies?: Array<string | Function | Object>, dependencyBaseUrl?: string);
    loadViewFactory(viewEngine: ViewEngine, compileInstruction: ViewCompileInstruction, loadContext?: ResourceLoadContext): Promise<ViewFactory>;
  }
  export class BindingLanguage {
    inspectAttribute(resources: any, attrName: any, attrValue: any): any;
    createAttributeInstruction(resources: any, element: any, info: any, existingInstruction: any): any;
    parseText(resources: any, value: any): any;
  }
  export class ViewResources {
    constructor(parent?: ViewResources, viewUrl?: string);
    getBindingLanguage(bindingLanguageFallback: any): any;
    patchInParent(newParent: ViewResources): void;
    relativeToView(path: string): string;
    registerElement(tagName: string, behavior: HtmlBehaviorResource): void;
    getElement(tagName: string): HtmlBehaviorResource;
    mapAttribute(attribute: string): string;
    registerAttribute(attribute: string, behavior: HtmlBehaviorResource, knownAttribute: string): void;
    getAttribute(attribute: string): HtmlBehaviorResource;
    registerValueConverter(name: string, valueConverter: ValueConverter): void;
    getValueConverter(name: string): ValueConverter;
  }
  
  // NOTE: Adding a fragment to the document causes the nodes to be removed from the fragment.
  // NOTE: Adding to the fragment, causes the nodes to be removed from the document.
  export class View {
    constructor(container: any, fragment: any, behaviors: any, bindings: any, children: any, systemControlled: any, contentSelectors: any);
    created(): any;
    bind(executionContext: any, systemUpdate: any): any;
    addBinding(binding: any): any;
    unbind(): any;
    insertNodesBefore(refNode: any): any;
    appendNodesTo(parent: any): any;
    removeNodes(): any;
    attached(): any;
    detached(): any;
  }
  export class ContentSelector {
    static applySelectors(view: any, contentSelectors: any, callback: any): any;
    constructor(anchor: any, selector: any);
    copyForViewSlot(): any;
    matches(node: any): any;
    add(group: any): any;
    insert(index: any, group: any): any;
    removeAt(index: any, fragment: any): any;
  }
  export class ViewSlot {
    constructor(anchor: any, anchorIsContainer: any, executionContext: any, animator?: any);
    transformChildNodesIntoView(): any;
    bind(executionContext: any): any;
    unbind(): any;
    add(view: any): any;
    insert(index: any, view: any): any;
    remove(view: any): any;
    removeAt(index: any): any;
    removeAll(): any;
    swap(view: any): any;
    attached(): any;
    detached(): any;
    installContentSelectors(contentSelectors: any): any;
    contentSelectorAdd(view: any): any;
    contentSelectorInsert(index: any, view: any): any;
    contentSelectorRemove(view: any): any;
    contentSelectorRemoveAt(index: any): any;
    contentSelectorRemoveAll(): any;
  }
  export class BoundViewFactory {
    constructor(parentContainer: Container, viewFactory: ViewFactory, executionContext: Object, partReplacements?: Object);
    create(executionContext?: Object): View;
  }
  export class ViewFactory {
    constructor(template: DocumentFragment, instructions: Object, resources: ViewResources);
    create(container: Container, executionContext?: Object, createInstruction?: ViewCreateInstruction, element?: Element): View;
  }
  export class ViewCompiler {
    static inject(): any;
    constructor(bindingLanguage: BindingLanguage, resources: ViewResources);
    compile(source: Element | DocumentFragment | string, resources?: ViewResources, compileInstruction?: ViewCompileInstruction): ViewFactory;
    compileNode(node: any, resources: any, instructions: any, parentNode: any, parentInjectorId: any, targetLightDOM: any): any;
    compileSurrogate(node: any, resources: any): any;
    compileElement(node: any, resources: any, instructions: any, parentNode: any, parentInjectorId: any, targetLightDOM: any): any;
  }
  class ProxyViewFactory {
    constructor(promise: any);
    absorb(factory: any): any;
  }
  export class ViewEngine {
    static inject(): any;
    constructor(loader: Loader, container: Container, viewCompiler: ViewCompiler, moduleAnalyzer: ModuleAnalyzer, appResources: ViewResources);
    enhance(container: Container, element: Element, resources: ViewResources, bindingContext?: Object): View;
    loadViewFactory(urlOrRegistryEntry: string | TemplateRegistryEntry, compileInstruction?: ViewCompileInstruction, loadContext?: ResourceLoadContext): Promise<ViewFactory>;
    loadTemplateResources(viewRegistryEntry: TemplateRegistryEntry, compileInstruction?: ViewCompileInstruction, loadContext?: ResourceLoadContext): Promise<ViewResources>;
    importViewModelResource(moduleImport: string, moduleMember: string): Promise<ResourceDescription>;
    importViewResources(moduleIds: string[], names: string[], resources: ViewResources, compileInstruction?: ViewCompileInstruction, loadContext?: ResourceLoadContext): Promise<ViewResources>;
  }
  export class BehaviorInstance {
    constructor(behavior: any, executionContext: any, instruction: any);
    static createForUnitTest(type: any, attributes: any, bindingContext: any): any;
    created(context: any): any;
    bind(context: any): any;
    unbind(): any;
    attached(): any;
    detached(): any;
  }
  export class BindableProperty {
    constructor(nameOrConfig: any);
    registerWith(target: any, behavior: any, descriptor: any): any;
    configureDescriptor(behavior: any, descriptor: any): any;
    defineOn(target: any, behavior: any): any;
    createObserver(executionContext: any): any;
    initialize(executionContext: any, observerLookup: any, attributes: any, behaviorHandlesBind: any, boundProperties: any): any;
    createDynamicProperty(executionContext: any, observerLookup: any, behaviorHandlesBind: any, name: any, attribute: any, boundProperties: any): any;
  }
  class BehaviorPropertyObserver {
    constructor(taskQueue: any, obj: any, propertyName: any, selfSubscriber: any, initialValue: any);
    getValue(): any;
    setValue(newValue: any): any;
    call(): any;
    subscribe(callback: any): any;
  }
  export class HtmlBehaviorResource {
    constructor();
    static convention(name: string, existing?: HtmlBehaviorResource): HtmlBehaviorResource;
    addChildBinding(behavior: BindingExpression): void;
    analyze(container: Container, target: Function): void;
    load(container: Container, target: Function, viewStrategy?: ViewStrategy, transientView?: boolean, loadContext?: ResourceLoadContext): Promise<HtmlBehaviorResource>;
    register(registry: ViewResources, name?: string): void;
    compile(compiler: ViewCompiler, resources: ViewResources, node: Node, instruction: BehaviorInstruction, parentNode?: Node): Node;
    create(container: Container, instruction?: BehaviorInstruction, element?: Element, bindings?: Binding[]): BehaviorInstance;
    ensurePropertiesDefined(instance: Object, lookup: Object): any;
  }
  export class ResourceModule {
    constructor(moduleId: string);
    analyze(container: Container): any;
    register(registry: ViewResources, name?: string): any;
    load(container: Container, loadContext?: ResourceLoadContext): Promise<void>;
  }
  export class ResourceDescription {
    constructor(key: string, exportedValue: any, resourceTypeMeta: Object);
    analyze(container: Container): any;
    register(registry: ViewResources, name?: string): any;
    load(container: Container, loadContext?: ResourceLoadContext): Promise<void> | void;
    static get(resource: any, key?: string): ResourceDescription;
  }
  export class ModuleAnalyzer {
    constructor();
    getAnalysis(moduleId: string): ResourceModule;
    analyze(moduleId: string, moduleInstance: any, viewModelMember?: string): ResourceModule;
  }
  export class ChildObserver {
    constructor(config: any);
    create(target: any, behavior: any): any;
  }
  
  // TODO: we really only want one child observer per element. Right now you can have many, via @sync.
  // We need to enable a way to share the observer across all uses and direct matches to the correct source.
  export class ChildObserverBinder {
    constructor(selector: any, target: any, property: any, behavior: any, changeHandler: any);
    bind(source: any): any;
    unbind(): any;
    onChange(mutations: any): any;
  }
  export class CompositionEngine {
    static inject(): any;
    constructor(viewEngine: any);
    activate(instruction: any): any;
    createBehaviorAndSwap(instruction: any): any;
    createBehavior(instruction: any): any;
    createViewModel(instruction: any): any;
    compose(instruction: any): any;
  }
  export class ElementConfigResource {
    load(container: any, target: any): any;
    register(): any;
  }
  export function behavior(override: any): any;
  export function customElement(name: any): any;
  export function customAttribute(name: any, defaultBindingMode?: any): any;
  export function templateController(target: any): any;
  export function bindable(nameOrConfigOrTarget?: any, key?: any, descriptor?: any): any;
  export function dynamicOptions(target: any): any;
  export function sync(selectorOrConfig: any): any;
  export function useShadowDOM(target: any): any;
  
  // this is now deprecated in favor of the processContent decorator
  export function skipContentProcessing(target: any): any;
  export function processContent(processor: any): any;
  export function containerless(target: any): any;
  export function viewStrategy(strategy: any): any;
  export function useView(path: any): any;
  export function inlineView(markup: string, dependencies?: Array<string | Function | Object>, dependencyBaseUrl?: string): any;
  export function noView(target: any): any;
  export function elementConfig(target: any): any;
}