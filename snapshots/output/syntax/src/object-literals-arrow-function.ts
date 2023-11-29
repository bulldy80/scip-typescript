  import { Option } from './reusable-types'
// definition syntax 1.0.0 src/`object-literals-arrow-function.ts`/
//documentation ```ts\nmodule "object-literals-arrow-function.ts"\n```
//         ^^^^^^ reference local 0
  
  interface Foobar {
//          ^^^^^^ definition syntax 1.0.0 src/`object-literals-arrow-function.ts`/Foobar#
//          documentation ```ts\ninterface Foobar\n```
    foobar: number
//  ^^^^^^ definition syntax 1.0.0 src/`object-literals-arrow-function.ts`/Foobar#foobar.
//  documentation ```ts\n(property) foobar: number\n```
  }
  
  export function hasArrowFunctionParameter(
//                ^^^^^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-arrow-function.ts`/hasArrowFunctionParameter().
//                documentation ```ts\nfunction hasArrowFunctionParameter(something: number, fn: (foobar: Foobar) => Foobar): Foobar\n```
    something: number,
//  ^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-arrow-function.ts`/hasArrowFunctionParameter().(something)
//  documentation ```ts\n(parameter) something: number\n```
    fn: (foobar: Foobar) => Foobar
//  ^^ definition syntax 1.0.0 src/`object-literals-arrow-function.ts`/hasArrowFunctionParameter().(fn)
//  documentation ```ts\n(parameter) fn: (foobar: Foobar) => Foobar\n```
//       ^^^^^^ definition local 2
//       documentation ```ts\n(parameter) foobar: Foobar\n```
//               ^^^^^^ reference syntax 1.0.0 src/`object-literals-arrow-function.ts`/Foobar#
//                          ^^^^^^ reference syntax 1.0.0 src/`object-literals-arrow-function.ts`/Foobar#
  ): Foobar {
//   ^^^^^^ reference syntax 1.0.0 src/`object-literals-arrow-function.ts`/Foobar#
    return fn({ foobar: 42 + something })
//         ^^ reference syntax 1.0.0 src/`object-literals-arrow-function.ts`/hasArrowFunctionParameter().(fn)
//              ^^^^^^ reference syntax 1.0.0 src/`object-literals-arrow-function.ts`/Foobar#foobar.
//                           ^^^^^^^^^ reference syntax 1.0.0 src/`object-literals-arrow-function.ts`/hasArrowFunctionParameter().(something)
  }
  
  export function consumesArrowFunction(): number {
//                ^^^^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-arrow-function.ts`/consumesArrowFunction().
//                documentation ```ts\nfunction consumesArrowFunction(): number\n```
    return (
      hasArrowFunctionParameter(1, ({ foobar }) => ({ foobar: foobar + 1 }))
//    ^^^^^^^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`object-literals-arrow-function.ts`/hasArrowFunctionParameter().
//                                    ^^^^^^ definition local 11
//                                    documentation ```ts\n(parameter) foobar: number\n```
//                                    ^^^^^^ reference syntax 1.0.0 src/`object-literals-arrow-function.ts`/Foobar#foobar.
//                                                    ^^^^^^ reference syntax 1.0.0 src/`object-literals-arrow-function.ts`/Foobar#foobar.
//                                                            ^^^^^^ reference local 11
        .foobar +
//       ^^^^^^ reference syntax 1.0.0 src/`object-literals-arrow-function.ts`/Foobar#foobar.
      hasArrowFunctionParameter(2, foobar => ({ foobar: foobar.foobar + 2 }))
//    ^^^^^^^^^^^^^^^^^^^^^^^^^ reference syntax 1.0.0 src/`object-literals-arrow-function.ts`/hasArrowFunctionParameter().
//                                 ^^^^^^ definition local 15
//                                 documentation ```ts\n(parameter) foobar: Foobar\n```
//                                              ^^^^^^ reference syntax 1.0.0 src/`object-literals-arrow-function.ts`/Foobar#foobar.
//                                                      ^^^^^^ reference local 15
//                                                             ^^^^^^ reference syntax 1.0.0 src/`object-literals-arrow-function.ts`/Foobar#foobar.
        .foobar
//       ^^^^^^ reference syntax 1.0.0 src/`object-literals-arrow-function.ts`/Foobar#foobar.
    )
  }
  
  export function genericArrow(): Foobar[] {
//                ^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-arrow-function.ts`/genericArrow().
//                documentation ```ts\nfunction genericArrow(): Foobar[]\n```
//                                ^^^^^^ reference syntax 1.0.0 src/`object-literals-arrow-function.ts`/Foobar#
    return [1].map<Foobar>(n => ({ foobar: n + 1 }))
//             ^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Array#map().
//                 ^^^^^^ reference syntax 1.0.0 src/`object-literals-arrow-function.ts`/Foobar#
//                         ^ definition local 19
//                         documentation ```ts\n(parameter) n: number\n```
//                                 ^^^^^^ reference syntax 1.0.0 src/`object-literals-arrow-function.ts`/Foobar#foobar.
//                                         ^ reference local 19
  }
  
  export function genericArrowOption(): Option<Foobar>[] {
//                ^^^^^^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-arrow-function.ts`/genericArrowOption().
//                documentation ```ts\nfunction genericArrowOption(): Option<Foobar>[]\n```
//                                      ^^^^^^ reference local 0
//                                             ^^^^^^ reference syntax 1.0.0 src/`object-literals-arrow-function.ts`/Foobar#
    return [1].map<Option<Foobar>>(n => ({ value: { foobar: n + 1 } }))
//             ^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Array#map().
//                 ^^^^^^ reference local 0
//                        ^^^^^^ reference syntax 1.0.0 src/`object-literals-arrow-function.ts`/Foobar#
//                                 ^ definition local 23
//                                 documentation ```ts\n(parameter) n: number\n```
//                                         ^^^^^ definition syntax 1.0.0 src/`object-literals-arrow-function.ts`/value0:
//                                         documentation ```ts\n(property) value: { foobar: number; }\n```
//                                                  ^^^^^^ definition syntax 1.0.0 src/`object-literals-arrow-function.ts`/foobar0:
//                                                  documentation ```ts\n(property) foobar: number\n```
//                                                          ^ reference local 23
  }
  
  export function genericArrow2(): Foobar[] {
//                ^^^^^^^^^^^^^ definition syntax 1.0.0 src/`object-literals-arrow-function.ts`/genericArrow2().
//                documentation ```ts\nfunction genericArrow2(): Foobar[]\n```
//                                 ^^^^^^ reference syntax 1.0.0 src/`object-literals-arrow-function.ts`/Foobar#
    // navigation to `foobar` below does not work with tsserver or scip-java
    // because `map`  is missing an explicit `map<Foobar>` annotation.
    return [1].map(n => ({ foobar: n + 1 }))
//             ^^^ reference typescript 4.8.4 lib/`lib.es5.d.ts`/Array#map().
//                 ^ definition local 27
//                 documentation ```ts\n(parameter) n: number\n```
//                         ^^^^^^ definition syntax 1.0.0 src/`object-literals-arrow-function.ts`/foobar1:
//                         documentation ```ts\n(property) foobar: number\n```
//                                 ^ reference local 27
  }
  
