<a name="underscore"></a>

## underscore : <code>object</code>
A lightweight underscore implementation.

**Kind**: global namespace  

* [underscore](#underscore) : <code>object</code>
    * [.keysIn(object)](#underscore.keysIn) ⇒ <code>Array</code>
    * [.keys(object)](#underscore.keys) ⇒ <code>Array</code>
    * [.forOwn(object, iteratee)](#underscore.forOwn) ⇒ <code>Object</code>
    * [.toArray(value)](#underscore.toArray) ⇒ <code>Array</code>
    * [.forEach(collection, iteratee)](#underscore.forEach) ⇒ <code>undefined</code>
    * [.filter(collection, iteratee)](#underscore.filter) ⇒ <code>Array</code>
    * [.map(collection, iteratee)](#underscore.map) ⇒ <code>Array</code>
    * [.reduce(collection, iteratee, init)](#underscore.reduce) ⇒ <code>Array</code>
    * [.slice(collection, start, end)](#underscore.slice) ⇒ <code>Array</code>
    * [.splice(collection)](#underscore.splice) ⇒ <code>Array</code>
    * [.split(str)](#underscore.split) ⇒ <code>Array</code>
    * [.findIndex(array, [predicate], [fromIndex])](#underscore.findIndex) ⇒ <code>number</code>
    * [.format(fmt)](#underscore.format) ⇒ <code>string</code>
    * [.defaults(object, ...sources)](#underscore.defaults) ⇒ <code>Object</code>
    * [.isObject(value)](#underscore.isObject) ⇒ <code>boolean</code>
    * [.isFunction(value)](#underscore.isFunction) ⇒ <code>boolean</code>
    * [.isString(value)](#underscore.isString) ⇒ <code>boolean</code>
    * [.contains(list, value, fromIndex)](#underscore.contains) ⇒ <code>number</code>
    * [.isRegExp(value)](#underscore.isRegExp) ⇒ <code>boolean</code>
    * [.assign(object, ...source)](#underscore.assign) ⇒ <code>Object</code>
    * [.defaultsDeep(object, ...sources)](#underscore.defaultsDeep) ⇒ <code>Object</code>
    * [.fromPairs(pairs)](#underscore.fromPairs) ⇒ <code>Object</code>
    * [.isArray(value)](#underscore.isArray) ⇒ <code>boolean</code>
    * [.isEmpty(value)](#underscore.isEmpty) ⇒ <code>boolean</code>
    * [.negate(predicate)](#underscore.negate) ⇒ <code>function</code>
    * [.partial(func, ...partials)](#underscore.partial) ⇒ <code>function</code>
    * [.partialRight(func, ...partials)](#underscore.partialRight) ⇒ <code>function</code>
    * [.wrap(value, wrapper)](#underscore.wrap) ⇒ <code>function</code>
    * [.inherits(subClass, superClass)](#underscore.inherits) ⇒ <code>function</code>
    * [.escape(value)](#underscore.escape) ⇒ <code>string</code>

<a name="underscore.keysIn"></a>

### underscore.keysIn(object) ⇒ <code>Array</code>
Creates an array of the own and inherited enumerable property names of object.

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>Array</code> - Returns the array of property names.  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | The object to query. |

<a name="underscore.keys"></a>

### underscore.keys(object) ⇒ <code>Array</code>
Creates an array of the own enumerable property names of object.

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>Array</code> - Returns the array of property names.  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | The object to query. |

<a name="underscore.forOwn"></a>

### underscore.forOwn(object, iteratee) ⇒ <code>Object</code>
Iterates over own enumerable string keyed properties of an object and invokes iteratee for each property.
The iteratee is invoked with three arguments: (value, key, object).
Iteratee functions may exit iteration early by explicitly returning false.

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>Object</code> - Returs object.  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | The object to iterate over. |
| iteratee | <code>function</code> | The function invoked per iteration. |

<a name="underscore.toArray"></a>

### underscore.toArray(value) ⇒ <code>Array</code>
Converts value to an array.

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>Array</code> - Returns the converted array.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | The value to convert. |

<a name="underscore.forEach"></a>

### underscore.forEach(collection, iteratee) ⇒ <code>undefined</code>
Iterates over elements of collection and invokes iteratee for each element.
The iteratee is invoked with three arguments: (value, index|key, collection).

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>undefined</code> - Just like Array.prototype.forEach  

| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Array</code> \| <code>Object</code> | The collection to iterate over. |
| iteratee | <code>function</code> | The function invoked per iteration. |

<a name="underscore.filter"></a>

### underscore.filter(collection, iteratee) ⇒ <code>Array</code>
Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>Array</code> - The filtered elements  

| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Array</code> \| <code>Object</code> | The collection to iterate over. |
| iteratee | <code>function</code> | The function invoked per iteration. |

<a name="underscore.map"></a>

### underscore.map(collection, iteratee) ⇒ <code>Array</code>
Creates an array of values by running each element in collection thru iteratee.
The iteratee is invoked with three arguments: (value, index|key, collection).

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>Array</code> - Returns the new mapped array.  

| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Array</code> \| <code>Object</code> | The collection to iterate over. |
| iteratee | <code>function</code> | The function invoked per iteration. |

<a name="underscore.reduce"></a>

### underscore.reduce(collection, iteratee, init) ⇒ <code>Array</code>
Reduce array or object.
The iteratee is invoked with three arguments: (prev, curr, index|key, collection).

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>Array</code> - Returns the new mapped array.  

| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Array</code> \| <code>Object</code> | The collection to iterate over. |
| iteratee | <code>function</code> | The function invoked per iteration. |
| init | <code>any</code> | The initial value. |

<a name="underscore.slice"></a>

### underscore.slice(collection, start, end) ⇒ <code>Array</code>
Creates a slice of array from start up to, but not including, end.

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>Array</code> - Returns the slice of array.  

| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Array</code> | The array to slice. |
| start | <code>number</code> | The start position. |
| end | <code>number</code> | The end position. |

<a name="underscore.splice"></a>

### underscore.splice(collection) ⇒ <code>Array</code>
This method is based on JavaScript Array.prototype.splice

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>Array</code> - the spliced result  

| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Collection</code> | the collection to be spliced |

<a name="underscore.split"></a>

### underscore.split(str) ⇒ <code>Array</code>
This method is based on JavaScript String.prototype.split

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>Array</code> - Returns the string segments.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the string to be splited. |

<a name="underscore.findIndex"></a>

### underscore.findIndex(array, [predicate], [fromIndex]) ⇒ <code>number</code>
Find and return the index of the first element predicate returns truthy for instead of the element itself.

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>number</code> - Returns the index of the found element, else -1.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| array | <code>Array</code> |  | The array to inspect. |
| [predicate] | <code>function</code> | <code>_.identity</code> | The function invoked per iteration. |
| [fromIndex] | <code>number</code> | <code>0</code> | The index to search from. |

<a name="underscore.format"></a>

### underscore.format(fmt) ⇒ <code>string</code>
The missing string formatting function for JavaScript.

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>string</code> - The result string.  

| Param | Type | Description |
| --- | --- | --- |
| fmt | <code>string</code> | The format string (can only contain "%s") |

**Example**  
```js
format("foo%sfoo", "bar");   // returns "foobarfoo"
```
<a name="underscore.defaults"></a>

### underscore.defaults(object, ...sources) ⇒ <code>Object</code>
Assigns own and inherited enumerable string keyed properties of source objects to
the destination object for all destination properties that resolve to undefined.
Source objects are applied from left to right.
Once a property is set, additional values of the same property are ignored.

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>Object</code> - Returns object.  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | The destination object. |
| ...sources | <code>Object</code> | The source objects. |

<a name="underscore.isObject"></a>

### underscore.isObject(value) ⇒ <code>boolean</code>
Checks if value is the language type of Object.
(e.g. arrays, functions, objects, regexes, new Number(0), and new String(''))

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>boolean</code> - Returns true if value is an object, else false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | The value to check. |

<a name="underscore.isFunction"></a>

### underscore.isFunction(value) ⇒ <code>boolean</code>
Checks if value is classified as a Function object.

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>boolean</code> - Returns true if value is a function, else false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | The value to check. |

<a name="underscore.isString"></a>

### underscore.isString(value) ⇒ <code>boolean</code>
Checks if value is classified as a String primitive or object.

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>boolean</code> - Returns true if value is a string, else false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | The value to check. |

<a name="underscore.contains"></a>

### underscore.contains(list, value, fromIndex) ⇒ <code>number</code>
Uses indexOf internally, if list is an Array. Use fromIndex to start your search at a given index.
http://underscorejs.org/#contains

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>number</code> - Returns true if the value is present in the list, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array</code> \| <code>string</code> | the list of items in which to find |
| value | <code>any</code> | the value to find |
| fromIndex | <code>number</code> | Optional, default to 0 |

<a name="underscore.isRegExp"></a>

### underscore.isRegExp(value) ⇒ <code>boolean</code>
Checks if value is classified as a RegExp object.

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>boolean</code> - Returns true if value is a RegExp, else false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | The value to check. |

<a name="underscore.assign"></a>

### underscore.assign(object, ...source) ⇒ <code>Object</code>
Assigns own enumerable string keyed properties of source objects to the destination object.
Source objects are applied from left to right.
Subsequent sources overwrite property assignments of previous sources.

Note: This method mutates object and is loosely based on Object.assign.

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>Object</code> - Returns object.  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | The destination object. |
| ...source | <code>Object</code> | The source objects. |

<a name="underscore.defaultsDeep"></a>

### underscore.defaultsDeep(object, ...sources) ⇒ <code>Object</code>
This method is like `_.defaults` except that it recursively assigns default properties.

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>Object</code> - Returns object.  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | The destination object. |
| ...sources | <code>Object</code> | The source objects. |

<a name="underscore.fromPairs"></a>

### underscore.fromPairs(pairs) ⇒ <code>Object</code>
The inverse of `_.toPairs`; this method returns an object composed from key-value pairs.

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>Object</code> - Returns the new object.  

| Param | Type | Description |
| --- | --- | --- |
| pairs | <code>Array</code> | The key-value pairs. |

<a name="underscore.isArray"></a>

### underscore.isArray(value) ⇒ <code>boolean</code>
Checks if value is classified as an Array object.

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>boolean</code> - Returns true if value is an array, else false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | The value to check. |

<a name="underscore.isEmpty"></a>

### underscore.isEmpty(value) ⇒ <code>boolean</code>
Checks if value is an empty object, collection, map, or set.
Objects are considered empty if they have no own enumerable string keyed properties.

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>boolean</code> - Returns true if value is an array, else false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | The value to check. |

<a name="underscore.negate"></a>

### underscore.negate(predicate) ⇒ <code>function</code>
Creates a function that negates the result of the predicate func.
The func predicate is invoked with the this binding and arguments of the created function.

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>function</code> - Returns the new negated function.  

| Param | Type | Description |
| --- | --- | --- |
| predicate | <code>function</code> | The predicate to negate. |

<a name="underscore.partial"></a>

### underscore.partial(func, ...partials) ⇒ <code>function</code>
Creates a function that invokes func with partials prepended to the arguments it receives.
This method is like `_.bind` except it does not alter the this binding.

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>function</code> - Returns the new partially applied function.  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to partially apply arguments to. |
| ...partials | <code>any</code> | The arguments to be partially applied. |

<a name="underscore.partialRight"></a>

### underscore.partialRight(func, ...partials) ⇒ <code>function</code>
This method is like `_.partial` except that partially applied arguments are appended to the arguments it receives.

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>function</code> - Returns the new partially applied function.  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to partially apply arguments to. |
| ...partials | <code>any</code> | The arguments to be partially applied. |

<a name="underscore.wrap"></a>

### underscore.wrap(value, wrapper) ⇒ <code>function</code>
Creates a function that provides value to wrapper as its first argument.
Any additional arguments provided to the function are appended to those provided to the wrapper. The wrapper is invoked with the this binding of the created function.\

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>function</code> - Returns the new function.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to wrap. |
| wrapper | <code>function</code> | The wrapper function. |

<a name="underscore.inherits"></a>

### underscore.inherits(subClass, superClass) ⇒ <code>function</code>
为类型构造器建立继承关系

**Kind**: static method of [<code>underscore</code>](#underscore)  

| Param | Type | Description |
| --- | --- | --- |
| subClass | <code>function</code> | 子类构造器 |
| superClass | <code>function</code> | 父类构造器 |

<a name="underscore.escape"></a>

### underscore.escape(value) ⇒ <code>string</code>
Converts the characters "&", "<", ">", '"', and "'" in string to their corresponding HTML entities

**Kind**: static method of [<code>underscore</code>](#underscore)  
**Returns**: <code>string</code> - Returns the escaped string  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The string to escape |

