// class APIAdapter {
//     convert (APIResponse) {
//         // process-dummy
//         console.log(APIResponse.id);
//         console.log(APIResponse);
//     }
// }

// const adapter = new APIAdapter();
// adapter.convert({someField: 2})










// ---
// class APIAdapter {
//     // convert (APIResponse: APISingleItem) {
//     convert (APIResponse) {
//         // process-dummy
//         console.log(APIResponse.id);
//         console.log(APIResponse);
//     }
// }

// interface APISingleItem {
//     id: string,
//     someField: string
// }

// const adapter = new APIAdapter();
// adapter.convert({someField: 2})
// // adapter.convert(<APISingleItem>{someField: 2})



















// --
// class APIAdapter {
//     // convert (APIResponse: APISingleItem | APICollection) {
//     convert (APIResponse) {
//         // process-dummy
//         // console.log(APIResponse.id);
//         console.log(APIResponse);
//     }
// }

// interface APISingleItem {
//     id: string,
//     someField: string
// }

// interface APICollection {
//     ids: string[],
//     items: APISingleItem[]
// }
// const adapterForAnotherResource = new APIAdapter();
// adapterForAnotherResource.convert({
//     ids: ['1', '2'],
//     items: [
//        { id: '1',
//         someField: 'Foo'},
//        { id: '2',
//         someField: 'Bar'}
//     ]})

// adapterForAnotherResource.convert(<APICollection>{ids: [1, 2, 3]});

// adapterForAnotherResource.convert(<APICollection>{
//     ids: ['1', '2'],
//     items: [
//        { id: '1',
//         someField: 'Foo'},
//        { id: '2',
//         someField: 'Bar'}
//     ]})

















// --
// class APIAdapter<T> {
//     convert (APIResponse: T) {
//         // process-dummy
//         console.log(APIResponse);
//     }
// }

// interface APISingleItem {
//     id: string,
//     someField: string
// }

// interface APICollection {
//     ids: string[],
//     items: APISingleItem[]
// }

// const adapterForOneResource = new APIAdapter<APISingleItem>();
// adapterForOneResource.convert({someField: 2})

// const adapterForAnotherResource = new APIAdapter<APICollection>();
// adapterForAnotherResource.convert({ids: [1, 2, 3]});
// adapterForAnotherResource.convert({
//     ids: ['1', '2'],
//     items: [
//        { id: '1',
//         someField: 'Foo'},
//        { id: '2',
//         someField: 'Bar'}
//     ]})



















// --
// function identity<T>(item: T): T {
//     return item;
// }
