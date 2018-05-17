import Todo from './todo.interface'
export class DataService {

  private _data: Todo[] = [
    {title:"Todo 1"},
    {title:"Todo 2"},
    {title:"Todo 3"}
  ];
  getData() {
    return this._data;
  }
  addData (title:string) {
    this._data.push({title})
  }
}
