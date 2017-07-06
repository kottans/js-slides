// // basic types /* Presenter note: 20 lines per screen*/ 
// // Boolean: boolean
// let isOk: boolean = true;
// // isOk = false;
// // isOk = 12;
// // Number: number
// let decimal: number = 6;
// let hex: number = 0xf00d;
// let binary: number = 0b1010;
// let octal: number = 0o744;
// // decimal = 'something';
// // decimal = 0xf00d;
// // String: string
// // const name = "My Name";
// const thisName = "John";
// // Array: <T>[] Array<T>
// let list1: number[] = [1, 2, 3];
// let list2: Array<number> = [1, 2, 3];
// // list2.push("2");
// // Tuple: [<T1>, <T2>, … <Tn>]
// let x: [string, number];
// let right = ["hello", 10];
// // Enum
// enum ProcessStatus {
//     Starting,
//     Stopping,
//     Running
// }
// let serverStatus: ProcessStatus =
//     ProcessStatus.Starting 
//     // ProcessStatus.NotResponding
//     // "Starting"
// // {0: "Starting", 1: "Stopping", 2: "Running",
// //  Starting: 0, Stopping: 1, Running: 2}
// // Any
// let trashCan: any = "Rubbish";
// trashCan = 0xDEADC0DE;
// trashCan = null;
// // Void
// function log(message: string): void {
//     console.log(message);
//     // return 2
// }
// // Advanced types
// // Union: <T1> | <T2> | …
// function getLength(item: string | any[]) {
//     return item.length;
//     // return item.push(2);
//     // return item.toUpperCase();
// };
// // Intersection <T1> & <T2>
// // something is <T1> && <T2> 
// interface Item {
//     count: number
// };
// interface Billable {
//     price: number
// }
// function getPrice(item: Item & Billable):number {
//     return item.price * item.count;
// }
// let laptop = {price: 5, count: 6};
// getPrice(laptop);
// // String Literal Types
// type WhiteSpace = "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap" | "initial" | "inherit";
// function setWhiteSpace(element/*: HTMLElement */, whiteSpace: WhiteSpace) {
//     element.style.whiteSpace = whiteSpace 
// }
// setWhiteSpace(null, 'pre'); 
// // setWhiteSpace(null, 'nothing');
// // Type Aliases
// type Name = string;
// type NameResolver = () => string;
// type NameOrResolver = Name | NameResolver;
// function getName(n: NameOrResolver): Name {
//     if (typeof n === "string") {
//         return n;
//     }
//     else {
//         return n();
//     }
// }
