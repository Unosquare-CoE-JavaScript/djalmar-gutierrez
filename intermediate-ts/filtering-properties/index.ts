// Get keys of type T whose values are assignable to type U

type ElementFunction = (...args: any[]) => Element | Element[];



type FilteredKeys<ToFilter, Condition> = {
  [P in keyof ToFilter]: ToFilter[P] extends Condition ? P : never;
}[keyof ToFilter] &
  keyof ToFilter;

type RelevantDocumentKeys = FilteredKeys<Document, ElementFunction>;

type ValueFilteredDoc = Pick<Document, RelevantDocumentKeys>;
//    ^?

function load(doc: ValueFilteredDoc) {
  doc.querySelector('input');
  //    ^?
}
