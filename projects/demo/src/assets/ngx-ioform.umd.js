(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('rxjs'), require('@angular/material'), require('rxjs/operators'), require('@angular/platform-browser'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-ioform', ['exports', '@angular/core', '@angular/forms', 'rxjs', '@angular/material', 'rxjs/operators', '@angular/platform-browser', '@angular/common'], factory) :
    (global = global || self, factory(global['ngx-ioform'] = {}, global.ng.core, global.ng.forms, global.rxjs, global.ng.material, global.rxjs.operators, global.ng.platformBrowser, global.ng.common));
}(this, (function (exports, core, forms, rxjs, material, operators, platformBrowser, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: containers/abstract-container.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    AbstractContainerComponent = /** @class */ (function () {
        function AbstractContainerComponent() {
            this.attached = new core.EventEmitter();
            this.panelRemoved = new core.EventEmitter();
            this.displayRemove = false;
        }
        /**
         * @return {?}
         */
        AbstractContainerComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.attached.emit("attached");
            this.attached.complete();
        };
        return AbstractContainerComponent;
    }());
    if (false) {
        /** @type {?} */
        AbstractContainerComponent.prototype.attached;
        /** @type {?} */
        AbstractContainerComponent.prototype.panelRemoved;
        /** @type {?} */
        AbstractContainerComponent.prototype.displayRemove;
        /**
         * @abstract
         * @param {?} title
         * @return {?}
         */
        AbstractContainerComponent.prototype.createPanel = function (title) { };
        /**
         * @abstract
         * @param {?} index
         * @return {?}
         */
        AbstractContainerComponent.prototype.removePanel = function (index) { };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: containers/expantion-panel-container/expantion-panel-container.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ExpantionPanelContainerComponent = /** @class */ (function (_super) {
        __extends(ExpantionPanelContainerComponent, _super);
        function ExpantionPanelContainerComponent(appRef, renderer) {
            var _this = _super.call(this) || this;
            _this.appRef = appRef;
            _this.renderer = renderer;
            _this.references = [];
            return _this;
        }
        /**
         * @return {?}
         */
        ExpantionPanelContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @param {?} title
         * @return {?}
         */
        ExpantionPanelContainerComponent.prototype.createPanel = /**
         * @param {?} title
         * @return {?}
         */
        function (title) {
            /** @type {?} */
            var view = (/** @type {?} */ (this.template.createEmbeddedView({ data: { header: title } })));
            this.renderer.appendChild(this.accordion.nativeElement, view.rootNodes[0]);
            this.appRef.attachView(view);
            this.references.push(view);
            return ((/** @type {?} */ (view.rootNodes[0]))).querySelector(".mat-expansion-panel-body");
        };
        /**
         * @param {?} panel
         * @return {?}
         */
        ExpantionPanelContainerComponent.prototype.removePanel = /**
         * @param {?} panel
         * @return {?}
         */
        function (panel) {
            /** @type {?} */
            var viewRef = panel._viewContainerRef;
            /** @type {?} */
            var nodes = Array.prototype.slice.call(this.accordion.nativeElement.children);
            /** @type {?} */
            var index = nodes.indexOf(viewRef.element.nativeElement);
            this.appRef.detachView(this.references[index]);
            this.references.splice(index, 1);
            viewRef.element.nativeElement.remove();
            this.panelRemoved.emit(index);
        };
        /**
         * @return {?}
         */
        ExpantionPanelContainerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.references.forEach((/**
             * @param {?} ref
             * @return {?}
             */
            function (ref) {
                _this.appRef.detachView(ref);
            }));
            this.references = [];
        };
        ExpantionPanelContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-expantion-panel-container',
                        template: "<mat-accordion #accordion>\n\n    <ng-template #template let-data=\"data\">\n        <mat-expansion-panel #panel>\n            <mat-expansion-panel-header>\n                    <span [style.cursor]=\"'pointer'\" [style.display]=\"displayRemove ? 'unset' : 'none'\"><i class=\"material-icons\" (click)=\"removePanel(panel)\">\n                            delete_forever\n                            </i>&nbsp;&nbsp;&nbsp; </span>{{data.header}}\n            </mat-expansion-panel-header>\n        </mat-expansion-panel>\n    </ng-template>\n        \n</mat-accordion>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ExpantionPanelContainerComponent.ctorParameters = function () { return [
            { type: core.ApplicationRef },
            { type: core.Renderer2 }
        ]; };
        ExpantionPanelContainerComponent.propDecorators = {
            template: [{ type: core.ViewChild, args: ["template", { static: false },] }],
            accordion: [{ type: core.ViewChild, args: ["accordion", { static: true },] }]
        };
        return ExpantionPanelContainerComponent;
    }(AbstractContainerComponent));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ExpantionPanelContainerComponent.prototype.template;
        /**
         * @type {?}
         * @private
         */
        ExpantionPanelContainerComponent.prototype.accordion;
        /** @type {?} */
        ExpantionPanelContainerComponent.prototype.references;
        /**
         * @type {?}
         * @private
         */
        ExpantionPanelContainerComponent.prototype.appRef;
        /**
         * @type {?}
         * @private
         */
        ExpantionPanelContainerComponent.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: edit-form.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EditFormComponent = /** @class */ (function () {
        function EditFormComponent(componentFactoryResolver, formBuilder, injector, rendrer, appRef) {
            var _this = this;
            this.componentFactoryResolver = componentFactoryResolver;
            this.formBuilder = formBuilder;
            this.injector = injector;
            this.rendrer = rendrer;
            this.appRef = appRef;
            this.setFromSelf = false;
            this.domParser = new DOMParser();
            this.valueChange = new core.EventEmitter();
            this.save = new core.EventEmitter();
            this.cancel = new core.EventEmitter();
            this.defaultAction = "true";
            this.componentRefs = [];
            this.viewRefs = [];
            this.containerReady = false;
            this.eventSubscriptions = [];
            this.onAddItem = (/**
             * @param {?} formConfig
             * @param {?} formArray
             * @param {?} container
             * @return {?}
             */
            function (formConfig, formArray, container) {
                /** @type {?} */
                var group = _this.formBuilder.group(_this.buildControl(formConfig));
                formArray.push(group);
                _this.createNewPanel(formConfig, (/** @type {?} */ (group)), container);
            });
            //this.formGroup = this.formBuilder.group({})
        }
        Object.defineProperty(EditFormComponent.prototype, "content", {
            set: /**
             * @param {?} content
             * @return {?}
             */
            function (content) {
                this.container = content;
                if (this.container) {
                    this.containerReady = true;
                    this.init();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditFormComponent.prototype, "template", {
            set: /**
             * @param {?} template
             * @return {?}
             */
            function (template) {
                debugger;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        EditFormComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
        };
        Object.defineProperty(EditFormComponent.prototype, "value", {
            get: /**
             * @return {?}
             */
            function () {
                return this._value;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (this.setFromSelf) {
                    this.setFromSelf = false;
                    return;
                }
                this._value = value;
                if (this.formGroup) {
                    this.updateValue();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EditFormComponent.prototype, "formConfig", {
            get: /**
             * @return {?}
             */
            function () {
                return this._formConfig;
            },
            set: /**
             * @param {?} formConfig
             * @return {?}
             */
            function (formConfig) {
                var _this = this;
                this._formConfig = formConfig;
                if (this._formConfig) {
                    if (this._formConfig.fields) {
                        /** @type {?} */
                        var section = {
                            sectionClass: "default_section",
                            fields: this._formConfig.fields
                        };
                        this._formConfig.sections = __spread([section], this._formConfig.sections);
                    }
                    this.formGroup = this.formBuilder.group((/** @type {?} */ (this.buildControl(this._formConfig))));
                }
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.init();
                }), 100);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        EditFormComponent.prototype.submitForm = /**
         * @return {?}
         */
        function () {
            this.save.emit(this.formGroup.value);
        };
        /**
         * @return {?}
         */
        EditFormComponent.prototype.onCancel = /**
         * @return {?}
         */
        function () {
            this.cancel.emit();
        };
        /**
         * @param {?} formGroup
         * @param {?} formConfig
         * @param {?} value
         * @return {?}
         */
        EditFormComponent.prototype.checkValueForm = /**
         * @param {?} formGroup
         * @param {?} formConfig
         * @param {?} value
         * @return {?}
         */
        function (formGroup, formConfig, value) {
            var _this = this;
            Object.keys(value).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                if (Array.isArray(value[key])) {
                    if (!formConfig.sections || !formConfig.sections.length)
                        return;
                    formConfig.sections.forEach((/**
                     * @param {?} section
                     * @return {?}
                     */
                    function (section) {
                        if (!section.fields[key] || section.fields[key].type === "control")
                            return;
                        /** @type {?} */
                        var config = section.fields[key].config;
                        /** @type {?} */
                        var formArray = _this.formBuilder.array([]);
                        formGroup.setControl(key, formArray);
                        for (var i = 0; i < value[key].length; i++) {
                            /** @type {?} */
                            var control = (/** @type {?} */ (_this.buildControl(config)));
                            formArray.push(_this.formBuilder.group(control));
                            _this.checkValueForm(control, config, value[key]);
                        }
                    }));
                }
            }));
        };
        /**
         * @param {?} formConfig
         * @return {?}
         */
        EditFormComponent.prototype.buildControl = /**
         * @param {?} formConfig
         * @return {?}
         */
        function (formConfig) {
            var _this = this;
            /** @type {?} */
            var control = {};
            formConfig.sections.forEach((/**
             * @param {?} section
             * @return {?}
             */
            function (section) {
                Object.keys(section.fields).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    /** @type {?} */
                    var config = section.fields[key];
                    /** @type {?} */
                    var validations = section.fields[key].validation;
                    if (config.type === "control") {
                        control[key] = [null, validations && validations.controls ? validations.controls : []];
                    }
                    else if (config.type === "array") {
                        control[key] = _this.formBuilder.array([]);
                    }
                    else {
                        control[key] = _this.formBuilder.group(_this.buildControl(config.config), { validations: formConfig.validators });
                    }
                }));
            }));
            return control;
        };
        /**
         * @return {?}
         */
        EditFormComponent.prototype.init = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.formConfig && this.containerReady) {
                this.ngOnDestroy();
                ((/** @type {?} */ (this.container.nativeElement))).innerHTML = "";
                //this.initElement(this.formConfig, this.container.nativeElement, this.formGroup)
                this.title = this.formConfig.title;
                this.createForm(this.formConfig, this.container.nativeElement, this.formGroup);
                if (this.value) {
                    this.checkValueForm(this.formGroup, this.formConfig, this.value);
                }
                this.updateValue();
                this.formChangeSubscription = this.formGroup.valueChanges.subscribe((/**
                 * @param {?} change
                 * @return {?}
                 */
                function (change) {
                    _this._value = _this.formGroup.value;
                    _this.valueChange.emit(_this.value);
                    _this.setFromSelf = true;
                }));
            }
        };
        /**
         * @return {?}
         */
        EditFormComponent.prototype.updateValue = /**
         * @return {?}
         */
        function () {
            if (this.value) {
                this.clean(this.value, this.formGroup);
                this.fill(this.value, this.formGroup);
                this.formGroup.setValue(this.value);
            }
        };
        /**
         * @param {?} value
         * @param {?} group
         * @return {?}
         */
        EditFormComponent.prototype.clean = /**
         * @param {?} value
         * @param {?} group
         * @return {?}
         */
        function (value, group) {
            var _this = this;
            if (typeof (value) === "object") {
                Object.keys(value).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    if (group instanceof forms.FormGroup && Object.keys(group.value).indexOf(key) < 0) {
                        delete value[key];
                    }
                    else if (group.controls[key] instanceof forms.FormGroup) {
                        _this.clean(value[key], (/** @type {?} */ (group.controls[key])));
                    }
                }));
            }
        };
        /**
         * @param {?} value
         * @param {?} group
         * @return {?}
         */
        EditFormComponent.prototype.fill = /**
         * @param {?} value
         * @param {?} group
         * @return {?}
         */
        function (value, group) {
            var _this = this;
            if (group.value != null && typeof (group.value) === "object") {
                Object.keys(group.value).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    if (typeof (value[key]) === "undefined") {
                        value[key] = group.value[key];
                    }
                    else {
                        if (typeof (value[key]) === "object" && group.controls[key] instanceof forms.FormGroup) {
                            _this.fill(value[key], (/** @type {?} */ (group.controls[key])));
                        }
                    }
                }));
            }
        };
        /**
         * @param {?} formConfig
         * @param {?} element
         * @param {?=} formGroup
         * @return {?}
         */
        EditFormComponent.prototype.initElement = /**
         * @param {?} formConfig
         * @param {?} element
         * @param {?=} formGroup
         * @return {?}
         */
        function (formConfig, element, formGroup) {
            var _this = this;
            if (formConfig.class && formConfig.class.length) {
                if (formConfig.class && formConfig.class.length) {
                    formConfig.class.forEach((/**
                     * @param {?} _class
                     * @return {?}
                     */
                    function (_class) {
                        _this.rendrer.addClass(element, _class);
                    }));
                }
            }
            if (formConfig.title) {
                /** @type {?} */
                var titleElement = this.rendrer.createElement("h1");
                /** @type {?} */
                var title;
                if (typeof (formConfig.title) === "function") {
                    title = formConfig.title(formGroup.value);
                }
                else {
                    title = formConfig.title;
                }
                /** @type {?} */
                var titleText = this.rendrer.createText(title);
                this.rendrer.appendChild(titleElement, titleText);
                this.rendrer.appendChild(element, titleElement);
            }
        };
        /**
         * @param {?} formConfig
         * @param {?} container
         * @param {?} formGroup
         * @return {?}
         */
        EditFormComponent.prototype.createForm = /**
         * @param {?} formConfig
         * @param {?} container
         * @param {?} formGroup
         * @return {?}
         */
        function (formConfig, container, formGroup) {
            var _this = this;
            formConfig.sections.forEach((/**
             * @param {?} section
             * @return {?}
             */
            function (section) {
                /** @type {?} */
                var parentElement = _this.rendrer.createElement('div');
                _this.rendrer.appendChild(container, parentElement);
                _this.rendrer.addClass(parentElement, section.sectionClass);
                Object.keys(section.fields).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    /** @type {?} */
                    var form = section.fields[key];
                    if (form.type === "control") {
                        _this.createControlForm(formConfig, form, (/** @type {?} */ (formGroup.get(key))), parentElement, key);
                    }
                    else if (form.type === "group" || form.type === "array") {
                        /** @type {?} */
                        var panel;
                        /** @type {?} */
                        var ctx = {
                            data: {
                                title: form.groupTitle,
                                click: (/**
                                 * @return {?}
                                 */
                                function () {
                                    _this.onAddItem(form.config, (/** @type {?} */ (formGroup.get(key))), panel.instance);
                                })
                            }
                        }
                        // create add button in case of array
                        ;
                        // create add button in case of array
                        if (form.type === "array") {
                            ctx.data.showAdd = true;
                        }
                        /** @type {?} */
                        var view = (/** @type {?} */ (_this.cardGroup.createEmbeddedView(ctx)));
                        _this.appRef.attachView(view);
                        /** @type {?} */
                        var element = view.rootNodes[0];
                        _this.rendrer.appendChild(parentElement, element);
                        element = element.querySelector(".edit-form-group-content");
                        if (form.type === "group") {
                            _this.createForm(form.config, element, (/** @type {?} */ (formGroup.get(key))));
                            //this.createNewPanel(form.config, formGroup.get(key) as FormGroup, panel.instance)
                        }
                        else {
                            panel = _this.componentFactoryResolver.resolveComponentFactory(ExpantionPanelContainerComponent).create(_this.injector);
                            /** @type {?} */
                            var panelNode = ((/** @type {?} */ (panel.hostView))).rootNodes[0];
                            _this.appRef.attachView(panel.hostView);
                            _this.rendrer.appendChild(element, panelNode);
                            _this.componentRefs.push(panel);
                            panel.instance.attached.subscribe((/**
                             * @param {?} evt
                             * @return {?}
                             */
                            function (evt) {
                                /** @type {?} */
                                var formArray = (/** @type {?} */ (formGroup.get(key)));
                                panel.instance.displayRemove = true;
                                for (var i = 0; i < formArray.length; i++) {
                                    _this.createNewPanel(form.config, (/** @type {?} */ (formArray.at(i))), panel.instance);
                                }
                            }));
                            panel.instance.panelRemoved.subscribe((/**
                             * @param {?} index
                             * @return {?}
                             */
                            function (index) {
                                /** @type {?} */
                                var formArray = (/** @type {?} */ (formGroup.get(key)));
                                formArray.removeAt(index);
                            }));
                        }
                    }
                }));
            }));
        };
        /**
         * @private
         * @param {?} formConfig
         * @param {?} form
         * @param {?} formControl
         * @param {?} parentElement
         * @param {?} fieldName
         * @return {?}
         */
        EditFormComponent.prototype.createControlForm = /**
         * @private
         * @param {?} formConfig
         * @param {?} form
         * @param {?} formControl
         * @param {?} parentElement
         * @param {?} fieldName
         * @return {?}
         */
        function (formConfig, form, formControl, parentElement, fieldName) {
            if (!form.component)
                return;
            if (typeof (form.component) === "string") {
                this.createNativeElement(form, formControl, parentElement, fieldName);
                return;
            }
            /** @type {?} */
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory((/** @type {?} */ (form.component)));
            /** @type {?} */
            var useValue = {
                formControl: formControl,
                attributes: form.attributes,
                events: form.events,
                errors: form.validation ? form.validation.errors : [],
                class: form.fieldClass
            };
            /** @type {?} */
            var injector = core.Injector.create([
                {
                    provide: "FIELD_DATA",
                    useValue: useValue
                }
            ]);
            /** @type {?} */
            var ref = componentFactory.create(injector);
            this.appRef.attachView(ref.hostView);
            //this.container.insert(ref.hostView)
            //const elementContainer = this.rendrer.createElement('div')
            this.rendrer.appendChild(parentElement, ((/** @type {?} */ (ref.hostView))).rootNodes[0]);
            //this.rendrer.appendChild(parentElement, elementContainer);
            ref.changeDetectorRef.detectChanges();
            this.componentRefs.push(ref);
        };
        /**
         * @param {?} form
         * @param {?} formControl
         * @param {?} parentElement
         * @param {?} fieldName
         * @return {?}
         */
        EditFormComponent.prototype.createNativeElement = /**
         * @param {?} form
         * @param {?} formControl
         * @param {?} parentElement
         * @param {?} fieldName
         * @return {?}
         */
        function (form, formControl, parentElement, fieldName) {
            var _this = this;
            /** @type {?} */
            var component = this.domParser.parseFromString((/** @type {?} */ (form.component)), "text/html").firstElementChild.querySelector("body").firstElementChild;
            if (!component) {
                return;
            }
            /** @type {?} */
            var elements = Array.from(component.querySelectorAll("[this]"));
            if (elements.length === 0) {
                elements = [component];
            }
            var _loop_1 = function (i) {
                /** @type {?} */
                var element = (/** @type {?} */ (elements[i]));
                for (var att in form.attributes) {
                    if (att === "content")
                        continue;
                    element[att] = form.attributes[att];
                    if (form.fieldClass && form.fieldClass.length > 0) {
                        form.fieldClass.forEach((/**
                         * @param {?} c
                         * @return {?}
                         */
                        function (c) { return _this.rendrer.addClass(element, c); }));
                    }
                }
                var _loop_2 = function (ev) {
                    this_1.eventSubscriptions.push(rxjs.fromEvent(element, ev).subscribe((/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) { return form.events[ev](event); })));
                };
                for (var ev in form.events) {
                    _loop_2(ev);
                }
                this_1.eventSubscriptions.push(rxjs.fromEvent(element, "change").subscribe((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) { return formControl.setValue(((/** @type {?} */ (event.target))).value); })));
                debugger;
                if (element instanceof HTMLInputElement && element.type === "radio" && element.attributes["checked"]) {
                    formControl.setValue(((/** @type {?} */ (element))).value);
                }
                else if (element instanceof HTMLInputElement && element.type === "checkbox" && element.attributes["checked"]) {
                    formControl.setValue(true);
                }
                else if (["radio", "checkbox"].indexOf(((/** @type {?} */ (element))).type) < 0) {
                    formControl.setValue(((/** @type {?} */ (element))).value);
                }
            };
            var this_1 = this;
            for (var i = 0; i < elements.length; i++) {
                _loop_1(i);
            }
            HTMLInputElement;
            this.rendrer.appendChild(parentElement, component);
        };
        /**
         * @param {?} config
         * @param {?} formGroup
         * @param {?} container
         * @return {?}
         */
        EditFormComponent.prototype.createNewPanel = /**
         * @param {?} config
         * @param {?} formGroup
         * @param {?} container
         * @return {?}
         */
        function (config, formGroup, container) {
            var _this = this;
            /** @type {?} */
            var title;
            if (typeof (config.title) === "function") {
                title = config.title(formGroup.value);
            }
            else {
                title = config.title;
            }
            /** @type {?} */
            var element = container.createPanel(title);
            if (config.class && config.class.length) {
                config.class.forEach((/**
                 * @param {?} _class
                 * @return {?}
                 */
                function (_class) {
                    _this.rendrer.addClass(element, _class);
                }));
            }
            this.createForm(config, element, formGroup);
        };
        /**
         * @return {?}
         */
        EditFormComponent.prototype.valid = /**
         * @return {?}
         */
        function () {
            return this.formGroup && this.formGroup.valid;
        };
        /**
         * @return {?}
         */
        EditFormComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.formChangeSubscription) {
                this.formChangeSubscription.unsubscribe();
            }
            this.componentRefs.forEach((/**
             * @param {?} ref
             * @return {?}
             */
            function (ref) {
                _this.appRef.detachView(ref.hostView);
                ref.changeDetectorRef.detach();
            }));
            this.viewRefs.forEach((/**
             * @param {?} ref
             * @return {?}
             */
            function (ref) {
                _this.appRef.detachView(ref);
            }));
            if (this.eventSubscriptions) {
                this.eventSubscriptions.forEach((/**
                 * @param {?} s
                 * @return {?}
                 */
                function (s) { return s.unsubscribe; }));
                this.eventSubscriptions = [];
            }
            this.componentRefs = [];
            this.viewRefs = [];
        };
        EditFormComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mat-edit-form',
                        template: "<form [formGroup]=\"formGroup\" #custForm (ngSubmit)=\"submitForm()\">\n    <mat-card>\n\n        <ng-content></ng-content>\n\n        <mat-card-header color=\"primary\" *ngIf=\"customheader.children.length == 0\">\n            <mat-card-title>{{title}}</mat-card-title>\n        </mat-card-header>\n        <span #customheader>\n            <ng-content select=\"edit-form-header\"></ng-content>\n        </span>\n        <div #container></div>\n\n        <mat-card-actions align=\"end\">\n            <ng-container *ngIf=\"actionbuttons.children.length == 0\">\n                <button mat-raised-button color=\"warn\" type=\"button\" (click)=\"onCancel()\">Cancel</button>\n                <button mat-raised-button type=\"submit\" color=\"primary\" [disabled]=\"!valid()\">Save</button>\n            </ng-container>\n            <span #actionbuttons>\n                <ng-content select=\"edit-form-actions\"></ng-content>\n            </span>\n        </mat-card-actions>\n\n    </mat-card>\n</form>\n<ng-template #cardGroup let-data=\"data\">\n    <mat-card>\n        <div class=\"card-group-header\">\n            <h3>{{data.title}}</h3>\n            <button mat-mini-fab *ngIf=\"data.showAdd\" type=\"button\" color=\"primary\"\n                (click)=\"data.click($event)\">+</button>\n        </div>\n        <mat-card-header class=\"card-header\" color=\"primary\">\n\n        </mat-card-header>\n        <div class=\"edit-form-group-content\"></div>\n    </mat-card>\n\n</ng-template>",
                        exportAs: "editForm",
                        styles: [".card-group-header h3{width:calc(100% - 40px);display:inline-block}"]
                    }] }
        ];
        /** @nocollapse */
        EditFormComponent.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver },
            { type: forms.FormBuilder },
            { type: core.Injector },
            { type: core.Renderer2 },
            { type: core.ApplicationRef }
        ]; };
        EditFormComponent.propDecorators = {
            content: [{ type: core.ViewChild, args: ['container', null,] }],
            cardGroup: [{ type: core.ViewChild, args: ['cardGroup', { read: core.TemplateRef, static: true },] }],
            template: [{ type: core.ContentChildren, args: [core.TemplateRef,] }],
            valueChange: [{ type: core.Output }],
            save: [{ type: core.Output }],
            cancel: [{ type: core.Output }],
            value: [{ type: core.Input }],
            formConfig: [{ type: core.Input }]
        };
        return EditFormComponent;
    }());
    if (false) {
        /** @type {?} */
        EditFormComponent.prototype.formGroup;
        /** @type {?} */
        EditFormComponent.prototype.container;
        /** @type {?} */
        EditFormComponent.prototype.cardGroup;
        /** @type {?} */
        EditFormComponent.prototype._value;
        /** @type {?} */
        EditFormComponent.prototype._formConfig;
        /** @type {?} */
        EditFormComponent.prototype.title;
        /** @type {?} */
        EditFormComponent.prototype.setFromSelf;
        /** @type {?} */
        EditFormComponent.prototype.domParser;
        /** @type {?} */
        EditFormComponent.prototype.valueChange;
        /** @type {?} */
        EditFormComponent.prototype.save;
        /** @type {?} */
        EditFormComponent.prototype.cancel;
        /** @type {?} */
        EditFormComponent.prototype.defaultAction;
        /** @type {?} */
        EditFormComponent.prototype.componentRefs;
        /** @type {?} */
        EditFormComponent.prototype.viewRefs;
        /** @type {?} */
        EditFormComponent.prototype.formChangeSubscription;
        /** @type {?} */
        EditFormComponent.prototype.containerReady;
        /** @type {?} */
        EditFormComponent.prototype.eventSubscriptions;
        /** @type {?} */
        EditFormComponent.prototype.onAddItem;
        /**
         * @type {?}
         * @private
         */
        EditFormComponent.prototype.componentFactoryResolver;
        /**
         * @type {?}
         * @private
         */
        EditFormComponent.prototype.formBuilder;
        /**
         * @type {?}
         * @private
         */
        EditFormComponent.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        EditFormComponent.prototype.rendrer;
        /**
         * @type {?}
         * @private
         */
        EditFormComponent.prototype.appRef;
    }
    var FormActions = /** @class */ (function () {
        function FormActions() {
        }
        FormActions.decorators = [
            { type: core.Directive, args: [{
                        selector: "edit-form-actions"
                    },] }
        ];
        return FormActions;
    }());
    var FormHeader = /** @class */ (function () {
        function FormHeader() {
        }
        FormHeader.decorators = [
            { type: core.Directive, args: [{
                        selector: "edit-form-header"
                    },] }
        ];
        return FormHeader;
    }());
    var FormContent = /** @class */ (function () {
        function FormContent() {
        }
        FormContent.decorators = [
            { type: core.Directive, args: [{
                        selector: "form-content"
                    },] }
        ];
        return FormContent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: fields/abstract-field.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    AbstractField = /** @class */ (function () {
        function AbstractField(fieldData) {
            this.fieldData = fieldData;
            this.errors = [];
            this.fieldElementSubscriptions = [];
            this.formControl = this.fieldData.formControl;
            this.attributes = this.fieldData.attributes || {};
            this.errors = this.fieldData.errors || {};
            this.class = this.fieldData.class;
            this.events = this.fieldData.events || {};
        }
        /**
         * @return {?}
         */
        AbstractField.prototype.getErrorMessage = /**
         * @return {?}
         */
        function () {
            if (this.errors && this.errors.length) {
                for (var i = 0; i < this.errors.length; i++) {
                    if (this.formControl.hasError(this.errors[i].error)) {
                        return this.errors[i].message;
                    }
                }
            }
            return JSON.stringify(this.formControl.errors);
        };
        /**
         * @param {?} element
         * @return {?}
         */
        AbstractField.prototype.bindEvents = /**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            var _this = this;
            this.ngOnDestroy();
            if (!this.events)
                return;
            Object.keys(this.events).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                if (Object.keys(element).indexOf(key) >= 0 && element[key] instanceof core.EventEmitter) {
                    _this.fieldElementSubscriptions.push(((/** @type {?} */ (element[key]))).subscribe((/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) { return _this.events[key](event); })));
                }
            }));
        };
        /**
         * @return {?}
         */
        AbstractField.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.fieldElementSubscriptions.forEach((/**
             * @param {?} s
             * @return {?}
             */
            function (s) { return s.unsubscribe(); }));
            this.fieldElementSubscriptions = [];
        };
        return AbstractField;
    }());
    if (false) {
        /** @type {?} */
        AbstractField.prototype.attributes;
        /** @type {?} */
        AbstractField.prototype.events;
        /** @type {?} */
        AbstractField.prototype.formControl;
        /** @type {?} */
        AbstractField.prototype.errors;
        /** @type {?} */
        AbstractField.prototype.class;
        /** @type {?} */
        AbstractField.prototype.fieldElementSubscriptions;
        /**
         * @type {?}
         * @protected
         */
        AbstractField.prototype.fieldData;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: fields/abstract-form-field.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AbstractFormField = /** @class */ (function (_super) {
        __extends(AbstractFormField, _super);
        function AbstractFormField(fieldData) {
            var _this = _super.call(this, fieldData) || this;
            _this.appearance = "legacy";
            _this.appearance = _this.attributes.appearance || "legacy";
            return _this;
        }
        return AbstractFormField;
    }(AbstractField));
    if (false) {
        /** @type {?} */
        AbstractFormField.prototype.appearance;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: fields/autocomplete-field/autocomplete-field.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AutocompleteField = /** @class */ (function (_super) {
        __extends(AutocompleteField, _super);
        function AutocompleteField(fieldData) {
            var _this = _super.call(this, fieldData) || this;
            _this.type = "autocomplete";
            _this.rootOptions = [];
            _this.options = [];
            debugger;
            /** @type {?} */
            var obs;
            if (rxjs.isObservable(_this.attributes.options)) {
                obs = ((/** @type {?} */ (_this.attributes.options)));
            }
            else {
                obs = rxjs.of(_this.attributes.options);
            }
            obs.subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                _this.rootOptions = res;
                _this.options = _this.rootOptions;
            }));
            return _this;
        }
        Object.defineProperty(AutocompleteField.prototype, "autocomplete", {
            set: /**
             * @param {?} autocomplete
             * @return {?}
             */
            function (autocomplete) {
                this.bindEvents(autocomplete);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        AutocompleteField.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @param {?} opt
         * @return {?}
         */
        AutocompleteField.prototype.render = /**
         * @param {?} opt
         * @return {?}
         */
        function (opt) {
            if (this.attributes.render) {
                return this.attributes.render(opt);
            }
            return opt;
        };
        /**
         * @param {?} opt
         * @return {?}
         */
        AutocompleteField.prototype.getValue = /**
         * @param {?} opt
         * @return {?}
         */
        function (opt) {
            if (this.attributes.getValue) {
                return this.attributes.getValue(opt);
            }
            return opt;
        };
        /**
         * @param {?} event
         * @return {?}
         */
        AutocompleteField.prototype.onFilter = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            var _this = this;
            if (this.attributes.filter) {
                /** @type {?} */
                var filtredOptions = this.attributes.filter(this.formControl.value, this.rootOptions);
                /** @type {?} */
                var obs;
                if (rxjs.isObservable(filtredOptions)) {
                    obs = filtredOptions;
                }
                else {
                    obs = rxjs.of(filtredOptions);
                }
                obs.subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) { return _this.options = res; }));
            }
            else {
                this.options = this.rootOptions.filter((/**
                 * @param {?} opt
                 * @return {?}
                 */
                function (opt) { return opt.toString().indexOf(_this.formControl.value) >= 0; }));
            }
        };
        AutocompleteField.decorators = [
            { type: core.Component, args: [{
                        selector: 'autocomplete-field',
                        template: "\n  <mat-form-field [ngClass]=\"class\" [appearance]=\"appearance\">\n    <mat-label>{{attributes.placeholder}}</mat-label>\n    <input matInput [formControl]=\"formControl\" [matAutocomplete]=\"auto\" (keyup)=\"onFilter($event)\">\n    <mat-autocomplete #auto=\"matAutocomplete\" [autoActiveFirstOption]=\"attributes.autoActiveFirstOption\" \n        [classList]=\"attributes.classList\" [disableRipple]=\"attributes.disableRipple\"\n        [displayWith]=\"attributes.displayWith\" [panelWidth]=\"attributes.panelWidth\">\n        <mat-option *ngFor=\"let option of options\" [value]=\"option\" [innerHTML]=\"render(option)\">\n        </mat-option>\n    </mat-autocomplete>\n    <mat-error [ngStyle]=\"{'display':(formControl.invalid?'block':'none')}\">{{getErrorMessage()}}</mat-error>\n  </mat-form-field>",
                        styles: [".search-style{width:100%;padding:0 10px;box-sizing:border-box;margin-top:10px}"]
                    }] }
        ];
        /** @nocollapse */
        AutocompleteField.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: ["FIELD_DATA",] }] }
        ]; };
        AutocompleteField.propDecorators = {
            autocomplete: [{ type: core.ViewChild, args: [material.MatAutocomplete, { static: false },] }]
        };
        return AutocompleteField;
    }(AbstractFormField));
    if (false) {
        /** @type {?} */
        AutocompleteField.prototype.type;
        /** @type {?} */
        AutocompleteField.prototype.rootOptions;
        /** @type {?} */
        AutocompleteField.prototype.options;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: fields/file-field/constant.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CLOUD = "data:image/png;base64,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";

    /**
     * @fileoverview added by tsickle
     * Generated from: fields/file-field/file-field.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FileField = /** @class */ (function (_super) {
        __extends(FileField, _super);
        function FileField(fieldData, sanitizer) {
            var _this = _super.call(this, fieldData) || this;
            _this.sanitizer = sanitizer;
            _this.cloudImage = CLOUD;
            _this.multiple = false;
            _this.accept = "";
            _this.dataObjects = [];
            _this.b64toBlob = (/**
             * @param {?} b64Data
             * @param {?=} contentType
             * @param {?=} sliceSize
             * @return {?}
             */
            function (b64Data, contentType, sliceSize) {
                if (contentType === void 0) { contentType = ''; }
                if (sliceSize === void 0) { sliceSize = 512; }
                /** @type {?} */
                var byteCharacters = atob(b64Data);
                /** @type {?} */
                var byteArrays = [];
                for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                    /** @type {?} */
                    var slice = byteCharacters.slice(offset, offset + sliceSize);
                    /** @type {?} */
                    var byteNumbers = new Array(slice.length);
                    for (var i = 0; i < slice.length; i++) {
                        byteNumbers[i] = slice.charCodeAt(i);
                    }
                    /** @type {?} */
                    var byteArray = new Uint8Array(byteNumbers);
                    byteArrays.push(byteArray);
                }
                /** @type {?} */
                var blob = new Blob(byteArrays, { type: contentType });
                return blob;
            });
            _this.formControl.valueChanges.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (Array.isArray(value))
                    _this.dataObjects = value;
                else
                    _this.dataObjects = [value];
            }));
            return _this;
        }
        /**
         * @return {?}
         */
        FileField.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.multiple = this.attributes.multiple;
            if (this.attributes.accept) {
                this.accept = this.attributes.accept;
            }
            if (this.attributes.dataType) {
                this.dataType = this.attributes.dataType;
                this.dataGetter = this.attributes.dataGet;
                this.dataSetter = this.attributes.dataSet;
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        FileField.prototype.onFileChange = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            var _this = this;
            /** @type {?} */
            var fileInput = (/** @type {?} */ (event.target));
            rxjs.from(Array.from(fileInput.files)).pipe(operators.flatMap((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return _this.extractData(res); })), operators.map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.multiple ? _this.dataObjects.push(_this.createFile(data)) : _this.dataObjects = [_this.createFile(data)];
                return _this.dataObjects;
            }))).subscribe((/**
             * @param {?} dataObjects
             * @return {?}
             */
            function (dataObjects) {
                _this.setDataToControl();
            }));
        };
        /**
         * @return {?}
         */
        FileField.prototype.setDataToControl = /**
         * @return {?}
         */
        function () {
            if (this.multiple) {
                this.formControl.setValue(this.dataObjects);
            }
            else if (this.dataObjects && this.dataObjects.length > 0) {
                this.formControl.setValue(this.dataObjects[0]);
            }
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        FileField.prototype.getFileData = /**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            if (this.dataGetter) {
                return this.sanitizer.bypassSecurityTrustResourceUrl(this.dataGetter(obj));
            }
            return this.sanitizer.bypassSecurityTrustResourceUrl(obj.data);
        };
        /**
         * @param {?} data
         * @return {?}
         */
        FileField.prototype.createFile = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (this.dataSetter) {
                /** @type {?} */
                var file = new this.dataType();
                this.dataSetter(data.data, file);
                file.type = data.type;
                return file;
            }
            return data;
        };
        /**
         * @param {?} file
         * @return {?}
         */
        FileField.prototype.extractData = /**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            /** @type {?} */
            var o = new rxjs.Subject();
            /** @type {?} */
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (/**
             * @return {?}
             */
            function () {
                o.next({ data: (/** @type {?} */ (reader.result)), type: file.type });
                o.complete();
            });
            reader.onerror = (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                o.error(error);
                o.complete();
            });
            return o;
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        FileField.prototype.open = /**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            /** @type {?} */
            var src = "";
            if (this.dataGetter) {
                src = this.dataGetter(obj);
            }
            else {
                src = obj.data;
            }
            /** @type {?} */
            var parsed = this.parse(src);
            /** @type {?} */
            var blob = this.b64toBlob(parsed.data, parsed.type);
            /** @type {?} */
            var blobUrl = URL.createObjectURL(blob);
            window.open(blobUrl);
        };
        /**
         * @param {?} b64data
         * @return {?}
         */
        FileField.prototype.parse = /**
         * @param {?} b64data
         * @return {?}
         */
        function (b64data) {
            /** @type {?} */
            var headData = b64data.split(",");
            /** @type {?} */
            var type = headData[0].split(":")[1].split(";")[0];
            return { data: headData[1], type: type };
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        FileField.prototype.delete = /**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            /** @type {?} */
            var index = this.dataObjects.indexOf(obj);
            if (index >= 0) {
                this.dataObjects.splice(index, 1);
            }
            this.setDataToControl();
        };
        FileField.decorators = [
            { type: core.Component, args: [{
                        selector: 'file-field',
                        template: "<input type=\"file\" (change)=\"onFileChange($event)\" [multiple]=\"multiple\" [accept]=\"accept\" [style.display]=\"'none'\" #fileInput>\n<div class=\"image-container\">\n    <div  class=\"selected-images insert-image\" (click)=\"fileInput.click()\">\n        <div>\n        \n            <img [src]=\"cloudImage\"><br>\n            {{multiple ? 'Add' : 'Select'}} File\n        </div>\n    </div>\n    <ng-container  *ngFor=\"let obj of dataObjects\">\n<div  class=\"selected-images\">\n    <img [src]=\"getFileData(obj)\">\n    <div class=\"up-image\">\n        <div class=\"up-background mat-toolbar mat-primary\"></div>\n        <div class=\"actions\">\n            <i class=\"material-icons\" (click)=\"open(obj)\">\n                    zoom_in\n                    </i>\n            <i class=\"material-icons\" (click)=\"delete(obj)\">\n                    delete_forever\n                    </i>\n        </div>\n    </div>\n</div>\n</ng-container>\n</div>",
                        styles: [".image-container{width:100%}.image-container::after,.image-container::before{display:table;content:\" \"}.image-container::after{clear:both}.selected-images{float:left;padding:15px;width:16.66%;text-align:center;position:relative;height:200px;box-sizing:border-box}.selected-images img{max-width:100%;max-height:170px}@media screen and (max-width:1700px){.selected-images{width:20%}}@media screen and (max-width:1500px){.selected-images{width:25%}}@media screen and (max-width:1200px){.selected-images{width:33.33%}}@media screen and (max-width:900px){.selected-images{width:50%}}@media screen and (max-width:700px){.selected-images{width:100%}}.selected-images.insert-image{border:10px solid #d3d3d3;border-radius:10px;cursor:pointer}.selected-images.insert-image>div{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-weight:bolder;font-size:20px;color:#d3d3d3}.selected-images.insert-image>div img{max-width:175px;margin-bottom:5px;-webkit-filter:grayscale(100%) brightness(150%) contrast(120%);filter:grayscale(100%) brightness(150%) contrast(120%)}.up-image{width:100%;height:100%;opacity:0;position:absolute;top:0;left:0;-webkit-transition:.5s ease-in-out;transition:.5s ease-in-out}.up-image:hover{opacity:1}.up-image .up-background{width:100%;height:100%;opacity:.5;position:absolute;top:0;left:0}.up-image .actions{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.up-image .actions i{font-size:45px;cursor:pointer;color:#000}.up-image .actions i:hover{color:#fff}"]
                    }] }
        ];
        /** @nocollapse */
        FileField.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: ["FIELD_DATA",] }] },
            { type: platformBrowser.DomSanitizer }
        ]; };
        return FileField;
    }(AbstractField));
    if (false) {
        /** @type {?} */
        FileField.prototype.cloudImage;
        /** @type {?} */
        FileField.prototype.multiple;
        /** @type {?} */
        FileField.prototype.accept;
        /** @type {?} */
        FileField.prototype.dataObjects;
        /** @type {?} */
        FileField.prototype.dataType;
        /** @type {?} */
        FileField.prototype.dataGetter;
        /** @type {?} */
        FileField.prototype.dataSetter;
        /** @type {?} */
        FileField.prototype.b64toBlob;
        /**
         * @type {?}
         * @private
         */
        FileField.prototype.sanitizer;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: fields/input-field/input-field.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InputField = /** @class */ (function (_super) {
        __extends(InputField, _super);
        function InputField(fieldData) {
            var _this = _super.call(this, fieldData) || this;
            _this.type = "input";
            return _this;
        }
        /**
         * @return {?}
         */
        InputField.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            Object.keys(this.attributes).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return _this.field.nativeElement[key] = _this.attributes[key]; }));
        };
        InputField.decorators = [
            { type: core.Component, args: [{
                        selector: 'input-field',
                        template: "\n  <mat-form-field [ngClass]=\"class\" [appearance]=\"appearance\">\n    <mat-label>{{attributes.placeholder}}</mat-label>\n    <!-- type is input -->\n    <input matInput [formControl]=\"formControl\" #field>\n    <mat-error [ngStyle]=\"{'display':(formControl.invalid?'block':'none')}\">{{getErrorMessage()}}</mat-error>\n  </mat-form-field>",
                        styles: [".search-style{width:100%;padding:0 10px;box-sizing:border-box;margin-top:10px}"]
                    }] }
        ];
        /** @nocollapse */
        InputField.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: ["FIELD_DATA",] }] }
        ]; };
        InputField.propDecorators = {
            field: [{ type: core.ViewChild, args: ["field", null,] }]
        };
        return InputField;
    }(AbstractFormField));
    if (false) {
        /** @type {?} */
        InputField.prototype.field;
        /** @type {?} */
        InputField.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: fields/select-field/select-field.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SelectField = /** @class */ (function (_super) {
        __extends(SelectField, _super);
        function SelectField(fieldData) {
            var _this = _super.call(this, fieldData) || this;
            _this.type = "select";
            _this.filterEnabled = false;
            /** @type {?} */
            var obs;
            if (rxjs.isObservable(_this.attributes.options)) {
                obs = ((/** @type {?} */ (_this.attributes.options)));
            }
            else {
                obs = rxjs.of(_this.attributes.options);
            }
            obs.subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                _this.rootOptions = res;
                _this.options = _this.rootOptions;
            }));
            _this.filterEnabled = _this.attributes.filterEnabled;
            return _this;
        }
        Object.defineProperty(SelectField.prototype, "select", {
            set: /**
             * @param {?} select
             * @return {?}
             */
            function (select) {
                if (!select)
                    return;
                for (var key in this.attributes) {
                    if (key === "options")
                        continue;
                    select[key] = this.attributes[key];
                }
                this.bindEvents(select);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SelectField.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @param {?} option
         * @return {?}
         */
        SelectField.prototype.getValue = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            return this.attributes.getValue ? this.attributes.getValue(option) : option;
        };
        /**
         * @param {?} option
         * @return {?}
         */
        SelectField.prototype.getLabel = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            return this.attributes.getLabel ? this.attributes.getLabel(option) : option;
        };
        /**
         * @param {?} event
         * @return {?}
         */
        SelectField.prototype.onFilter = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            var _this = this;
            if (!event.currentTarget.value) {
                return this.rootOptions;
            }
            if (this.events.filter) {
                /** @type {?} */
                var obs = this.events.filter(event.currentTarget.value, this.rootOptions);
                if (rxjs.isObservable(obs)) {
                    obs.subscribe((/**
                     * @param {?} res
                     * @return {?}
                     */
                    function (res) { return _this.options = res; }));
                }
                else {
                    this.options = obs;
                }
            }
            else {
                this.options = this.rootOptions.filter((/**
                 * @param {?} opt
                 * @return {?}
                 */
                function (opt) { return _this.getLabel(opt).indexOf(event.currentTarget.value) >= 0; }));
            }
        };
        SelectField.decorators = [
            { type: core.Component, args: [{
                        selector: 'select-field',
                        template: "\n  <mat-form-field [ngClass]=\"class\" [appearance]=\"appearance\">\n    <mat-label>{{attributes.placeholder}}</mat-label>\n    <mat-select *ngIf=\"type==='select'\" [formControl]=\"formControl\" #select>\n        <mat-form-field *ngIf=\"filterEnabled\" class=\"search-style\">\n            <mat-label>Search</mat-label>\n            <input matInput (keyup)=\"onFilter($event)\">\n            <mat-icon matSuffix>\n                    search\n            </mat-icon>\n        </mat-form-field>\n        <mat-option *ngFor=\"let option of options\" [value]=\"getValue(option)\">\n            {{getLabel(option)}}\n        </mat-option>\n    </mat-select>\n    <mat-error [ngStyle]=\"{'display':(formControl.invalid?'block':'none')}\">{{getErrorMessage()}}</mat-error>\n  </mat-form-field>",
                        styles: [".search-style{width:100%;padding:0 10px;box-sizing:border-box;margin-top:10px}"]
                    }] }
        ];
        /** @nocollapse */
        SelectField.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: ["FIELD_DATA",] }] }
        ]; };
        SelectField.propDecorators = {
            select: [{ type: core.ViewChild, args: [material.MatSelect, { static: false },] }]
        };
        return SelectField;
    }(AbstractFormField));
    if (false) {
        /** @type {?} */
        SelectField.prototype.type;
        /** @type {?} */
        SelectField.prototype.options;
        /** @type {?} */
        SelectField.prototype.rootOptions;
        /** @type {?} */
        SelectField.prototype.filterEnabled;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: fields/public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: edit-form.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EditFormModule = /** @class */ (function () {
        function EditFormModule() {
        }
        EditFormModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [EditFormComponent, ExpantionPanelContainerComponent, InputField, SelectField, FileField, FormActions, FormHeader, FormContent, AutocompleteField],
                        imports: [
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            material.MatFormFieldModule,
                            material.MatInputModule,
                            material.MatExpansionModule,
                            material.MatButtonModule,
                            material.MatCardModule,
                            material.MatSelectModule,
                            material.MatAutocompleteModule,
                            material.MatIconModule
                        ],
                        exports: [
                            EditFormComponent,
                            FormActions,
                            FormHeader,
                            FormContent,
                            InputField,
                            SelectField,
                            FileField,
                            AutocompleteField
                        ],
                        entryComponents: [material.MatExpansionPanel, material.MatExpansionPanelHeader, ExpantionPanelContainerComponent]
                    },] }
        ];
        return EditFormModule;
    }());

    exports.AbstractField = AbstractField;
    exports.AbstractFormField = AbstractFormField;
    exports.AutocompleteField = AutocompleteField;
    exports.EditFormModule = EditFormModule;
    exports.FileField = FileField;
    exports.InputField = InputField;
    exports.SelectField = SelectField;
    exports.ɵa = EditFormComponent;
    exports.ɵb = FormActions;
    exports.ɵc = FormHeader;
    exports.ɵd = FormContent;
    exports.ɵe = ExpantionPanelContainerComponent;
    exports.ɵf = AbstractContainerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-ioform.umd.js.map
